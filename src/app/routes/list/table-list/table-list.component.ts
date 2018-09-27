import { Component, OnInit } from '@angular/core';
import { DwTable } from '../../../core/meta/dw-table/dw-table.component';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.less']
})
export class TableListComponent implements OnInit {
  isVisible = false;
  itemModel;
  nzTitle = '详细信息';
  isLoadingSave = false;
  saveTitle = '保存';
  Dw = {
    listOfSearchName: '' || [],
    sortName: '',
    sortValue: 0
  };
  tableDatas: DwTable = {
    nzShowPagination: false,
    nzShowAction: true,
    nzBordered: true,
    nzTitle: 'NG-ZORRO表格常用功能封装(详情见源码)',
    dataTh: [
      {
        title: 'Name',
        // sort: 'name',
        // nzShowFilter: true,
        // nzShowFilterList: [
        //   { text: 'Joe', value: 1 },
        //   { text: 'Jim', value: 2 }
        // ]
      },
      {
        title: 'Age',
        nzShowSort: true,
        nzSortKey: 'age',
        sort: 'age'
      },
      {
        title: 'number',
        nzShowSort: true,
        nzSortKey: 'number',
        sort: 'number'
      },
      {
        title: 'Address',
        nzShowFilter: true,
        sort: 'address',
        nzShowFilterList: [
          { text: 'hello', value: 3 },
          { text: 'word', value: 4 }
        ]
      },
      {
        title: 'Action'
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
        name: 'John Brown',
        age: 32,
        number: 10,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        number: 8,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 52,
        number: 34,
        address: 'Sidney No. 1 Lake Park'
      },
      {
        key: '1',
        name: 'John Brown',
        age: 62,
        number: 14,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 72,
        number: 40,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 82,
        number: 55,
        address: 'Sidney No. 1 Lake Park'
      }
    ]
  };

  constructor(
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
  }
  save() {
    this.isLoadingSave = true;
    this.saveTitle = '保存中...';
    setTimeout(() => {
      this.isVisible = false;
      this.isLoadingSave = false;
      this.saveTitle = '保存';
      this.notification.create('success', '系统提示',
        '保存成功');
    }, 1000);
    console.log('保存');
  }
  launchSort($event) {
    const sortName = $event.name;
    const sortValue = $event.value;
    const sortMap = this.tableDatas.sortMap;
    // tslint:disable-next-line:forin
    for (const key in sortMap) {
      sortMap[key] = (key === sortName ? sortValue : null)
    }

  }
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
        name: 'John Brown',
        age: 32,
        number: 10,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        number: 8,
        address: 'London No. 1 Lake Park'
      },
    ];

  }
  launchDelete($event) {
    console.log('delete', $event);
  }
  launchEdit($event) {
    this.itemModel = $event;
    this.isVisible = true;
  }
  launchInfoModel($event) {
    this.isVisible = $event;
  }

}
