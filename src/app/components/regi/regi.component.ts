import { Component, OnInit } from '@angular/core';
import { TdRotateAnimation } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.scss'],
  animations: [
  TdRotateAnimation(), // using implicit anchor name 'tdRotate' in template
],
})
export class RegiComponent implements OnInit {
 triggerState: boolean = false;
 overlayStarSyntax: boolean = false;

  overlayDemo: any = {
    name: '',
    description: '',
  };

email = new FormControl('', [Validators.required, Validators.email]);

 constructor(private _loadingService: TdLoadingService) {}
ngOnInit(): void {
    this._loadingService.register('overlayStarSyntax');
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  toggleOverlayStarSyntax(): void {
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }
  usermenu: Object[] = [{
      icon: 'swap_horiz',
      route: '.',
      title: 'Switch account',
    }, {
      icon: 'tune',
      route: '.',
      title: 'Account settings',
    }, {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out',
    },
  ];

events: string[] = [];

  get logTime(): string {
    return new Date().toISOString().split('T')[1].split('.')[0];
  }

  handleChipBlur(value: any): void {
    this.events.push(this.logTime + ': Blur Event received from ' + value);
  }

  handleChipFocus(value: any): void {
    this.events.push(this.logTime + ': Focus Event received from ' + value);
  }

  handleAdd(value: any): void {
    this.events.push(this.logTime + ': Add Event received from ' + value);
  }

  handleRemove(value: any): void {
    this.events.push(this.logTime + ': Remove Event received from ' + value);
  }

}
