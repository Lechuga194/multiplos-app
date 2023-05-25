import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Multiple } from '@app/interfaces/multiple';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecordService {
  constructor(private firestore: Firestore) {}

  saveRecord(multipleData: Multiple) {
    const recordRef = collection(this.firestore, 'record');
    return addDoc(recordRef, multipleData);
  }

  getRecords(): Observable<Multiple[]> {
    const recordRef = collection(this.firestore, 'record');
    return collectionData(recordRef, { idField: 'id' }) as Observable<Multiple[]>;
  }

  deleteRecord(id: string) {
    const recordDocRef = doc(this.firestore, `record/${id}`);
    return deleteDoc(recordDocRef);
  }
}
