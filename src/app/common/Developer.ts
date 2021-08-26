import { Skill } from "./Skill";

export class Developer {
  lastName!: string;
  firstName!: string;
  age!: number;
  sexe!: string;
  bio!: string;
  skills!: Skill[];

  public constructor(lastName:string, firstName:string, age:number, sexe:string, bio:string, skills:Skill[]) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.sexe = sexe;
    this.bio = bio;
    this.skills = skills;
  }
}
