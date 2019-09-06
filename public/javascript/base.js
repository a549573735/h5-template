var xxEvents = ('ontouchstart' in window) ? { start: 'touchstart', move: 'touchmove', end: 'touchend'} : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };
var _xx = _xx || {};
_xx.bgMp3 = function () {
    //背景音乐
    let isPlay=false;
    _xx.oMedia = $('#media')[0];
    try {
        document.addEventListener("WeixinJSBridgeReady", function() {
            WeixinJSBridge.invoke('getNetworkType', {}, function() {
                _xx.oMedia.play();
            })
        }, false);
    } catch (e) {
    }

    // _xx.oMedia.addEventListener('play',()=>{
    //     isPlay=true;
    //     // $('.music').removeClass('music-stop');
    // })

    // _xx.oMedia.addEventListener('pause',()=>{
    //     isPlay=false;       
    //     // $('.music').addClass('music-stop');
    // })



}

;(function(){
    //页面跳转控制
    var pNow=null,pLast=null,pMark=null,z=2;
    var moveEnd=null;
    _xx.pageTo=function(toPage,complete){
        moveEnd=complete;
        pLast=pNow;
        pNow=toPage;
        if(pNow==pLast) return;
        z++;
        $(pNow).css('zIndex',z).show();
        $(pLast).hide().removeClass('page-on');
    }
})();


_xx.delayImg = function () {
    var aImg = $('img[_src0]');
    var _length = aImg.length;
    for (var i = 0; i < _length; i++) {
        aImg[i].src = aImg.eq(i).attr('_src0');
    }
}

_xx.rand=function (a, b) {
    return ~~ (Math.random() * (b - a + 1) + a)
};

module.exports = _xx;
