import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Ticketscomponent } from "./ticketscomponent";

describe("Ticketscomponent", () => {
  let component: Ticketscomponent;
  let fixture: ComponentFixture<Ticketscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ticketscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Ticketscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
