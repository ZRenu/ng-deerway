import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { differenceInCalendarDays, setHours } from 'date-fns';
@Component({
  selector: 'app-dw-date-picker',
  templateUrl: './dw-date-picker.component.html',
  styleUrls: ['./dw-date-picker.component.less']
})
export class DwDatePickerComponent implements OnInit {
  @Input() datePicker;
  @Output() startTime = new EventEmitter<number>();
  @Output() endTime = new EventEmitter<number>();
  startDate = new Date();
  endDate = new Date();
  today = new Date();
  timeDefaultValue = setHours(new Date(), 0);
  constructor() { }

  ngOnInit() {
  }
  range(start: number, end: number): number[] {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
  }
  disabledDateTime = (): object => {
    return {
      nzDisabledHours: () => this.range(0, 24).splice(4, 20),
      nzDisabledMinutes: () => this.range(30, 60),
      nzDisabledSeconds: () => [55, 56]
    };
  }

  disabledRangeTime = (value: Date[], type: 'start' | 'end'): object => {
    if (type === 'start') {
      return {
        nzDisabledHours: () => this.range(0, 60).splice(4, 20),
        nzDisabledMinutes: () => this.range(30, 60),
        nzDisabledSeconds: () => [55, 56]
      };
    }
    return {
      nzDisabledHours: () => this.range(0, 60).splice(20, 4),
      nzDisabledMinutes: () => this.range(0, 31),
      nzDisabledSeconds: () => [55, 56]
    };
  }
  startValueChange() {
    this.startTime.emit(this.startDate.getTime());
  }
  endValueChange() {
    this.endTime.emit(this.endDate.getTime());
  }
}
/**
 * 时间组件配置
 *
 * nzSize:large default small 大小
 *
 * startPlaceHolder: 开始时间 提示
 *
 * endtPlaceHolder：结束时间 提示
 *
 * ShowToday：boolean是否开启今天
 *
 * Format：yyyy-MM-dd  yyyy-MM-dd HH:mm:ss 时间格式
 */
export interface DatePicker {
  nzSize?: string;
  startPlaceHolder?: string;
  endtPlaceHolder?: string;
  ShowToday?: boolean;
  Format?: string;
}
