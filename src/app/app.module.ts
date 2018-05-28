import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {RatingModule} from "ngx-rating";


import { AppComponent } from './app.component';
import { RequestService } from './request.service';
import { ResultsComponent } from './results.component';
import { DetailsComponent } from './details.component';
import { BlankComponent } from './blank-component';
import { DetailsInfoComponent } from './details-info.component';
import { DetailsPhotosComponent } from './details-photos.component';
import { DetailsReviewsComponent } from './details-reviews.component';
import { DetailsMapComponent } from './details-map.component';
import { AgmDirectionModule } from 'agm-direction';
import { Data } from './data.service';
import { DetailsService } from './details.service';


const animationRoutes:Routes = [
    {
        path:'results',
        component:ResultsComponent,
        data: {
            animation: {
                value: 'results'
            }
        }
    },
    {
        path:'details',
        component:DetailsComponent,
        data: {
            animation: {
                value: 'details'
            }
        },
        children: [
            {path:'info', component:DetailsInfoComponent, outlet: 'details-router'},
            {path:'photos', component:DetailsPhotosComponent, outlet: 'details-router'},
            {path:'reviews', component:DetailsReviewsComponent, outlet: 'details-router'},
            {path:'map', component:DetailsMapComponent, outlet: 'details-router'},
            {path: '', redirectTo: '/details/(details-router:info)', pathMatch: 'full'}
        ]
//        
    },
    {
        path:'',
        component:BlankComponent,
//        data: {
//            animation: {
//                value: 'blank-component'
//            }
//        }
    }
];

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    DetailsComponent,
    BlankComponent,
    DetailsInfoComponent,
    DetailsPhotosComponent,
    DetailsReviewsComponent,
    DetailsMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(animationRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4LVIeRNaoWHhIsUN6Otyq9fjEbBM37gU',
      libraries: ["places"]
    }),
    AgmDirectionModule,
    RatingModule
  ],
  providers: [RequestService, Data, DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
