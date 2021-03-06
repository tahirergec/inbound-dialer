import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatTableModule, MatInputModule, MatButtonModule, MatPaginator, MatSnackBar} from '@angular/material';
import {MatSortModule, MatSort} from '@angular/material/sort';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { Campaign, CampaignForm } from '../model/campaign.model';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listcampaign',
  templateUrl: './listcampaign.component.html',
  styleUrls: ['./listcampaign.component.css']
})

export class ListcampaignComponent extends AppComponentClass<Campaign, CampaignForm>
{
  constructor(protected data: CampaignService, protected router: Router,
    protected fb: FormBuilder, protected msg: MatSnackBar) 
  { 
    super(data, router, fb, msg);
    this.displayedColumns=['name', 'provider', 'filename', 'channel', 'ppm', 'ringtime', 'answertime', 'status', 'actions'];
    //this.editnav="/main/campaign/editcampaign";
   // this.deletenav="/main/campaign/listcampaign";
   this.nav="/main/campaign/";
  }
}