let lastId = 0;
export class Ingredient {
  static clone(i: any): any {
    return new Ingredient(i.name, i.amount, i.id);
  }
  constructor(
    public name: string,
    public amount: number,
    public id?: number) {
      if (this.id === undefined) {
        this.id = ++lastId;
      }
    }
}
