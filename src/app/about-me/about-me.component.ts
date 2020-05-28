import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AboutMeComponent implements OnInit {

  constructor() { }
  displayContactDiv: boolean = true;

  ngOnInit(): void {
    this.displayContact(window.innerWidth) 
  }
  onResize(event){
    var windowWidth = event.target.innerWidth;
    this.displayContact(windowWidth);
  }

  displayContact(size: Number){
    if(size < 992){
      this.displayContactDiv = false;
    }else{
      this.displayContactDiv = true;
    }  
  }

  openCurriculum(){
    window.open('../../assets/documentos/alejandro_dos_santos_rojo_cv.pdf', '_blank');
  }

}
