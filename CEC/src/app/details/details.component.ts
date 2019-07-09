import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details;
  constructor(private route: ActivatedRoute, private service: AuthService, private router: Router) {
    this.details=this.route.snapshot.params.username;
   }

  ngOnInit() {
  }

  onClick(){
    let token=this.service.generateToken();
    localStorage.setItem("token",token);
    localStorage.setItem("loadPwa","true");
    this.router.navigate(["/pwa"],{ queryParams: { token: token }});
  }

}
