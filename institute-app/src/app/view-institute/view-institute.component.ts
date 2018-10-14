import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service'

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.scss']
})
export class ViewInstituteComponent implements OnInit {

	index ;
	institute;
	//institute = {"instituteName":"Central University of Rajasthan","address":{"line1":"Bandarsindri","line2":"Kishangarh","city":"Ajmer","state":"Rajasthan","locality":"Petrol Pump","pincode":"567898"},"contacts":[{"name":"Gulshan","contact":"9806306689"},{"name":"Kumar","contact":"7654987653"},{"name":"Singh","contact":"3456745657"}]}

  constructor( private route: ActivatedRoute, private storage: StorageService ) { }

  ngOnInit() {

  	this.index = this.route.snapshot.paramMap.get('index');
  	this.institute = this.storage.getData();
  	this.institute = this.institute[this.index];

  }

}

