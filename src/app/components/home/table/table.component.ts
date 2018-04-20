import { Component, OnInit } from '@angular/core';
//import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core/data-table';
import { IPageChangeEvent } from '@covalent/core/paging';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { TdRotateAnimation } from '@covalent/core/common';
import {DataService} from '../../../service/service-data';
import {IPosts} from "../../../service/posts";
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
  TdRotateAnimation(), // using implicit anchor name 'tdRotate' in template
],
providers:[DataService]
})
export class TableComponent implements OnInit {
 triggerState: boolean = false;
 _postsArray: IPosts[];
  columns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'gender', label: 'Gender' },
    { name: 'email', label: 'Email' },
    { name: 'balance', label: 'Balance', numeric: true, format: DECIMAL_FORMAT },
  ];

private userdata: Array<any> = [];

  basicData: any[] = [{
    "balance": 7454.6,
    "email": "sclutterham0@123-reg.co.uk",
    "first_name": "Sully",
    "gender": "Male",
    "img": "https://robohash.org/similiquemodiautem.bmp?size=50x50&set=set1",
    "ip_address": "158.0.165.138",
    "last_name": "Clutterham"
  },
  {
    "balance": 3561.4,
    "email": "mevason1@usatoday.com",
    "first_name": "Mateo",
    "gender": "Male",
    "img": "https://robohash.org/molestiaeadquia.bmp?size=50x50&set=set1",
    "ip_address": "68.147.207.137",
    "last_name": "Evason"
  }];
 constructor(private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef,private dataservice:DataService) {}

getPosts(): void {
         this.dataservice.getPosts()
             .subscribe(
                 resultArray => this._postsArray = resultArray,
                 error => console.log("Error :: " + error)
             )
     }

  ngOnInit(): void {
         this.getPosts();
     }
 openPrompt(row: any, name: string): void {
    this._dialogService.openPrompt({
      message: 'Enter comment?',
      value: row[name],
    }).afterClosed().subscribe((value: any) => {
      if (value !== undefined) {
        row[name] = value;
      }
    });
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

  openAlert(): void {
    this._dialogService.openAlert({
      message: 'This is how simple it is to create an alert with this wrapper service.'
    });
  }

  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Do you agree to delete it?',

    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
    });
  }


}
