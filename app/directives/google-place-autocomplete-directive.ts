import { Directive, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { NgModel} from '@angular/common';

declare var google: any;

@Directive({ 
    selector: '[google-place-autocomplete]' ,
    providers: [NgModel]
})
export class GooglePlaceAutocompleteDirective {
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    
    constructor(private el: ElementRef, private model: NgModel) {
    }

    ngAfterViewInit() {
        var autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement.querySelector('input'), {});

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            var place = autocomplete.getPlace();
            this.setAddress.emit(place);
        });
    }
    
    

} 