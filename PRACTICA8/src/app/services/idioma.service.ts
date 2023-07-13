import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIdioma, IIdiomas } from '../interfaces/IIdioma';

@Injectable({
    providedIn: 'root'
})

export class IdiomaService {
    private baseURL = `http://localhost:2500/v1/inventory/api`

    constructor(private http: HttpClient) { }

    getAllData(): Observable<IIdiomas> {
        return this.http.get<IIdiomas>(`${this.baseURL}/idioma`)
    }
    postData(data: any): Observable<IIdioma> {
        return this.http.post<IIdioma>(`${this.baseURL}/idioma`, data)
    }
    updateData(data: any, id: string): Observable<IIdioma> {
        return this.http.put<IIdioma>(`${this.baseURL}/idioma/${id}`, data)
    }
    deleteData(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/idioma/${id}`)

    }

}