import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    snapArray: FaceSnap[]= [
        {id:1, title:'Docker', description: 'Je veux conteneuriser ce site',
         date:  new Date, imageURL: 'assets/docker-logo.png',
         snaps: 2, auteur: 'Elodie'},
        {id:2, title:'Une porshe', description: 'Une porshe cayenne',
        date:  new Date, imageURL: 'assets/porsche-cayenne.webp',
        snaps: 15, auteur: 'Julian', localisation: 'Angers'},
        {id:3, title:'Un gateau', description: 'Miam un gateau!',
        date:  new Date, imageURL: 'assets/gateau-anniversaire.webp',
        snaps: 13, auteur: 'Elodie', localisation: 'Paris'}
      ];

      getAllFaceSnaps(): FaceSnap[]{
        return this.snapArray;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap=this.snapArray.find(faceSnap => faceSnap.id == faceSnapId);
        //cherche un faceSnap dans le tableau snapArray pour lequel l'id est le même que le faceSnapId entré en paramètre
        if(!faceSnap){
            throw new Error ('Face Snap not found');
        }else{
            return faceSnap;
        }
    }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap=this.getFaceSnapById(faceSnapId);
        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}