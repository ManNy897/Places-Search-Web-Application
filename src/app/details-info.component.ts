import { Component} from '@angular/core';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';
import {RatingModule} from "ngx-rating";
import * as $ from 'jquery';

@Component({
  selector: 'details-info',
  templateUrl: './details-info.component.html'  
})


export class DetailsInfoComponent {
    info: any = {};;
    
    constructor( private ds: DetailsService) {}
    
    ngOnInit() {
        console.log('details info initiated');
//    this.subscription = this.ds.infoEmit
//      .subscribe(newInfo => {
//        this.info=newInfo;
//        console.log('receiving new info');
//        console.log(this.info);
//    });
//        this.subscription = this.route.params.subscribe(params => {
//            console.log("printing new info");
//            console.log(params);
//            //this.results = JSON.parse(params['r']);
//            //this.currentPage = params['pageNum'];
//            this.info = params;
//        });
        this.info['address'] = this.ds.details['formatted_address'];
        this.info['phone'] = this.ds.details['formatted_phone_number'];
        this.info['price_level'] = '$'.repeat(this.ds.details['price_level']);
        this.info['rating'] = this.ds.details['rating'];
        this.info['url'] = this.ds.details['url'];
        this.info['website'] = this.ds.details['website'];
        this.info['hours'] = this.formatHours(this.ds.details['opening_hours']);
  }
    
    ngAfterViewInit(){
        //add the rating stars
//        if(this.info.rating){
//            $('#stars').html('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'.repeat(Math.round(this.info.rating)));
//        }
        
        
         if(this.info.rating){
            var text = '<i class="fa fa-star" aria-hidden="true" style="color: gold;"</i>'.repeat(Math.round(this.info.rating));
//            if (this.info.rating % 1 > 0){
//                text = text + '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>';
//            }
             console.log(text)
            $('#stars').html(text);
        }
        
    }
    
    formatHours(hoursObj){
        let day = (new Date().getDay()+6) % 7;
        if(hoursObj['open_now']){
            return {message: 'Open now:' + hoursObj['weekday_text'][day].split(': ', 2)[1], list: hoursObj['weekday_text'], dayName: hoursObj['weekday_text'][day].split(': ', 2)[0]};
        }
        else{
            return {message: 'Closed', list: hoursObj['weekday_text'], dayName: hoursObj['weekday_text'][day].split(': ', 2)[0]};
        }
    }
    

}
    