import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { FooterComponent } from './components/footer/footer.component';
import { SourceInformationComponent } from './components/sourceInformation/sourceInformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsfeedComponent,
    SourceInformationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'nt', component: SourceInformationComponent },
      { path: 'expressen', component: SourceInformationComponent },
      { path: 'svd', component: SourceInformationComponent },
      { path:  'category/:categoryType', component: NewsfeedComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
