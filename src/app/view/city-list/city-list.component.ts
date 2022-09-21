import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { USER_ROLE } from 'src/app/constant/user-role';
import { City } from 'src/app/data/city';
import { CityListRequest } from 'src/app/data/city-list-request';
import { UserSession } from 'src/app/data/user-session';
import { CityListService } from 'src/app/services/city-list.service';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { CityUpdateComponent } from '../city-update/city-update.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  sessionUser!: UserSession;
  request: CityListRequest = {
    page: 0,
    size: 0,
    searchText: ''
  };
  cityList: City[] = [];
  searchTimeOut: any;
  loading = false;
  admin = false;

  searchText : string = "";
  page = 0;
  size = 20;
  totalElements = 0;

  constructor(private sessionService: SessionService, private cityListService: CityListService, private userService: UserService,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getUser();
    this.getCityList();
  }
  
  getCityList() {
    this.request.page = this.page;
    this.request.size = this.size;
    this.request.searchText = this.searchText;
    this.loading=true;
    this.cityListService.getAllCities(this.request).subscribe(data => {
        if(data && data.content){
          this.cityList = data.content;
          this.totalElements = data.totalElementCount;
        } else{
          this.cityList =[];
        }
      this.loading=false;
    });
  }

  getUser(){
    this.userService.getUser().subscribe({ next: (response) => {
          
          if (response ==0 || response == null) {
           // this.userService.loginPage();
          }
          else {
            this.sessionService.setUserSession(response);
            this.sessionUser = this.sessionService.getUserSession();
            if(this.sessionUser.roles.indexOf(USER_ROLE.ADMIN) > -1){
              this.admin = true;
            }
            console.log("Admin :" + this.admin);
            
          }
        },
        error: (e) => {
          this.userService.loginPage();
        }});
  }

  searchByName (text: string){
    if(text && text.length > 1){
      window.clearTimeout(this.searchTimeOut);
      this.searchTimeOut = window.setTimeout(() => {
        this.searchText = text;
        this.page = 0;
        this.getCityList();
      }, 1000);
    }else if(text.length == 0) {
      this.searchText ="";
      this.getCityList();
    }
  }

  changePage (page: any){
    if(page){
      this.page = page.pageIndex;
      this.size = page.pageSize;
      this.getCityList();
    }
  }

  editCity (city: City){
    if(city){
      const dialogRef = this.dialog.open(CityUpdateComponent,{ data: {city: city, parent: this}});

      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
  }

  userLogout() {
    this.userService.logout();
  }

}
