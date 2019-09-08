import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit {
  

  public images;
  public page_number = 1
  constructor(private http:HttpClient) {
    
   }

  ngOnInit() {
    this.getImages()
  }


  public getImages(){
      // url:String, page:Number
    this.http.get("https://picsum.photos/v2/list?page="+this.page_number+"&limit=12").subscribe(res=>{
      // console.log(res);
      this.images = res;
      console.log(this.images)

      
    })
    
  }

  public next_page(){
    this.page_number++;
    console.log("Hakuna matata")
    this.getImages()
  }
  public last_page(){
    if(this.page_number>1){
      this.page_number--;
    }
    this.getImages()
  }
}
