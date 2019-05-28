import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutesModule } from "./routes.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { AboutComponent } from "./components/about/about.component";
import { DateTimeComponent } from './components/common/date-time/date-time.component';
import { ContentFooterComponent } from './components/content-footer/content-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactFormComponent,
    AboutComponent,
    DateTimeComponent,
    ContentFooterComponent
  ],
  imports: [BrowserModule, RoutesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
