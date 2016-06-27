import {WatchItem} from '../common/watchitem'
// import {Storage, SqlStorage} from 'ionic-angular';
export class Repo {
    static watchlist: WatchItem[] = new Array<WatchItem>();
    
    add(item:WatchItem){
        Repo.watchlist.push(item);
    }
    
    getList(): WatchItem[]{
        return Repo.watchlist;
        
    }
    
    remove(id:any){
        
    }
    
}