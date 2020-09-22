export default class uni {
 
  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(str) {
    return tt.base64ToArrayBuffer(str);
  }
  static arrayBufferToBase64(arrayBuffer) {
    return tt.arrayBufferToBase64(arrayBuffer);
  }
  static getUpdateManager(object) {
    return tt.getUpdateManager(object);
  }
  static getLaunchOptionsSync(object) {
    return tt.getLaunchOptionsSync(object);
  }
 
  static onPageNotFound(object) {
    return tt.onPageNotFound(object);
  }
  static onError(object) {
    return tt.onError(object);
  }
  static onAppShow(object) {
    return tt.onAppShow(object);
  }
  static onAppHide(object) {
    return tt.onAppHide(object);
  }
  static offPageNotFound(object) {
    return tt.offPageNotFound(object);
  }
  static offError(object) {
    return tt.offError(object);
  }

  static offAppShow(object) {
    return tt.offAppShow(object);
  }
  
  static offAppHide(object) {
    return tt.offAppHide(object);
  }

  static setEnableDebug(object) {
    // return tt.setEnableDebug(object);
    console.alert("暂不支持setEnableDebug")
  }
  static getLogManager(object) {
    return tt.getLogManager(object);
  }
//
  static writeBLECharacteristicValue(object) {
    return tt.writeBLECharacteristicValue(object);
  }
  static readBLECharacteristicValue(object) {
    return tt.readBLECharacteristicValue(object);
  }
  static onBLEConnectionStateChange(object) {
    return tt.onBLEConnectionStateChange(object);
  }
  static onBLECharacteristicValueChange(object) {
    return tt.onBLECharacteristicValueChange(object);
  }
  static notifyBLECharacteristicValueChange(object) {
    return tt.notifyBLECharacteristicValueChange(object);
  }
  static getBLEDeviceServices(object) {
    return tt.getBLEDeviceServices(object);
  }
  static getBLEDeviceCharacteristics(object) {
    return tt.getBLEDeviceCharacteristics(object);
  }
  static createBLEConnection(object) {
    return tt.createBLEConnection(object);
  }
  static closeBLEConnection(object) {
    return tt.closeBLEConnection(object);
  }
 
  //

 
  /////////////////// Ext //////////////
  static getExtConfigSync(object) {
    // return tt.getExtConfigSync(object)
    console.alert("本平台暂不支持getExtConfigSync")
  }
  static getExtConfig(object) {
    // return tt.getExtConfig(object)
        console.alert("本平台暂不支持getExtConfig")

  }
  //////////////////// File //////////
  static getFileSystemManager(object) {
    return tt.getFileSystemManager(object)
  }
  static getFileInfo(object) {
    return tt.getFileInfo(object)
  }
  static removeSavedFile(object) {
    return tt.removeSavedFile(object)
  }
  static getSavedFileInfo(object) {
    // return tt.getSavedFileInfo(object)
    console.alert("本平台暂不支持getSavedFileInfo")
  }
  static getSavedFileList(object) {
    return tt.getSavedFileList(object)
  }
  static openDocument(object) {
    return tt.openDocument(object)
  }
  static saveFile(object) {
    return tt.saveFile(object);
  } 
  static getFileSystemManager(object){
    return tt.getFileSystemManager(object)
  }
  //////////////// Network ///////////////
  static request(object) {
    return tt.request(object);
  }
  static downloadFile(object) {
    return tt.downloadFile(object)
  }
  static uploadFile(object) {
    return tt.uploadFile(object)
  }
  //////////////////////////////websocket///////////////////////////////////////
  static connectSocket(object) {
    return tt.connectSocket(object)
  }
  static onSocketError(object) {
    return tt.onSocketError(object)
  }
  static onSocketMessage(object) {
    return tt.onSocketMessage(object)
  }
  static onSocketClose(object) {
    return tt.onSocketClose(object)
  }
  static onSocketOpen(object) {
    return tt.connectSocket(object)
  }
  static sendSocketMessage(object) {
    return tt.sendSocketMessage(object)
  }
  static closeSocket(object) {
    return tt.closeSocket(object)
  }

  ////////////////////////////////mDNS////////////////////////////////////////////
  static stopLocalServiceDiscovery(object) {
    // return tt.stopLocalServiceDiscovery(object);
    console.alert("头条不支持");
  }
  static startLocalServiceDiscovery(object) {
    // return tt.startLocalServiceDiscovery(object);
    console.alert("头条不支持");
  }
  static onLocalServiceResolveFail(callback) {
    // return tt.onLocalServiceResolveFail(callback);
    console.alert("头条不支持");
  }
  static onLocalServiceLost(callback) {
    // return tt.onLocalServiceLost(callback);
    console.alert("头条不支持");
  }
  static onLocalServiceFound(callback) {
    // return tt.onLocalServiceFound(callback);
    console.alert("头条不支持");
  }
  static onLocalServiceDiscoveryStop(callback) {
    // return tt.onLocalServiceDiscoveryStop(callback);
    console.alert("头条不支持");
  }
  static offLocalServiceResolveFail(callback) {
    // return tt.offLocalServiceResolveFail(callback);
    console.alert("头条不支持");
  }
  static offLocalServiceLost(callback) {
    // return tt.offLocalServiceLost(callback);
    console.alert("头条不支持");
  }
  static offLocalServiceFound(callback) {
    // return tt.offLocalServiceFound(callback);
    console.alert("头条不支持");
  }
  static offLocalServiceDiscoveryStop(callback) {
    // return tt.offLocalServiceDiscoveryStop(callback);
    console.alert("头条不支持");
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket(){
    // return tt.createUDPSocket();
    console.alert("头条不支持");
  }
  ///////// Open Interface ///////////////////////////////////////////////
  static checkSession() {
    var now = new Date().getTime();
    return getApp().onekittt._jscode && getApp().onekittt._login && now <= getApp().onekittt._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(object) {
    if (uni.checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }

    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
      }
    }
  }
  static login = function(object) {///
    var that = this;
    if (!object) {
      return tt.login(object);
    }
    var object2 = {};
    object2.success = function(res) {
      getApp().onekittt._code = res.code;
      getApp().onekittt._login = new Date().getTime();
      var result = {
        code: res.code
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if (uni.checkSession()) {
      object2.success({
        code: getApp().onekittt._code
      });
    } else {
      tt.login(object2);
    }
  };
  static requestPolymerPayment = function(object) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekittt.server + "orderinfo";
        tt.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            orderInfo: JSON.stringify(object.orderInfo),
            code: code
          },
          success(res) {
            tt.requestPayment({
              appId: res.data.appId,
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: res.data.signType,
              paySign: res.data.paySign,
            })
            if (object.success) {
              object.success(res);
            }
            if (object.complete) {
              object.complete(res);
            }
          },
          fail(res) {
            if (object.fail) {
              object.fail(res);
            }
          }
        })
      }
    });

  }
  static getUserInfo(data, callback, isAPI) {
    console.log(data);
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekittt.server + "userinfo";
        tt.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            isAPI,
            withCredentials: true,
            data: JSON.stringify(data),
            code: code
          },
          success(res) {
            callback(res.data);
          },
          fail(res) {
            console.error(res)
          }
        })
      }
    })

  }
  static getUserInfo(object) {
    getApp().onekittt.getuserinfo = (data) => {
     uni._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, true);
    }
    tt.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekittt.opendata = opendata;
      getApp().onekittt.opendataCallbacks = [];
      for (var cb = 0; cb < getApp().onekittt.opendataCallbacks.length; cb++) {
        getApp().onekittt.opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekittt.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekittt.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekittt.opendata = {};
   uni.login({
      success(res) {
        var code = res.code;
       uni.getUserInfo({
          success(res) {
            var url = getApp().onekittt.server + "userinfo";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials: false,
                isAPI: false,
                code: code
              },
              success(res) {
                success(res.data);
              },
              fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber = function(data, callback) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekittt.server + "phonenumber";
        tt.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            code,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data);
          }
        })
      }
    });
  }
  static navigateToMiniProgram(object) {
    return tt.navigateToMiniProgram(object)
  }
  static navigateBackMiniProgram(object) {
    return tt.navigateBackMiniProgram(object)
  }
  static getAccountInfoSync(object) {
    //return tt.getAccountInfoSync(object)
    console.alert("本平台暂不支持getAccountInfoSync")
  }

  static reportMonitor(object) {
    return tt.reportMonitor(object)
  }
  static reportAnalytics(object, eventName) {
    return tt.reportAnalytics(object, eventName)
  }
  static requestPayment(object) {///provider参数未完成
    return tt.pay(object);
  }
  static authorize(object) {
    return tt.authorize(object)
    console.alert("未完成")
  }
  static openSetting(object) {
    return tt.openSetting(object)
  }
  static getSetting(object) {
    return tt.getSetting(object)
  }
  static chooseAddress(object) {//success返回参数不一样，编程
    return tt.chooseAddress(object)
  }
  static openCard(object) {
    // return tt.openCard(object);
    console.alert("本平台暂不支持卡券")
  }
  static openCardDetail(object){
    console.alert("本平台暂不支持卡券")
  }
  static chooseInvoiceTitle(object) {
    // return tt.chooseInvoiceTitle(object)
    console.alert("本平台暂不支持chooseInvoiceTitle")
  }
  static addCard = function(object) {
    return tt.addCard(object);
  }
  
  static chooseInvoice(object) {
    return tt.chooseInvoice(object)
  }

  static getWeRunData(object) {
    // return tt.getWeRunData(object)
    console.alert("本平台暂不支持运动（计步器）")
  }
  static getRunData(object){
    console.alert("本平台暂不支持运动（计步器）")
  }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    tt.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res)
      }

    });
  };
  ////////// Router ///////////////////////////////////////////
  static navigateTo(uni_object) {
    if(!uni_object){
      return
    }
    var uni_url=uni_object.url
    var uni_animationType=uni_object.animationType||"pop-in"
    var uni_animationDuration=uni_object.animationDuration||300
    var uni_events=uni_object.events
    var uni_success=uni_object.success
    var uni_fail=uni_object.fail
    var uni_complete=uni_object.complete
     var tt_object = {};
    //
   if (uni_url) {
      tt_object.url = uni_url;
    }
    if (uni_animationType) {
      tt_object.animationType = uni_animationType;
    }
    if (uni_animationDuration) {
      tt_object.animationDuration = uni_animationDuration;
    }
    if (uni_events) {
      tt_object.events = uni_events;
    }
    if (uni_success) {
      tt_object.success = uni_success;
    }
    if (uni_fail) {
      tt_object.fail = uni_fail;
    }
    if (uni_complete) {
      tt_object.complete = uni_complete;
    }
    //
    tt_object.success = function (tt_res) {
      var uni_res = {
        eventChanner: tt_res.errMsg,
      };
      if (uni_object.success) {
        uni_object.success(uni_res);
      }
      if (uni_object.complete) {
        uni_object.complete(uni_res);
      }
    };
    tt_object.fail = function (tt_res) {
     var uni_res = {

      };
      if (uni_object.fail) {
        uni_object.fail(uni_res);
      }
      if (uni_object.complete) {
        uni_object.complete(uni_res);
      }
    };
    tt.navigateTo(tt_object)
  }
  //
  static redirectTo(object) {
    return tt.redirectTo(object);
  }
  static reLaunch(object) {
    return tt.reLaunch(object);
  }
  static switchTab(object) {
    return tt.switchTab(object);
  }
  static navigateBack(object) {
    return tt.navigateBack(object);
  }
 static preloadPage(object){
   console.alert("本平台不支持")
 }
  ///////////// Share /////////////
  static updateShareMenu(object) {
    return tt.updateShareMenu(object)
  }
  static showShareMenu(object) {
    return tt.showShareMenu(object);
  }
  static hideShareMenu(object) {
    return tt.hideShareMenu(object)
  }
  static getShareInfo(object) {
    return tt.getShareInfo(object)
  }
  static share(object){
    console.alert("本平台不支持")
  }
  static shareWithSystem(object){
        console.alert("本平台不支持")

  }
  ////////数据缓存/////// Storage //////////////
  static setStorage(object) {
    return tt.setStorage(object)
  }
  static setStorageSync(key, value) {
    return tt.setStorageSync(key, value)
  }
  static getStorage(object) {
    return tt.getStorage(object)
  }
  static getStorageSync(key) {
    return tt.getStorageSync(key);
  }
  static getStorageInfo(object) {
    return tt.getStorageInfo(object)
  }
  static getStorageInfoSync(object) {
    return tt.getStorageInfoSync(object)
  }
  static removeStorage(object) {
    return tt.removeStorage(object)
  }
  static removeStorageSync(object) {
    return tt.removeStorageSync(object)
  }
  static clearStorage(object) {
    return tt.clearStorage(object)
  }
  static clearStorageSync(object) {
    return tt.clearStorageSync(object)
  }
    /////////位置/// Location ///////////////
    static getLocation(object) {
      return tt.getLocation(object)
    }
    static chooseLocation(object) {
      // return tt.chooseLocation(object)
      console.alert("本平台不支持chooseLocation")
    }
    static openLocation(object) {
      return tt.openLocation(object)
    }
    static createMapContext(object) {
      return tt.createMapContext(object)
    }
 ///////////////////////媒体///////////// Media //////////////////////////////////////
                ///////////////////图片/////image///////////////////////////////
 static chooseImage(object) {
  return tt.chooseImage(object);
}
static previewImage(object) {
  return tt.previewImage(object)
}
static getImageInfo(object) {
  return tt.getImageInfo(object)
}
static saveImageToPhotosAlbum(object) {
  return tt.saveImageToPhotosAlbum(object)
}
 static compressImage(object) {
  return tt.compressImage(object)
}
static chooseMessageFile(object){
  // return tt.chooseMessageFile(object)
  console.alert("本平台不支持chooseMessageFile")
}
                    /////////////////////////////录音/////////////////////////////////////////
