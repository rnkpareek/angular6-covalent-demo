import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }
  routes: Object[] = [{
      icon: 'home',
      route: '/Register',
      title: 'Home1',
    }, {
      icon: 'library_books',
      route: 'Tables',
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

}
