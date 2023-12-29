import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { GetFirstErrorPipe } from './pipes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [GetFirstErrorPipe, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GetFirstErrorPipe,
  ],
})
export class SharedModule {}
