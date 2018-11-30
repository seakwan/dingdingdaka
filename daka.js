function _log(msg) {
    log(msg);
}

function _sleep(time) {
    time = time || 200;
    sleep(time);
}

function _wakeUp() {
    device.wakeUp();
    _log('wakeup');
}

function _unLocking() {
    var width = device.width;
    var height = device.height;
    Swipe(width * 0.5, height * 0.8, width * 0.5, height * 0.2, 200);
    _log('unlock');
}

function _openApp() {
    var appName = '钉钉';
    launchApp(appName);
    _log('openapp');
}

function _clickWork() {
    className('android.widget.FrameLayout').desc('工作').waitFor();
    var b = className('android.widget.FrameLayout').desc('工作').findOne().bounds();
    Tap(b.centerX(), b.centerY());
    _log('clickwork');
}

function _clickQiandao() {
    text('考勤打卡').waitFor();
    var b = text('考勤打卡').findOne().bounds();
    Tap(b.centerX(), b.centerY());
    _log('clickqiandao');
}

function _upClick() {
    desc('上班打卡').waitFor();
    var b = desc('上班打卡').bounds();
    Tap(b.centerX(), b.centerY());
    _log('upclick');
}

function _downClick() {
    desc('下班打卡').waitFor();
    var b = desc('下班打卡').bounds();
    Tap(b.centerX(), b.centerY());
    _log('downclick');
}

function _closeApp() {
    openAppSetting(getPackageName('钉钉'));
    text('强行停止').waitFor();
    var b = text('强行停止').findOne().bounds();
    Tap(b.centerX(), b.centerY());
    _sleep(1000);
    text('确定').waitFor();
    var b = text('确定').findOne().bounds();
    Tap(b.centerX(), b.centerY());
    _log('closeapp');
}

function _click(x, y) {
    Tap(x, y);
}

function _lock() {
    Power();
    _log('lock');
}

function _check() {

}

function _home() {
    Home();
    _log('home');
}

function _menu() {
    Menu();
    _log('menu');
}

log('start');
_wakeUp();
_sleep(1000);
_unLocking();
_sleep(1000);
_openApp();
_sleep(10000);
_clickWork();
_sleep(10000);
_clickQiandao();
_sleep(20000);
_upClick();
_sleep(20000);
_closeApp();
_lock();

engines.stopAll();