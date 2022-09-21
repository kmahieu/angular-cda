import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_USER } from 'src/environments/environment';
import { API_URL } from 'src/environments/environment';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http: HttpClient) { }

  getAllCategories() {
    // return this.http.get<Response>(API_URL + 'publication');
    return this.http.get<User[]>("http://localhost:1000/users/");
  }

  getCategorieById(usId){
    return this.http.get<User>("http://localhost:1000/user/" + usId);
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  createCategorie(){
    return this.http.get<User>("http://localhost:1000/user/");
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  deleteCategorie(usId) {
    return this.http.delete("http://localhost:1000/user/" + usId);
  }

}