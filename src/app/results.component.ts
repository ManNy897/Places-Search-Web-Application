import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RequestService } from './request.service';
import { Data } from './data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DetailsService} from './details.service';
//import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import {} from '@types/googlemaps';
import { NgZone } from '@angular/core';



@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styles: ['.highlight{background-color: gold;}']
})
export class ResultsComponent {
    
    results: any;
    currentPage;
    private subscribe: any;
    map;
    selectedPlaceId;
    //isDisabled = true;
    
    constructor(
        private locationRequest: RequestService,
        private route: ActivatedRoute,
        private data: Data,
        private router: Router,
        private detailsService: DetailsService,
        private ngZone: NgZone) {}
    
    
    isDisabled(){
        if(this.detailsService.details) return false;
        else return true;
    }
    
    highlight(place_id){
        if(this.detailsService.selectedPlaceId === place_id){
            this.detailsService.selectedPlaceId = "";
        }
        else this.detailsService.selectedPlaceId = place_id;
    }
    
    ngOnInit() {
        this.subscribe = this.route.params.subscribe(params => {
            console.log("printing new results");
            console.log(this.data.results);
            //this.results = JSON.parse(params['r']);
            //this.currentPage = params['pageNum'];
            this.currentPage = 0;
            this.results = this.data.results;
            this.selectedPlaceId = this.detailsService.selectedPlaceId;
        })
    }
    
    showDetails(placeid, lat, lng){
       
        //this.router.navigate(['/details']);
        //this.router.navigate(['']);
        //this.router.navigate(['/details', {place_id: placeid, lat: lat, lng: lng}]);
        this.detailsService.selectedPlaceId = placeid;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng:lng},
            zoom: 17
          });
        console.log(this.map);
        var request = {
            placeId: this.detailsService.selectedPlaceId
        };
        var service = new google.maps.places.PlacesService(this.map);
        service.getDetails(request, (place, status)=>{
            //this.router.navigate(['']);
            //this.router.navigate(['results']);
            if (status == google.maps.places.PlacesServiceStatus.OK) {
            this.detailsService.update(place);
            console.log('details after returning from google');
            console.log(this.detailsService.details);
            console.log('printing router');
            console.log(this.router);
            
            this.ngZone.run(() => {
                this.router.navigate(['/details'])
            });
            //this.ds.update(this.details);
           
            //this.router.navigate(['/details', {name: this.details['name']}]);
            
          }

        });
        //this.router.navigate(['results']);

        

    }
    
                                                     
    
//    getResults(prev){
//        console.log("herhehrehre");
//        console.log(this.locationRequest);
//        this.locationRequest.getRequest("http://localhost:3000/")
//            .subscribe(data => {
//            console.log(data);
//            this.results = data["hi"];
//            console.log(this.results);
//            return data["hi"];
//        });
//    }
    
//      ngOnDestroy() {
//        this.subsribe.unsubscribe();
//      }

    existsNextPage(){
        if(this.results.results.length > (this.currentPage+1)*20 || this.results.next_page_token) return true;
        return false;
    }
    nextPage(){
        if(this.results.results.length > (this.currentPage+1)*20){
            this.currentPage+=1;
        }
        else if(this.results.next_page_token){
            console.log('here in next token');
            this.loadNextPage(this.results.next_page_token, ()=>this.currentPage+=1);   
        }
    }
    previousPage(){
        this.currentPage -= 1;
    }
    
    loadNextPage(nextPageToken, incriment){
        this.locationRequest.getRequest("/api", {'pagetoken':nextPageToken})
            .subscribe(data => {
            console.log('next page');
            console.log(data);
            this.results.results.push.apply(this.results.results, data['results']);
            this.results.next_page_token = data['next_page_token'];
            //this.result = data["hi"];
            console.log('new results list');
            console.log(this.results.results);
            incriment();
            console.log('current page: ' + this.currentPage);
        });
    }
//         
            
}