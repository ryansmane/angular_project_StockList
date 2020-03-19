import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ngStock';
  links: any[] = [{ path: 'stocks', label: 'List' }, { path: 'new', label: 'Create' }]
}
