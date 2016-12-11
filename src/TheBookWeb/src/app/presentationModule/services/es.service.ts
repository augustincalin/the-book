import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';

import { EsArticle } from '../models/esArticle.model';

@Injectable()
export class EsService {
    private commentUrl: string = 'http://alien:9200/library/_search';
    constructor(private http: Http) { }

    getResults(term: string): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let query = `{
              "_source": {
                "includes":["id", "title", "preview_body"]
              },
              "sort" : [
                    { "likes" : {"order" : "desc"}},
                    "_score"
                ],
              "query": {
                "query_string": {
                  "fields": ["body","title"],
                  "query":"${term}"
                }
              }
            }`;
        return this.http.post(this.commentUrl, query, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}