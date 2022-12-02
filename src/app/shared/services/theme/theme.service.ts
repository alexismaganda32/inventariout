import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor() {}

  // set the actual system theme btw dark and light
  setTheme() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDark.matches.valueOf() == true) {
      document.body.classList.add("dark");
    }
    else {
      document.body.classList.remove("dark");
    }
  }

  // return true if dark, false if light
  getTheme() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDark.matches.valueOf() == true) {
      return true;
    }
    else {
      return false;
    }
  }

  // add or remove dark theme
  changeTheme() {
    document.body.classList.toggle("dark");
  }
}
