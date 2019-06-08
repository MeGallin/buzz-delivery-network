import { Component, OnInit } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-content-footer",
  templateUrl: "./content-footer.component.html",
  styleUrls: ["./content-footer.component.css"],
  providers: [NgbModalConfig, NgbModal]
})
export class ContentFooterComponent implements OnInit {
  navbarOpen = false;
  public showContent;
  constructor(
    private ContentService$: HttpGetService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    public auth: AuthService
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  ngOnInit() {
    this.auth.handleAuthentication();
    setInterval(() => {
      this.ContentService$.getContent().subscribe(res => {
        this.showContent = res;
      });
    }, 2000);
  }

  openTermsAndConditions(content) {
    this.modalService.open(content);
  }

  privacyPolicy(content) {
    this.modalService.open(content);
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
