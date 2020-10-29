import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd  } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  latestArticles: Feed[] = [];
  currentRoute: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((navigationEnd: any) =>
        this.currentRoute = navigationEnd.url
      );

    http.get<Feed[]>(baseUrl + 'api/rssfeeds').subscribe(result => {
      this.latestArticles = result;
    }, error => console.error(error));
  }
}

interface Feed {
  link: string;
  title: string;
  content: string;
  pubDate: string;
  source: string;
}