static getRecorderManager(object) {
  return tt.getRecorderManager(object)
}
                    ////////////////////////背景音频///////////////////////////////
static getBackgroundAudioManager(object) {
  return tt.getBackgroundAudioManager(object)
}
                    ////////////////////////音频组件控制///////////////////////////////
static createInnerAudioContext(object) {
  return tt.createInnerAudioContext(object)
}
                    ////////////////////////视频///////////////////////////////

static chooseVideo(object) {
  return tt.chooseVideo(object)
}
static chooseMedia(object) {
  // return tt.chooseMedia(object)
  console.alert("本平台不支持chooseMedia")
}
static saveVideoToPhotosAlbum(object) {
  return tt.saveVideoToPhotosAlbum(object)
}
static getVideoInfo(object){
  // return tt.getVideoInfo(object)
    console.alert("本平台不支持getVideoInfo")
}
static compressVideo(object){
  // return tt.compressVideo(object)
      console.alert("本平台不支持compressVideo")
}
static openVideoEditor(object){
  // return tt.openVideoEditor(object)
      console.alert("本平台不支持openVideoEditor")
}
                    ////////////////////////视频，相机，直播组件控制///////////////////////////////
static createVideoContext(object) {
  return tt.createVideoContext(object)
}
static createCameraContext(cameraId,ui) {
  // return new CameraContext(tt.createCameraContext(cameraId));
        console.alert("本平台不支持createCameraContext")

} 
static createLivePlayerContext(uni_object) {
  if(!uni_object){
    return
  }
    var uni_livePlayerId=uni_object.livePlayerId
    var uni_this=uni_object.this
    var uni_success=uni_object.success
    var uni_fail=uni_object.fail
    var uni_complete=uni_object.complete
     var tt_object = {};
    //
   if (uni_livePlayerId) {
      tt_object.id = uni_livePlayerId;
    }
  
    if (uni_this) {
      tt_object.component = uni_this;
    }
    if (uni_success) {
      tt_object.success = uni_success;
    }
    if (uni_fail) {
      tt_object.fail = uni_fail;
    }
    if (uni_complete) {
      tt_object.complete = uni_complete;
    }
    //
    tt_object.success = function (tt_res) {
      var uni_res = {
      };
      if (uni_object.success) {
        uni_object.success(uni_res);
      }
      if (uni_object.complete) {
        uni_object.complete(uni_res);
      }
    };
    tt_object.fail = function (tt_res) {
     var uni_res = {

      };
      if (uni_object.fail) {
        uni_object.fail(uni_res);
      }
      if (uni_object.complete) {
        uni_object.complete(uni_res);
      }
    };
    tt.createLivePlayerContext(tt_object)
}
///
static createLivePusherContext(object) {
  return tt.createLivePusherContext(object)
}
static createMediaContainer(){
  // return tt.createMediaContainer()
  console.alert("本平台暂不支持createMediaContainer")
}
/////////////////////////系统信息//////////////////////////////
static getSystemInfo(object) {
  return tt.getSystemInfo(object);
}
static getSystemInfoSync() {
  return tt.getSystemInfoSync();
}
static canIUse(object) {
  return tt.canIUse(object);
}
//////////////////////////////内存/////////////////////////////
static onMemoryWarning(object) {
  // return tt.onMemoryWarning(object);
  console.alert("本平台暂不支持onMemoryWarning")
}
///
static onUIStyleChange(callback){
  console.alert("本平台暂不支持onUIStyleChange")
}
/////////////////////////////网络状态/////////////////////////////
static getNetworkType = function(object) {
  return tt.getNetworkType(object);
}
static _network = function(res) {
  return tt._network(object);
}
static onNetworkStatusChange(callback) {
  return tt.onNetworkStatusChange(callback);
}
/////////////////////系统主题////////////////////

