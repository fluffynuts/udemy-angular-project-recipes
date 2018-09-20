import { TestBed, inject } from "@angular/core/testing";

import { IngredientRepositoryService } from "./ingredient-repository.service";

describe("IngredientRepositoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientRepositoryService]
    });
  });

  it("should be created", inject([IngredientRepositoryService], (service: IngredientRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
