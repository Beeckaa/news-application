import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NewsfeedComponent } from './components/newsfeed.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FooterComponent } from './footer/footer.component';
import { SourceInformationComponent } from './components/sourceInformation.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    NewsfeedComponent,
    SourceInformationComponent,
    AppComponent,
    FetchDataComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'nt', component: SourceInformationComponent },
      { path: 'expressen', component: SourceInformationComponent },
      { path: 'svd', component: SourceInformationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
