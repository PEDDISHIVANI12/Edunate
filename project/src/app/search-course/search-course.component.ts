import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  public heroes: any;
  public totalData: any;
  

  constructor(private newService: CommonserviceService,private router:Router) { 
  }

  ngOnInit(): void {
    this.newService.GetUser().subscribe((data: any) => {console.log(data); this.heroes = data; });
    
}
AddtoCart(hero:any){
  this.newService.GetData(hero);
  this.router.navigate(['showcard']);

}
update(hero:any){
  this.router.navigate(['home']);
  this.newService.GetData(hero);

}

}

