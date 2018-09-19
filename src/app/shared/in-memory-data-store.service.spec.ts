import { TestBed, inject } from "@angular/core/testing";

import { InMemoryDataStoreService } from "./in-memory-data-store.service";

describe("InMemoryDataStoreService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataStoreService]
    });
  });

  it("should be created", inject([InMemoryDataStoreService], (service: InMemoryDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
