import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ButtonComponent } from './components/button/button.component';
import { GithubComponent } from './components/github/github.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { WebComponent } from './components/web/web.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ButtonComponent,
    GithubComponent,
    LinkedinComponent,
    WebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
