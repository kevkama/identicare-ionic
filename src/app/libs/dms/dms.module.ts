import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmsRoutingModule } from './dms-routing.module';
import { IonicModule } from '@ionic/angular';
import { MessageListComponent } from './message-list/message-list.component';
import { NewMsgComponent } from './new-msg/new-msg.component';
import { SingleThredComponent } from './single-thred/single-thred.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [MessageListComponent, NewMsgComponent,SingleThredComponent,SettingsComponent],
  imports: [
    CommonModule,
    DmsRoutingModule,
    IonicModule
  ]
})
export class DmsModule { }
