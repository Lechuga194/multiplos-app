import { Component, Input, OnInit } from '@angular/core';
import { Multiple } from '@app/interfaces/multiple';
import isMultiple from '../utils/Multiple';
import { MultipleService } from '@app/services/multiple.service';
import getMultipleClassColor from '@app/utils/GetMultipleClassColor';

@Component({
  selector: 'app-multiple-visualization',
  templateUrl: './multiple-visualization.component.html',
  styleUrls: ['./multiple-visualization.component.scss'],
})
export class MultipleVisualizationComponent implements OnInit {
  @Input() inputNumber: number = 0;
  selectedMultiple: Multiple = {} as Multiple;
  classColor = '';
  constructor(private multipleService: MultipleService) {}

  ngOnInit(): void {}

  async calculateMultiple(n: number): Promise<void> {
    if (n <= 0) return;
    const multiples = isMultiple(n, [3, 5, 7]);
    //We create the object with the petition and the result
    const multipleData: Multiple = { number: n, multiples };
    await this.multipleService.saveMultiple(multipleData);
    this.selectedMultiple = multipleData;
    this.classColor = getMultipleClassColor(multiples[0]);
  }

  protected readonly Number = Number;
}
