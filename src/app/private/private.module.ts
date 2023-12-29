import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [PrivateComponent, HomeComponent, DashboardComponent],
  imports: [CommonModule, SharedModule, PrivateRoutingModule],
})
export class PrivateModule {}
