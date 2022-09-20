import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';
import { API_URL_PUBLICATION } from 'src/environments/environment';
import { API_URL_LIKE } from 'src/environments/environment';
import { API_URL_COMMENTARY } from 'src/environments/environment';
import { Publication } from '../models/Publication';
import { Like } from '../models/Like';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  sport = {
    logo: '',
    name: '',
    id: ''
  }

  constructor(private http: HttpClient) { }

  getAllPublications() {
    // return this.http.get<Response>(API_URL + 'publication');
    return this.http.get<Publication[]>(API_URL_PUBLICATION);
  }
  
  getAllPublicationsWithLimit(skipValue) {
    // return this.http.get<Response>(API_URL+ 'getAllPublications', {headers: {'skip_value': skipValue.toString()}});
    return this.http.get<Publication[]>(API_URL_PUBLICATION, {headers: {'skip_value': skipValue.toString()}});
  }

  getPublicationsByUserId(userId) {
    // return this.http.get<Response>(API_URL + 'publicationsbyuser/' + userId);
    return this.http.get<Publication[]>(API_URL_PUBLICATION + '/user/' + userId);
  }

  getPublicationBySportId(sport_id) {
    // return this.http.get<Response>(API_URL + 'publicationsbysport/' + sport_id);
    return this.http.get<Publication[]>(API_URL_PUBLICATION + '/sport/' + sport_id);
  }

  getPublicationById(pubId){
    return this.http.get<Publication>(API_URL_PUBLICATION + "/" + pubId);
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  publishWithoutMedia(message, sport, user_id) {
    // return this.http.post(API_URL + 'add/publications', { messages: message, user_id: user_id, sport: sport, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString()  },)
    return this.http.post(API_URL_PUBLICATION, { messages: message, user_id: user_id, sport: sport, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString()  },)
  }

  publishWithPhoto(message, photo, sport, user_id) {
    // return this.http.post(API_URL + 'add/publications', { messages: message, user_id: user_id, photo: photo, sport: sport, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString() },)
    return this.http.post(API_URL_PUBLICATION, { messages: message, user_id: user_id, photo: photo, sport: sport, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString() },)
  }

  publishWithVideo(message, video, sport, user_id) {
    // return this.http.post(API_URL + 'add/publications', { messages: message, user_id: user_id, video: video, sport: sport, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString() })
    return this.http.post(API_URL_PUBLICATION, { messages: message, user_id: user_id, video: video, sport: sport, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString() })
  }

  likePublication(pubId) {
    // return this.http.put<Response>( API_URL+ 'likePublications/' + pubId, { userId: JSON.parse(localStorage.getItem('currentUser')).userId, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString() })
    return this.http.put<Response>( API_URL_LIKE + pubId, { userId: JSON.parse(localStorage.getItem('currentUser')).userId, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString() })
  }

  dislikePublication(pubId, userId) {
    return this.http.delete<Response>(API_URL_LIKE + userId + "/" + pubId)
    // return this.http.put<Response>(API_URL + 'dislikePublications/' + pubId, { userId: JSON.parse(localStorage.getItem('currentUser')).userId})
  }

  commentPublication(commentMessage, pubId) {
    return this.http.post<Response>(API_URL_COMMENTARY + pubId, { message: commentMessage, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString()}, { headers: { user_id: JSON.parse(localStorage.currentUser).userId } })
    // return this.http.put<Response>(API_URL + 'commentPublication/' + pubId, { message: commentMessage, datetime: (new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')).toString()}, { headers: { user_id: JSON.parse(localStorage.currentUser).userId } })
  }

  getLikeByPublicationId(pubId)
  {
    return this.http.get<Like>(API_URL_LIKE + "/pub/" + pubId);
  }

  setSportForPublications(sport) {
    this.sport = sport
  }

  getSport() {
    return this.sport
  }

  sharedPublication(publication, user_id) {
    return this.http.post(API_URL + 'sharePub', { sharedPubId: publication.id, user_id: user_id, messages: '' })
  }

  deletePublication(pub_id) {
    return this.http.delete(API_URL_PUBLICATION + pub_id);
  }

}