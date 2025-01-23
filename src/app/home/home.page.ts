import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { InAppReview } from '../../../../in-app-review';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}

  async triggerAppReview(): Promise<void> {
    await InAppReview.requestReview().catch((error) => {
      console.log(error);
      alert('requestReview error');
    });
  }
}
