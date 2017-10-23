import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Vendor } from '../models/Vendor';

const urlBase = 'http://localhost:62140/';
const mvcCtrl = 'Vendors/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class VendorService {

 constructor(private http: Http) { }

	list(): Promise<Vendor[]> {
		return this.http.get(url+'List')
			.toPromise()
			.then(resp => resp.json() as Vendor[])
			.catch(this.handleError);	
	}

	get(id): Promise<Vendor> {
		return this.http.get(url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Vendor)
			.catch(this.handleError);	
	}

	add(vendor: Vendor): Promise<any> {
		return this.http.post(url+'Add', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(vendor: Vendor): Promise<any> {
		return this.http.post(url+'Change', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	remove(vendor: Vendor): Promise<any> {
		return this.http.post(url+'Remove', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);	
	}
	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}	  

}
