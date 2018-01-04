import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'StatusPage';
    this.items = [
      
      {
        title: 'Drafts',
        page : 'DraftsPage'
		
      },
	  {
        title: 'History',
        page : 'HistoryItemPage'
      },
	  {
        title: 'Transactions',
        page : 'TransactionListingPage'
      },
	  {
        title: 'Balance',
        page : 'BalancePage'
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
