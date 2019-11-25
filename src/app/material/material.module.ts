import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';


const materialComps  = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [
    materialComps
  ],
  exports: [
    materialComps
  ]

})
export class MaterialModule { }
