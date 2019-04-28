import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRemoveComponent } from './document-remove.component';

describe('DocumentRemoveComponent', () => {
  let component: DocumentRemoveComponent;
  let fixture: ComponentFixture<DocumentRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
