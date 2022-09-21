import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_CATEGORIE } from 'src/environments/environment';
import { API_URL } from 'src/environments/environment';
import { Categorie } from '../models/Categorie';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http: HttpClient) { }

  getAllCategories() {
    // return this.http.get<Response>(API_URL + 'publication');
    return this.http.get<Categorie[]>("http://localhost:3000/categories/");
  }

  getCategorieById(catId){
    return this.http.get<Categorie>("http://localhost:3000/categorie/" + catId);
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  createCategorie(){
    return this.http.get<Categorie>("http://localhost:3000/categorie/");
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  deleteCategorie(catId) {
    return this.http.delete("http://localhost:3000/categorie/" + catId);
  }

}