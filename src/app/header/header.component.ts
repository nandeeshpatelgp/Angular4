import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import { Response} from "@angular/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private dataService: DataStorageService) { }

  fetchData(){
    this.dataService.onFetchData();
  }

  saveData(){
    this.dataService.onSaveData().subscribe(
      (response: Response) => {
        console.log(response.json());
      }
    );
  }

}
