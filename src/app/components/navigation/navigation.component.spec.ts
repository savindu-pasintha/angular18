import { TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angularapp1' title`, () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularapp1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angularapp1');
  });
});
