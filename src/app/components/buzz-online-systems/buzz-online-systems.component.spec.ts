import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzOnlineSystemsComponent } from './buzz-online-systems.component';

describe('BuzzOnlineSystemsComponent', () => {
  let component: BuzzOnlineSystemsComponent;
  let fixture: ComponentFixture<BuzzOnlineSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzOnlineSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzOnlineSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
