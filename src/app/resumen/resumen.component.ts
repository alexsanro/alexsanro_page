import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  jsonSkills = [];

  constructor(private http: HttpClient, private titleService: Title){ 
    this.titleService.setTitle("@lexsanro / Resumen");
  }

  ngOnInit(): void {
    this.skills.subscribe(data => {
      data.forEach((element,index) => {
        var skillClass = this.classSkill(element.type);
        data[index].tecnology = skillClass['tecnology'];
        data[index].percentage = skillClass['percentage'];
      });
      this.jsonSkills = data;
    })
  }

  classSkill(type: String): Object{
    var clase: String;
    var tecnology: String;
    var percentage: String;

    switch(type){ 
      case("web"):
        tecnology = "dark"
        percentage = "warning"
        break;
    case("database"):
        tecnology = "primary"
        percentage = "dark"
        break;
    case("others"):
        tecnology = "warning"
        percentage = "dark"

    case("frameworks"):
        tecnology = "error"
        percentage = "success"
        break;
    case("desktop"):
        tecnology = "success"
        percentage = "primary"
        break;
    }

    return {"tecnology":tecnology, "percentage":percentage};
  }

  get skills(): Observable<any> {
    return this.http.get('assets/skills.json');
  }

}
