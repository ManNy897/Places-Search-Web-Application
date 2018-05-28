import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, RequestOptions } from '@angular/http'

@Injectable()
export class RequestService {
    
    constructor(private http: HttpClient) { }
    
    getRequest(requestUrl, requestParams) {
    //  let params: URLSearchParams = new URLSearchParams();
        let Params = new HttpParams();
    //    requestUrl += "?";
      for(var k in requestParams){
          //params.set(k, requestParams[k]);
          //requestUrl += k
          Params = Params.append(k, requestParams[k]);
      }
        console.log(requestParams);
        //console.log(params);
        //let requestOptions = new RequestOptions();
//requestOptions.search = params;
      //params.set('param1', 'someValue');
      return this.http.get(requestUrl, { params: Params });
    }
}
