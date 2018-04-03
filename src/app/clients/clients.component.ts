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
    selectedClient: Client;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getData()
            .subscribe((data: Client) => this.clients = data);
    }

    onFilter(event) {
        const filterValue = event.target.value.toLowerCase();
        this.selectedClient = undefined;
        this.httpService.getData()
            .subscribe((data: any) => {
                const filteredClients = data.filter(findAnalogyInObject(filterValue));

                function findAnalogyInObject(value) {
                    const finder = function (obj) {
                        for (const key in obj) {
                            if (typeof(obj[key]) === 'string') {
                                const someValue = obj[key].toLowerCase();
                                if (someValue.indexOf(value) !== -1) {
                                    return true;
                                }
                            }
                            if (typeof(obj[key]) === 'object' && finder(obj[key]) === true) {
                                return true;
                            }
                        }
                        return false;
                    };
                    return finder;
                }

                this.clients = filteredClients;
            });
    }
}
