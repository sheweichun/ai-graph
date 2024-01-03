import { isNull } from '../utils/is';

export interface IECanvasOptions {
  width?: number;
  height?: number;
}

function getPixelRatio(context: any) {
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
}

export default class ECanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  ratio!: number;
  constructor(canvas: HTMLCanvasElement, opt: IECanvasOptions) {
    this.canvas = canvas;
    const { width, height } = opt;
    const ctx = canvas.getContext('2d');
    if (isNull(ctx)) {
      throw new Error('canvas 2d context is null');
    }
    this.ctx = ctx!;
    this.fit(width, height);
  }

  fit(width?: number, height?: number) {
    // console.log('width :', width, height)
    const { canvas, ctx } = this;
    const ratio = getPixelRatio(this.ctx);
    this.ratio = ratio;
    const canvasStyle = canvas.style;
    const canvasWidth = width ?? canvas.width;
    const canvasHeight = height ?? canvas.height;
    canvasStyle.width = `${canvasWidth}px`;
    canvasStyle.height = `${canvasHeight}px`;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    ctx.scale(ratio, ratio);
  }
}
