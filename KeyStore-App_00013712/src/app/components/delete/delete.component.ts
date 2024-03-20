//Delete typescript Student_ID_ 00013712
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { KeyStoreAppItems } from '../../KeyStoreAppItems';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyStoreAppService } from '../../key-store-app.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteKeyStore: KeyStoreAppItems={
    id:0,
    login:"",
    password:"",
    webPlatform:"",
    userId:0,
    userStore:{
      id:0,
      name:""
    }
  }

  service = inject(KeyStoreAppService)
  activateRote= inject (ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.service.getByID(this.activateRote.snapshot.params["id"]).subscribe((result)=>{
      this.deleteKeyStore = result
    })
  }

  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }

  onDeleteButtonClick(id:number){
    this.service.deleteKeyStoreitems(id).subscribe(r=>{
      alert("Deleted item with ID: " +id)
      this.router.navigateByUrl("home")
    })
  }
}

//Delete typescript Student_ID_ 00013712
