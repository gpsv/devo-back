import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.email = createUserDto.email.toLocaleLowerCase().trim();
    const { password, ...userData } = createUserDto;
    try {
      const user = await this.userModel.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      return user;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, email } = loginUserDto;
    const user = await this.userModel.findOne(
      { email },
      'email password isActive',
    );

    if (!user) {
      return new UnauthorizedException('Credenciales invalidas');
    }
    //si el user esta activo
    if (!user.isActive) {
      return new UnauthorizedException('El usuario esta Inactivo');
    }
    // verificar contrasena
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return new UnauthorizedException('Credenciales invalidas');
    }
    // generar JWT

    return user;
  }

  private handleExceptions(error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.code === 11000) {
      throw new BadRequestException(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `El ${JSON.stringify(error.keyValue)} ya Existe`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException('No se puede crear el miembro');
  }
}
