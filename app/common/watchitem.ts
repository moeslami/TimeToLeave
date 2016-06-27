import { Preferences } from './preferences'
export class WatchItem{
    id:number = 0;
    static last_id: number = 0;
    constructor(public from:string, public to: string, public prefs:Preferences ){
        this.id = ++WatchItem.last_id;
    }
}