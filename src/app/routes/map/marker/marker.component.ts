import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AbmComponent } from 'angular-baidu-maps';

declare const BMap: any;
@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit, OnDestroy {

  resize = (document.body.clientHeight - 210) + 'px';
  options: any = {};
  status = '';
  @ViewChild('map') mapComp: AbmComponent;
  _map: any;
  points = [
    { 'lng': 121.388495, 'lat': 31.171609, 'type': 1 },
    { 'lng': 121.459785, 'lat': 31.173834, 'type': 2 },
    { 'lng': 121.423853, 'lat': 31.167036, 'type': 3 },
    { 'lng': 121.426584, 'lat': 31.18335, 'type': 4 },
    { 'lng': 121.409192, 'lat': 31.173339, 'type': 1 },
    { 'lng': 121.436788, 'lat': 31.167901, 'type': 4 },
    { 'lng': 121.404737, 'lat': 31.161969, 'type': 4 },
    { 'lng': 121.389358, 'lat': 31.182855, 'type': 2 }
  ];
  constructor() { }

  ngOnInit() {
  }
  onReady(map: any) {
    this._map = map;
    map.centerAndZoom(new BMap.Point(121.409992, 31.178243), 15);
    map.setCurrentCity('上海');
    map.enableScrollWheelZoom(true);
    this.status = '加载完成';
    // 添加监听事件
    map.addEventListener('tilesloaded', () => {
      this.status = '地图加载完毕';
    });
    this.addMarker(this.points);
    map.addEventListener('click', this._click.bind(this));
    map.setMapStyle({
      styleJson: [
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': {
            'color': '#031628'
          }
        },
        {
          'featureType': 'land',
          'elementType': 'geometry',
          'stylers': {
            'color': '#000102'
          }
        },
        {
          'featureType': 'highway',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'arterial',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#000000'
          }
        },
        {
          'featureType': 'arterial',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#0b3d51'
          }
        },
        {
          'featureType': 'local',
          'elementType': 'geometry',
          'stylers': {
            'color': '#000000'
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#000000'
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#08304b'
          }
        },
        {
          'featureType': 'subway',
          'elementType': 'geometry',
          'stylers': {
            'lightness': -70
          }
        },
        {
          'featureType': 'building',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#000000'
          }
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#857f7f'
          }
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#000000'
          }
        },
        {
          'featureType': 'building',
          'elementType': 'geometry',
          'stylers': {
            'color': '#022338'
          }
        },
        {
          'featureType': 'green',
          'elementType': 'geometry',
          'stylers': {
            'color': '#062032'
          }
        },
        {
          'featureType': 'boundary',
          'elementType': 'all',
          'stylers': {
            'color': '#465b6c'
          }
        },
        {
          'featureType': 'manmade',
          'elementType': 'all',
          'stylers': {
            'color': '#022338'
          }
        },
        {
          'featureType': 'label',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': {
            'color': '#022338',
            'visibility': 'off'
          }
        }

      ]
    });
  }
  addMarker(points) {
    const _this = this;
    // 循环建立标注点
    for (let i = 0, pointsLen = points.length; i < pointsLen; i++) {
      const point = new BMap.Point(points[i].lng, points[i].lat); // 将标注点转化成地图上的点
      let myIcon = '';
      if (points[i].type === 1) {
        myIcon = new BMap.Icon('../../../../assets/map/1.png', new BMap.Size(40, 45));
      }
      if (points[i].type === 2) {
        myIcon = new BMap.Icon('../../../../assets/map/2.png', new BMap.Size(40, 45));
      }
      if (points[i].type === 3) {
        myIcon = new BMap.Icon('../../../../assets/map/3.png', new BMap.Size(40, 45));
      }
      if (points[i].type === 4) {
        myIcon = new BMap.Icon('../../../../assets/map/4.png', new BMap.Size(40, 45));
      }
      const marker = new BMap.Marker(point, { icon: myIcon }); // 将点转化成标注点
      this._map.addOverlay(marker);  // 将标注点添加到地图上
      // 添加监听事件
      (function () {
        const thePoint = points[i];
        marker.addEventListener('onmouseover',
          function () {
            _this.infoWindow(this, thePoint);
          });
      })();
    }
  }
  infoWindow(thisMarker, point) {
    // 获取点的信息
    const sContent = '<div style="width:690px;height:400px;font-size:12px;">'
      + '<h2 style="text-align:center">点位详细信息</h2>'
      + '<div style="width:200px;height:200px;margin:30px auto 0 auto">'
      + '<img src="https://avatars3.githubusercontent.com/u/21211456?s=460&v=4" style="width:100%;height:100%">'
      + '</div>'
      + '<div  style="height:266px;display:flex;justify-content: center;">'
      + '<div style="height:400px;width:158px;padding-top:42px">'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">作者</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">纬度</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">经度</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">系统</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">位置</a>'
      + '</div>'
      + '<div style="height:400px;width:158px;padding-top:42px">'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + '希孟' + '</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + point.lat + '</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + point.lng + '</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + '鹿途后台管理系统' + '</a>'
      + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + '中国·上海' + '</a>'
      + '</div>'
      + '</div>'

      + '</div>'

      + '</div>';

    const infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
    thisMarker.openInfoWindow(infoWindow); // 图片加载完后重绘infoWindow

  }

  _click(e: any) {
    this.status = `${e.point.lng}, ${e.point.lat}, ${+new Date()}`;
  }
  ngOnDestroy(): void {
    this._map.removeEventListener('click', this._click.bind(this));
  }

}
