//KeyStore_app_service typescript Student_ID_00013712
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { KeyStoreAppItems } from './KeyStoreAppItems';

@Injectable({
  providedIn: 'root'
})
export class KeyStoreAppService {

  httpClient=inject(HttpClient);
  constructor(){}

  getAllKeyStoreItems() {
    return this.httpClient.get<KeyStoreAppItems[]>("https://localhost:7283/api/KeyStores/Getkeystores");
  };

  getByID(id: number){
    return this.httpClient.get<KeyStoreAppItems>("https://localhost:7283/api/KeyStores/GetKeyStore/"+id);
  };
  
  editKeyStoreitems(item: KeyStoreAppItems) {
    const url = `https://localhost:7283/api/KeyStores/PutKeyStore/${item.id}`; //it is used for updating an existing resource on the server
    //by sending HTTP PUT request, so that id is replaced
    return this.httpClient.put(url, item);
  }
  

  deleteKeyStoreitems(id: number) {
    return this.httpClient.delete("https://localhost:7283/api/KeyStores/DeleteKeyStore/"+id);
  };

  createKeyStoreitems(item: KeyStoreAppItems){
    return this.httpClient.post<KeyStoreAppItems>("https://localhost:7283/api/KeyStores/PostKeyStore", item);
  
  };
  getAllUsers(){
    return this.httpClient.get("https://localhost:7283/api/UserStores/GetUsers")
  }
}
 

