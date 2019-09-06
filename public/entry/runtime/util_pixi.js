
const mySetTimeout = time => new Promise(resolve => setTimeout(resolve, time));
export const horizontalScreen = (app, container) => {
    let evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, rotate, { passive: false })
    const SW = app.SW;
    const SH = app.SH;
    async function rotate() {
        await mySetTimeout(100);
        let width = window.innerWidth;
        let height = window.innerHeight;
        app.renderer.autoResize = true;
        if (width > height) {
            app.renderer.resize(SW, SH);
            container.pivot.set(SW / 2, SH / 2);
            container.angle = 0;
            container.position.set(SW / 2, SH / 2);
        } else {
            app.renderer.resize(SH, SW);
            container.angle = 90;
            container.pivot.set(SW / 2, SH / 2);
            container.position.set(SH / 2, SW / 2);
        }
    }
}

export const createSceneBitmap = (resources, name) => {
    let container = new PIXI.Container();
    let item = new PIXI.Sprite(resources[name].texture);
    //item.position.set(app.renderer.width / 2, app.renderer.height / 2)
    // item.anchor.set(.5);
    container.addChild(item);
    return container
}

export const createImageBitmap = (resources, name, isTwo = true) => {
    let container = new PIXI.Container();
    let item = new PIXI.Sprite(resources[name].texture);
    isTwo && item.scale.set(2, 2);
    item.buttonMode = true;
    item.interactive = true;
    item.anchor.set(.5);
    container.addChild(item);
    return container
}


export const drawRect = (options) => {
    let { x = 0, y = 0, width = 100, height = 100 } = options;
    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(0x66CCFF);
    rectangle.alpha = 0;
    rectangle.drawRect(0, 0, width, height);
    rectangle.endFill();
    rectangle.x = x;
    rectangle.y = y;
    rectangle.buttonMode = true;
    rectangle.interactive = true;
    return rectangle;
}



export const drawText = (options) => {
    // {
    //     fontFamily: 'Arial', my-font
    //     fontSize: 36,
    //     fontStyle: 'italic',
    //     fontWeight: 'bold',
    //     fill: ['#ffffff', '#00ff99'], // gradient
    //     stroke: '#4a1850',
    //     strokeThickness: 5,
    //     dropShadow: true,
    //     dropShadowColor: '#000000',
    //     dropShadowBlur: 4,
    //     dropShadowAngle: Math.PI / 6,
    //     dropShadowDistance: 6,
    //     wordWrap: true,
    //     wordWrapWidth: 440,
    // }
    let {text='',x=0,y=0,style={}} = options;
    const styles = new PIXI.TextStyle(style);
    const richText = new PIXI.Text(text, styles);
    richText.anchor.set(.5);
    richText.x = x;
    richText.y = y;
    return richText;
}


// function createImageBitmapJson(name, frame) {
//     let container = new PIXI.Container();
//     let item = new PIXI.Sprite(resources[name].textures[frame]);
//     item.position.set(app.renderer.width / 2, app.renderer.height / 2)
//     item.anchor.set(.5, .5);
//     container.addChild(item);
//     return container
// }


export const createAnimateSprite = (resources, frameName, speed = .5,start,end=false) => {
    let frames = [];

    let images=[];
    let str=frameName+`\\d+$`;
    let reg=new RegExp(str);
    for(let name in resources){
        if(reg.test(name)){
            images.push({[name]:resources[name]})
        }
    }
    for (let i = 0; i < images.length; i++) {
        // magically works since the spritesheet was loaded with the pixi loader    
        frames.push(images[i][frameName+(i+1)].texture);
    }
    if(end){
         frames=frames.slice(start,end);
     }
    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    const anim = new PIXI.AnimatedSprite(frames);
    
    anim.anchor.set(0.5);
    anim.animationSpeed = speed;
    return anim
}

export const createSpritePoint = (options) => {
    let { path, frameName, len, speed = .5, point = {},isPlay=true ,resources} = options
    const frames = [];
    let images=[];
    let str=`^`+frameName+`\\d+$`;
    let reg=new RegExp(str);
    for(let name in resources){
        if(reg.test(name)){
            images.push({[name]:resources[name]})
        }
    }
    for (let i = 0; i < images.length; i++) {
        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(images[i][frameName+(i+1)].texture);
    }
    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
 
    const anim = new PIXI.AnimatedSprite(frames);
    Object.assign(anim.position, point)
    anim.anchor.set(0.5);
    anim.animationSpeed = speed;
    isPlay&&anim.play()
    return anim
}



















