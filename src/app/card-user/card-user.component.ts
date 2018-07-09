import { Component, Input, OnInit } from '@angular/core';
import { User } from 'lib-react-vuejs';

@Component({
    selector: 'app-card-user',
    templateUrl: './card-user.component.html',
    styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
    @Input() user: User = null;
    constructor() { }

    ngOnInit() {
    }

}
