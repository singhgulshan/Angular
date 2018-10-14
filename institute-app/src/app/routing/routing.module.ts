import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstituteComponent } from '../add-institute/add-institute.component';
import { ListInstituteComponent } from '../list-institute/list-institute.component';
import { ViewInstituteComponent } from '../view-institute/view-institute.component';
import { EditInstituteComponent } from '../edit-institute/edit-institute.component';
import { HomeComponent } from '../home/home.component'


const routes:Routes = [
		{
			path:'addinstitute',
			component: AddInstituteComponent
		},
		{
			path: 'listinstitute',
			component: ListInstituteComponent
		},
		{
			path: 'viewinstitute/:index',
			component: ViewInstituteComponent
		},
		{
			path: 'editinstitute/:index',
			component: EditInstituteComponent
		},
		{
			path:"",
			component: HomeComponent
		},
		{
			path:"home",
			component: HomeComponent
		}
	];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutingModule { }
