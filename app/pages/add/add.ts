import {Page, NavController} from 'ionic-angular';
import { GooglePlaceAutocompleteDirective } from '../../directives/google-place-autocomplete-directive';
import {WatchItem} from '../../common/watchitem'
import {Preferences} from '../../common/preferences'
import {Place} from '../../common/place'
import {WatchlistRepo} from '../../services/watchlist-Repo'


@Page({
  templateUrl: 'build/pages/add/add.html',
  directives: [GooglePlaceAutocompleteDirective],
  providers: [WatchlistRepo]
})
export class AddPage {
  item: WatchItem;
  constructor(private watchlistRepo: WatchlistRepo, private nav:NavController) {
    this.item = new WatchItem(new Preferences(true));
  }
  
  add(){
    this.watchlistRepo.add(this.item);
    this.nav.pop();
  }
  
  getFromAddress(place:Object){
        var location = place['geometry']['location'];
        this.item.from = new Place(place['formatted_address'],location.lat(),location.lng())
  }
  
  getToAddress(place:Object){
      var location = place['geometry']['location'];
        this.item.to = new Place(place['formatted_address'],location.lat(),location.lng() );
  }
  
  
}
