export interface User{
  id?: string;
  firstName: string;
  secondName: string;
  password: string;
  friends?: User[];
}
