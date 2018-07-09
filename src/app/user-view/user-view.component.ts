import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config, UserRepository, User } from 'lib-react-vuejs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  user: User = null;
  private repository: UserRepository;

  constructor(private route: ActivatedRoute) {
      const config = new Config('http://192.168.1.55:8080');
      config.token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNZW50b3NHdW4iLCJleHAiOjE1MzEyMTM4NDQsImlhdCI6MTUzMTEyNzQ0NH0.CfIlndZ7ROMO2vSxg05Y2XpzeqS_q62ms67JSJAG1krqex2sv936U5Wlp--TSgBcqa78MucQ0uUPIyC8w46XQA';
      this.repository = new UserRepository(config);
  }

  ngOnInit() {
      this.route.params.subscribe((params) => {
          this.repository.get(params['id']).then((user: User) => {
            this.user = user;
          });
      });
  }

}
