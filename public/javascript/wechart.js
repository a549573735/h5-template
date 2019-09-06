var App = {}

App.shareData = {
    'title': '一分钟测试你活得体面or油腻',
    'description': '你的体面指数打败了99%的油腻群众',
    'image': 'https://' + location.hostname + '/timian/assets/images/share.jpg'
};


/*初始化微信分享*/
App.initWeChatMothed = function() {
    var urlx = location.href.split('#')[0];
    var urla = encodeURIComponent(urlx);
    $.post('https://validation.energytrust.com.cn/?s=/Admin/Wx/ajaxWxqm&jsonpcallback=?', {
        url: urla
    }, function(data) {
        wx.config({
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.wxnonceStr,
            signature: data.wsSha1,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'chooseImage',
                'hideAllNonBaseMenuItem',
                'uploadImage',
                'startRecord',
                'stopRecord',
                'translateVoice',
                'addCard',
                'chooseCard',
                'openCard',
                'hideOptionMenu',
                'showOptionMenu',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem'
            ]
        });
        wx.error(function(res) {
            $.scojs_message(res.errMsg, $.scojs_message.TYPE_ERROR);
        });
    }, 'jsonp');
};
App.initWeChatShare = function(applink) {
    wx.ready(function() {
        wx.onMenuShareAppMessage({
            title: App.shareData.title,
            desc: App.shareData.description,
            link: App.shareData.link,
            imgUrl: App.shareData.image,
            type: 'link',
            trigger: function(res) {},
            success: function(res) { _hmt.push(['_trackEvent', 'button', `yaoqing8`, 'click']) },
            cancel: function(res) {},
            fail: function(res) {}
        });
        wx.onMenuShareTimeline({
            title: App.shareData.title,
            link: App.shareData.link,
            imgUrl: App.shareData.image,
            trigger: function(res) {},
            success: function(res) { _hmt.push(['_trackEvent', 'button', `yaoqing8`, 'click']) },
            cancel: function(res) {},
            fail: function(res) {}
        });
    });
}



module.exports=App;

