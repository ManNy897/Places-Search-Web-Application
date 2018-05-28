import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { trigger, transition } from '@angular/animations';
import { slideAnimation } from './animations';
import { RequestService } from './request.service';
import { Data } from './data.service';
import { ResultsComponent } from './results.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routerAnimations', [
        transition('results => details', slideAnimation),
        transition('details => results', slideAnimation)
    ])
]
})

//@ViewChild('search') public searchElement: ElementRef;

export class AppComponent {
    title = 'app';
    form;
    location;
    result;
    requestCnt = 0;
    showLoad = false;
    error = false;
    
    prepareRouteTransition(outlet) {
        const animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    }
    
    
    
    constructor(
        private locationRequest: RequestService,
        private router: Router,
        private data: Data,
        private ngZone: NgZone,
        private mapsAPILoader: MapsAPILoader) {}
    
//    resetStart(){
//        this.startPage = -1;
//    }

    ngOnInit(){
        this.form=new FormGroup({
            keyword: new FormControl('', Validators.compose([
                Validators.pattern(new RegExp('[^\\s]+')),
                Validators.required
                ])),
            category: new FormControl('default'),
            distance: new FormControl('10', Validators.compose([Validators.required])),
            location: new FormControl('', this.gpsValidator),
            location_text: new FormControl({value: '', disabled:true}, Validators.compose([
                Validators.pattern(new RegExp('[^\\s]+')),
                Validators.required]))
        });
        
//        this.form.controls['location'].valueChanges.subscribe((value) => {
//                console.log('detected change')
//               this.form.controls['location'].validator(this.form.controls['location']);
//            }
//        );

        this.mapsAPILoader.load().then(
            () => {
            let autocomplete = new google.maps.places.Autocomplete(
                <HTMLInputElement>document.getElementById("radio_text"), { types:["address"] });
                
            autocomplete.addListener("place_changed", () => {
              this.ngZone.run(() => {
               let place: google.maps.places.PlaceResult = autocomplete.getPlace();
               if(place.geometry === undefined || place.geometry === null ){
                    return;
                }
              });
            });
            });
        this.showRequest();
    }
    
    onSubmit(form_data){
//        console.log(form_data);
//        console.log(this.r);
//        this.result = this.r.getResults(this.result);
        this.showLoad = true;
        console.log('printing results:');
        console.log(this.result);
        //this.test();
//        this.resetStart();
        //some weird bug where i have to first change startPage then change it to zero
//        this.result="dfd";
        console.log(form_data);
        //this.locationRequest.getRequest("http://ip-api.com/json", form_data)
//        this.locationRequest.getRequest("http://localhost:3000/api", form_data)
        this.locationRequest.getRequest("/api", form_data)
            .subscribe(data => {
            this.error = false;
            console.log(data);
            this.result = data;
            this.data.results = data;
            //this.startPage =0;
            //this.result = data["hi"];
            console.log('printing results after fetch');
            console.log(this.data.results);
            this.showLoad = false;
            //the params must be different in order to reload page so i keep counter
            this.router.navigate(['/results', {'requestCnt': this.requestCnt++}]);
            })
            err=>{
                this.error = true;
            
            };
            
    }
    
    onClear(){
        this.form=new FormGroup({
            keyword: new FormControl('', Validators.compose([
                Validators.pattern(new RegExp('[^\\s]+')),
                Validators.required
                ])),
            category: new FormControl('default'),
            distance: new FormControl('10', Validators.compose([Validators.required])),
            location: new FormControl('', this.gpsValidator),
            location_text: new FormControl({value: '', disabled:true}, Validators.compose([
                Validators.pattern(new RegExp('[^\\s]+')),
                Validators.required]))
        });
        this.router.navigate(['']);
    }

    showRequest() {
      this.locationRequest.getRequest("http://extreme-ip-lookup.com/json/",{})
       // this.locationRequest.getRequest("http://ip-api.com/json",{})
        .subscribe(data => {
          console.log(data['lat']);
          this.location = data['lat'] +"," + data['lon']
          console.log(this.form.controls);
          this.form.controls['location'].value = this.location;
          this.form.controls['location'].validator(this.form.controls['location']);
          this.form.controls['location'].status="VALID";
          console.log(this.form);
          //this.location = data['lat'] +"," + data['lon'];
         // $(document).ready(()=>{
        //      $("#here_radio").attr("value", this.location.lat + "," + this.location.lon);
        //    $("#here_radio").attr("ng-reflect-value", this.location.lat + "," + this.location.lon);
        //  });
          
        });
        
    }
    
    localClick(x){
        console.log(this.form);
        if(x==1){
        this.form.controls.location_text.disable();
        }
        else{
        this.form.controls.location_text.enable();
        }
    }
    
    gpsValidator(control){
        console.log("value:" + control.value);
        console.log(control.value == '');
        if(control.value == '' || control.value === undefined){
            return {'location':true};
        }
        return null;
    }
        
        
}
