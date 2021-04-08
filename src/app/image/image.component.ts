import { Component, OnInit } from '@angular/core';  
//import { HttpClient  } from '@angular/common/http';
import { RestAPIService } from '../services/rest-api.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  constructor(private restAPI:RestAPIService) { 
   
  }

  ngOnInit() {
  }



  uploadImage(){
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.restAPI.uploadImage(uploadImageData);
  }

}
