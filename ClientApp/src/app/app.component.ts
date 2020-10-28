import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  latestArticles: Feed[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
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
}
