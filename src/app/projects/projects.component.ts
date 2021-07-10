import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repos: any = [];
  languages_colors: any = [];
  constructor(private titleService: Title, private http: HttpClient) { 
    this.titleService.setTitle("@lexsanro / Proyectos");
  }

  ngOnInit(): void {
    this.getRepos();
    this.json_language_colors.subscribe(
      (data) => { // Success
        this.languages_colors = data;
      },
      (error) => {
        this.languages_colors = -1;
      }
    );
  }

  getRepos(): any{
    this.http.get("https://api.github.com/users/alexsanro/repos").subscribe(
      (data) => { // Success
        this.repos = data;
      },
      (error) => {
        this.repos = -1;
      }
    );
  }

  get json_language_colors(): any {
    return this.http.get('assets/data/dev_language_colors.json');
  }
}
