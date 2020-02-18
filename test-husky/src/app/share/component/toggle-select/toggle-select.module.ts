import { NgModule, } from "@angular/core";
import { FormsModule, } from "@angular/forms";
import {CommonModule,} from "@angular/common";
import {ToggleSelectComponent,} from "./toggle-select.component";


@NgModule({
    declarations:[
        ToggleSelectComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [ToggleSelectComponent,],
})
export class ToggleSelectModule { }
