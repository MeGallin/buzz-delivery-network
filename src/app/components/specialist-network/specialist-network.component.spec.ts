import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistNetworkComponent } from './specialist-network.component';

describe('SpecialistNetworkComponent', () => {
  let component: SpecialistNetworkComponent;
  let fixture: ComponentFixture<SpecialistNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
