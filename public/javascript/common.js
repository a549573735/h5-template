class MyCommon {
    constructor() {
        this.parames = {
            btnMusiz: $('.muisc'),
            startComMusiz: true,
            modal_hide_btn: $('.my-modal-close-btn'),
            modal_show_btn: $('.my-modal-btn'),
            modal: $('.my-modal'),

        }
        this.init();
    }
    init() {
        this.showModal();
        this.hideModal();
        this.testingBtn()
        this.stopTouchMove();
        this.orientationChange();
        this.resInputScrollTop()
        window.addEventListener('orientationchange', this.orientationChange);
    }

    // 设置音乐 开关
    ToggleMusic() {
        var that = this;
        this.parames.btnMusiz.on('click', function () {
            if (that.parames.startComMusiz) {
                window.oComA.pause()
                $(this).children().css('opacity', '0')
            } else {
                window.oComA.play()
                $(this).children().css('opacity', '1')
            }
            that.parames.startComMusiz = !that.parames.startComMusiz;
        })
    }


    // 补零
    addZero() {
        return num > 9 ? num : '0' + num
    }

    // 查看时横屏还是竖屏
    orientationChange() {
        switch (window.orientation) {
            case 180:
            case 0:
                $(".landscape").hide();
                break;
            case 90:
            case -90:
                $(".landscape").show();
                break;
        }
    }
    //  禁止拖动页面
    stopTouchMove() {
        document.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        },{passive:false})
    }
    //  获取 url seach 值
    GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }
    //  公用弹框的 方法    显示 弹框
    showModal() {
        this.parames.modal_show_btn.on('click', function () {
            var modalClass = $(this).attr('data-target')
            var zIndex = $(this).attr('data-zIndex')
            if (zIndex == 'true') {
                $(modalClass).addClass('my-modal-show-zindex');
            } else {
                $(modalClass).addClass('my-modal-show');
            }
        })
    }
    //  公用弹框的 方法    关闭 弹框
    hideModal() {
        this.parames.modal_hide_btn.on('click', function () {
            $(this).closest('.my-modal').removeClass('my-modal-show').removeClass('my-modal-show-zindex')
        })
    }
    //  公用弹框的 方法    关闭所有 弹框
    hideAllModal() {
        this.parames.modal.find('.my-block').each(function (index, item) {
            item.addEventListener('click', function (ev) {
                if ($(ev.target).attr('data-modal') == 'true') {
                    $(this).closest('.my-modal').removeClass('my-modal-show').removeClass('my-modal-show-zindex')
                }
            })
        })
    }


    //  公用提示 的 方法     提示信息弹框
    tosast(text) {
        $('.my-modal-toast').addClass('my-toast-active').children().html(text)
        setTimeout(function () {
            $('.my-modal-toast').removeClass('my-toast-active')
        }, 2000)
    }
    //  用来做百度监测的  触发方法
    testingBtn() {
        $('[data-type]').on('click', function () {
            var type = $(this).attr('data-type');
            var event = $(this).attr('data-event');
            _hmt.push(['_trackEvent', 'button', type, event])
        })
    }

    //  用来设置音乐
    setComMusiz(src) {
        window.localStorage.isMusic == 'true';
        window.oComA = new Audio();
        window.oComA.src = src;
        window.oComA.controls = true;
        window.oComA.play();
        window.oComA.autoplay = true;
        window.oComA.loop = "loop";
        window.isMusic = true;
        try {
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function () {
                    window.oComA.play();
                })
            }, false);
        } catch (e) {

        }
    }

    setComMusizs(obj) {

        window[obj.name] = new Audio();
        window[obj.name].src = obj.src;
        window[obj.name].controls = true;
        window[obj.name].play();
        try {
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function () {
                    window[obj.name].play();
                    if (obj.stop) {
                        window[obj.name].pause();
                    }
                })
            }, false);
        } catch (e) {

        }
    }


    resInputScrollTop() {
  
        $("input,select").blur(function () {
        
            setTimeout(function () {
                var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                window.scrollTo(0, Math.max(scrollHeight - 1, 0));
               // console.log(window.scrollY);
            }, 100);
            
        })
     
    }


    //判断是否是安卓
    getAdr() {
        var u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }

    checkInputEmpty(inputs) {
        var count = 0;
        $(inputs).each(function (index, val) {
            if ($(val).val() == '') {
                count++
            }
        })
        return count != 0
    }

    checkPhone(input) {
        var reg = /^(0|86|17951)?(1[3-9][0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if (reg.test(input.val())) {
            return false;
        } else {
            return true;
        }
    }

    rand(a, b) {
        return ~~(Math.random() * (b - a + 1) + a)
    };

}


export default MyCommon
