import { Component } from '@angular/core';

@Component({
  selector: 'app-expressen-component',
  templateUrl: './expressen.component.html'
})
export class ExpressenComponent {
  public currentCount = 0;

  public incrementExpressen() {
    this.currentCount++;
  }
}
