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
  constructor(private recordService: RecordService) {}
  records: Multiple[] = [];

  ngOnInit(): void {
    this.recordService.getRecords().subscribe((records) => {
      this.records = sortArrayOfObjectsByNumericProperty(records, 'number') as Multiple[];
    });
  }

  async onDeleteRecord(multiple: Multiple) {
    if (multiple.id) await this.recordService.deleteRecord(multiple.id);
  }

  protected readonly Number = Number;
}
