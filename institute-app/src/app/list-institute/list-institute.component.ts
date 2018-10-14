import { Component, OnInit, Inject } from '@angular/core';
import { StorageService } from '../storage.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  index;
  name;
}

@Component({
  selector: 'app-list-institute',
  templateUrl: './list-institute.component.html',
  styleUrls: ['./list-institute.component.scss']
})
export class ListInstituteComponent implements OnInit {

  data;
  index;
  name;

  constructor( private storage: StorageService, private dialog: MatDialog ) { }

  ngOnInit() {

  	this.data = this.storage.getData();

  }

/*  deleteInstitute(){
  	this.data.splice(this.index,1);
  }*/

  openDialog(i: number): void {
    this.name = this.data[i].instituteName;
    this.index = i;
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '400px',
      data:{name: this.name, index: this.index}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result !== undefined){
        this.data.splice(this.index,1);
      }

    });
  }

}

@Component({
  selector: 'popup',
  templateUrl: './popup.html',
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
