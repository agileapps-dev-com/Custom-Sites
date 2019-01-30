import { Component, OnInit } from '@angular/core';
import { AppUserService } from './app-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUserFullName = "Unavailble"; // Full name of the user. When not logged in, the anonimous user details will be displayed.

  constructor(private appUserService: AppUserService) { }
  ngOnInit() {
    this.appUserService.getUserInfo().subscribe(response => {
      debugger;
      if (response['platform']['user']['full_name'])
        this.activeUserFullName = response['platform']['user']['full_name']
    }, error => {
      console.info('"The API requests will work only when published & hosted as a site"', error)
    })
  }
}
