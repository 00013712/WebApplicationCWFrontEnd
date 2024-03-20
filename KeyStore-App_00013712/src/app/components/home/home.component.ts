//Home typescript Student_ID_ 00013712
import { Component, Input, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { KeyStoreAppItems } from '../../KeyStoreAppItems';
import { MatButtonModule } from '@angular/material/button';
import { KeyStoreAppService } from '../../key-store-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router= inject(Router)
  KeyStoreService=inject(KeyStoreAppService)
  itemsList: KeyStoreAppItems[]=[]
  ngOnInit(){
    this.KeyStoreService.getAllKeyStoreItems().subscribe((result)=>{
      this.itemsList=result
    }); 
  }
  displayedColumns: string[] = ['ID', 'Login', 'Password', 'WebPlatform', 'Name', 'Actions'];

  DeleteClicked(itemid: number) {     
    console.log(itemid, "delete");
    this.router.navigateByUrl("/delete/"+itemid);
  };
  DetailsClicked(itemid: number) {
    console.log(itemid, "details");
    this.router.navigateByUrl("/details/"+itemid);
  };
  EditClicked(itemid: number) {
    console.log(itemid, "edit");
    this.router.navigateByUrl("/edit/"+itemid);
  }
}

//Home typescript Student_ID_ 00013712