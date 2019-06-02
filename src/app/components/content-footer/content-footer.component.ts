import { Component, OnInit } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";

@Component({
  selector: "app-content-footer",
  templateUrl: "./content-footer.component.html",
  styleUrls: ["./content-footer.component.css"]
})
export class ContentFooterComponent implements OnInit {
  public showContent;
  constructor(private ContentService$: HttpGetService) {}

  ngOnInit() {
    setInterval(() => {
      this.ContentService$.getContent().subscribe(res => {
        this.showContent = res;
      });
    }, 2000);
  }
}
