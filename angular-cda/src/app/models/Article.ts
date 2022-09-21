import { User } from './User';
import { Categorie } from './Categorie';

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