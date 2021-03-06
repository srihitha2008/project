import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainings } from '../models/trainings.model';
import { TrainingsService } from './trainings.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styles: []
})
export class TrainingsComponent implements OnInit {

  users: Trainings[];

  constructor(private router: Router, private trainingsService: TrainingsService) {

  }

  ngOnInit() {
    this.trainingsService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: Trainings): void {
    this.trainingsService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


