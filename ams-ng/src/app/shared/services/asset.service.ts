import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Asset } from '../../shared/models/asset';
import { Vehicle } from '../models/Vehicle';

const urlBase = 'http://localhost:54154/';
const mvcCtrl = 'Assets/';
const url: string = urlBase + mvcCtrl;


@Injectable()
export class AssetService {
// Dummy data that we can test with
  //Here we have our fake vehicle information, which has three fields at the moment
vehicle:Vehicle[]=[
    {VIN: "Feature", Make: ".NET", Model: "Bootcamp"}
];
  //Here is our fake asset, which has our fake vehicle built into it
asset: Asset[] = [
     {Id: 1, Vendor: "KaBoom Cars", Name: "3", Price: 4, Unit: "5", PhotoPath: "6", Type: "Vehicle", Vehicle: this.vehicle[0]}    
   ];

  
  constructor(private http: Http) {}
  
//Dummy method to test with
  dummydetail(){
    return this.asset;
  }

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