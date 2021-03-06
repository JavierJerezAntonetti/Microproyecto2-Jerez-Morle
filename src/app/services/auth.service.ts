import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import firebase  from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$: Observable< User | null | undefined>;

    constructor(
        private fireAuth: AngularFireAuth,
        private fireStore: AngularFirestore,
        private router: Router
    ) { 
      this.user$ = this.fireAuth.authState.pipe(
        switchMap(user => {
          // Logged in
        if (user) {
          return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
      )
    }

    async googleSignin() {
      try{
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.fireAuth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
      }
      catch(e){
        console.log(e)
      }
    }
  
    private updateUserData(user: any) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);
  
      const data = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        favorites: [],
      } 
  
      return userRef.set(data, { merge: true })
  
    }
  
    async signOut() {
      await this.fireAuth.signOut()
      return this.router.navigate(['/']);
    }

}
