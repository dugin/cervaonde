import { SuggestPage } from './../suggest/suggest';
import { BarsPage } from './../bars/bars.page';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact.page';

@Component({
  selector: 'ib-page-tabs',
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BarsPage;
  tab2Root: any = SuggestPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
