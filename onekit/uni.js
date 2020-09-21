export default class uni {
 
  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(base64) {
    return swan.base64ToArrayBuffer(base64);
  }
  static arrayBufferToBase64(arrayBuffer) {
    return swan.arrayBufferToBase64(arrayBuffer);
  }
  static getUpdateManager(object) {
    return swan.getUpdateManager(object);
  }
  static getLaunchOptionsSync(object) {
    return swan.getLaunchOptionsSync(object);
  }
 
  static onPageNotFound(object) {
    return swan.onPageNotFound(object);
  }
  static onError(object) {
    return swan.onError(object);
  }
  static onAppShow(object) {
    return swan.onAppShow(object);
  }
  static onAppHide(object) {
    return swan.onAppHide(object);
  }
  static offPageNotFound(object) {
    return swan.offPageNotFound(object);
  }
  static offError(object) {
    return swan.offError(object);
  }

  static offAppShow(object) {
    return swan.offAppShow(object);
  }
  
  static offAppHide(object) {
    return swan.offAppHide(object);
  }

  static setEnableDebug(object) {
    return swan.setEnableDebug(object);
  }
  static getLogManager(object) {
    return swan.getLogManager(object);
  }
//
  static writeBLECharacteristicValue(object) {
    return swan.writeBLECharacteristicValue(object);
  }
  static readBLECharacteristicValue(object) {
    return swan.readBLECharacteristicValue(object);
  }
  static onBLEConnectionStateChange(object) {
    return swan.onBLEConnectionStateChange(object);
  }
  static onBLECharacteristicValueChange(object) {
    return swan.onBLECharacteristicValueChange(object);
  }
  static notifyBLECharacteristicValueChange(object) {
    return swan.notifyBLECharacteristicValueChange(object);
  }
  static getBLEDeviceServices(object) {
    return swan.getBLEDeviceServices(object);
  }
  static getBLEDeviceCharacteristics(object) {
    return swan.getBLEDeviceCharacteristics(object);
  }
  static createBLEConnection(object) {
    return swan.createBLEConnection(object);
  }
  static closeBLEConnection(object) {
    return swan.closeBLEConnection(object);
  }
 
  //

 
  /////////////////// Ext //////////////
  static getExtConfigSync(object) {
    return swan.getExtConfigSync(object)
  }
  static getExtConfig(object) {
    return swan.getExtConfig(object)
  }
  //////////////////// File //////////
  static getFileSystemManager(object) {
    return swan.getFileSystemManager(object)
  }
  static getFileInfo(object) {
    return swan.getFileInfo(object)
  }
  static removeSavedFile(object) {
    return swan.removeSavedFile(object)
  }
  static getSavedFileInfo(object) {
    return swan.getSavedFileInfo(object)
  }
  static getSavedFileList(object) {
    return swan.getSavedFileList(object)
  }
  static openDocument(object) {
    return swan.openDocument(object)
  }
  static saveFile(object) {
    return swan.saveFile(object);
  } 
  //////////////// Network ///////////////
  static request(object) {
    return swan.request(object);
  }
  static downloadFile(object) {
    return swan.downloadFile(object)
  }
  static uploadFile(object) {
    return swan.uploadFile(object)
  }
  //////////////////////////////websocket///////////////////////////////////////
  static connectSocket(object) {
    return swan.connectSocket(object)
  }
  static onSocketError(object) {
    return swan.onSocketError(object)
  }
  static onSocketMessage(object) {
    return swan.onSocketMessage(object)
  }
  static onSocketClose(object) {
    return swan.onSocketClose(object)
  }
  static onSocketOpen(object) {
    return swan.connectSocket(object)
  }
  static sendSocketMessage(object) {
    return swan.sendSocketMessage(object)
  }
  static closeSocket(object) {
    return swan.closeSocket(object)
  }

  ////////////////////////////////mDNS////////////////////////////////////////////
  static stopLocalServiceDiscovery(object) {
    return swan.stopLocalServiceDiscovery(object);
  }
  static startLocalServiceDiscovery(object) {
    return swan.startLocalServiceDiscovery(object);
  }
  static onLocalServiceResolveFail(callback) {
    return swan.onLocalServiceResolveFail(callback);
  }
  static onLocalServiceLost(callback) {
    return swan.onLocalServiceLost(callback);
  }
  static onLocalServiceFound(callback) {
    return swan.onLocalServiceFound(callback);
  }
  static onLocalServiceDiscoveryStop(callback) {
    return swan.onLocalServiceDiscoveryStop(callback);
  }
  static offLocalServiceResolveFail(callback) {
    return swan.offLocalServiceResolveFail(callback);
  }
  static offLocalServiceLost(callback) {
    return swan.offLocalServiceLost(callback);
  }
  static offLocalServiceFound(callback) {
    return swan.offLocalServiceFound(callback);
  }
  static offLocalServiceDiscoveryStop(callback) {
    return swan.offLocalServiceDiscoveryStop(callback);
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket(){
    return swan.createUDPSocket();
  }
  ///////// Open Interface ///////////////////////////////////////////////
  static checkSession() {
    var now = new Date().getTime();
    return getApp().onekitswan._jscode && getApp().onekitswan._login && now <= getApp().onekitswan._login + 1000 * 60 * 60 * 24 * 3;
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
  static login = function(object) {
    var that = this;
    if (!object) {
      return swan.login(object);
    }
    var object2 = {};
    object2.success = function(res) {
      getApp().onekitswan._code = res.code;
      getApp().onekitswan._login = new Date().getTime();
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
        code: getApp().onekitswan._code
      });
    } else {
      swan.login(object2);
    }
  };
  static requestPolymerPayment = function(object) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitswan.server + "orderinfo";
        swan.request({
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
            swan.requestPayment({
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
        var url = getApp().onekitswan.server + "userinfo";
        swan.request({
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
    getApp().onekitswan.getuserinfo = (data) => {
     uni._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, true);
    }
    swan.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekitswan.opendata = opendata;
      getApp().onekitswan.opendataCallbacks = [];
      for (var cb = 0; cb < getApp().onekitswan.opendataCallbacks.length; cb++) {
        getApp().onekitswan.opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekitswan.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekitswan.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekitswan.opendata = {};
   uni.login({
      success(res) {
        var code = res.code;
       uni.getUserInfo({
          success(res) {
            var url = getApp().onekitswan.server + "userinfo";
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
        var url = getApp().onekitswan.server + "phonenumber";
        swan.request({
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
    return swan.navigateToMiniProgram(object)
  }
  static navigateBackMiniProgram(object) {
    return swan.navigateBackMiniProgram(object)
  }
  static getAccountInfoSync(object) {
    return swan.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return swan.reportMonitor(object)
  }
  static reportAnalytics(object, eventName) {
    return swan.reportAnalytics(object, eventName)
  }
  static requestPayment(object) {
    return swan.requestPayment(object);
  }
  static authorize(object) {
    return swan.authorize(object)
  }
  static openSetting(object) {
    return swan.openSetting(object)
  }
  static getSetting(object) {
    return swan.getSetting(object)
  }
  static chooseAddress(object) {
    return swan.chooseAddress(object)
  }
  static openCard(object) {
    return swan.openCard(object);
  }
  static chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object)
  }
  static addCard = function(object) {
    return swan.addCard(object);
  }
  
  static chooseInvoice(object) {
    return swan.chooseInvoice(object)
  }

  static getWeRunData(object) {
    return swan.getWeRunData(object)
  }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    swan.httpRequest({
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
  static navigateTo(object) {
    return swan.navigateTo(object);
  }
  static redirectTo(object) {
    return swan.redirectTo(object);
  }
  static reLaunch(object) {
    return swan.reLaunch(object);
  }
  static switchTab(object) {
    return swan.switchTab(object);
  }
  static navigateBack(object) {
    return swan.navigateBack(object);
  }
 
  ///////////// Share /////////////
  static updateShareMenu(object) {
    return swan.updateShareMenu(object)
  }
  static showShareMenu(object) {
    return swan.showShareMenu(object);
  }
  static hideShareMenu(object) {
    return swan.hideShareMenu(object)
  }
  static getShareInfo(object) {
    return swan.getShareInfo(object)
  }
  ////////数据缓存/////// Storage //////////////
  static setStorage(object) {
    return swan.setStorage(object)
  }
  static setStorageSync(key, value) {
    return swan.setStorageSync(key, value)
  }
  static getStorage(object) {
    return swan.getStorage(object)
  }
  static getStorageSync(key) {
    return swan.getStorageSync(key);
  }
  static getStorageInfo(object) {
    return swan.getStorageInfo(object)
  }
  static getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object)
  }
  static removeStorage(object) {
    return swan.removeStorage(object)
  }
  static removeStorageSync(object) {
    return swan.removeStorageSync(object)
  }
  static clearStorage(object) {
    return swan.clearStorage(object)
  }
  static clearStorageSync(object) {
    return swan.clearStorageSync(object)
  }
    /////////位置/// Location ///////////////
    static getLocation(object) {
      return swan.getLocation(object)
    }
    static chooseLocation(object) {
      return swan.chooseLocation(object)
    }
    static openLocation(object) {
      return swan.openLocation(object)
    }
    static createMapContext(object) {
      return swan.createMapContext(object)
    }
 ///////////////////////媒体///////////// Media //////////////////////////////////////
                ///////////////////图片/////image///////////////////////////////
 static chooseImage(object) {
  return swan.chooseImage(object);
}
static previewImage(object) {
  return swan.previewImage(object)
}
static getImageInfo(object) {
  return swan.getImageInfo(object)
}
static saveImageToPhotosAlbum(object) {
  return swan.saveImageToPhotosAlbum(object)
}
 static compressImage(object) {
  return swan.compressImage(object)
}
static chooseMessageFile(object){
  return swan.chooseMessageFile(object)
}
                    /////////////////////////////录音/////////////////////////////////////////
static getRecorderManager(object) {
  return swan.getRecorderManager(object)
}
                    ////////////////////////背景音频///////////////////////////////
static getBackgroundAudioManager(object) {
  return swan.getBackgroundAudioManager(object)
}
                    ////////////////////////音频组件控制///////////////////////////////
static createInnerAudioContext(object) {
  return swan.createInnerAudioContext(object)
}
                    ////////////////////////视频///////////////////////////////

static chooseVideo(object) {
  return swan.chooseVideo(object)
}
static chooseMedia(object) {
  return swan.chooseMedia(object)
}
static saveVideoToPhotosAlbum(object) {
  return swan.saveVideoToPhotosAlbum(object)
}
static getVideoInfo(object){
  return swan.getVideoInfo(object)
}
static compressVideo(object){
  return swan.compressVideo(object)
}
static openVideoEditor(object){
  return swan.openVideoEditor(object)
}
                    ////////////////////////视频，相机，直播组件控制///////////////////////////////
static createVideoContext(object) {
  return swan.createVideoContext(object)
}
static createCameraContext(cameraId,ui) {
  return new CameraContext(swan.createCameraContext(cameraId));
} 
static createLivePlayerContext(playerId,ui) {
  return new LivePlayerContext(swan.createLivePlayerContext(playerId));
}
static createLivePusherContext(object) {
  return swan.createLivePusherContext(object)
}
static createMediaContainer(){
  return swan.createMediaContainer()
}
/////////////////////////系统信息//////////////////////////////
static getSystemInfo(object) {
  return swan.getSystemInfo(object);
}
static getSystemInfoSync() {
  return swan.getSystemInfoSync();
}
static canIUse(object) {
  return true;
}
//////////////////////////////内存/////////////////////////////
static onMemoryWarning(object) {
  return swan.onMemoryWarning(object);
}
/////////////////////////////网络状态/////////////////////////////
static getNetworkType = function(object) {
  return swan.getNetworkType(object);
}
static _network = function(res) {
  return swan._network(object);
}
static onNetworkStatusChange(callback) {
  return swan.onNetworkStatusChange(callback);
}
/////////////////////系统主题////////////////////

//////////////////////加速度计////////////////////
static onAccelerometerChange(callback) {
  return swan.onAccelerometerChange(callback);
}
static stopAccelerometer(object) {
  return swan.stopAccelerometer(object);
}
static startAccelerometer(object) {
  return swan.startAccelerometer(object);
}
//////////////////////罗盘////////////////////
static onCompassChange(callback) {
  return swan.onCompassChange(callback);
}
static stopCompass(object) {
  return swan.stopCompass(object);
}
static startCompass(object) {
  return swan.startCompass(object);
}
//////////////////////陀螺仪////////////////////
static onGyroscopeChange(object) {
  return swan.onGyroscopeChange(object);
}
static stopGyroscope(object) {
  return swan.stopGyroscope(object);
}
static startGyroscope(object) {
  return swan.startGyroscope(object);
}
//////////////////////电话////////////////////
static makePhoneCall = function(object) {
  return swan.makePhoneCall(object);
}
//
static scanCode = function(object) {
  return swan.scanCode(object);
}
//
static getClipboardData(object) {
  return swan.getClipboardData(object);
}
static setClipboardData(object) {
  return swan.setClipboardData(object);
}
//
static setScreenBrightness(object) {
  return swan.setScreenBrightness(object);
}
static setKeepScreenOn(object) {
  return swan.setKeepScreenOn(object);
}
static getScreenBrightness(object) {
  return swan.getScreenBrightness(object);
}
//
static onUserCaptureScreen(object) {
  return swan.onUserCaptureScreen(object);
}
//
static vibrate(object){
  return swan.vibrateShort(object);
  }

static vibrateLong(object) {
  return swan.vibrateLong(object);
}
static vibrateShort(object) {
  return swan.vibrateShort(object);
}
//
static addPhoneContact(object) {
  return swan.addPhoneContact(object);
}
///////蓝牙//////
static stopBluetoothDevicesDiscovery(object) { 
   return swan.stopBluetoothDevicesDiscovery(object);
  }
static startBluetoothDevicesDiscovery(object) {
  return swan.startBluetoothDevicesDiscovery(object);
}
static openBluetoothAdapter(object) { 
   return swan.openBluetoothAdapter(object); }
static onBluetoothDeviceFound(object) {
  return swan.onBluetoothDeviceFound(object);
}
static onBluetoothAdapterStateChange(object) {
  return swan.onBluetoothAdapterStateChange(object);
}
static getConnectedBluetoothDevices(object) {
  return swan.getConnectedBluetoothDevices(object);
}
static getBluetoothDevices(object) {
  return swan.getBluetoothDevices(object);
}
static getBluetoothAdapterState(object) {
  return swan.getBluetoothAdapterState(object);
}
static closeBluetoothAdapter(object) {
  return swan.closeBluetoothAdapter(object);
}
////低功耗蓝牙/////
static setBLEMTU(object){
  return swan.setBLEMTU(object)
}
static writeBLECharacteristicValue(object){
  return swan.writeBLECharacteristicValue(object)
}
static readBLECharacteristicValue(object){
  return swan.readBLECharacteristicValue(object)
}
static onBLEConnectionStateChange(object){
  return swan.onBLEConnectionStateChange(object)
}
static onBLECharacteristicValueChange(object){
  return swan.onBLECharacteristicValueChange(object)
}
static notifyBLECharacteristicValueChange(object){
  return swan.notifyBLECharacteristicValueChange(object)
}
static getBLEDeviceServices(object){
  return swan.getBLEDeviceServices(object)
}
static getBLEDeviceRSSI(object){
  return swan.getBLEDeviceRSSI(object)
}
static getBLEDeviceCharacteristics(object){
  return swan.getBLEDeviceCharacteristics(object)
}
static createBLEConnection(object){
  return swan.createBLEConnection(object)
}
static closeBLEConnection(object){
  return swan.closeBLEConnection(object)
}

 ////////////// iBeacon //////////////////
 static onBeaconServiceChange(object) {
  return swan.onBeaconServiceChange(object);
}
static onBeaconUpdate(object) {
  return swan.onBeaconUpdate(object);
}
static getBeacons(object) {
  return swan.getBeacons(object);
}
static stopBeaconDiscovery(object) {
  return swan.stopBeaconDiscovery(object);
}
static startBeaconDiscovery(object) {
  return swan.startBeaconDiscovery(object);
}
//////////////Wi-Fi/////////////
static stopWifi(object) {
  return swan.stopWifi(object);
}
static startWifi(object) {
  return swan.startWifi(object);
}
static setWifiList(object) {
  return swan.setWifiList(object);
}
static onWifiConnected(object) {
  return swan.onWifiConnected(object);
}
static onGetWifiList(object) {
  return swan.onGetWifiList(object);
}
static offWifiConnected(callback){
  return swan.offWifiConnected(callback)
}
static offGetWifiList(callback){
  return swan.offGetWifiList(callback)
}
static getWifiList(object) {
  return swan.getWifiList(object);
}
static getConnectedWifi(object) {
  return swan.getConnectedWifi(object);
}
static connectWifi(object) {
  return swan.connectWifi(object);
}
/////////////////电量/////////////////
static getBatteryInfoSync(object) {
  return swan.getBatteryInfoSync(object);
}
static getBatteryInfo(result) {
  return swan.getBatteryInfo(object);
}
static getBatteryInfo(object) {
  return swan.getBatteryInfo(object);
}
/////////////////////NFC/////////
 static stopHCE(object) {
  return swan.stopHCE(object);
}
static startHCE(object) {
  return swan.startHCE(object);
}
static sendHCEMessage(object) {
  return swan.sendHCEMessage(object);
}
static onHCEMessage(object) {
  return swan.onHCEMessage(object);
}
static offHCEMessage(callback){
return swan.offHCEMessage(callback)
}
static getNFCAdapter(){
  return swan.getNFCAdapter()
}
static getHCEState(object) {
  return swan.getHCEState(object);
}
///////////////////////////

static onDeviceMotionChange(object) {
  return swan.onDeviceMotionChange(object);
}
static stopDeviceMotionListening(object) {
  return swan.stopDeviceMotionListening(object);
}
static startDeviceMotionListening(object) {
  return swan.startDeviceMotionListening(object);
}
static offDeviceMotionChange(callback) {
  return swan.offDeviceMotionChange(callback);
}
////////生物认证////////
static startSoterAuthentication(object) {
  return swan.startSoterAuthentication(object)
}
static checkIsSupportSoterAuthentication(object) {
  return swan.checkIsSupportSoterAuthentication(object)
}
static checkIsSoterEnrolledInDevice(object) {
  return swan.checkIsSoterEnrolledInDevice(object)
}
  ////////////// Worker ///////////////
  static createWorker(path) {
    return new WORKER(path);
  }
  /////////////////键盘////////////////////
  static hideKeyboard(object) {
    return swan.hideKeyboard(object)
  }
  static onKeyboardHeightChange(callback){
    return swan.onKeyboardHeightChange(callback)
  }
//////////////////////设备完////////////////////


  ////////////// UI ////////////////
  static showActionSheet(object) {
    return swan.showActionSheet(object);
  }
 static redirectTo(object) { return swan.redirectTo(object) }
   static redirectTo(object) { return swan.redirectTo(object) }

  static hideLoading() {
    return swan.hideLoading()
  }
  static showLoading(object) {
    return swan.showLoading(object);
  }
  static hideToast() {
    return swan.hideToast();
  }
  static showToast(object) {
    return swan.showToast(object);
  }
  static showModal(object) {
    return swan.showModal(object);
  }
  //////////////////////////////////////
  static setNavigationBarColor(object) {
    return swan.setNavigationBarColor(object)
  }
  static hideNavigationBarLoading(object) {
    return swan.hideNavigationBarLoading(object)
  }
  static showNavigationBarLoading(object) {
    return swan.showNavigationBarLoading(object)
  }
  static hideHomeButton(object){
    return swan.hideHomeButton(object)
  }
///////////////////////////////////
static setTabBarItem(object) {
  return swan.setTabBarItem(object)
}
static setTabBarStyle(object) {
  return swan.setTabBarStyle(object)
}
static hideTabBar(object) {
  return swan.hideTabBar(object)
}
static showTabBar(object) {
  return swan.showTabBar(object)
}
static removeTabBarBadge(object) {
  return swan.removeTabBarBadge(object)
}
static setTabBarBadge(object) {
  return swan.setTabBarBadge(object)
}
static hideTabBarRedDot(object) {
  return swan.hideTabBarRedDot(object)
}
static showTabBarRedDot(object) {
  return swan.showTabBarRedDot(object)
}
///////////////////////////////////////////////
static setBackgroundTextStyle(object) {
    return swan.setBackgroundTextStyle(object)
  }
  static setBackgroundColor(object) {
    return swan.setBackgroundColor(object)
  }
   /////////////////// animation //////////////////////////
   static createAnimation(object) {
    return swan.createAnimation(object);
  }
/////////////////////滚动//////////////////
static pageScrollTo(object) {
  return swan.pageScrollTo(object)
}
//////////////////窗口////////////////////////
static offWindowResize(object) {
  return swan.offWindowResize(object)
}
static onWindowResize(object) {
  return swan.onWindowResize(object)
}
/////////////////字体/////////////////////////
static loadFontFace(object) {
  return swan.loadFontFace(object)
}
/////////////////下拉/////////////////////////
static PullDownRefresh() {
  return swan.startPullDownRefresh();
}
static stopPullDownRefresh() {
  return swan.stopPullDownRefresh();
}
static startPullDownRefresh(object) {
  return swan.startPullDownRefresh(object);
}
//////////////////////////////////////////
static createOffscreenCanvas() {
  return swan.createOffscreenCanvas();
}
static createContext() {
  return new Context();
}
static createCanvasContext(canvasId,ui) {
  return new CanvasContext(swan.createCanvasContext(canvasId));
}
static canvasToTempFilePath(object) {
  return swan.canvasToTempFilePath(object);
}
static canvasPutImageData(object) {
  return swan.canvasPutImageData(object)
};
static canvasGetImageData(object) {
  return swan.canvasGetImageData(object)
};
////////////////////////广告//////////////////
static createRewardedVideoAd(object){
  return swan.createRewardedVideoAd(object)
}
static createInterstitialAd(object){
  return swan.createInterstitialAd(object)
}
////////////////////////////////
static requestSubscribeMessage(object){
  return requestSubscribeMessage(object)
}
//////////////////////////////////////////
  static setNavigationBarTitle(object) {
    return swan.setNavigationBarTitle(object);
  };

  
  static setTopBarText(object) {
    return swan.setTopBarText(object)
  }
  static nextTick(object) {
    return swan.nextTick(object)
  }
  static getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object)
  }
 

static stopVoice(object) {
  return swan.stopVoice(object)
}
static pauseVoice(object) {
  return swan.pauseVoice(object)
}
static playVoice(object) {
  return swan.playVoice(object)
}
static setInnerAudioOption(object) {
  return swan.setInnerAudioOption(object)
}
static getAvailableAudioSources(object) {
  return swan.getAvailableAudioSources(object)
}

static createAudioContext(object) {
  return swan.createAudioContext(object)
}
static onBackgroundAudioStop(object) {
  return swan.onBackgroundAudioStop(object)
}
static onBackgroundAudioPause(object) {
  return swan.onBackgroundAudioPause(object)
}
static onBackgroundAudioPlay(object) {
  return swan.onBackgroundAudioPlay(object)
}
static stopBackgroundAudio(object) {
  return swan.stopBackgroundAudio(object)
}
static seekBackgroundAudio(object) {
  return swan.seekBackgroundAudio(object)
}
static pauseBackgroundAudio(object) {
  return swan.pauseBackgroundAudio(object)
}
static playBackgroundAudio(object) {
  return swan.playBackgroundAudio(object)
}
static getBackgroundAudioPlayerState(object) {
  return swan.getBackgroundAudioPlayerState(object)
}



static createInnerAudioContext(audioId,ui) {
  return new InnerAudioContext(swan.createInnerAudioContext(audioId));
}

static createVideoContext(videoId,ui) { 
  return new VideoContext(swan.createVideoContext(videoId)); 
}





  ////////////// WXML ///////////////
  static createSelectorQuery(object) {
    return swan.createSelectorQuery(object)
  }
  static createIntersectionObserver(object) {
    return swan.createIntersectionObserver(object)
  }
  ///////////////////////////

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