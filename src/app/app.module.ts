import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutesModule } from "./routes.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AuthService } from "./services/auth.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { AboutComponent } from "./components/about/about.component";
import { DateTimeComponent } from "./components/common/date-time/date-time.component";
import { ContentFooterComponent } from "./components/content-footer/content-footer.component";
import { MembersComponent } from "./components/members/members.component";
import { CallbackComponent } from "./components/callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactFormComponent,
    AboutComponent,
    DateTimeComponent,
    ContentFooterComponent,
    MembersComponent,
    CallbackComponent
  ],
  imports: [BrowserModule, RoutesModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
