import { Component, OnInit } from '@angular/core';
import { CityListService } from 'src/app/services/city-list.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  selectedFileFormData: FormData = new FormData();

  constructor(private cityListService: CityListService) { }

  ngOnInit(): void {
  }

  uploadCity (event: any){
    if (event && event.target && event.target.files) {
      this.selectedFileFormData.append('file', event.target.files[0]);
      this.cityListService.uploadCity(this.selectedFileFormData).subscribe({ next: (response) => {
      },
      error: (e) => {
        
      }});
    }
  }

}
