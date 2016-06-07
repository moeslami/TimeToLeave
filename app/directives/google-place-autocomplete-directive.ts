import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[google-place-autocomplete]' })
export class GooglePlaceAutocompleteDirective {
    constructor(private el: ElementRef) {
    }
    
    ngAfterViewInit() {
        if(window.google){ 
            var autocomplete = new window.google.maps.places.Autocomplete(this.el.nativeElement.querySelector('input')); 
        }
    }
}   