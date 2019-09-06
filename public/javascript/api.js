var prefix ='https://pinganulq.energytrust.com.cn/api/?s=api/uniqlo/uLDLightNew/'

function api_Interface(str,data,type) {
    return new Promise((resolve, reject) => {
        Object.assign(data,{time:Date.now(),"rand": Math.random()});
        $.ajax({
            type: type||'get',
            jsonp: 'callback',
            url: prefix + str,
            data:data,
            dataType: 'jsonp',
            success: function(data) {
                if (data.code == 1) {
                    resolve(data.data)
                } else {
                    reject(data)
                }
            },
            error: function(error) {
                 console.log('error:'+JSON.stringify(error))
                 tosast(JSON.stringify(error))
            }
        });
    });
}


function  createImage(dataUrl) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/upload.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    image: dataUrl,
                }
            }).done(function(res) {
                resolve(res)
            });
        })
 };


function tosast(text) {
    $('.my-modal-toast').addClass('my-toast-active').children().html(text)
    setTimeout(function() {
        $('.my-modal-toast').removeClass('my-toast-active')
    }, 2000)
}



module.exports = {
    api_Interface,
    createImage
}