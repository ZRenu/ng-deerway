import { Component, OnInit } from '@angular/core';
import { DwTable } from '../../../shared/meta/dw-table/dw-table.component';
import { NzNotificationService } from 'ng-zorro-antd';
import { SearchData } from '../../../shared/meta/dw-search/dw-search.component';
import { DatePicker } from '../../../shared/meta/dw-date-picker/dw-date-picker.component';
import { InfoModel } from '../../../shared/meta/dw-info-model/dw-info-model.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.less']
})
export class TableListComponent implements OnInit {
  itemModel;
  isLoadingSave = false;
  saveTitle = '保存';
  Dw = {
    listOfSearchName: '' || [],
    sortName: '',
    sortValue: 0,
    searchValue: '',
    startTime: '',
    endTime: ''
  };
  infoModel: InfoModel = {
    isVisible: false,
    nzTitle: '员工信息'
  };
  datePicker: DatePicker = {
    nzSize: 'large',
    startPlaceHolder: '开始时间',
    endtPlaceHolder: '结束时间',
    ShowToday: false,
    Format: 'yyyy-MM-dd'

  };
  searchData: SearchData = {
    placeholder: '搜索：姓名、地址',
    nzSize: 'large'
  };
  tableDatas: DwTable = {
    nzShowPagination: false,
    nzShowAction: true,
    nzBordered: true,
    nzTitle: 'NG-ZORRO表格常用功能封装(详情见源码)',
    dataTh: [
      {
        title: '姓名',
      },
      {
        title: '年龄',
        nzShowSort: true,
        nzSortKey: 'age',
        sort: 'age'
      },
      {
        title: '工龄',
        nzShowSort: true,
        nzSortKey: 'number',
        sort: 'number'
      },
      {
        title: '地址',
        nzShowFilter: true,
        sort: 'address',
        nzShowFilterList: [
          { text: 'hello', value: 3 },
          { text: 'word', value: 4 }
        ]
      },
      {
        title: '操作'
      }
    ],
    sortMap: {
      name: null,
      age: null,
      number: null,
      address: null
    },
    dataSet: [
      {
        key: '1',
        name: '莫希宇',
        age: 26,
        number: 10,
        address: '上海市浦东新区盛夏路560号'
      },
      {
        key: '2',
        name: '刘畅',
        age: 25,
        number: 8,
        address: '上海市浦东新区高科中路333号'
      },
      {
        key: '3',
        name: '左立军',
        age: 28,
        number: 3,
        address: '上海市浦东新区祖冲之路40号'
      },
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 14,
        address: '上海市浦东新区紫薇路18号'
      },
      {
        key: '2',
        name: '陈哲',
        age: 42,
        number: 2,
        address: '上海市浦东新区张江路88号'
      },
      {
        key: '3',
        name: '巫景飞',
        age: 32,
        number: 13,
        address: '上海市浦东新区斜土路599号'
      }
    ]
  };

  constructor(
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
  }
  /**保存修改 */
  save() {
    this.isLoadingSave = true;
    this.saveTitle = '保存中...';
    setTimeout(() => {
      this.infoModel.isVisible = false;
      this.isLoadingSave = false;
      this.saveTitle = '保存';
      this.notification.create('success', '系统提示',
        '保存成功');
    }, 1000);
    console.log('保存');
  }
  /** 改变筛选状态 */
  launchSort($event) {
    const sortName = $event.name;
    const sortValue = $event.value;
    const sortMap = this.tableDatas.sortMap;
    // tslint:disable-next-line:forin
    for (const key in sortMap) {
      sortMap[key] = (key === sortName ? sortValue : null)
    }

  }
  /** 排序筛选*/
  launchTbData($event) {
    if ($event.hasOwnProperty('listOfSearchName')) {
      this.Dw.listOfSearchName = $event.listOfSearchName;
    }
    if ($event.hasOwnProperty('sortName')) {
      this.Dw.sortName = $event.sortName;
    }
    if ($event.hasOwnProperty('sortValue')) {
      this.Dw.sortValue = $event.sortValue;
    }
    console.log('筛选数据', this.Dw);
    this.tableDatas.dataSet = [
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 14,
        address: '上海市浦东新区紫薇路18号'
      },
      {
        key: '2',
        name: '陈哲',
        age: 42,
        number: 2,
        address: '上海市浦东新区张江路88号'
      },
    ];

  }
  /** 删除数据*/
  launchDelete($event) {
    console.log('delete', $event);
  }
  /** 编辑数据*/
  launchEdit($event) {
    this.itemModel = $event;
    this.infoModel.isVisible = true;
  }
  /** 关闭模态框*/
  launchInfoModel($event) {
    this.infoModel.isVisible = $event;
  }
  /** 搜索*/
  launchSearch($event) {
    this.Dw.searchValue = $event;
    console.log('筛选内容', this.Dw);
    this.tableDatas.dataSet = [
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 14,
        address: '上海市浦东新区紫薇路18号'
      }
    ];
  }
  /**开始时间 */
  launchStart($event) {
    this.Dw.startTime = $event;
    console.log('start', $event);
    console.log('筛选数据', this.Dw);
  }
  /**结束时间 */
  launchEnd($event) {
    this.Dw.endTime = $event;
    console.log('end', $event);
    console.log('筛选数据', this.Dw);
  }
}
