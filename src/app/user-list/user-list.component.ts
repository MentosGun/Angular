import { Component, OnInit } from '@angular/core';
import { Config, UserRepository, User } from 'lib-react-vuejs';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users: User[] = null;
    filter= '';
    private repository: UserRepository;
    private privateUsers: User[] = [];

    constructor() {
        const config = new Config('http://192.168.1.55:8080');
        config.token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNZW50b3NHdW4iLCJleHAiOjE1MzEyMTM4NDQsImlhdCI6MTUzMTEyNzQ0NH0.CfIlndZ7ROMO2vSxg05Y2XpzeqS_q62ms67JSJAG1krqex2sv936U5Wlp--TSgBcqa78MucQ0uUPIyC8w46XQA';
        this.repository = new UserRepository(config);
        this.repository.list().then((users: User[]) => {
            this.users = users;
            this.privateUsers = users;
        });
    }

    filterUsers($event: any): void {
      this.filter = $event.target.value;
        const regex = new RegExp(this.filter)

        this.users = [];
        this.privateUsers.forEach((user: User) => {
            if (user.username.match(regex)) {
                this.users.push(user);
            }
        })
    }

    ngOnInit() {
    }

}
