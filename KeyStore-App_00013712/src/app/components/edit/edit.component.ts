//Edit typescript Student_ID_ 00013712
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { KeyStoreAppItems } from '../../KeyStoreAppItems';
import { KeyStoreAppService } from '../../key-store-app.service';
import { ActivatedRoute, Router} from '@angular/router';

function findindexByID(jsonnArray: any[], indexToFind: number): number {
  return jsonnArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  constructor(
    private keyStoreService: KeyStoreAppService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  editKey: KeyStoreAppItems = {
    id: 0,
    login: "",
    password: "",
    webPlatform: "",
    userId: 0,
    userStore: {
      id: 0,
      name: ""
    }
  };
  userstoreObject: any;
  selected: any;
  cID: number = 0;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];
      this.keyStoreService.getByID(id).subscribe(result => {
        this.editKey = result;
        this.selected = this.editKey.userId;
        this.cdr.detectChanges(); // Manually trigger change detection
      });
    });

    this.keyStoreService.getAllUsers().subscribe(result => {
      this.userstoreObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home");
  }

  edit() {
    this.editKey.userId = this.cID;
    this.editKey.userStore = this.userstoreObject[findindexByID(this.userstoreObject, this.cID)];
    this.keyStoreService.editKeyStoreitems(this.editKey).subscribe(res => {
      alert("Changes have been updated");
      this.router.navigateByUrl("home");
    });
  }
}

//Edit typescript Student_ID_ 00013712
