import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc } from '@angular/fire/firestore';
import { Multiple } from '@app/interfaces/multiple';
@Injectable({
  providedIn: 'root',
})
export class MultipleService {
  constructor(private firestore: Firestore) {}

  saveMultiple(multipleData: Multiple) {
    const multipleRef = collection(this.firestore, 'multiple');
    return addDoc(multipleRef, multipleData);
  }
}
