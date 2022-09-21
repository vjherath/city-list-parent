import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { City } from 'src/app/data/city';
import { CityListService } from 'src/app/services/city-list.service';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css']
})
export class CityUpdateComponent implements OnInit {

  city: City = {
    id: 0,
    name: '',
    photoUrl: ''
  };

  id!: number;
  name!: string;
  photoUrl!: SafeUrl;

  imageFile: File | undefined;
  selectedFileFormData: FormData = new FormData();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {city: City, parent: any}, private cityListService: CityListService) { }

  ngOnInit(): void {
    if(this.data){
      this.id = this.data.city.id;
      this.name = this.data.city.name;
      this.photoUrl = this.data.city.photoUrl;
    }
  }

  changeImage (event: any){
    if (event && event.target && event.target.files) {
      this.imageFile =  event.target.files[0];
      if (this.imageFile) {
        this.photoUrl = URL.createObjectURL(this.imageFile);
        this.selectedFileFormData.append('image', this.imageFile);
        this.selectedFileFormData.append('imageName', this.imageFile.name);
      }
    }
  }

  updateCity (){
    this.city.id = this.id;
    this.selectedFileFormData.append('name', this.name);
    
    this.cityListService.updateCity(this.city,this.selectedFileFormData).subscribe({ next: (response) => {
      this.data.parent.getCityList()
    },
    error: (e) => {
      
    }});
  }

}
