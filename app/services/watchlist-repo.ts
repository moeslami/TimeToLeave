import {WatchItem} from '../common/watchitem'
// import {Storage, SqlStorage} from 'ionic-angular';
export class WatchlistRepo {
    private static watchlist: WatchItem[] = new Array<WatchItem>();
    
    add(item:WatchItem){
        WatchlistRepo.watchlist.push(item);
    }
    
    getList(): WatchItem[]{
        return WatchlistRepo.watchlist;
        
    }
    
    remove(id:any){
        
    }
    
}