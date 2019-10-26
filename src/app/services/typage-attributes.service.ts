import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypageAttributesService {

  link = "http://localhost:9000/attributes";
   httpOptions = {
     headers: new HttpHeaders({
      "Content-Type": "Application/json"
     })
   }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.link);
  }

  save(attributes: any) {
    return this.http.post(this.link, attributes, this.httpOptions);
  }
}
