import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  titleButton!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){
  }

  ngOnInit() {
    this.titleButton= 'Oh, snaps!';
    const faceSnapId= +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
