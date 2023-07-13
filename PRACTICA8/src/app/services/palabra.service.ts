import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPalabra, IPalabras } from '../interfaces/IPalabra';

@Injectable({
    providedIn: 'root'
})

export class PalabraService {
    private baseURL = `http://localhost:2500/v1/inventory/api`

    constructor(private http: HttpClient) { }

    getAllData(): Observable<IPalabras> {
        return this.http.get<IPalabras>(`${this.baseURL}/palabras`)
    }
    postData(data: any): Observable<IPalabra> {
        return this.http.post<IPalabra>(`${this.baseURL}/palabras`, data)
    }
    updateData(data: any, id: string): Observable<IPalabra> {
        return this.http.put<IPalabra>(`${this.baseURL}/palabras/${id}`, data)
    }
    deleteData(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/palabras/${id}`)

    }

}