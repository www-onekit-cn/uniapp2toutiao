export default class uni {
 
  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(base64) {
    return tt.base64ToArrayBuffer(base64);
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
    return tt.setEnableDebug(object);
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
    return tt.getExtConfigSync(object)
  }
  static getExtConfig(object) {
    return tt.getExtConfig(object)
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
    return tt.getSavedFileInfo(object)
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
    return tt.stopLocalServiceDiscovery(object);
  }
  static startLocalServiceDiscovery(object) {
    return tt.startLocalServiceDiscovery(object);
  }
  static onLocalServiceResolveFail(callback) {
    return tt.onLocalServiceResolveFail(callback);
  }
  static onLocalServiceLost(callback) {
    return tt.onLocalServiceLost(callback);
  }
  static onLocalServiceFound(callback) {
    return tt.onLocalServiceFound(callback);
  }
  static onLocalServiceDiscoveryStop(callback) {
    return tt.onLocalServiceDiscoveryStop(callback);
  }
  static offLocalServiceResolveFail(callback) {
    return tt.offLocalServiceResolveFail(callback);
  }
  static offLocalServiceLost(callback) {
    return tt.offLocalServiceLost(callback);
  }
  static offLocalServiceFound(callback) {
    return tt.offLocalServiceFound(callback);
  }
  static offLocalServiceDiscoveryStop(callback) {
    return tt.offLocalServiceDiscoveryStop(callback);
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket(){
    return tt.createUDPSocket();
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
  static login = function(object) {
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
    return tt.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return tt.reportMonitor(object)
  }
  static reportAnalytics(object, eventName) {
    return tt.reportAnalytics(object, eventName)
  }
  static requestPayment(object) {
    return tt.requestPayment(object);
  }
  static authorize(object) {
    return tt.authorize(object)
  }
  static openSetting(object) {
    return tt.openSetting(object)
  }
  static getSetting(object) {
    return tt.getSetting(object)
  }
  static chooseAddress(object) {
    return tt.chooseAddress(object)
  }
  static openCard(object) {
    return tt.openCard(object);
  }
  static chooseInvoiceTitle(object) {
    return tt.chooseInvoiceTitle(object)
  }
  static addCard = function(object) {
    return tt.addCard(object);
  }
  
  static chooseInvoice(object) {
    return tt.chooseInvoice(object)
  }

  static getWeRunData(object) {
    return tt.getWeRunData(object)
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
  static navigateTo(object) {
    return tt.navigateTo(object);
  }
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
      return tt.chooseLocation(object)
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
  return tt.chooseMessageFile(object)
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
  return tt.chooseMedia(object)
}
static saveVideoToPhotosAlbum(object) {
  return tt.saveVideoToPhotosAlbum(object)
}
static getVideoInfo(object){
  return tt.getVideoInfo(object)
}
static compressVideo(object){
  return tt.compressVideo(object)
}
static openVideoEditor(object){
  return tt.openVideoEditor(object)
}
                    ////////////////////////视频，相机，直播组件控制///////////////////////////////
static createVideoContext(object) {
  return tt.createVideoContext(object)
}
static createCameraContext(cameraId,ui) {
  return new CameraContext(tt.createCameraContext(cameraId));
} 
static createLivePlayerContext(playerId,ui) {
  return new LivePlayerContext(tt.createLivePlayerContext(playerId));
}
static createLivePusherContext(object) {
  return tt.createLivePusherContext(object)
}
static createMediaContainer(){
  return tt.createMediaContainer()
}
/////////////////////////系统信息//////////////////////////////
static getSystemInfo(object) {
  return tt.getSystemInfo(object);
}
static getSystemInfoSync() {
  return tt.getSystemInfoSync();
}
static canIUse(object) {
  return true;
}
//////////////////////////////内存/////////////////////////////
static onMemoryWarning(object) {
  return tt.onMemoryWarning(object);
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
  return tt.onGyroscopeChange(object);
}
static stopGyroscope(object) {
  return tt.stopGyroscope(object);
}
static startGyroscope(object) {
  return tt.startGyroscope(object);
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
  return tt.addPhoneContact(object);
}
///////蓝牙//////
static stopBluetoothDevicesDiscovery(object) { 
   return tt.stopBluetoothDevicesDiscovery(object);
  }
static startBluetoothDevicesDiscovery(object) {
  return tt.startBluetoothDevicesDiscovery(object);
}
static openBluetoothAdapter(object) { 
   return tt.openBluetoothAdapter(object); }
static onBluetoothDeviceFound(object) {
  return tt.onBluetoothDeviceFound(object);
}
static onBluetoothAdapterStateChange(object) {
  return tt.onBluetoothAdapterStateChange(object);
}
static getConnectedBluetoothDevices(object) {
  return tt.getConnectedBluetoothDevices(object);
}
static getBluetoothDevices(object) {
  return tt.getBluetoothDevices(object);
}
static getBluetoothAdapterState(object) {
  return tt.getBluetoothAdapterState(object);
}
static closeBluetoothAdapter(object) {
  return tt.closeBluetoothAdapter(object);
}
////低功耗蓝牙/////
static setBLEMTU(object){
  return tt.setBLEMTU(object)
}
static writeBLECharacteristicValue(object){
  return tt.writeBLECharacteristicValue(object)
}
static readBLECharacteristicValue(object){
  return tt.readBLECharacteristicValue(object)
}
static onBLEConnectionStateChange(object){
  return tt.onBLEConnectionStateChange(object)
}
static onBLECharacteristicValueChange(object){
  return tt.onBLECharacteristicValueChange(object)
}
static notifyBLECharacteristicValueChange(object){
  return tt.notifyBLECharacteristicValueChange(object)
}
static getBLEDeviceServices(object){
  return tt.getBLEDeviceServices(object)
}
static getBLEDeviceRSSI(object){
  return tt.getBLEDeviceRSSI(object)
}
static getBLEDeviceCharacteristics(object){
  return tt.getBLEDeviceCharacteristics(object)
}
static createBLEConnection(object){
  return tt.createBLEConnection(object)
}
static closeBLEConnection(object){
  return tt.closeBLEConnection(object)
}

 ////////////// iBeacon //////////////////
 static onBeaconServiceChange(object) {
  return tt.onBeaconServiceChange(object);
}
static onBeaconUpdate(object) {
  return tt.onBeaconUpdate(object);
}
static getBeacons(object) {
  return tt.getBeacons(object);
}
static stopBeaconDiscovery(object) {
  return tt.stopBeaconDiscovery(object);
}
static startBeaconDiscovery(object) {
  return tt.startBeaconDiscovery(object);
}
//////////////Wi-Fi/////////////
static stopWifi(object) {
  return tt.stopWifi(object);
}
static startWifi(object) {
  return tt.startWifi(object);
}
static setWifiList(object) {
  return tt.setWifiList(object);
}
static onWifiConnected(object) {
  return tt.onWifiConnected(object);
}
static onGetWifiList(object) {
  return tt.onGetWifiList(object);
}
static offWifiConnected(callback){
  return tt.offWifiConnected(callback)
}
static offGetWifiList(callback){
  return tt.offGetWifiList(callback)
}
static getWifiList(object) {
  return tt.getWifiList(object);
}
static getConnectedWifi(object) {
  return tt.getConnectedWifi(object);
}
static connectWifi(object) {
  return tt.connectWifi(object);
}
/////////////////电量/////////////////
static getBatteryInfoSync(object) {
  return tt.getBatteryInfoSync(object);
}
static getBatteryInfo(result) {
  return tt.getBatteryInfo(object);
}
static getBatteryInfo(object) {
  return tt.getBatteryInfo(object);
}
/////////////////////NFC/////////
 static stopHCE(object) {
  return tt.stopHCE(object);
}
static startHCE(object) {
  return tt.startHCE(object);
}
static sendHCEMessage(object) {
  return tt.sendHCEMessage(object);
}
static onHCEMessage(object) {
  return tt.onHCEMessage(object);
}
static offHCEMessage(callback){
return tt.offHCEMessage(callback)
}
static getNFCAdapter(){
  return tt.getNFCAdapter()
}
static getHCEState(object) {
  return tt.getHCEState(object);
}
///////////////////////////

static onDeviceMotionChange(object) {
  return tt.onDeviceMotionChange(object);
}
static stopDeviceMotionListening(object) {
  return tt.stopDeviceMotionListening(object);
}
static startDeviceMotionListening(object) {
  return tt.startDeviceMotionListening(object);
}
static offDeviceMotionChange(callback) {
  return tt.offDeviceMotionChange(callback);
}
////////生物认证////////
static startSoterAuthentication(object) {
  return tt.startSoterAuthentication(object)
}
static checkIsSupportSoterAuthentication(object) {
  return tt.checkIsSupportSoterAuthentication(object)
}
static checkIsSoterEnrolledInDevice(object) {
  return tt.checkIsSoterEnrolledInDevice(object)
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
    return tt.onKeyboardHeightChange(callback)
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
///////////////////////////////////////////////
static setBackgroundTextStyle(object) {
    return tt.setBackgroundTextStyle(object)
  }
  static setBackgroundColor(object) {
    return tt.setBackgroundColor(object)
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
  return tt.offWindowResize(object)
}
static onWindowResize(object) {
  return tt.onWindowResize(object)
}
/////////////////字体/////////////////////////
static loadFontFace(object) {
  return tt.loadFontFace(object)
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
  return tt.createOffscreenCanvas();
}
static createContext() {
  return new Context();
}
static createCanvasContext(canvasId,ui) {
  return new CanvasContext(tt.createCanvasContext(canvasId));
}
static canvasToTempFilePath(object) {
  return tt.canvasToTempFilePath(object);
}
static canvasPutImageData(object) {
  return tt.canvasPutImageData(object)
};
static canvasGetImageData(object) {
  return tt.canvasGetImageData(object)
};
////////////////////////广告//////////////////
static createRewardedVideoAd(object){
  return tt.createRewardedVideoAd(object)
}
static createInterstitialAd(object){
  return tt.createInterstitialAd(object)
}
////////////////////////////////
static requestSubscribeMessage(object){
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