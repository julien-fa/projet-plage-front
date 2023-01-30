import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLocatairesComponent } from './liste-locataires.component';

describe('ListeLocatairesComponent', () => {
  let component: ListeLocatairesComponent;
  let fixture: ComponentFixture<ListeLocatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLocatairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLocatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
