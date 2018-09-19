import { TestBed, inject } from "@angular/core/testing";

import { RecipeRepositoryService } from "./recipe-repository.service";

describe("RecipeRepositoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeRepositoryService]
    });
  });

  it("should be created", inject([RecipeRepositoryService], (service: RecipeRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
