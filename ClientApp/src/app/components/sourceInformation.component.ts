import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-source-information',
    templateUrl: './sourceInformation.component.html',
    styleUrls: ['sourceInformation.css'],
})

export class SourceInformationComponent implements OnChanges {
    @Input() currentRoute: string;
    sources: Source[] = [];
    currentSource: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
        http.get<Source[]>(baseUrl + 'api/rsssource').subscribe(result => {
            this.sources = result;
        }, error => console.error(error));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.currentRoute === '/nt') {
            this.currentSource = 'Norrköping';
        } else if (this.currentRoute === '/expressen') {
            this.currentSource = 'Expressen: Nyheter';
        } else if (this.currentRoute === '/svd') {
            this.currentSource = 'SvD - Startsidan';
        } else {
            this.currentSource = '/';
        }
    }
}

interface Source {
    name: string;
    link: string;
    description: string;
}
