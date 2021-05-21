import {User} from './user';

export interface IRoom {
  Id?;
  Name;
  Description;
  PartyDate?;
  RoomCreator?;
  Members?;
}

export class Room implements IRoom {
  private id: number;
  private name: string;
  private description: string;
  private dateTime: Date;
  private roomCreator: User;
  private members: User[];

  constructor(name: string, desc: string) {
    this.name = name;
    this.description = desc;
  }

  get Id(): number {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Description(): string {
    return this.description;
  }

  set Description(desc: string) {
    this.description = desc;
  }

  get PartyDate(): Date {
    return this.dateTime;
  }

  get RoomCreator(): User {
    return this.roomCreator;
  }

  get Members(): User[] {
    return this.members;
  }


}
