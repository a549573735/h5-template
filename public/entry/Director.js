// 导演 控制业务逻辑
import _xx from '../javascript/base';
import { DataStore } from './base/DataStore.js';
import Loader from './player/Loader';



class Director {
    constructor() {
        this.dataStore = DataStore.getInstance();
        this.app = this.dataStore.app;
        this.resources = this.dataStore.resources;
        this.SW = this.app.SW;
        this.SH = this.app.SH;
        this.addTick();
        this.eventEmitter();

    }

    initScene() {
        
    }


    initLoader() {
        this.loader = new Loader().create();
        this.app.stage.addChild(this.loader);
    }



    rand(a, b) {
        return ~~(Math.random() * (b - a + 1) + a)
    }

    mySetTimeOut(timer) {
        return new Promise(resolve => setTimeout(resolve, timer))
    }


    addTick() {
        this.app.ticker.add((delta) => {
        });
    }


    eventEmitter() {
        
    }
}



export default Director