//////////////////////加速度计////////////////////
static onAccelerometerChange(callback) {
  return tt.onAccelerometerChange(callback);
}
static stopAccelerometer(object) {
  return tt.stopAccelerometer(object);
}
static startAccelerometer(object) {
  return tt.startAccelerometer(object);
}
//////////////////////罗盘////////////////////
static onCompassChange(callback) {
  return tt.onCompassChange(callback);
}
static stopCompass(object) {
  return tt.stopCompass(object);
}
static startCompass(object) {
  return tt.startCompass(object);
}
//////////////////////陀螺仪////////////////////
static onGyroscopeChange(object) {
  // return tt.onGyroscopeChange(object);
    console.alert("本平台暂不支持onGyroscopeChange")

}
static stopGyroscope(object) {
  // return tt.stopGyroscope(object);
    console.alert("本平台暂不支持stopGyroscope")

}
static startGyroscope(object) {
  // return tt.startGyroscope(object);
    console.alert("本平台暂不支持startGyroscope")
}
//////////////////////电话////////////////////
static makePhoneCall = function(object) {
  return tt.makePhoneCall(object);
}
//
static scanCode = function(object) {
  return tt.scanCode(object);
}
//
static getClipboardData(object) {
  return tt.getClipboardData(object);
}
static setClipboardData(object) {
  return tt.setClipboardData(object);
}
//
static setScreenBrightness(object) {
  return tt.setScreenBrightness(object);
}
static setKeepScreenOn(object) {
  return tt.setKeepScreenOn(object);
}
static getScreenBrightness(object) {
  return tt.getScreenBrightness(object);
}
//
static onUserCaptureScreen(object) {
  return tt.onUserCaptureScreen(object);
}
//
static vibrate(object){
  return tt.vibrateShort(object);
  }

