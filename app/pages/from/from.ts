import {Page} from 'ionic-angular';
import { GooglePlaceAutocompleteDirective } from '../../directives/google-place-autocomplete-directive';

@Page({
  templateUrl: 'build/pages/from/from.html',
  directives: [GooglePlaceAutocompleteDirective]
})
export class FromPage {
  constructor() {

  }
  
  
}
