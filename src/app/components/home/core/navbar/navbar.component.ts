import { Component, OnInit } from '@angular/core';
import { RegComponent } from '../../../../components/home/reg/reg.component';
import { TdRotateAnimation } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
  TdRotateAnimation(), // using implicit anchor name 'tdRotate' in template
]
})
export class NavbarComponent implements OnInit {
triggerState: boolean = false;

  ngOnInit() {
  }
  routes: Object[] = [{
      icon: 'home',
      route: 'reg',
      title: 'Home1',
    }, {
      icon: 'library_books',
      route: 'Table',
      title: 'Documentation',
    }, {
      icon: 'color_lens',
      route: '.',
      title: 'Style Guide',
    }, {
      icon: 'view_quilt',
      route: '.',
      title: 'Layouts',
    }, {
      icon: 'picture_in_picture',
      route: '.',
      title: 'Components & Addons',
    },
  ];
  usermenu: Object[] = [{
      icon: 'swap_horiz',
      route: '/Login',
      title: 'Switch account',
    }, {
      icon: 'tune',
      route: '/Login',
      title: 'Account settings',
    }, {
      icon: 'exit_to_app',
      route: '/Login',
      title: 'Sign out',
    },
  ];
  navmenu: Object[] = [{
      icon: 'looks_one',
      route: '.',
      title: 'First item',
      description: 'Item description',
    }, {
      icon: 'looks_two',
      route: '.',
      title: 'Second item',
      description: 'Item description',
    }, {
      icon: 'looks_3',
      route: '.',
      title: 'Third item',
      description: 'Item description',
    }, {
      icon: 'looks_4',
      route: '.',
      title: 'Fourth item',
      description: 'Item description',
    }, {
      icon: 'looks_5',
      route: '.',
      title: 'Fifth item',
      description: 'Item description',
    },
  ];

  constructor() {}







 // public barChartOptions:any = {
 //    scaleShowVerticalLines: false,
 //    responsive: true
 //  };
 //  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 //  public barChartType:string = 'bar';
 //  public barChartLegend:boolean = true;

 //  public barChartData:any[] = [
 //    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
 //    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
 //  ];

 //  // events
 //  public chartClicked(e:any):void {
 //    console.log(e);
 //  }

 //  public chartHovered(e:any):void {
 //    console.log(e);
 //  }

 //  public randomize():void {
 //    // Only Change 3 values
 //    let data = [
 //      Math.round(Math.random() * 100),
 //      59,
 //      80,
 //      (Math.random() * 100),
 //      56,
 //      (Math.random() * 100),
 //      40];
 //    let clone = JSON.parse(JSON.stringify(this.barChartData));
 //    clone[0].data = data;
 //    this.barChartData = clone;
 //    /**
 //     * (My guess), for Angular to recognize the change in the dataset
 //     * it has to change the dataset variable directly,
 //     * so one way around it, is to clone the data, change it and then
 //     * assign it;
 //     */
 //  }

  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