static vibrateLong(object) {
  return tt.vibrateLong(object);
}
static vibrateShort(object) {
  return tt.vibrateShort(object);
}
//
static addPhoneContact(object) {
  // return tt.addPhoneContact(object);
  console.alert("暂不支持addPhoneContact")
}
///////蓝牙/暂不支持/////
static stopBluetoothDevicesDiscovery(object) { 
  //  return tt.stopBluetoothDevicesDiscovery(object);
      console.alert("暂不支持stopBluetoothDevicesDiscovery")

  }
static startBluetoothDevicesDiscovery(object) {
  // return tt.startBluetoothDevicesDiscovery(object);
        console.alert("暂不支持startBluetoothDevicesDiscovery")

}
static openBluetoothAdapter(object) { 
  //  return tt.openBluetoothAdapter(object); 
        console.alert("暂不支持openBluetoothAdapter")

}
static onBluetoothDeviceFound(object) {
  // return tt.onBluetoothDeviceFound(object);
        console.alert("暂不支持onBluetoothDeviceFound")

}
static onBluetoothAdapterStateChange(object) {
  // return tt.onBluetoothAdapterStateChange(object);
        console.alert("暂不支持onBluetoothAdapterStateChange")

}
static getConnectedBluetoothDevices(object) {
  // return tt.getConnectedBluetoothDevices(object);
        console.alert("暂不支持getConnectedBluetoothDevices")

}
static getBluetoothDevices(object) {
  // return tt.getBluetoothDevices(object);
        console.alert("暂不支持getBluetoothDevices")

}
static getBluetoothAdapterState(object) {
  // return tt.getBluetoothAdapterState(object);
        console.alert("暂不支持getBluetoothAdapterState")

}
static closeBluetoothAdapter(object) {
  // return tt.closeBluetoothAdapter(object);
        console.alert("暂不支持closeBluetoothAdapter")

}
////低功耗蓝牙/////
static setBLEMTU(object){
  // return tt.setBLEMTU(object)
        console.alert("暂不支持setBLEMTU")

}
static writeBLECharacteristicValue(object){
  // return tt.writeBLECharacteristicValue(object)
        console.alert("暂不支持writeBLECharacteristicValue")

}
static readBLECharacteristicValue(object){
  //return tt.readBLECharacteristicValue(object)
        console.alert("暂不支持readBLECharacteristicValue")

}
static onBLEConnectionStateChange(object){
//  return tt.onBLEConnectionStateChange(object)
      console.alert("暂不支持onBLEConnectionStateChange")

}
static onBLECharacteristicValueChange(object){
 // return tt.onBLECharacteristicValueChange(object)
       console.alert("暂不支持onBLECharacteristicValueChange")

}
static notifyBLECharacteristicValueChange(object){
 // return tt.notifyBLECharacteristicValueChange(object)
       console.alert("暂不支持notifyBLECharacteristicValueChange")

}
static getBLEDeviceServices(object){
 // return tt.getBLEDeviceServices(object)
       console.alert("暂不支持getBLEDeviceServices")

}
static getBLEDeviceRSSI(object){
//  return tt.getBLEDeviceRSSI(object)
      console.alert("暂不支持getBLEDeviceRSSI")

}
static getBLEDeviceCharacteristics(object){
//  return tt.getBLEDeviceCharacteristics(object)
      console.alert("暂不支持getBLEDeviceCharacteristics")

}
static createBLEConnection(object){
 // return tt.createBLEConnection(object)
       console.alert("暂不支持createBLEConnection")

}
static closeBLEConnection(object){
 // return tt.closeBLEConnection(object)
       console.alert("暂不支持closeBLEConnection")

}

 ////////////// iBeacon //////////////////
 static onBeaconServiceChange(object) {
 // return tt.onBeaconServiceChange(object);
       console.alert("暂不支持onBeaconServiceChange")

}
static onBeaconUpdate(object) {
 // return tt.onBeaconUpdate(object);
       console.alert("暂不支持onBeaconUpdate")

}
static getBeacons(object) {
 // return tt.getBeacons(object);
       console.alert("暂不支持getBeacons")

}
static stopBeaconDiscovery(object) {
 // return tt.stopBeaconDiscovery(object);
       console.alert("暂不支持stopBeaconDiscovery")

}
static startBeaconDiscovery(object) {
//  return tt.startBeaconDiscovery(object);
      console.alert("暂不支持startBeaconDiscovery")

}
//////////////Wi-Fi/////////////
static getConnectedWifi(object){
  return tt.getConnectedWifi(object)
}
static stopWifi(object) {
  // return tt.stopWifi(object);
  console.alert("头条暂不支持stopWifi")
}
static startWifi(object) {
  // return tt.startWifi(object);
    console.alert("头条暂不支持startWifi")

}
static setWifiList(object) {
  // return tt.setWifiList(object);
    console.alert("头条暂不支持setWifiList")

}
static onWifiConnected(object) {
  // return tt.onWifiConnected(object);
    console.alert("头条暂不支持onWifiConnected")

}
static onGetWifiList(object) {
  // return tt.onGetWifiList(object);
    console.alert("头条暂不支持onGetWifiList")

}
static offWifiConnected(callback){
  // return tt.offWifiConnected(callback)
    console.alert("头条暂不支持offWifiConnected")

}
static offGetWifiList(callback){
  // return tt.offGetWifiList(callback)
    console.alert("头条暂不支持offGetWifiList")

}
static getWifiList(object) {
  // return tt.getWifiList(object);
    console.alert("头条暂不支持getWifiList")

}
static getConnectedWifi(object) {
  // return tt.getConnectedWifi(object);
    console.alert("头条暂不支持getConnectedWifi")

}
static connectWifi(object) {
  // return tt.connectWifi(object);
    console.alert("头条暂不支持connectWifi")

}
/////////////////电量/////////////////
static getBatteryInfoSync(object) {
  return tt.getBatteryInfoSync(object);
}
static getBatteryInfo(object) {
  return tt.getBatteryInfo(object);
}
static getBatteryInfo(object) {
  return tt.getBatteryInfo(object);
}
/////////////////////NFC/////////
 static stopHCE(object) {
  // return tt.stopHCE(object);
      console.alert("头条暂不支持stopHCE")

}
static startHCE(object) {
  // return tt.startHCE(object);
        console.alert("头条暂不支持startHCE")

}
static sendHCEMessage(object) {
  // return tt.sendHCEMessage(object);
        console.alert("头条暂不支持sendHCEMessage")

}
static onHCEMessage(object) {
  // return tt.onHCEMessage(object);
        console.alert("头条暂不支持onHCEMessage")

}
static offHCEMessage(callback){
// return tt.offHCEMessage(callback)
      console.alert("头条暂不支持offHCEMessage")

}
static getNFCAdapter(){
  // return tt.getNFCAdapter()
        console.alert("头条暂不支持getNFCAdapter")

}
static getHCEState(object) {
  // return tt.getHCEState(object);
        console.alert("头条暂不支持getHCEState")

}
//////////////////设备方向/////////

