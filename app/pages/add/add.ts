import {Page, NavController} from 'ionic-angular';
import { GooglePlaceAutocompleteDirective } from '../../directives/google-place-autocomplete-directive';
import {WatchItem} from '../../common/watchitem'
import {Preferences} from '../../common/preferences'
import {Repo} from '../../services/repo'


@Page({
  templateUrl: 'build/pages/add/add.html',
  directives: [GooglePlaceAutocompleteDirective],
  providers: [Repo]
})
export class AddPage {
  item: WatchItem;
  constructor(private repo: Repo, private nav:NavController) {
    this.item = new WatchItem("Current Location","", new Preferences(true));
  }
  
  add(){
    this.repo.add(this.item);
    this.nav.pop();
  }
  
  
}
