import { TestBed, async } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { AppModule } from '../app.module';

describe('ParentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentComponent],
      imports: [AppModule],
    });
    // .compileComponents();
  }));

  it('test a method named testing', async(() => {
    const comp = new ParentComponent();

    expect(comp.testing()).toEqual([2, 4, 6, 8, 0]);
  }));
});
