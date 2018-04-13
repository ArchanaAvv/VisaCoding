import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  countries():Observable<any>{
    return this.http.get('/assets/svg-country-flags/countries.json')
      .map((response)=>extractData(response))
      .catch((response)=>handleError(response))
      .finally(()=>{})
  };
}

export const extractData = (res: Response)=> {
  let body = res.json();
  return body.data || body || {};
}

export const handleError = (error: Response | any) => {
  // In a real world app, you might use a remote logging infrastructure
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