static onDeviceMotionChange(object) {
  // return tt.onDeviceMotionChange(object);
          console.alert("头条暂不支持onDeviceMotionChange")

}
static stopDeviceMotionListening(object) {
  // return tt.stopDeviceMotionListening(object);
            console.alert("头条暂不支持stopDeviceMotionListening")

}
static startDeviceMotionListening(object) {
  // return tt.startDeviceMotionListening(object);
            console.alert("头条暂不支持startDeviceMotionListening")

}
static offDeviceMotionChange(callback) {
  // return tt.offDeviceMotionChange(callback);
            console.alert("头条暂不支持offDeviceMotionChange")

}
////////生物认证////////
static startSoterAuthentication(object) {
  // return tt.startSoterAuthentication(object)
   console.alert("头条暂不支持startSoterAuthentication")

}
static checkIsSupportSoterAuthentication(object) {
  // return tt.checkIsSupportSoterAuthentication(object)
     console.alert("头条暂不支持checkIsSupportSoterAuthentication")

}
static checkIsSoterEnrolledInDevice(object) {
  // return tt.checkIsSoterEnrolledInDevice(object)
     console.alert("头条暂不支持checkIsSoterEnrolledInDevice")

}
  ////////////// Worker ///////////////
  static createWorker(path) {
    return new WORKER(path);
  }
  /////////////////键盘////////////////////
  static hideKeyboard(object) {
    return tt.hideKeyboard(object)
  }
  static onKeyboardHeightChange(callback){
    // return tt.onKeyboardHeightChange(callback)
    console.alert("本平台暂不支持")
  }
