import { Injectable } from '@angular/core';
 import { Headers, Http } from '@angular/http';
 
 import 'rxjs/add/operator/toPromise';
 import 'rxjs/add/operator/map';
 
 import { Computer } from '../models/computer';
 import { Asset } from '../models/asset';
 
 const urlBase = 'http://localhost:54154/';
 const mvcCtrl = 'Computers/';
 const url: string = urlBase + mvcCtrl;
 
 @Injectable()
 export class ComputerService {
 
   constructor(private http: Http) { }
 
 
 	list(): Promise<Computer[]> {
 		return this.http.get(url+'List')
 			.toPromise()
 			.then(resp => resp.json() as Computer[])
 			.catch(this.handleError);	
 	}
 
 	get(id): Promise<Computer> {
 		return this.http.get(url+'Get/'+id)
 			.toPromise()
 			.then(resp => resp.json() as Computer)
 			.catch(this.handleError);	
 	}
 
 	add(computer: Computer): Promise<any> {
 		return this.http.post(url+'Add', computer)
 			.toPromise()
 			.then(resp => resp.json() || {})
 			.catch(this.handleError);
 	}
 
 	change(computer: Computer): Promise<any> {
 		return this.http.post(url+'Change', computer)
 			.toPromise()
 			.then(resp => resp.json() || {})
 			.catch(this.handleError);
 	}
 
 	remove(computer: Computer): Promise<any> {
 		return this.http.post(url+'Remove', computer)
 			.toPromise()
 			.then(resp => resp.json() || {})
 			.catch(this.handleError);	
 	}
 	private handleError(error: any): Promise<any> {
 		console.error('An error has occurred', error);
 		return Promise.reject(error.message || error);
 	}	  
 
 }