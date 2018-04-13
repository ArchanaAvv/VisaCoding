import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers:[CommonService]
})
export class DropdownComponent implements OnInit {
  countries:any = [];
  show:any = {dropdown:false};
  selected:any = {country:{}};
  constructor(private cs:CommonService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    this.cs.countries().subscribe(
      (response) =>{
        this.countries = [];
        _.each(response, (value, key)=>{
          if(key)
          this.countries.push({short_name:key, long_name:value, flag:_.toLower(key)})
          
        });
        _.remove(this.countries, (item)=>item.flag === 'zw');
        this.selected.country = _.find(this.countries, (item)=> item.short_name === 'US');
      }
    )
  }

  onSelect(country){
    this.selected.country = country;
    this.show.dropdown = false;
  }

}
