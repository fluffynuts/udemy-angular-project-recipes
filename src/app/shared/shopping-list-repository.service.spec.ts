import { TestBed, inject } from "@angular/core/testing";

import { ShoppingListRepositoryService } from "./shopping-list-repository.service";

describe("ShoppingListRepositoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListRepositoryService]
    });
  });

  it("should be created", inject([ShoppingListRepositoryService], (service: ShoppingListRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
