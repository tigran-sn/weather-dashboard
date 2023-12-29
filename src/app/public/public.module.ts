import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [CommonModule, SharedModule, PublicRoutingModule],
  exports: [],
})
export class PublicModule {}
