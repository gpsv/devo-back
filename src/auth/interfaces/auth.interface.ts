export interface IAuthResponse {
  user: IUser;
  token: string;
  msg: string;
}

export interface IUser {
  _id: string;
  name: string;
  lastName: string;
  motherLastName: string;
  nickName: string;
  gender: string;
  avatar: string;
  birthDate: Date;
  phone: string;
  email: string;
  emailVerifiedAt: boolean;
  role: string;
  status: boolean;
  google: boolean;
  changePassword: boolean;
  token: string;
  userPreference: UserPreference[];
  church: Church[];
  created_at: Date;
  updated_at: null;
  background: string;
  mainDepartament: Departament[];
  otherDepartament: Departament[];
}

export interface Church {
  _id: string;
  keyName: string;
  name: string;
  longName: string;
  address: string;
  number: string;
  zipCode: number;
  colonia: string;
  city: string;
  state: string;
  phoneNumber: string;
  typeChurch: string;
  startDate: Date;
  mainLeader_id: null;
  background: string;
  avatar: string;
}

export interface Departament {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  created_at: Date;
  updated_at: null;
  background: string;
  secondaryLeaders?: SecondaryLeader[];
}

export interface SecondaryLeader {
  user_id: string;
  position: string;
  _id: string;
}

export interface UserPreference {
  _id: string;
  openConfigurator: boolean;
  miniSidenav: boolean;
  fixedNavbar: boolean;
  sidenavColor: string;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  darkMode: boolean;
  created_at: Date;
  updated_at: null;
  __v: number;
}

export interface ILoginRequest {
  email: string;
  password: string;
  /* rememberMe: boolean; */
}
