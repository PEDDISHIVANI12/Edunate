import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  id: any;
  name: any;
  description:any;
  seats:any;
  errorMessage: any;
  topic: any;
  location: any;
  from_date: any;
  to_date: any;
  time: any;
  
  

  constructor(private router:Router,private newService: CommonserviceService, ) { }
  Repdata;
  
  valbutton = 'Save';
  data:any;
  ngOnInit() {
    this.newService.GetUser().subscribe(data => {this.Repdata = data;})
  }
  

  onSave(user) {
    user.mode = this.valbutton;
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();
        this.router.navigate(['searchcourse']);
      }, error => this.errorMessage = error)
   
  }
}  