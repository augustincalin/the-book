import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './appComponent/app.component';
import { SearchComponent } from './searchComponent/search.component';
import { ViewComponent } from './viewComponent/view.component';
import { AddComponent } from './addComponent/add.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleService } from './services/article.service';



import './assets/styles/material.min.css';
import './assets/styles/styles.css';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule, MdlModule],
    declarations: [AppComponent, SearchComponent, ViewComponent, AddComponent],
    providers: [ArticleService],
    bootstrap:[AppComponent]
})
export class AppModule{}