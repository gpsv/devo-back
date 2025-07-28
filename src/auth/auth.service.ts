import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { get } from 'lodash';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { IUser } from './interfaces/auth.interface';
import { isMongoId } from 'class-validator';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.email = createUserDto.email.toLocaleLowerCase().trim();
    const { password, ...userData } = createUserDto;
    try {
      const user = await this.userModel.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      return {
        ...user,
        token: this.getJwtToken({ email: user.email }),
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  finalInfoUserLogin = async (id: string) => {
    if (!isMongoId(id)) {
      return new UnauthorizedException('No es un id valido');
    }
    const res: any = await this.userModel.aggregate([
      { $match: { $expr: { $eq: ['$_id', { $toObjectId: id }] } } },
      {
        $lookup: {
          from: 'userpreferences',
          localField: 'userPreference',
          foreignField: '_id',
          as: 'userPreference',
        },
      },
      {
        $lookup: {
          from: 'churches',
          localField: 'church',
          foreignField: '_id',
          as: 'church',
        },
      },
      {
        $lookup: {
          from: 'departaments',
          localField: '_id',
          foreignField: 'mainLeader_id',
          as: 'mainDepartament',
        },
      },
      {
        $lookup: {
          from: 'departaments',
          localField: '_id',
          foreignField: 'secondaryLeaders.user_id',
          as: 'otherDepartament',
        },
      },
      {
        $addFields: {
          totalpositions: {
            $sum: [
              {
                $size: '$mainDepartament',
              },
              {
                $size: '$otherDepartament',
              },
            ],
          },
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          lastName: 1,
          motherLastName: 1,
          nickName: 1,
          gender: 1,
          avatar: 1,
          background: 1,
          birthDate: 1,
          phone: 1,
          email: 1,
          emailVerifiedAt: 1,
          role: 1,
          status: 1,
          google: 1,
          changePassword: 1,
          created_at: 1,
          updated_at: 1,
          userPreference: 1,
          token: 1,
          church: {
            _id: 1,
            keyName: 1,
            name: 1,
            avatar: 1,
            background: 1,
            longName: 1,
            address: 1,
            number: 1,
            zipCode: 1,
            colonia: 1,
            city: 1,
            state: 1,
            phoneNumber: 1,
            typeChurch: 1,
            startDate: 1,
            mainLeader_id: 1,
          },
          mainDepartament: {
            _id: 1,
            name: 1,
            background: 1,
            description: 1,
            status: 1,
            created_at: 1,
            updated_at: 1,
          },
          otherDepartament: {
            _id: 1,
            name: 1,
            background: 1,
            description: 1,
            status: true,
            created_at: 1,
            updated_at: 1,
            secondaryLeaders: 1,
          },
        },
      },
    ]);

    const user = get(res, '[0]', {});
    return {
      user,
      msg: 'Hola',
    };
  };

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
    if (!validPassword)
      return new UnauthorizedException('Credenciales invalidas');

    return {
      token: this.getJwtToken({ email: user.email }),
      msg: 'Bienvenido',
      user,
    };
  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  private handleExceptions(error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.code === 11000) {
      throw new BadRequestException(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `El ${JSON.stringify(error.keyValue)} ya Existe`,
      );
    }

    throw new InternalServerErrorException('No se puede crear el miembro');
  }
}
