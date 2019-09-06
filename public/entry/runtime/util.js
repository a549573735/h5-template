import { DataStore } from '../base/DataStore.js';

const dataStore = DataStore.getInstance();

export const collisionCheck = (obj1, obj2) => {
    let l1 = obj1.x + obj1.getBounds().width / 2;
    let t1 = obj1.y - obj1.getBounds().height / 2;
    let r1 = l1 + obj1.getBounds().width;
    let b1 = t1 + obj1.getBounds().height;

    let l2 = obj2.x + obj2.getBounds().width / 2;
    let t2 = obj2.y - obj2.getBounds().height / 2;
    let r2 = l2 + obj2.getBounds().width;
    let b2 = t2 + obj2.getBounds().height;

    let scaleX=obj1.scaleX;
    let scaleY=obj1.scaleY;

    if (l1 > r2 || b1 < t2 || r1 < l2 || t1 > b2) {
        return true  //没碰上
    } else {
        if(scaleX>1.2){
            return false //碰上了
        }else {
            return true;
        }
    }
}




function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};
//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动

export const getDirection=(startx, starty, endx, endy)=>{
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}

export const checkInputEmpty=(inputs)=>{
    var count = 0;
    $(inputs).each(function(index, val) {
        if ($(val).val() == '') {
            count++
        }
    })
    return count != 0
}

export const checkNickName=(val)=>{
    let reg=/^[\u4e00-\u9fa5a-zA-Z0-9]+$/igm;
    if(reg.test(val)){
        return true;
    }else {
        return false;
    }
}

export const tosast =(text)=> {
    $('.my-modal-toast').addClass('my-toast-active').children().html(text)
}

export const hideTosast =()=>{
    $('.my-modal-toast').removeClass('my-toast-active')
}

export const delayTosast =(text,timer=2000)=> {
    $('.my-modal-toast').addClass('my-toast-active').children().html(text)
    setTimeout(()=>{
        $('.my-modal-toast').removeClass('my-toast-active')
    },timer)
}



export const isLongPhone=()=>window.innerWidth/window.innerHeight<0.52?true:false;


export const xxEvents = ('ontouchstart' in window) ? { start: 'touchstart', move: 'touchmove', end: 'touchend'} : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };






