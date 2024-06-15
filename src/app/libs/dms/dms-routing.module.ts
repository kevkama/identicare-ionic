import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { NewMsgComponent } from './new-msg/new-msg.component';
import { SingleThredComponent } from './single-thred/single-thred.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'',
    component: MessageListComponent,
  },
  {
    path:'new-msg',
    component: NewMsgComponent,
  },
  {
    path:'tread',
    component: SingleThredComponent,
  },
  {
    path:'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmsRoutingModule { }
