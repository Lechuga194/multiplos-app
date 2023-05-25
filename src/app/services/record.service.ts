import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Multiple } from '@app/interfaces/multiple';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecordService {
  constructor(private firestore: Firestore) {}

  saveRecord(multipleData: Multiple) {
    try {
      const recordRef = collection(this.firestore, 'record');
      return addDoc(recordRef, multipleData);
    } catch (e) {
      console.error(e, 'An error occurred while saving the record');
      return throwError(e);
    }
  }

  getRecords(): Observable<Multiple[]> {
    try {
      const recordRef = collection(this.firestore, 'record');
      return collectionData(recordRef, { idField: 'id' }) as Observable<Multiple[]>;
    } catch (e) {
      console.error(e, 'An error getting the records');
      return throwError(e);
    }
  }

  deleteRecord(id: string) {
    try {
      const recordDocRef = doc(this.firestore, `record/${id}`);
      return deleteDoc(recordDocRef);
    } catch (e) {
      console.error(e, 'An error occurred while deleting the record');
      return throwError(e);
    }
  }
}
