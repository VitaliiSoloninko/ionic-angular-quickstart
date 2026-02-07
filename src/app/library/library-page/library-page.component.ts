import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonDatetime,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime],
})
export class LibraryPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
