import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {WatchListPage} from './pages/watchlist/watchlist';
import {Watcher} from './services/watcher';
import {WatchlistRepo} from './services/watchlist-repo'



@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [Watcher, WatchlistRepo]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, watcher:Watcher) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      watcher.start();
    });
  }
}
