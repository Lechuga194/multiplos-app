import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import { Multiple } from '@app/interfaces/multiple';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MultipleService {
  constructor(private firestore: Firestore) {}

  saveMultiple(multipleData: Multiple) {
    const multipleRef = collection(this.firestore, 'multiple');
    return addDoc(multipleRef, multipleData);
  }

  getRecords(): Observable<Multiple[]> {
    const multipleRef = collection(this.firestore, 'multiple');
    return collectionData(multipleRef) as Observable<Multiple[]>;
  }
}
