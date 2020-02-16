import { Component, EventEmitter, Input, OnInit, Output, forwardRef, ViewChild, ElementRef, OnChanges, SimpleChanges,AfterViewChecked, AfterViewInit,} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR,} from "@angular/forms";
import {ToggleSelectValues,} from "./toggle-select-values";
/**
 * 注册
 * @type {{provide: InjectionToken<ControlValueAccessor>; useExisting: Type<any>; multi: boolean}}
 */
export const TOGGLE_SELECT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleSelectComponent),
    multi: true,
};

@Component({
    selector: "toggle-select",
    template: `
      <div>
          测试组件
      </div>
  `,
    styleUrls: ["./toggle-select.component.css"],
    providers: [TOGGLE_SELECT_VALUE_ACCESSOR,],

})

export class ToggleSelectComponent implements OnInit,OnChanges, ControlValueAccessor{
  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges){

  }
  //ControlValueAccessor接口
  //将模型中的新值写入视图或 DOM 属性中
  writeValue(value: ToggleSelectValues): void {
      if (value) {
      }
  }
  //当控件接收到 change 事件后，调用的函数
  registerOnChange(fn: Function): void {
      //把值传输到外部
      this.onModelChange = fn;
  }
  //当控件接收到 touched 事件后，调用的函数
  registerOnTouched(fn: Function): void {
      this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {}

}
