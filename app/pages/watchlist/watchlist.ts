import {Page, NavController} from 'ionic-angular';
import {AddPage} from '../add/add'
import {Repo} from '../../services/repo'
import {WatchItem} from '../../common/watchitem'
@Page({
  templateUrl: 'build/pages/watchlist/watchlist.html',
  providers: [Repo]
})
export class WatchListPage {
  watchlist: WatchItem[];
  
  constructor(private nav: NavController, private repo:Repo) {
      this.watchlist = this.repo.getList();
  }
  
  addNewRouteWatch(){
    this.nav.push(AddPage);
  }
  
}
