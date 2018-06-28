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
  ];

  handicap_nature=[
    {
      value:'Temporary',viewValue:'Temporary'
    },
    {
      value:'Permanent',viewValue:'Permanent'
    }
  ];
  conc_types=[
    {
      value:'Handicap',viewValue:'HANDICAP'
    },
    {
      value:'Blind',viewValue:'BLIND'
    },
    {
      value:'Mental',viewValue:'MENTAL'
    },
    {
      value:'Deaf&Dumb',viewValue:'DEAF & DUMB'
    }
  ];
  zoneList=[
    {
      value:'INDIAN RAILWAYS', viewValue:'INDIAN RAILWAYS'
    },
    {value:'KONKAN RAILWAY', viewValue:'KONKAN RAILWAY'},
    {value:'CENTRAL RAILWAY',viewValue:'CENTRAL RAILWAY'},
    {value:'EASTERN RAILWAY',viewValue:'EASTERN RAILWAY'},
    {value:'NORTHERN RAILWAY',viewValue:'NORTHERN RAILWAY'},
    {value:'NORTH EAST RAILWAY',viewValue:'NORTH EAST RAILWAY'},
    {value:'NORTH FRONT RAILWAY',viewValue:'NORTH FRONT RAILWAY'},
    {value:'SOUTHERN RAILWAY',viewValue:'SOUTHERN RAILWAY'},
    {value:'SOUTH EASTERN RAILWAY',viewValue:'SOUTH EASTERN RAILWAY'},
    {value:'WESTERN RAILWAY',viewValue:'WESTERN RAILWAY'},
    {value:'SOUTH CENTRAL RAILWAY',viewValue:'SOUTH CENTRAL RAILWAY'},
    {value:'EAST CENTRAL RAILWAY',viewValue:'EAST CENTRAL RAILWAY'},
    {value:'NORTH WESTERN RAILWAY',viewValue:'NORTH WESTERN RAILWAY'},
    {value:'EAST COAST RAILWAY',viewValue:'EAST COAST RAILWAY'},
    {value:'NORTH CENTRAL RAILWAY',viewValue:'NORTH CENTRAL RAILWAY'},
    {value:'SOUTH EAST CENTRAL RAILWAY',viewValue:'SOUTH EAST CENTRAL RAILWAY'},
    {value:'SOUTH WEST RAILWAY',viewValue:'SOUTH WEST RAILWAY'},
    {value:'WEST CENTRAL RAILWAY',viewValue:'WEST CENTRAL RAILWAY'}
    ]

}
