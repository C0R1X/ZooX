export interface IUser {
  Id?: number;
  Login: string;
  FirstName?: string;
  SecondName?: string;
  PhotoUrl?:string;
  Password: string;
  Friends?: User[];
}

export class User implements IUser {
  private uid?: number;
  private login: string;
  private firstName?: string;
  private secondName?: string;
  private photoUrl?:string;
  private password: string;
  private friends?: User[];

  constructor(id: number, login: string, password: string) {
      this.uid = id,
      this.login = login,
      this.firstName = '',
      this.secondName = '',
      this.password = password,
      this.friends = [];

  }
  
  get Id(): number {
    return this.uid;
  }

  get Login(): string {
    return this.login;
  }

  set Login(s: string) {
    this.login = s;
  }

  get FirstName(): string {
    return this.firstName;
  }

  get SecondName(): string {
    return this.secondName;
  }

  get PhotoUrl():string{
    return this.photoUrl;
  }

  get Password(): string {
    return this.password;
  }

  set Password(p: string) {
    this.password = p;
  }

  get Friends(): User[] {
    return this.friends;
  }

  set Friends(f: User[]) {
    this.friends = f;
  }

  
}


