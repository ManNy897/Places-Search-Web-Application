import { Component} from '@angular/core';
import { DetailsService } from './details.service';
import { RequestService } from './request.service';
import {RatingModule} from "ngx-rating";
import { trigger, transition, animate, state, style, query, stagger } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'details-reviews',
  templateUrl: './details-reviews.component.html',
    animations: [
        trigger('fadeInOutTranslate', [
            transition('* => *', [
                query(':enter', style({ opacity: 0 }), { optional: true }),
                query(':enter', stagger('100ms', [
                    animate('1s', style({ opacity: 1 }))
                ]), { optional: true })
            ])
        ])
    ],
})

//  animations: [
//    trigger('fadeInOutTranslate', [
//      state('Google Reviews', style({ opacity: 1 })),
//      state('Yelp Reviews', style({ opacity: 0 })),
//      transition(':enter', [
//        style({opacity:0}),
//        animate(300, style({opacity:1}))
//      ]),
//      transition(':leave', [
//        style({transform: 'translate(0)'}),
//        animate(300, style({opacity:0}))
//      ])
//    ])
//  ]
//})



export class DetailsReviewsComponent {
    googleReviews: any = {};
    yelpReviews: any = {};
    shownReviews: any = [];
    selectedReviews = "Google Reviews";
    selectedOrder = "Default Order";
    state='show';
    
    constructor(
    private ds: DetailsService,
    private locationRequest: RequestService) {}
    
    
    ngOnInit(){
        console.log('started reviews component');
        this.googleReviews = this.ds.details['reviews'];
        //check if date has been fixed
        if($.isNumeric(this.googleReviews[0].time)){
            this.setTime();
        }
        this.getGoogleReviews();
        this.requestYelp();
        console.log(this.googleReviews);
    }
    
    getIfError(){
        if(this.shownReviews !== undefined){
            return Object.keys(this.shownReviews).length == 0;
        }
        return false;
    }
    
    
    setTime(){
        for(let review of this.googleReviews){
            let utcSec = review['time'];
            let d = new Date(0);
            console.log('time');
            console.log(utcSec);
            d.setUTCSeconds(utcSec);
            review['time'] = d.toISOString().replace('T', ' ').split('.')[0];
        }
        
    }
    
    sortBy(value){
        switch(value) {
            case "Highest Rating":
                this.selectedOrder = "Highest Rating";
                this.shownReviews.sort((a,b)=>{
                    return b.rating - a.rating;
                });
                break;
            case "Lowest Rating":
                this.selectedOrder = "Lowest Rating";
                this.shownReviews.sort((a,b)=>{
                    return a.rating - b.rating;
                });
                break;
            case "Most Recent":
                this.selectedOrder = "Most Recent";
                this.shownReviews.sort((a,b)=>{
                    return Date.parse(b.time) - Date.parse(a.time);
                });
                break;
            case "Least Recent":
                this.selectedOrder = "Least Recent";
                this.shownReviews.sort((a,b)=>{
                    return Date.parse(a.time) - Date.parse(b.time);
                });
                break;
            case "Default Order":
                if(this.selectedReviews === "Google Reviews"){
                    this.shownReviews = this.googleReviews.slice(0);
                }else{
                    this.shownReviews = this.yelpReviews.slice(0);
                }
                this.selectedOrder = "Default Order";
                break;
        }
    }
    
    setStars(rating){
            var text = "<i class='fa fa-star' aria-hidden='true' style='color: gold;'></i>".repeat(Math.round(rating));
//            if (this.info.rating % 1 > 0){
//                text = text + '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>';
//            }
            return text;
        
    }
    
    requestYelp(){
        //this.locationRequest.getRequest("http://localhost:3000/api", this.formatYelpRequest())
        this.locationRequest.getRequest("/api", this.formatYelpRequest())
            .subscribe(data => {
            console.log(data);
            this.yelpReviews = data;
            //this.startPage =0;
            //this.result = data["hi"];
            //the params must be different in order to reload page so i keep counter
        });
    }
    
    formatYelpRequest(){
        let name = this.ds.details['name'];
        let address1 = this.ds.details['adr_address'].match('<span class="street-address">(.*?)</span>')[1];
        let city = this.ds.details['adr_address'].match('<span class="locality">(.*?)</span>')[1];
        let state = this.ds.details['adr_address'].match('<span class="region">(.*?)</span>')[1];
        let postal = this.ds.details['adr_address'].match('<span class="postal-code">(.*?)</span>')[1];
        let address2 = city + ", " + state + ", " + postal;
        //let city = address[1];
        //let state = address[2].split(' ')[0];
        let country = 'US';
        let requestParams = {name: name, city: city, state: state, country: 'US', latitude: this.ds.details['geometry']['location'].lat(), longitude: this.ds.details['geometry']['location'].lng(), address1: address1, address2: address2};
        return requestParams;
    }
    
//    setTimeout(function(){
//        console.log('after');
//    },00);

    getGoogleReviews(){
        this.selectedReviews = "Google Reviews";
        if(Object.keys(this.googleReviews).length == 0){
            this.shownReviews = [];
        }
        else{
            this.shownReviews = this.googleReviews.slice(0);
        }
    }
    
    getYelpReviews(){
        this.selectedReviews = "Yelp Reviews";
        console.log('switching to yelp')
        console.log(this.yelpReviews);
        console.log()
        //equals {}
        if(Object.keys(this.yelpReviews).length == 0){
            this.shownReviews = [];
        }
        else{
            this.shownReviews = this.yelpReviews.slice(0);
        }
    }
}