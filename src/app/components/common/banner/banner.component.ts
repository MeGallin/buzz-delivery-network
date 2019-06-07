import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  constructor() {}

  array = [
    "../../assets/images/responsive.png",
    "../../assets/images/responsive.png",
    "../../assets/images/responsive.png"
  ];

  // images = [1, 2, 3].map(array => console.log(image));

  images = this.array.map(img => {
    return img;
  });

  ngOnInit() {}
}
