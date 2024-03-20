//Details typescript Student_ID_ 00013712
import { Component, OnInit, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { KeyStoreAppItems } from '../../KeyStoreAppItems';
import { KeyStoreAppService } from '../../key-store-app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent{
  detailsKeyStore: KeyStoreAppItems = {
    id:0,
    login:"",
    password:"",
    webPlatform:"",
    userId:0,
    userStore: {
      id:0,
      name:""
    }
  };

  keyStoreService = inject(KeyStoreAppService)
  activatedRoute = inject(ActivatedRoute)
  ngOnInit() {
    this.keyStoreService.getByID(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem) => {
      this.detailsKeyStore = resultedItem;
    });
  }
}

//Details typescript Student_ID_ 00013712