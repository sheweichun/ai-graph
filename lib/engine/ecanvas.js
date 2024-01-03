import { isNull } from '../utils/is';
function getPixelRatio(context) {
    const backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
    return (window.devicePixelRatio || 1) / backingStore;
}
export default class ECanvas {
    constructor(canvas, opt) {
        this.canvas = canvas;
        const { width, height } = opt;
        const ctx = canvas.getContext('2d');
        if (isNull(ctx)) {
            throw new Error('canvas 2d context is null');
        }
        this.ctx = ctx;
        this.fit(width, height);
    }
    fit(width, height) {
        // console.log('width :', width, height)
        const { canvas, ctx } = this;
        const ratio = getPixelRatio(this.ctx);
        this.ratio = ratio;
        const canvasStyle = canvas.style;
        const canvasWidth = width !== null && width !== void 0 ? width : canvas.width;
        const canvasHeight = height !== null && height !== void 0 ? height : canvas.height;
        canvasStyle.width = `${canvasWidth}px`;
        canvasStyle.height = `${canvasHeight}px`;
        canvas.width = canvasWidth * ratio;
        canvas.height = canvasHeight * ratio;
        ctx.scale(ratio, ratio);
    }
}
