const defaultRecipeImagePath = "http://www.vivrebelle.com/assets/site/img/recipe-icon.png";
export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath?: string) {
      if (!this.imagePath) {
        this.imagePath = defaultRecipeImagePath;
      }
    }
}
