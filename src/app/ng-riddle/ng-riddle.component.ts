import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-riddle',
  templateUrl: './ng-riddle.component.html',
  styleUrls: ['./ng-riddle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRiddleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
