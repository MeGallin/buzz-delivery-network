import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAndDeliveryNetworkComponent } from './online-and-delivery-network.component';

describe('OnlineAndDeliveryNetworkComponent', () => {
  let component: OnlineAndDeliveryNetworkComponent;
  let fixture: ComponentFixture<OnlineAndDeliveryNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineAndDeliveryNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineAndDeliveryNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
