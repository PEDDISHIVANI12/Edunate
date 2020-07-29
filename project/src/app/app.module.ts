import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { TutorComponent } from './tutor/tutor.component';
import { SeatsComponent } from './seats/seats.component';
import { SeatsPipe } from './seats.pipe';

const appRoot : Routes = [
  
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent },
  {path:'tutor',component:TutorComponent},
  {path:'news',component:NewsComponent },
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'searchcourse',component:SearchCourseComponent},
  {path:'showcard',component:SeatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NewsComponent,
    AboutusComponent,
    SearchCourseComponent,
    TutorComponent,
    SeatsComponent,
    SeatsPipe,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
