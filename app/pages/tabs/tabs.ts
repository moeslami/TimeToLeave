import {Page} from 'ionic-angular';
import {FromPage} from '../From/From';
import {ToPage} from '../To/To';
import {RoutesPage} from '../Routes/Routes';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FromPage;
  tab2Root: any = ToPage;
  tab3Root: any = RoutesPage;
}
