import { DYNAMIC_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){
  }
  
  title!: string;
  description!: string;
  date!: Date;
  imageURL!:string;
  snaps!: number;
  titleButton!: string;
  auteur!: string;

  ngOnInit() {
    this.title='Titre';
    this.description='Ceci est une description';
    this.date= new Date();
    this.imageURL= 'https://sys-admin.fr/wp-content/uploads/2020/06/docker-logo.png';
    this.snaps=6;
    this.titleButton= 'Oh, snaps!';
    this.auteur= 'Elodie'
  }

  onSnap(){
    if (this.titleButton=='Oh, snaps!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.titleButton= 'Oops, unsnaps';
    }else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.titleButton= 'Oh, snaps!';
    } 
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    //this.router.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }
}