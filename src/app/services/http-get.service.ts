import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getContent() {
    // const bulletinUrl = "../php/news/footer.txt";
    const bulletinUrl_local = "../assets/footer.txt";

    return this.httpGet$.get(bulletinUrl_local, { responseType: "text" });
  }
}
