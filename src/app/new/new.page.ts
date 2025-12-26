import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonButton,
  ],
})
export class NewPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

  items = Array.from({ length: 100 }, (_, i) => i);

  constructor() {}

  ngOnInit() {}

  scrollToTop = () => {
    this.content.scrollToTop(300);
  };

  scrollToBottom = () => {
    this.content.scrollToBottom(300);
  };
}
