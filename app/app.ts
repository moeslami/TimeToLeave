import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
// import {provide} from '@angular/core';
// import {ANGULAR2_GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // load gogle places
      // provide(LazyMapsAPILoaderConfig, {useFactory: () => {
        
      //   let config = new LazyMapsAPILoaderConfig();
      //   config.libraries = ['places'];
      //   return config;
      // }});
    });
  }
}
