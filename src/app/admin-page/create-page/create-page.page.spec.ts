import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePagePage } from './create-page.page';

describe('CreatePagePage', () => {
  let component: CreatePagePage;
  let fixture: ComponentFixture<CreatePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
