import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));
  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'Home'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Home');
  }));
});
