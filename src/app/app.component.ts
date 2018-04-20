import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { Routes, RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


}
