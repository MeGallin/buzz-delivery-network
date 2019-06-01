import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ContactFormService } from "../../services/contact-form.service";
import { TypewriteService } from "../../services/typewrite.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  thankYouMessage: string = "";
  signature = "Alan";
  typeWriter;

  constructor(
    private contactFormService: ContactFormService,
    private typeWriter$: TypewriteService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      hiddenName: new FormControl(""),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", Validators.required)
    });
  }

  sendMessage(message) {
    // console.log(e);
    // console.log(JSON.stringify(message));
    this.contactFormService.sendMail(JSON.stringify(message)).subscribe(
      res => {
        //   console.log("Contact form done", res);
      },
      err => {
        //  console.log('There was an error', err);
        return err;
      }
    );

    this.thankYouMessage =
      "Thank you for your submission. I will be in contact shortly.";
    setInterval(() => {
      this.typeWriter = this.typeWriter$.typeWriter(this.signature);
    }, 1000);

    this.contactForm.reset();
    setTimeout(() => {
      this.thankYouMessage = "";
    }, 5000);
  }
}
