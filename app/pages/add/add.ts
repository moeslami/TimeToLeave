import {Page} from 'ionic-angular';
import { GooglePlaceAutocompleteDirective } from '../../directives/google-place-autocomplete-directive';

@Page({
  templateUrl: 'build/pages/add/add.html',
  directives: [GooglePlaceAutocompleteDirective]
})
export class AddPage {
  constructor() {

  }
  
  
}
