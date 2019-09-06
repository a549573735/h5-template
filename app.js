import '@/scss/main.scss';
import Common from '@/javascript/common.js';
import Loader from '@/entry/base/ResourceLoader.js';
import { DataStore } from '@/entry/base/DataStore.js';
import Director from '@/entry/Director';
import _xx from '@/javascript/base';


let dataStore,director; //总资源
_xx.bgMp3()
let loader=Loader.create((load, resources,app)=>{
    dataStore=DataStore.getInstance();
    dataStore.loadResources=resources;
    dataStore.app=app
    new Common();
    director=new Director();
    _xx.pageTo('#index');
    director.initLoader();
},(load, resources)=>{
    
    dataStore.resources=resources;
    director.initIndex();
});










