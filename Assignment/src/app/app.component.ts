import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // Varibale for checking for chrome broser
  public chrome = false;

  // Varibale for checking for safri broser
  public safari = false;

  // Varibale for checking for firefox broser
  public firefox = false;

  // Varibale for checking for edge broser
  public edge = false;

  // Varibale for checking for other broser
  public other = false;

  // variable for showing different message when it is other browser
  public downloadModalMessage = "Thank you for downloading.";

  //user agent variable
  private userAgent = navigator.userAgent.toLowerCase();

  constructor() {}

  ngOnInit() {
    this.checkBrowser();
  }

  // Method to check for browser
  public checkBrowser() {
    if (navigator.userAgent.indexOf("Chrome") != -1) {
      this.chrome = true;
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      this.safari = true;
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      this.firefox = true;
    } else if (navigator.userAgent.indexOf("Edge") != -1) {
      this.edge = true;
    } else {
      this.other = true;
      this.downloadModalMessage = "Browser Not Supported.";
    }
  }

  // method to show the feedback for on click of uninstall tab
  public showFormMethod() {
    document.getElementById("showForm").style.display = "block";
  }
}
