import { Component } from '@angular/core';
import { EsService } from '../services/es.service';

@Component({
    templateUrl: './search.component.html'
})
export class SearchComponent {
    constructor(private esService: EsService) { }
    term: string;
    results: any[];
    error: string = '';

    search() {
        this.esService.getResults(this.term).subscribe(data => {
            this.results = data.hits.hits;
        },
            error => this.error = <any>error);
    }

    onKey(event: any) {
        if (event.keyCode == 13) {
            this.search();
        }
    }
}