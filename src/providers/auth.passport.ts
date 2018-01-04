import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  public token: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';


  constructor(public http: Http, public storage: Storage, public events: Events) {

  }

  checkAuthentication(){

  	return new Promise((resolve, reject) => {

  		//Load token if exists
  		this.storage.get('token').then((value) => {

  			this.token = value;

			let headers = new Headers();
			headers.append('Authorization', this.token);

			this.http.get('http://localhost:8081/api/auth/protected', {headers: headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				}); 

  		}); 		

  	});

  }

  createAccount(details){

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');

	    this.http.post('http://localhost:8081/api/auth/register', JSON.stringify(details), {headers: headers})
	      .subscribe(res => {

	      	let data = res.json();
	      	this.token = data.token;
	        this.storage.set('token', data.token);
	        resolve(data);
			
			this.storage.set(this.HAS_LOGGED_IN, true);
			// this.setUsername(username);
			this.events.publish('user:signup');

	      }, (err) => {
	      	reject(err);
	      });

  	});

  }
  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };


  login(credentials){

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');

	    this.http.post('http://localhost:8081/api/auth/login', JSON.stringify(credentials), {headers: headers})
	      .subscribe(res => {

	      	let data = res.json();
	      	this.token = data.token;
	        this.storage.set('token', data.token);
	        resolve(data);
			
			this.storage.set(this.HAS_LOGGED_IN, true);
			// this.setUsername(username);
			this.events.publish('user:login');

	        resolve(res.json());
	      }, (err) => {
	      	reject(err);
	      });

  	});

  }

  logout(){
  	this.storage.set('token', '');
	this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

}
