//Create typescript Student_ID_ 00013712
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { KeyStoreAppService } from '../../key-store-app.service';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, MatInputModule, MatButtonModule, MatChipsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent  implements OnInit{
  KeyStoreService = inject(KeyStoreAppService);

  router = inject(Router);

  cate : any ;

  cID: number = 0;

  createKey: any = {
    login:"",
    password:"",
    webPlatform:"",
    userId:0
  }

  ngOnInit(){
    this.KeyStoreService.getAllUsers().subscribe((result) =>{
      this.cate = result
    });
  };

  createKeyStoreitems(){
    this.createKey.userId=this.cID
    this.KeyStoreService.createKeyStoreitems(this.createKey).subscribe(result => {
      alert("Item has been created")
      this.router.navigateByUrl("home")
    });
  };
}

//Create typescript Student_ID_ 00013712

