import { Component } from '@angular/core';

@Component({
  selector: 'app-NT-component',
  templateUrl: './NT.component.html'
})
export class NTComponent {
  public currentCount = 0;

  public incrementNT() {
    this.currentCount++;
  }
}
