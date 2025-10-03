import { Component } from '@angular/core';
import { Navbar } from '@swe-demo/swe-demo-app-ui';

@Component({
  selector: 'lib-swe-demo-app-feature-navbar-container',
  imports: [Navbar],
  templateUrl: './navbar-container.html',
  styleUrl: './navbar-container.css',
})
export class NavbarContainer {
  readonly items = [
    {
      label: "Home", path: "/"
    },
    {
      label: "Products", path: "/products"
    },
    {
      label: "Account", path: "/account"
    }
  ]
}
