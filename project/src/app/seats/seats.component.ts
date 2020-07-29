import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  [x: string]: any;
  public heroes: any;
  public name1 : any;
  public seats : any;
  public from_date : any;
  public to_date : any;
  public id:any;
  public noOfseats:any;
  public description:any;
  public user:any;
  public topic:any;
  constructor(private newService: CommonserviceService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.heroes = this.newService.GetSpecificData();
    this.id = this.heroes._id;
    this.name = this.heroes.name;
    this.seats = this.heroes.seats;
    this.description = this.heroes.description;
    this.topic = this.heroes.topic;
    this.from_date = this.heroes.from_date;
    this.to_date = this.heroes.to_date;
    console.log(this.heroes.seats);

  }
  seatsremained(noOfseats:any){
    this.heroes = this.newService.GetSpecificData();
    this.seats =  this.heroes.seats - noOfseats;
    this.user = {_id:this.heroes._id,
                      name: this.heroes.name,
                      topic:this.heroes.topic,
                      location:this.heroes.location,
                      from_date:this.heroes.from_date,
                      to_date:this.heroes.to_date, 
                      time:this.heroes.time,
                      description:this.heroes.description,
                      seats:this.seats,
                    };
    console.log(this.user);
    this.newService.saveUser(this.user).subscribe(data => {alert(data.data);
            }, error => this.errorMessage = error)
     
    }
       
      }
  
  

