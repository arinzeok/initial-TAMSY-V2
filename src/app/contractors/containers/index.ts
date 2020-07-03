import { SingleApplicationComponent } from './applications/single-application/single-application.component';
import { ApplicationsComponent } from './applications/applications.component';
import { HomeComponent } from './home/home.component';

export function containers() {
    return [
      SingleApplicationComponent,
      ApplicationsComponent,
      HomeComponent
    ];
}
