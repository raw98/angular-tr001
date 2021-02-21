import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  auth: boolean;
  constructor(private serviceaut: AuthService, private router:Router) {}

  ngOnInit() {
    this.auth = this.serviceaut.isAuth;
  }
  LogIn() {
    this.serviceaut.signIn().then(() => {
      this.auth = this.serviceaut.isAuth;
      console.log("connexion réussi");
      this.router.navigate(['appareil']);
    });
  }

  LogOut() {
    this.serviceaut.signOut();
    this.auth = this.serviceaut.isAuth;
    console.log("déconnecté");
  }
}
