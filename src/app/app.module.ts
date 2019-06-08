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
import { NoticeComponent } from "./components/common/notice/notice.component";
import { BannerComponent } from "./components/common/banner/banner.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BuzzOnlineSystemsComponent } from './components/buzz-online-systems/buzz-online-systems.component';
import { SpecialistNetworkComponent } from './components/specialist-network/specialist-network.component';
import { OnlineAndDeliveryNetworkComponent } from './components/online-and-delivery-network/online-and-delivery-network.component';
import { CallCentreComponent } from './components/call-centre/call-centre.component';

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
    CallbackComponent,
    NoticeComponent,
    BannerComponent,
    BuzzOnlineSystemsComponent,
    SpecialistNetworkComponent,
    OnlineAndDeliveryNetworkComponent,
    CallCentreComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
