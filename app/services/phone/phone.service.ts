import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface IPhoneData {
    name: string;
    snippet: string;
    images: string[];
}
export interface IPhoneDetailData {
    name: string;
    images: string[];
    description: string;
}
@Injectable()
export class PhoneSvc {
    constructor(private http: Http) { }
    
    query(): Observable<IPhoneData[]> {
        return this.http.get(`app/phones/phones.json`)
            .map((res: Response) => res.json());
    }
    getPhoneDetail(id: string): Observable<IPhoneData> {
        return this.http.get(`app/phones/${id}.json`)
            .map((res: Response) => res.json());
    }
}
