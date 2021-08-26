export class Skill {
  public name: string | undefined;
  public logo: string | undefined;
  public site: string | undefined;

  public constructor(name:string, logo:string, site:string) {
    this.name = name;
    this.logo = logo;
    this.site = site;
  }
}
