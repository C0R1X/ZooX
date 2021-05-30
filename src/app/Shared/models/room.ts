import {User} from './user';

export interface IRoom {
  Id?;
  Name;
  Description;
  PartyStyle?;
  PartyFood?;
  PartyMusic?;
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

  constructor(id: number, name: string, desc: string) {
    this.id = id;
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

  get Description():string {
    return this.description;
  }
  set Description(desc: string) {
    this.description = desc;
  }

  get PartyStyle():string[]{
    return this.PartyStyle;
  }

  get PartyFood():string[]{
    return this.PartyFood;
  }

  get PartyMusic():string[]{
    return this.PartyMusic;
  }

  get PartyDate(): Date {
    return this.dateTime;
  }

  get RoomCreator(): User {
    return this.roomCreator;
  }
  set RoomCreator(u:User){
    this.RoomCreator=u;
  }

  get Members(): User[] {
    return this.members;
  }


}
