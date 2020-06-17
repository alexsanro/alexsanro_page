import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle("@lexsanro / Index");
  }

  ngOnInit(): void {
  }

}
