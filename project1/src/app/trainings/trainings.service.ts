import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Trainings } from '../models/trainings.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainingsService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8495/trainings';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Trainings[]>(this.userUrl); 
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Trainings>(this.userUrl, user);
  }

}
