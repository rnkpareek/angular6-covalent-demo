import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentChipsModule } from '@covalent/core/chips';
import { CovalentLoadingModule } from '@covalent/core/loading';
//import { FormsModule } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';*/
import { AppRoutingModule } from './app.routes';
import {Router, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
//import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/home/home.component';
//import { TdDialogService } from '@covalent/core/dialogs';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentHighlightModule } from '@covalent/highlight';
import { TableComponent } from './components/home/table/table.component';
import { RegComponent } from './components/home/reg/reg.component';
import { NavbarComponent } from './components/home/core/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
//import { CovalentDynamicFormsModule } from '../platform/dynamic-forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RegiComponent } from './components/regi/regi.component';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//service
import{DataService} from './service/service-data';




import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,

  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,

} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    RegComponent,
    NavbarComponent,
    LoginComponent,
    RegiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,


  CovalentChipsModule,
  CovalentLoadingModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  FormsModule,
  ReactiveFormsModule,

  ChartsModule,
  HttpModule,


    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentExpansionPanelModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentVirtualScrollModule,
    CovalentDynamicFormsModule,
    CovalentDialogsModule,

    AppRoutingModule
  ],
  /*providers: [TdDialogService],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
