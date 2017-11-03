import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Vehicle } from '../models/Vehicle';
import { Asset } from '../models/asset';

//When we run the backend, it is hosted at 'http://localhost:54154/'
const urlBase = 'http://localhost:54154/';
//This being the 'Vehicle' service, we want to set our Model View Control
//variable to 'Vehicles/'
const mvcCtrl = 'Vehicles/';
//"By their powers combined," we have an address we can use to retrieve
//data from the backend.
const url: string = urlBase + mvcCtrl;

@Injectable()
export class VehicleService {

 constructor(private http: Http) { }
//Here we have the same methods we use in the backend.
//This consistency makes it easier to look through the backend
//to make sure that we are using the methods correctly.
	
	//Provides a list of Vehicles
	list(): Promise<Vehicle[]> {
		return this.http.get(url+'List')
			.toPromise()
			.then(resp => resp.json() as Vehicle[])
			.catch(this.handleError);	
	}

	//Provides a specific Vehicle, using an id
	get(id): Promise<Vehicle> {
		return this.http.get(url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Vehicle)
			.catch(this.handleError);	
	}

	//Adds one Vehicle
	add(vehicle: Vehicle): Promise<any> {
		return this.http.post(url+'Add', vehicle)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	//Changes one Vehicle
	change(vehicle: Vehicle): Promise<any> {
		return this.http.post(url+'Change', vehicle)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	//Removes one Vehicle record
	remove(vehicle: Vehicle): Promise<any> {
		return this.http.post(url+'Remove', vehicle)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);	
	}

	//When (not "if!") we break something, this method sends the error message
	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}	  

}
