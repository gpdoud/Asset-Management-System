import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs';

import { Asset } from '../../shared/models/asset';

const urlBase = 'http://localhost:54154/';
const mvcCtrl = 'Assets/';
const url: string = urlBase + mvcCtrl;


@Injectable()
export class AssetService {

  
  constructor(private http: Http) {}
    
    
  	list(): Promise<Asset[]> {
   			return this.http.get(url+'List')
   				.toPromise()
   				.then(resp => resp.json() as Asset[])
   				.catch(this.handleError);
   		}

	  get(id): Promise<Asset> {
   			return this.http.get(url+'Get/'+id)
   				.toPromise()
   				.then(resp => resp.json() as Asset)
   				.catch(this.handleError);
}

  add(asset:Asset): Promise<any> {
        return this.http.post(url+'Add', asset)
        .toPromise()
        .then(resp => resp.json() || {})
        .catch(this.handleError);
      }

 	remove(asset:Asset): Promise<any> {
        return this.http.post(url+'Remove', asset)
        .toPromise()
        .then(resp => resp.json() || {})
        .catch(this.handleError);
      }


	private handleError(error: any): Promise<any> {  //returns a Promise of any type
  	console.error('An error has occurred', error);
  	return Promise.reject(error.message || error); //reject means failed (so whatever user tried to do didn't work)
  }
	
}