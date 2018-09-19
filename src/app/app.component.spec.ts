import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import "jasmine-expect";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ShoppingListModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
