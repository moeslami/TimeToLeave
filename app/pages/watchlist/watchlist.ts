import {Page, NavController} from 'ionic-angular';
import {AddPage} from '../add/add'
@Page({
  templateUrl: 'build/pages/watchlist/watchlist.html',
})
export class WatchListPage {
  constructor(private nav: NavController) {

  }
  
  addNewRouteWatch(){
    this.nav.push(AddPage);
  }
  
}
