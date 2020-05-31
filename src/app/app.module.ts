import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IndexModule } from './index/index.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeModule } from './about-me/about-me.module';
import { ResumenComponent } from './resumen/resumen.component';
import { ResumenModule } from './resumen/resumen.module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsModule } from './projects/projects.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutMeComponent,
    ResumenComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    AboutMeModule,
    ResumenModule,
    ProjectsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
