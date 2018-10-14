import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.scss']
})
export class EditInstituteComponent implements OnInit {

	addInstituteForm : FormGroup;
	success: boolean = false;
	index;
	form;
	data;

  constructor( private route: ActivatedRoute, private storage: StorageService, private formBuilderObj: FormBuilder ) { }

  ngOnInit() {

  	this.index = this.route.snapshot.paramMap.get('index');
  	this.data = this.storage.getData();
  	this.form = this.data[this.index];

  	const address = this.formBuilderObj.group({
  		line1:[this.form.address.line1, [
  			Validators.required
  		]],
  		line2:this.form.address.line2,
  		city: [this.form.address.city,[
  			Validators.required,
  			Validators.pattern('^[A-Za-z -]+$')
  		]],
  		state: [this.form.address.state,[
        Validators.required,
        Validators.pattern('^[A-Za-z -]+$')
      ]],
  		locality: this.form.address.locality,
  		pincode: [this.form.address.pincode,[
  			Validators.required,
  			Validators.pattern("^[0-9]{6,6}$")
  		]]
  	});

  	this.addInstituteForm = this.formBuilderObj.group({

  		instituteName: [this.form.instituteName, [
  			Validators.required
  		]],
  		address: address,
  		contacts: this.formBuilderObj.array([])
  	});

  	this.defaultDetail();

  }

  get contactForm(){
  	return this.addInstituteForm.get('contacts') as FormArray;
  }

  addContact(){

  	const contactDetail = <FormArray>this.addInstituteForm.controls['contacts'];
  	contactDetail.push(this.getContact());

  }

  getContact(){

  	return this.formBuilderObj.group({
  		name:['',[
  			Validators.required
  		]],
  		contact:['',[
  			Validators.required,
  			Validators.pattern('^[0-9]*$')
  		]]
  	});

  }

  deleteContact(i: number){
  	this.contactForm.removeAt(i);
  }

  get checkInstituteName(){
  	return this.addInstituteForm.get('instituteName');
  }

  get checkAddressLine(){
  	return this.addInstituteForm.get('address.line1');
  }

  get checkAddressCity(){
  	return this.addInstituteForm.get('address.city');
  }

  get checkAddressState(){
    return this.addInstituteForm.get('address.state');
  }

  get checkAddressPinCode(){
  	return this.addInstituteForm.get('address.pincode');
  }

  get CheckName(){
  	return this.addInstituteForm.get('contacts.name');
  }

  get editContact(){
  	return this.addInstituteForm.get('contacts') as FormArray;
  }

  defaultDetail(){
  	for (let x of this.form.contacts){
  		const detail = this.formBuilderObj.group({
  			name:[x.name,[
  			Validators.required
  		]],
  		contact:[x.contact,[
  			Validators.required,
  			Validators.pattern('^[0-9]*$')
  		]]
  	});
  	this.editContact.push(detail);
  	}
  }

  async submitHandler(){
  	await this.data.splice(this.index,1);
  	await this.storage.setData(this.addInstituteForm.value);
    console.log(JSON.stringify(this.addInstituteForm.value));
  	this.success = true;
  }

}
