import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
