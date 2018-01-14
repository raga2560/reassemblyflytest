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
  
  /*
  let details = {
  	    email: this.email,
  	    password: this.password,
  	    role: this.role
  	};
	C:\ionic4\backup\todo-roles (1)\src\pages\signup-page\signup-page.ts
	
  */
  
  /*
  Data got with token
  return {
		_id: request._id,
		email: request.email,
		role: request.role
	};
	C:\ionic4\backup\flyinsureserver\routes\moronyauth\controllers\authentication.js
	
	res.status(200).json({
		token: 'JWT ' + generateToken(userInfo),
		user: userInfo
	});
  */

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
			this.setUsername(details.email);
			this.setUserInfo(data.user);
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

  setUserInfo(userinfo): void {
    this.storage.set('userinfo', userinfo);
  };

  getUserInfo(): Promise<any> {
    return this.storage.get('userinfo').then((value) => {
      return value;
    });
  };

  
  /*
   let credentials = {
            email: this.email,
            password: this.password
        };
C:\ionic4\backup\todo-roles (1)\src\pages\login-page\login-page.ts		
  */

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
			this.setUsername(credentials.email);
			this.setUserInfo(data.user);
			this.events.publish('user:login');

	        resolve(res.json());
	      }, (err) => {
	      	reject(err);
	      });

  	});

  }

  logout(){
  	this.storage.set('token', '');
	this.storage.set('userinfo', '');
	this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

}
