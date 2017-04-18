import { Component } from '@angular/core';
import { Navigation } from '@plone/restapi-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent extends Navigation {
}
