import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conc-card',
  templateUrl: './conc-card.component.html',
  styleUrls: ['./conc-card.component.css']
})
export class ConcCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  genders = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  nationalities=[
    {
      value:'Indian',viewValue:'Indian'
    },
    {
      value:'Foreigner',viewValue:'Foreigner'
    }
  ];

  cardtypes=[
    {
      value:'Journalist',viewValue:'Journalist'
    },
    {
      value:'Handicap',viewValue:'Handicap'
    }
  ]

   
  

}
