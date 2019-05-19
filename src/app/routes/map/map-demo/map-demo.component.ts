import { Component, OnInit } from '@angular/core';
declare var BMap: any;
declare var BMapLib: any;
declare var BMAP_DRAWING_POLYGON;
declare var BMAP_ANCHOR_TOP_RIGHT;
declare var BMAP_DRAWING_CIRCLE;
@Component({
  selector: 'app-map-demo',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.less']
})
export class MapDemoComponent implements OnInit {

  map: any;
  overlays = [];
  PolygonData = [
    { lng: 116.401503, lat: 39.920147 },
    { lng: 116.407432, lat: 39.918791 },
    { lng: 116.405024, lat: 39.915055 },
    { lng: 116.399922, lat: 39.915221 },
    { lng: 116.401503, lat: 39.920147 }
  ];
  Polygon;
  isPolygon = false;
  isPolygonFisrt = false;
  drawingManager;
  overlaycomplete;
  styleOptions = {
    // tslint:disable-next-line: comment-format
    strokeColor: '#2E8B57',    //边线颜色。
    // tslint:disable-next-line: comment-format
    fillColor: '#388E8E',      //填充颜色。当参数为空时，圆形将没有填充效果。
    // tslint:disable-next-line: comment-format
    strokeWeight: 2,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,    // 边线透明度，取值范围0 - 1。
    fillOpacity: 0.3,      // 填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' // 边线的样式，solid或dashed。
  };
  constructor() { }

  ngOnInit() {
    this.map = new BMap.Map('scopeMap');
    this.start();
  }
  start() {
    var that = this;
    const poi = new BMap.Point(116.404, 39.915);
    that.map.centerAndZoom(poi, 16); // 设置中心点坐标和地图级别
    that.map.enableScrollWheelZoom(); // 启用鼠标滚动对地图放大缩小

    if (that.PolygonData.length) {
      var ponits = [];
      // this.isPolygonFisrt = true;
      this.PolygonData.forEach(element => {
        ponits.push(new BMap.Point(element.lng, element.lat));
      });
      that.map.clearOverlays();
      that.Polygon = new BMap.Polygon(ponits, this.styleOptions);   //创建多边
      that.map.addOverlay(this.Polygon);   //创建多边
    }
    // 回调获得覆盖物信息
    const overlaycomplete = function (e) {
      that.overlaycomplete = e;
      // 将多边形保存到数组
      that.overlays.push(e.overlay);
      // 开启编辑模式
      e.overlay.enableEditing();
    };

    // 实例化鼠标绘制工具
    that.drawingManager = new BMapLib.DrawingManager(this.map, {

      isOpen: false, // 是否开启绘制模式
      enableDrawingTool: true, // 是否显示工具栏
      drawingMode: BMAP_DRAWING_POLYGON, // 绘制模式  多边形
      drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, // 位置
        offset: new BMap.Size(5, 5), // 偏离值
        drawingModes: [
          BMAP_DRAWING_POLYGON,// 仅支持多边形
          // BMAP_DRAWING_CIRCLE
        ]
      },
      polygonOptions: that.styleOptions, // 设置多边形的样式
      // circleOptions: that.styleOptions
    });

    // 添加鼠标绘制工具监听事件，用于获取绘制结果
    that.drawingManager.addEventListener('overlaycomplete', overlaycomplete);
  }
  //保存地图
  save() {
    var map = this.map;
    var overlays = this.overlays;//获取存放的多边形数组
    var ponits = [];
    if (this.overlays.length) {
      var path = overlays[0].getPath();//获取第一个多边形
      for (var i = 0; i < path.length; i++) {
        // console.log("坐标为：lng:" + path[i].lng + " lat:" + path[i].lat);
        ponits.push(new BMap.Point(path[i].lng, path[i].lat))
        // 保存数据
        this.PolygonData.push({ lng: path[i].lng, lat: path[i].lat });

      }
      this.Polygon = new BMap.Polygon(ponits, this.styleOptions);   //创建多边
      map.addOverlay(this.Polygon);   //创建多边
      this.rest();
    }
    if (this.isPolygon) {
      this.PolygonData.length = 0;
      var ponits = [];
      this.Polygon.ia.forEach(element => {
        ponits.push(new BMap.Point(element.lng, element.lat));
        // 保存数据
        this.PolygonData.push({ lng: element.lng, lat: element.lat });
      });
      this.map.clearOverlays();
      this.Polygon = new BMap.Polygon(ponits, this.styleOptions);   //创建多边
      map.addOverlay(this.Polygon);   //创建多边
      console.log(this.PolygonData);
    }

  }
  /**编辑范围 */
  update() {
    this.Polygon.enableEditing();
    this.isPolygon = true;
  }
  /**清除未保存前的绘制 */
  rest() {
    for (let i = 0; i < this.overlays.length; i++) {
      this.map.removeOverlay(this.overlays[i]);
    }
    this.overlays.length = 0;
  }
  /** 重新绘制*/
  clear() {
    this.PolygonData.length = 0;
    this.map.clearOverlays();
  }
}