//////////////////////设备完////////////////////


  ////////////// UI ////////////////
  static showActionSheet(object) {
    return tt.showActionSheet(object);
  }
 static redirectTo(object) { return tt.redirectTo(object) }
   static redirectTo(object) { return tt.redirectTo(object) }

  static hideLoading() {
    return tt.hideLoading()
  }
  static showLoading(object) {
    return tt.showLoading(object);
  }
  static hideToast() {
    return tt.hideToast();
  }
  static showToast(object) {
    return tt.showToast(object);
  }
  static showModal(object) {
    return tt.showModal(object);
  }
  //////////////////////////////////////
  static setNavigationBarColor(object) {
    return tt.setNavigationBarColor(object)
  }
  static hideNavigationBarLoading(object) {
    return tt.hideNavigationBarLoading(object)
  }
  static showNavigationBarLoading(object) {
    return tt.showNavigationBarLoading(object)
  }
  static hideHomeButton(object){
    return tt.hideHomeButton(object)
  }
///////////////////////////////////
static setTabBarItem(object) {
  return tt.setTabBarItem(object)
}
static setTabBarStyle(object) {
  return tt.setTabBarStyle(object)
}
static hideTabBar(object) {
  return tt.hideTabBar(object)
}
static showTabBar(object) {
  return tt.showTabBar(object)
}
static removeTabBarBadge(object) {
  return tt.removeTabBarBadge(object)
}
static setTabBarBadge(object) {
  return tt.setTabBarBadge(object)
}
static hideTabBarRedDot(object) {
  return tt.hideTabBarRedDot(object)
}
static showTabBarRedDot(object) {
  return tt.showTabBarRedDot(object)
  
}
static onTabBarMidButtonTap(CALLBACK){
  console.alert("本平台暂不支持onTabBarMidButtonTap")
}
///////////////////////////////////////////////
static setBackgroundTextStyle(object) {
    // return tt.setBackgroundTextStyle(object)
      console.alert("本平台暂不支持setBackgroundTextStyle")

  }
  static setBackgroundColor(object) {
    // return tt.setBackgroundColor(object)
      console.alert("本平台暂不支持setBackgroundColor")

  }
   /////////////////// animation //////////////////////////
   static createAnimation(object) {
    return tt.createAnimation(object);
  }
