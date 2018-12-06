import { Component, OnInit } from '@angular/core';
import { DwDynamicTable } from 'src/app/shared/meta/dw-table-dynamic/dw-table-dynamic.component';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.less']
})
export class TableDynamicComponent implements OnInit {

  constructor() { }
  switchTitle = true;
  switchFooter = true;
  switchLoading = false;
  switchBordered = true;
  switchChecked = true;
  switchCheckedSingle = false;
  switchState = true;
  size = 'default';
  tableDatas: DwDynamicTable = {
    title: '🦌鹿途',
    footer: '🦌鹿途后台管理系统',
    loading: false,
    bordered: true,
    checked: true,
    checkedSingle: false,
    itemLength: 0,
    switch: true,
    switchName: 'isOut',
    size: 'default',
    pagination: true,
    total: 0,
    pageSize: 10,
    pageIndex: 1,
    dataTh: [
      {
        title: '序号',
      },
      {
        title: '姓名',
      },
      {
        title: '年龄',
      },
      {
        title: '编号'
      },
      {
        title: '地址',
      },
      {
        title: '状态',
      },
      {
        title: '操作',
      },
    ],
    tdItem: [
      { name: 'key' },
      { name: 'name' },
      { name: 'age' },
      { name: 'number' },
      { name: 'address' },
    ],
    dataSet: []
  };
  ngOnInit() {
    this.tableList();
  }
  tableList() {
    const dataSet = [
      {
        key: '1',
        name: '莫希宇',
        age: 26,
        number: 10,
        isOut: 0,
        address: '上海市浦东新区盛夏路560号'
      },
      {
        key: '2',
        name: '刘畅',
        age: 25,
        number: 8,
        isOut: 0,
        address: '上海市浦东新区高科中路333号'
      },
      {
        key: '3',
        name: '左立军',
        age: 28,
        number: 3,
        isOut: 1,
        address: '上海市浦东新区祖冲之路40号'
      },
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 14,
        isOut: 0,
        address: '上海市浦东新区紫薇路18号'
      },
      {
        key: '2',
        name: '陈哲',
        age: 42,
        number: 2,
        isOut: 1,
        address: '上海市浦东新区张江路88号'
      },
      {
        key: '3',
        name: '巫景飞',
        age: 32,
        number: 13,
        isOut: 0,
        address: '上海市浦东新区斜土路599号'
      }
    ];
    this.tableDatas.itemLength = dataSet.length;
    this.tableDatas.dataSet = dataSet;
    this.tableDatas.total = dataSet.length;
  }
  clickSwitch(type) {
    const checked = [
      {
        title: '序号',
      },
      {
        title: '姓名',
      },
      {
        title: '年龄',
      },
      {
        title: '编号'
      },
      {
        title: '地址',
      },
      {
        title: '状态',
      },
      {
        title: '操作',
      },
    ];
    const single = [
      {
        title: '选择',
      },
      {
        title: '序号',
      },
      {
        title: '姓名',
      },
      {
        title: '年龄',
      },
      {
        title: '编号'
      },
      {
        title: '地址',
      },
      {
        title: '状态',
      },
      {
        title: '操作',
      },
    ];
    if (type === 'title') {
      if (this.switchTitle) {
        this.tableDatas.title = '🦌鹿途';
      } else {
        delete this.tableDatas.title;
      }
    }
    if (type === 'footer') {
      if (this.switchFooter) {
        this.tableDatas.footer = '🦌鹿途后台管理系统';
      } else {
        delete this.tableDatas.footer;
      }
    }
    if (type === 'loading') {
      if (this.switchLoading) {
        this.tableDatas.loading = true;
      } else {
        this.tableDatas.loading = false;
      }
    }
    if (type === 'bordered') {
      if (this.switchBordered) {
        this.tableDatas.bordered = true;
      } else {
        this.tableDatas.bordered = false;
      }
    }
    if (type === 'checked') {
      if (this.switchChecked) {
        this.tableDatas.checked = this.switchChecked;
        this.tableDatas.checkedSingle = !this.switchChecked;
        this.switchCheckedSingle = !this.switchChecked;
        this.tableDatas.dataTh = checked;
      } else {
        this.tableDatas.checked = this.switchChecked;
        this.tableDatas.checked = this.switchChecked;
        this.switchCheckedSingle = !this.switchChecked;
      }
    }
    if (type === 'checkedsingle') {
      if (this.switchCheckedSingle) {
        this.tableDatas.checkedSingle = this.switchCheckedSingle;
        this.tableDatas.checked = !this.switchCheckedSingle;
        this.switchChecked = !this.switchCheckedSingle;
        this.tableDatas.dataTh = single;
      } else {
        this.tableDatas.checkedSingle = this.switchCheckedSingle;
        this.tableDatas.checked = !this.switchCheckedSingle;
        this.switchChecked = !this.switchCheckedSingle;
        this.tableDatas.dataTh = checked;
      }
    }
    if (type === 'state') {
      if (this.switchState) {
        this.tableDatas.switch = true;
        this.tableDatas.dataTh = [
          {
            title: '序号',
          },
          {
            title: '姓名',
          },
          {
            title: '年龄',
          },
          {
            title: '编号'
          },
          {
            title: '地址',
          },
          {
            title: '状态',
          },
          {
            title: '操作',
          },
        ];
      } else {
        this.tableDatas.switch = false;
        this.tableDatas.dataTh = [
          {
            title: '序号',
          },
          {
            title: '姓名',
          },
          {
            title: '年龄',
          },
          {
            title: '编号'
          },
          {
            title: '地址',
          },
          {
            title: '操作',
          },
        ];
      }
    }
  }
  checked($event) {
    console.log($event);
  }
  checkedSingle($event) {
    console.log($event);
  }
  switch($event) {
    console.log($event);
  }
  delete($event) {
    console.log($event);
  }
  edit($event) {
    console.log($event);
  }
  sizeClick() {
    this.tableDatas.size = this.size;
  }
  page($event) {
    console.log($event);
    this.tableDatas.pageIndex = $event;
  }
}
