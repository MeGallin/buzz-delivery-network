import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getContent() {
    const bulletinUrl = "../php/news/footer.txt";
    // const bulletinUrl_local = "../../php/news/footer.txt";
    return this.httpGet$.get(bulletinUrl, { responseType: "text" });
  }
}
