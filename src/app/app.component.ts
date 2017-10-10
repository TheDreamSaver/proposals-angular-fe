import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id ,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  title = 'Freelance Bootcamp Dashboard';

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout:4000});
    this.router.navigate(['/login']);
  }
}
