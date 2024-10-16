import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontenerComponent } from './kontener.component';

describe('KontenerComponent', () => {
  let component: KontenerComponent;
  let fixture: ComponentFixture<KontenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontenerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
