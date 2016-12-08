import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './appComponent/app.component';
import { SearchComponent } from './searchComponent/search.component';
import { ViewComponent } from './viewComponent/view.component';

import { AddComponent } from './addComponent/add.component';
const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'search', component: SearchComponent },
    { path: 'view/:id', component: ViewComponent },
    { path: 'add', component: AddComponent },
    { path: '*', component: SearchComponent },
    { path: 'edit/:id', component: AddComponent }

];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
