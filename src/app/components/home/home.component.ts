import { Component, OnInit } from "@angular/core";
import { TypewriteService } from "../../services/typewrite.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  signature = "BuzZ";
  typeWriter;

  constructor(private typeWriter$: TypewriteService) {}

  ngOnInit() {
    setInterval(() => {
      this.typeWriter = this.typeWriter$.typeWriter(this.signature);
    }, 3000);
  }
}
