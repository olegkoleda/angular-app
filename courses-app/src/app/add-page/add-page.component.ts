import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent {
  public title: string;
  public description: string;
  public date: string;
  public duration: number;

  constructor() { }

  public save() {
    console.log("Saved");    
  }

  public cancel() {
    console.log("Canceled");
  }
}
