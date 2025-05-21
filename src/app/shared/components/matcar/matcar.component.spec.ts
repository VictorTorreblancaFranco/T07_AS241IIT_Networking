import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcarComponent } from './matcar.component';

describe('MatcarComponent', () => {
  let component: MatcarComponent;
  let fixture: ComponentFixture<MatcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
