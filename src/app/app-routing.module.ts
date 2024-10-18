import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MarketListComponent } from './market/market-list.component'
import { MarketDetailComponent } from './market/market-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/markets', pathMatch: 'full' },
  { path: 'markets', component: MarketListComponent },
  { path: 'market/:id', component: MarketDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}