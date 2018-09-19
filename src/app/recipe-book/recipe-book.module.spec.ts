import { RecipeBookModule } from "./recipe-book.module";

describe("RecipeBookModule", () => {
  let recipeBookModule: RecipeBookModule;

  beforeEach(() => {
    recipeBookModule = new RecipeBookModule();
  });

  it("should create an instance", () => {
    expect(recipeBookModule).toBeTruthy();
  });
});
