import { isNull, isString } from '../utils/is';
import ECanvas from './ecanvas';
export class Engine {
    constructor(opt) {
        this.initCanvas(opt);
    }
    initCanvas(opt) {
        const { canvas } = opt;
        let canvasElement;
        if (isNull(canvas)) {
            throw new Error('canvas is required');
        }
        if (isString(canvas)) {
            canvasElement = document.getElementById(canvas);
        }
        else {
            canvasElement = canvas;
        }
        this._canvas = new ECanvas(canvasElement, opt);
    }
}
