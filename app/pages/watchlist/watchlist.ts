import {Page, NavController} from 'ionic-angular';
import {AddPage} from '../add/add'
import {WatchlistRepo} from '../../services/watchlist-repo'
import {WatchItem} from '../../common/watchitem'
@Page({
  templateUrl: 'build/pages/watchlist/watchlist.html',
  providers: [WatchlistRepo]
})
export class WatchListPage {
  watchlist: WatchItem[];
  
  constructor(private nav: NavController, private watchlistRepo:WatchlistRepo) {
      this.watchlist = this.watchlistRepo.getList();
  }
  
  addNewRouteWatch(){
    this.nav.push(AddPage);
  }
  
}
