import { isNull, isString } from '../utils/is';
import ECanvas, { type IECanvasOptions } from './ecanvas';

export interface IEngineOptions extends ICanvasOptions {}

interface ICanvasOptions extends IECanvasOptions {
  canvas: HTMLCanvasElement | string;
}

export class Engine {
  private _canvas!: ECanvas;
  constructor(opt: IEngineOptions) {
    this.initCanvas(opt);
  }

  initCanvas(opt: ICanvasOptions) {
    const { canvas } = opt;
    let canvasElement: HTMLCanvasElement;
    if (isNull(canvas)) {
      throw new Error('canvas is required');
    }
    if (isString(canvas)) {
      canvasElement = document.getElementById(
        canvas as string,
      ) as HTMLCanvasElement;
    } else {
      canvasElement = canvas as HTMLCanvasElement;
    }
    this._canvas = new ECanvas(canvasElement, opt);
  }
}
