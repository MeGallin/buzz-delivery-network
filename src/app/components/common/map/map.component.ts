import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  latitude = -25.7234903;
  longitude = 28.2451339;
  mapType = "satellite";
  zoom = 17;

  constructor() {}

  ngOnInit() {}
}
