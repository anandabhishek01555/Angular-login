import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatIconModule} from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  exports: [MaterialComponents],
  imports: [
    CommonModule,
    MaterialComponents
  ]
})
export class MaterialModule { }
