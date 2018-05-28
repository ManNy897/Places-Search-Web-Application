import { Injectable, Output, EventEmitter, Input } from '@angular/core';


@Injectable()
export class DetailsService {
    @Output() infoEmit: EventEmitter<any> = new EventEmitter();
    @Input() details: any;
    @Input() selectedPlaceId;

    public constructor() { }
    

    
    getEmittedValue() {
     console.log('getting emitted value');
     return this.infoEmit;
   }
    
    update(newDetails){
        this.details = newDetails;
        //this.infoEmit.emit(this.details);
        console.log('details in service updated');
        console.log(this.details);
        console.log(this.infoEmit);
    }

}