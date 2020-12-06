import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result/result.service';

@Component({
  selector: 'app-result-detailed',
  templateUrl: './result-detailed.component.html',
  styleUrls: ['./result-detailed.component.scss'],
})
export class ResultDetailedComponent implements OnInit {
  result = this.resultService.result;
  constructor(private resultService: ResultService) {}

  ngOnInit() {}
}
