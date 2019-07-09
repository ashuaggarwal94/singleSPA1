import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as json from "../../assets/userDetails.json";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  constructor(private http: HttpClient, private route: Router) {}

  emailInput = undefined;
  title = "App";
  details: User[] = [];
  display = true;
  onClick(inputEmail: String) {
    if (inputEmail.toLocaleLowerCase().match("demo")) {
      this.details = [];
      this.display = true;
      console.log(this.display);

      for (let [key, user] of Object.entries(json.Users)) {
        this.details.push(user);
      }
    } else {
      this.display = false;
      this.details = [];
    }
    console.log(this.display);
  }
  onSelect(profile: User) {
    this.route.navigate(["/cec/details", profile.username]);
  }
}
