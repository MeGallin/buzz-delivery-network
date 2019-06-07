import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  constructor() {}

  images = [1, 2, 3].map(
    () => `https://picsum.photos/2200/360?random&t=${Math.random()}`
  );

  ngOnInit() {}
}
