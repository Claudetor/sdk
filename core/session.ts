export class Session {
  constructor(
    public id: string,
    public project: string
  ) {}

  save() {
    console.log(`Saving session ${this.id}`);
  }

  restore() {
    console.log(`Restoring session ${this.id}`);
  }
}
