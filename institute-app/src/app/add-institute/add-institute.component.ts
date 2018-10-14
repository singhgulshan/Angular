import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.scss']
})
export class AddInstituteComponent implements OnInit {

	addInstituteForm : FormGroup;
	success: boolean = false;
  states;

  constructor( private formBuilderObj: FormBuilder, private storage: StorageService ) { }

  ngOnInit() {

  	const address = this.formBuilderObj.group({
  		line1:['', [
  			Validators.required
  		]],
  		line2:'',
  		city: ['',[
  			Validators.required,
  			Validators.pattern('^[A-Za-z -]+$')
  		]],
  		state: ['',[
        Validators.required,
        Validators.pattern('^[A-Za-z -]+$')
      ]],
  		locality: '',
  		pincode: ['',[
  			Validators.required,
  			Validators.pattern("^[0-9]{6,6}$")
  		]]
  	});

  	this.addInstituteForm = this.formBuilderObj.group({

  		instituteName: ['', [
  			Validators.required
  		]],
  		address: address,
  		contacts: this.formBuilderObj.array([
  				this.getContact()
  			])
  	});

    this.states = this.storage.getState();

	//this.addInstituteForm.valueChanges.subscribe(console.log);

  }

  addNew(){
    this.addInstituteForm.reset();
    this.success = !this.success;
  }

  get contactForm(){
  	return this.addInstituteForm.get('contacts') as FormArray;
  }

  addContact(){

  	const contactDetail = <FormArray>this.addInstituteForm.controls['contacts']
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

  get checkAddressState(){
    return this.addInstituteForm.get('address.state');
  }

  get checkAddressLine(){
  	return this.addInstituteForm.get('address.line1');
  }

  get checkAddressCity(){
  	return this.addInstituteForm.get('address.city');
  }

  get checkAddressPinCode(){
  	return this.addInstituteForm.get('address.pincode');
  }

  get CheckName(){
  	return this.addInstituteForm.get('contacts.name');
  }

  async submitHandler(){
  	await this.storage.setData(this.addInstituteForm.value);
    console.log(JSON.stringify(this.addInstituteForm.value));
  	this.success = true;
  }

}
