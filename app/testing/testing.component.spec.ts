import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TestingComponent } from './testing.component';
import { By } from '@angular/platform-browser';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(htmlElement.textContent).toEqual('1');
  });

  it('increment() should increase counter', () => {
    let initValue = component.counter;
    component.increment();
    const newValue = component.counter;
    expect(newValue).toBeGreaterThan(initValue);
  });
  it('decrement() should decrease counter', () => {
    let initValue = component.counter;
    component.decrement();
    const newValue = component.counter;
    expect(newValue).toBeLessThan(initValue);
  });
});
