import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  constructor() { }


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dummyData=[];

  selectedItem = {};
  populateData=[];
  isHidden = false;
  ngOnInit() {
    this.dummyData = [
       { name:"Mumbai",postal:144256,street:"marine",land_mark:"beach"},
       { name:"Bangaluru",postal:211456,street:"lokandwala",land_mark:"SK School"},
       { name:"Pune",postal:411026,street:"chinchwad",land_mark:"miney market"},
       { name:"New Delhi",postal:955876,street:"Gk road",land_mark:"Sp hospital"}
    ]
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.isHidden =true;
    this.selectedItem =this.dummyData.filter(data => {
                  return  data.name == item.item_text;
    })
    this.populateData.push(this.selectedItem[0]);
  }
  onSelectAll(items: any) {
    this.isHidden =true;
    this.populateData = this.dummyData;
  }

  onDeSelectAll(item: any){
    this.isHidden =false;
    this.populateData = [];
  }

  onItemDeSelect(item: any){
    this.populateData = this.populateData.filter(data => {
      return  data.name !== item.item_text;
})
  }

  onClear(){
    this.isHidden =false;
    this.selectedItems = [];
  }
}
