import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContactFormService {
  private _contactUrl = "../assets/request.php";

  constructor(private _http: HttpClient) {}

  sendMail(message) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this._http.post(this._contactUrl, message).pipe(
      map(response => {
        console.log("Email sent successfully", response);
        return response;
      }),
      err => {
        //   console.log('There was an error', err);
        return err;
      }
    );
  }
}
