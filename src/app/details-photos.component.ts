import { Component} from '@angular/core';
import { DetailsService } from './details.service';
import * as $ from 'jquery';

@Component({
  selector: 'details-photos',
  templateUrl: './details-photos.component.html'  
})


export class DetailsPhotosComponent {

    photosUrls: any;
    numsArray = {};
    constructor( private ds: DetailsService) {}
    
    ngOnInit() {
        if(this.ds.details.photos){
            this.photosUrls = this.ds.details.photos.map((value, i, arr)=>{
                return {full: value.getUrl({'maxWidth': value.width}), small: value.getUrl({'maxWidth': 500})};
            });
            this.numsArray = {0: this.buildNums(0), 1: this.buildNums(1), 2: this.buildNums(2), 3: this.buildNums(3)};
            this.addImages();
        }
        console.log('in photos component printing photos array');
        console.log(this.photosUrls);
        console.log(this.numsArray);
    }
    
    
    buildNums(index){
        let array = [];
        if(this.photosUrls){
            for (let i = 0; i < this.photosUrls.length; i++){
                if(i % 4 == index) array.push(i);
            }
        }
        console.log('printing array');
        console.log(array);
        return array;
    }
    
    addImages(){
        for(let i = 0; i <= 3; i++){
            console.log(this.numsArray[i]);
            for(let j of this.numsArray[i]){
                console.log(j);
                console.log(this.photosUrls[j]);
                $('#col'+i).append("<a target='_blank' href="+this.photosUrls[j].full+" ><img src ="+ this.photosUrls[j].small +" width='100%' class='img-thumbnail'/></a>");
            }
            
        }
    }
    
}