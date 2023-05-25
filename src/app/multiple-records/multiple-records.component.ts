import { Component, OnInit } from '@angular/core';
import { RecordService } from '@app/services/record.service';
import { Multiple } from '@app/interfaces/multiple';
import { sortArrayOfObjectsByNumericProperty } from '@app/utils/Arrays';

@Component({
  selector: 'app-multiple-records',
  templateUrl: './multiple-records.component.html',
  styleUrls: ['./multiple-records.component.scss'],
})
export class MultipleRecordsComponent implements OnInit {
  constructor(private multipleService: RecordService) {}
  records: Multiple[] = [];

  ngOnInit(): void {
    this.multipleService.getRecords().subscribe((records) => {
      this.records = sortArrayOfObjectsByNumericProperty(records, 'number') as Multiple[];
    });
  }
}
