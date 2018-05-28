import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { DetailsService } from './details.service';
import { DetailsInfoComponent} from './details-info.component';
import * as $ from 'jquery';
import { OnInit } from '@angular/core';



@Component({
  selector: 'place-details',
  templateUrl: './details.component.html'  
})


export class DetailsComponent implements OnInit {
    
    private subscribe: any;
    placeid;
    location;
    map;
    name;
    details;
    website;
    //twitter_string = "https://twitter.com/intent/tweet?text=hello&url=https%3A%2F%2Fexample.com%2F";
    twitter_string = "";
   // private info: DetailsInfoComponent = new DetailsInfoComponent(this.ds);
    
    constructor(
        private route: ActivatedRoute,
        private ds: DetailsService,
        private router: Router
        ) {}
    
    
    routeTo(route){
        this.router.navigate([route]);
    }
    
    getTwitter(){
        return this.twitter_string;
    }

    
    ngOnInit() {
        console.log('details from details component');
        console.log(this.ds.details);
        this.details = this.ds.details;
        this.name = this.details['name'];
        //this.twitter_string = "hello";
        //this.website = "https%3A%2F%2Fexample.com%2F";
        this.twitter_string += "https://twitter.com/intent/tweet?"+ encodeURI("text=Check out " + this.name + " located at " + this.details.formatted_address + " Website:" + "&url=" + this.details.website);
        $('#twitter').attr('href', this.twitter_string);
        //this.website = encodeURI(this.details['website']);
        console.log(this.twitter_string);
        
//        this.subscribe = this.route.params.subscribe(params => {
//            //this.results = JSON.parse(params['r']);
//            //this.currentPage = params['pageNum'];
//            console.log('printing params');
//            console.log(params);
//            this.placeid = params['place_id'];
//            this.location = {lat: +params.lat, lng: +params.lng};
//            this.name = params['name'];
//            //this.loadDetails();
//            console.log('printing details');
//            console.log(this.details);
//        })
    }
    
//    loadDetails(){
//        
//        this.map = new google.maps.Map(document.getElementById('map'), {
//            center: this.location,
//            zoom: 17
//          });
//        var request = {
//            placeId: this.placeid
//        };
//        var service = new google.maps.places.PlacesService(this.map);
//        service.getDetails(request, (place, status)=>{
//            if (status == google.maps.places.PlacesServiceStatus.OK) {
//            this.details = place;
//            //this.ds.update(this.details);
//            console.log('details after returning from google');
//            console.log(this.details);
//            console.log('printing router');
//            console.log(this.router);
//            this.router.navigate(['/details', {name: this.details['name']}]);
//          }
//        });
//
//    }

}