/////////////////////滚动//////////////////
static pageScrollTo(object) {
  return tt.pageScrollTo(object)
}
//////////////////窗口////////////////////////
static offWindowResize(object) {
 // return tt.offWindowResize(object)
       console.alert("本平台暂不支持offWindowResize")

}
static onWindowResize(object) {
  //return tt.onWindowResize(object)
        console.alert("本平台暂不支持onWindowResize")

  
}
/////////////////字体/////////////////////////
static loadFontFace(object) {
  //return tt.loadFontFace(object)
 console.alert("本平台暂不支持onWindowResize")

}
/////////////////下拉/////////////////////////
static PullDownRefresh() {
  return tt.startPullDownRefresh();
}
static stopPullDownRefresh() {
  return tt.stopPullDownRefresh();
}
static startPullDownRefresh(object) {
  return tt.startPullDownRefresh(object);
}
//////////////////////////////////////////
static createOffscreenCanvas() {
  // return tt.createOffscreenCanvas();
  console.alert("本平台不支持createOffscreenCanvas")
}
static createContext() {
  return new Context();
}
static createCanvasContext(canvasId,ui) {
  //return new CanvasContext(tt.createCanvasContext(canvasId));
    console.alert("本平台不支持createCanvasContext")

}
static canvasToTempFilePath(object) {
 // return tt.canvasToTempFilePath(object);
    console.alert("本平台不支持canvasToTempFilePath")

}
static canvasPutImageData(object) {
  //return tt.canvasPutImageData(object)
    console.alert("本平台不支持canvasPutImageData")

};
static canvasGetImageData(object) {
 // return tt.canvasGetImageData(object)
    console.alert("本平台不支持canvasGetImageData")

};
////////////////////////广告//////////////////
static createRewardedVideoAd(object){
  //return tt.createRewardedVideoAd(object)
      console.alert("本平台不支持createRewardedVideoAd")

}
static createInterstitialAd(object){
  //return tt.createInterstitialAd(object)
      console.alert("本平台不支持createInterstitialAd")

}
////////////////////////////////
static requestSubscribeMessage(object){//订阅消息
  return requestSubscribeMessage(object)
}
//////////////////////////////////////////
  static setNavigationBarTitle(object) {
    return tt.setNavigationBarTitle(object);
  };

  
  static setTopBarText(object) {
    return tt.setTopBarText(object)
  }
  static nextTick(object) {
    return tt.nextTick(object)
  }
  static getMenuButtonBoundingClientRect(object) {
    return tt.getMenuButtonBoundingClientRect(object)
  }
 

