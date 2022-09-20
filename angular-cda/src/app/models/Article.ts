import { User } from '../models/User';
import { Categorie } from '../models/Categorie';

export class Article {
    constructor(

        public id: string, 
        public title: string, 
        public description: string,
        public categorieId: string, 
        public User: User,
        public Categorie: Categorie
    
    ) { }
}