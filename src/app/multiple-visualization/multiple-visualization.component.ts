import { Component, Input, OnInit } from '@angular/core';
import { Multiple } from '@app/interfaces/multiple';
import isMultiple from '../utils/Multiple';
import { RecordService } from '@app/services/record.service';
import getMultipleClassColor from '@app/utils/GetMultipleClassColor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onlyNumberRegex } from '@app/utils/RegExp';

@Component({
  selector: 'app-multiple-visualization',
  templateUrl: './multiple-visualization.component.html',
  styleUrls: ['./multiple-visualization.component.scss'],
})
export class MultipleVisualizationComponent implements OnInit {
  @Input() inputNumber: number = 0;
  selectedMultiple: Multiple = {} as Multiple;
  classColor = '';
  numberForm: FormGroup = new FormGroup({});

  constructor(private recordService: RecordService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.numberForm = this.fb.group(
      {
        number: ['', [Validators.required, Validators.pattern(onlyNumberRegex)]],
      },
      { updateOn: 'change' }
    );
  }

  async onSubmit() {
    const number = this.numberForm.value.number;
    if (number) {
      await this.calculateMultiple(number);
      this.numberForm.reset();
    }
  }

  async calculateMultiple(n: number): Promise<void> {
    if (n <= 0) return;
    const multiples = isMultiple(n, [3, 5, 7]);
    //We create the object with the petition and the result
    const multipleData: Multiple = { number: n, multiples };
    await this.recordService.saveRecord(multipleData);
    this.selectedMultiple = multipleData;
    this.classColor = getMultipleClassColor(multiples[0]);
  }
}