static stopVoice(object) {
  return tt.stopVoice(object)
}
static pauseVoice(object) {
  return tt.pauseVoice(object)
}
static playVoice(object) {
  return tt.playVoice(object)
}
static setInnerAudioOption(object) {
  return tt.setInnerAudioOption(object)
}
static getAvailableAudioSources(object) {
  return tt.getAvailableAudioSources(object)
}

static createAudioContext(object) {
  return tt.createAudioContext(object)
}
static onBackgroundAudioStop(object) {
  return tt.onBackgroundAudioStop(object)
}
static onBackgroundAudioPause(object) {
  return tt.onBackgroundAudioPause(object)
}
static onBackgroundAudioPlay(object) {
  return tt.onBackgroundAudioPlay(object)
}
static stopBackgroundAudio(object) {
  return tt.stopBackgroundAudio(object)
}
static seekBackgroundAudio(object) {
  return tt.seekBackgroundAudio(object)
}
static pauseBackgroundAudio(object) {
  return tt.pauseBackgroundAudio(object)
}
static playBackgroundAudio(object) {
  return tt.playBackgroundAudio(object)
}
static getBackgroundAudioPlayerState(object) {
  return tt.getBackgroundAudioPlayerState(object)
}



static createInnerAudioContext(audioId,ui) {
  return new InnerAudioContext(tt.createInnerAudioContext(audioId));
}

static createVideoContext(videoId,ui) { 
  return new VideoContext(tt.createVideoContext(videoId)); 
}





  ////////////// WXML ///////////////
  static createSelectorQuery(object) {
    return tt.createSelectorQuery(object)
  }
  static createIntersectionObserver(object) {
    return tt.createIntersectionObserver(object)
  }
  ///////////////////////////
 static getSubNVueById(subNvueId){
  console.alert("暂不支持getSubNVueById")
}
static getCurrentSubNVue(){
  console.alert("暂不支持getCurrentSubNVue")

}
static requireNativePlugin(PluginName){
  console.alert("暂不支持getCurrentSubNVue")

}

static report( eventName , options){//统计
  return tt.reportAnalytics(eventName,options)
}
static getProvider(object){
  console.alert("本平台不支持getProvider")
}
  ///////////////////////////////////
  static createARCameraContext(object) {
    throw new Error("createARCameraContext�ݲ�֧��!!")
  }
}
uni.ai = {};
for (var api of ["ocrIdCard", "ocrBankCard", "ocrDrivingLicense", "ocrVehicleLicense", "textReview", "textToAudio", "imageAudit", "advancedGeneralIdentify", "objectDetectIdentify", "carClassify", "dishClassify", "logoClassify", "animalClassify", "plantClassify", "getVoiceRecognizer", "faceDetect", "faceMatch", "faceSearch", "facePersonVerify", "facePersonIdmatch", "faceLivenessSessioncode", "nlpLexerCustom"]) {
  ai_init(api);
}

function ai_init(api) {
 uni.ai[api] = (object) => {
    return uni_ai.run(api, object);
  }
}

