import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { MembersComponent } from "./components/members/members.component";
import { AuthGuard } from "./auth.guard";
import { CallbackComponent } from "./components/callback/callback.component";
import { BuzzOnlineSystemsComponent } from "./components/buzz-online-systems/buzz-online-systems.component";
import { SpecialistNetworkComponent } from "./components/specialist-network/specialist-network.component";
import { OnlineAndDeliveryNetworkComponent } from "./components/online-and-delivery-network/online-and-delivery-network.component";
import { CallCentreComponent } from "./components/call-centre/call-centre.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "online-systems",
    component: BuzzOnlineSystemsComponent
  },
  {
    path: "specialist-network",
    component: SpecialistNetworkComponent
  },
  {
    path: "call-centre",
    component: CallCentreComponent
  },
  {
    path: "online-and-delivery-network",
    component: OnlineAndDeliveryNetworkComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  {
    path: "members",
    component: MembersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "callback",
    component: CallbackComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class RoutesModule {}
