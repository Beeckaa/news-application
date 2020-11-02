import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd  } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-newsfeed',
    templateUrl: './newsfeed.component.html',
    styleUrls: ['newsfeed.css'],
})

export class NewsfeedComponent implements OnChanges {
    @Input() currentRoute: string;
    latestArticles: Feed[] = [];
    articlesSource: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
        // Receiveing data from rss feeds
        http.get<Feed[]>(baseUrl + 'api/rssfeeds').subscribe(result => {
            this.latestArticles = result;
        }, error => console.error(error));
    }

    // Sets articleSource depending on the current route
    ngOnChanges(changes: SimpleChanges): void {
        if (this.currentRoute === '/nt') {
            this.articlesSource = 'Norrköping';
        } else if (this.currentRoute === '/expressen') {
            this.articlesSource = 'Expressen: Nyheter';
        } else if (this.currentRoute === '/svd') {
            this.articlesSource = 'SvD - Startsidan';
        } else {
            this.articlesSource = '/';
        }
    }
}

interface Feed {
    link: string;
    title: string;
    content: string;
    pubDate: string;
    category: string;
    source: string;
    sourceLink: string;
}
