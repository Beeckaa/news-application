import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd  } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  currentRoute: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    // Recieve the navigationEnd from the url
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((navigationEnd: any) =>
        this.currentRoute = navigationEnd.url
      );
  }
}
