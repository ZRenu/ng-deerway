import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AbmComponent } from 'angular-baidu-maps';

declare const BMap: any;
declare const BMAP_SATELLITE_MAP: any;
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit, OnDestroy {
  resize = (document.body.clientHeight - 210) + 'px';
  options: any = {};
  status = '';
  @ViewChild('map') mapComp: AbmComponent;
  _map: any;
  satelliteOptions: any;
  mapSatellite: any;
  onReady(map: any) {
    this._map = map;
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity('北京');
    map.enableScrollWheelZoom(true);
    this.status = '加载完成';
    // 添加监听事件
    map.addEventListener('tilesloaded', () => {
      this.status = '地图加载完毕';
    });
    map.addEventListener('click', this._click.bind(this));
  }
  constructor() { }

  ngOnInit() {
  }

  _click(e: any) {
    this.status = `${e.point.lng}, ${e.point.lat}, ${+new Date()}`;
  }

  // 卫星
  onReadySatellite(map: any) {
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.setMapType(BMAP_SATELLITE_MAP);
    this.mapSatellite = map;
  }
  ngOnDestroy(): void {
    this._map.removeEventListener('click', this._click.bind(this));
  }


}
