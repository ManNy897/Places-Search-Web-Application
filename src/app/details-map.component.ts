import { Component, NgZone} from '@angular/core';
import { DetailsService } from './details.service';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { RequestService } from './request.service';
import * as $ from 'jquery';

@Component({
  selector: 'details-map',
  templateUrl: './details-map.component.html'  
})


export class DetailsMapComponent{
    
    latPlace: number;
    lngPlace: number;
    latMe: number;
    lngMe: number;
    zoom: number = 7;
    dir = undefined;
    panorama;
    streetButton = "http://cs-server.usc.edu:45678/hw/hw8/images/Pegman.png";
    
    constructor(
        private ds: DetailsService,
        private mapsAPILoader: MapsAPILoader,
        private locationRequest: RequestService,
        private ngZone: NgZone,) {}
    
    ngOnInit(){
        this.latPlace = this.ds.details.geometry.location.lat();
        this.lngPlace = this.ds.details.geometry.location.lng();
        this.getLoc();
        
        this.mapsAPILoader.load().then(
            () => {
            let autocomplete = new google.maps.places.Autocomplete(
                <HTMLInputElement>document.getElementById("fromMapInput"), { types:["address"] });
                
            autocomplete.addListener("place_changed", () => {
              this.ngZone.run(() => {
               let place: google.maps.places.PlaceResult = autocomplete.getPlace();
               if(place.geometry === undefined || place.geometry === null ){
                    return;
                }
              });
            });
        });
        
        this.mapsAPILoader.load().then(() => {
            let map = new google.maps.Map(document.getElementById("map"), {
                center: {lat: this.latPlace, lng: this.lngPlace},
                zoom: 18,
                streetViewControl: false
            });
            
            this.panorama = map.getStreetView();
            this.panorama.setPosition({lat: this.latPlace, lng: this.lngPlace});
            console.log('panorama');
            console.log(this.panorama.getVisible());
            this.panorama.setPov(({
                heading: 265,
                pitch: 0
            }));
            //this.panorama.setVisible(true);
            console.log(this.panorama.getVisible());
        });
        
        
    }
    
    switchStreet(){
        var toggle = this.panorama.getVisible();
        if (toggle == false) {
          this.streetButton = "http://cs-server.usc.edu:45678/hw/hw8/images/Pegman.png";
          this.panorama.setVisible(true);
        } else {
          this.streetButton = "http://cs-server.usc.edu:45678/hw/hw8/images/Map.png";
          this.panorama.setVisible(false);
        }
    }
    
    getDirections(){
        console.log($('input#fromMapInput').val());
        if($('input#fromMapInput').val() != ""){
            //var origin = this.getLatLng($('input#fromMapInput').val());
            var origin: any = $('input#fromMapInput').val();
        }
        else{
            var origin: any = { lat: this.latMe, lng: this.lngMe };
        }
        console.log('origin');
        console.log(origin);
        this.dir = {
          origin: origin,
          destination: { lat: this.latPlace, lng: this.lngPlace },
          travelMode: $('#modeMapInput').val(),
          provideRouteAlternatives: true
        }
        console.log(this.dir);
        
    }
    
//    getLatLng(address): any{
//        this.locationRequest.getRequest("http://localhost:3000/", {address: address})
//            .subscribe(data => {
//            console.log(data);
//            return data;
//        });
//    }
                       
    
    getLoc() {
      this.locationRequest.getRequest("https://ipapi.co/8.8.8.8/json/",{})
        //this.locationRequest.getRequest("http://ip-api.com/json",{})
        .subscribe(data => {
          console.log(data['latitude']);
          this.latMe = data['latitude'];
          this.lngMe = data['longitude'];
          //this.location = data['lat'] +"," + data['lon'];
         // $(document).ready(()=>{
        //      $("#here_radio").attr("value", this.location.lat + "," + this.location.lon);
        //    $("#here_radio").attr("ng-reflect-value", this.location.lat + "," + this.location.lon);
        //  });
          
        });
        
    }

}