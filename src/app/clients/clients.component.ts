import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css'],
    providers: [HttpService]
})
export class ClientsComponent implements OnInit {

    clients: Client;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getData()
            .subscribe((data: Client) => this.clients = data);
    }

}
