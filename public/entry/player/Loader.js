
import { DataStore } from '../base/DataStore.js';
import { createAnimateSprite, createImageBitmap, drawText } from '../runtime/util_pixi';
import { isLongPhone } from '../runtime/util'


export default class Loader {
	constructor() {
		this.dataStore = DataStore.getInstance();
		this.app = this.dataStore.app;
		this.resources = this.dataStore.loadResources;
		this.SW = this.app.SW;
		this.SH = this.app.SH;
	}

	create() {
		let container = new PIXI.Container();
		let bg = this.createScene();
		container.addChild(bg)
		return container;
	}


	createScene() {
		let container = new PIXI.Container();

		return  container
	}
}

