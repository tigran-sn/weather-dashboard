import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { GetFirstErrorPipe } from './pipes';

@NgModule({
  declarations: [GetFirstErrorPipe],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, GetFirstErrorPipe],
})
export class SharedModule {}
