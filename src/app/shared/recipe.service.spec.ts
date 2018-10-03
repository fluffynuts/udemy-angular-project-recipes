import { TestBed, inject } from "@angular/core/testing";

import { RecipeService } from "./recipe.service";

describe("RecipeRepositoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService]
    });
  });

  it("should be created", inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
