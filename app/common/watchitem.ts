import { Preferences } from './preferences'
import { Place } from './place'
import {RouteInfo} from './route-info'

export class WatchItem{
    id:number = 0;
    from:Place;
    to:Place;
    bestRoute:RouteInfo;
    
    static last_id: number = 0;
    
    constructor(public prefs:Preferences ){
        this.id = ++WatchItem.last_id;
        this.from = new Place("", null,null);
        this.to = new Place("", null,null);
        this.bestRoute = new RouteInfo(null,null);
    }
}