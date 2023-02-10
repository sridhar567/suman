import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public leftNavOptions: Array<{title: string, isActive: boolean, icon: string, navigateTo: string}> = [ { title: 'Home', isActive: true, icon:'home', navigateTo:'home'},{ title: 'Users', isActive: false, icon:'people', navigateTo:'users'}, { title: 'Blogs', isActive: false, icon:'book', navigateTo:'blog'} ]
  
  public userData: {completed: boolean, id: number, title: string, userId: number} = {completed: false, id:0, title: '', userId: 0};

  private activeIndex: number = 0;

  constructor(private appService: AppServiceService, private route: Router) {}

  ngOnInit(): void {
    this.route.navigate(['/'+this.leftNavOptions[0].navigateTo]);
    this.appService.getUserData().subscribe((res: {completed: boolean, id: number, title: string, userId: number}) => {
      this.userData = res;
    })
  }

  public navigateTo(ind: number): void {
    this.leftNavOptions[this.activeIndex].isActive = false;
    this.activeIndex = ind;
    this.leftNavOptions[this.activeIndex].isActive = true;
    this.route.navigate(['/'+this.leftNavOptions[ind].navigateTo]);
  }
}
