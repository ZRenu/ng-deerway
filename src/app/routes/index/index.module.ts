import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IndexRoutingModule } from './index-routing.module';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [
  ListComponent,
  InfoComponent]
})
export class IndexModule { }
