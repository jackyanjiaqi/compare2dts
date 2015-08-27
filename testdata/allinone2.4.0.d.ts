declare var DEBUG: boolean;
declare var RELEASE: boolean;
declare module egret {
}
declare module egret {
    function registerClass(classDefinition: any, className: string, interfaceNames?: string[]): void;
}
declare module egret {
    var $hashCount: number;
    class HashObject {
        constructor();
        hashCode: number;
    }
}
declare module egret {
    class EventDispatcher extends HashObject implements IEventDispatcher {
        constructor(target?: IEventDispatcher);
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        once(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        hasEventListener(type: string): boolean;
        willTrigger(type: string): boolean;
        dispatchEvent(event: Event): boolean;
        dispatchEventWith(type: string, bubbles?: boolean, data?: any): boolean;
    }
}
declare module egret.sys {
    interface EventBin {
        type: string;
        listener: Function;
        thisObject: any;
        priority: number;
        target: IEventDispatcher;
        useCapture: boolean;
        emitOnce: boolean;
    }
}
declare module egret.sys {
    const enum DisplayObjectFlags {
        InvalidContentBounds = 2,
        InvalidBounds = 4,
        InvalidMatrix = 8,
        InvalidConcatenatedMatrix = 16,
        InvalidInvertedConcatenatedMatrix = 32,
        InvalidConcatenatedAlpha = 64,
        DirtyRender = 256,
        DirtyChildren = 512,
        Dirty = 768,
        DownOnAddedOrRemoved = 624,
        InitFlags = 880,
    }
}
declare module egret {
    class DisplayObject extends EventDispatcher implements sys.Renderable {
        constructor();
        private invalidateMatrix();
        private invalidatePosition();
        name: string;
        parent: DisplayObjectContainer;
        stage: Stage;
        matrix: Matrix;
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
        skewX: number;
        skewY: number;
        width: number;
        height: number;
        measuredWidth: number;
        measuredHeight: number;
        anchorOffsetX: number;
        anchorOffsetY: number;
        visible: boolean;
        cacheAsBitmap: boolean;
        alpha: number;
        touchEnabled: boolean;
        scrollRect: Rectangle;
        blendMode: string;
        mask: DisplayObject | Rectangle;
        getTransformedBounds(targetCoordinateSpace: DisplayObject, resultRect?: Rectangle): Rectangle;
        getBounds(resultRect?: Rectangle, calculateAnchor?: boolean): egret.Rectangle;
        globalToLocal(stageX: number, stageY: number, resultPoint?: Point): Point;
        localToGlobal(localX: number, localY: number, resultPoint?: Point): Point;
        hitTestPoint(x: number, y: number, shapeFlag?: boolean): boolean;
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        dispatchEvent(event: Event): boolean;
        willTrigger(type: string): boolean;
    }
}
declare module egret {
    class Event extends HashObject {
        static ADDED_TO_STAGE: string;
        static REMOVED_FROM_STAGE: string;
        static ADDED: string;
        static REMOVED: string;
        static ENTER_FRAME: string;
        static RENDER: string;
        static RESIZE: string;
        static CHANGE: string;
        static CHANGING: string;
        static COMPLETE: string;
        static LOOP_COMPLETE: string;
        static FOCUS_IN: string;
        static FOCUS_OUT: string;
        static ENDED: string;
        static ACTIVATE: string;
        static DEACTIVATE: string;
        static CLOSE: string;
        static CONNECT: string;
        static LEAVE_STAGE: string;
        static SOUND_COMPLETE: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any);
        data: any;
        type: string;
        bubbles: boolean;
        cancelable: boolean;
        eventPhase: number;
        currentTarget: any;
        target: any;
        isDefaultPrevented(): boolean;
        preventDefault(): void;
        stopPropagation(): void;
        stopImmediatePropagation(): void;
        protected clean(): void;
        static dispatchEvent(target: IEventDispatcher, type: string, bubbles?: boolean, data?: any): boolean;
        static _getPropertyData(EventClass: any): any;
        static create<T extends Event>(EventClass: {
            new (type: string, bubbles?: boolean, cancelable?: boolean): T;
            eventPool?: Event[];
        }, type: string, bubbles?: boolean, cancelable?: boolean): T;
        static release(event: Event): void;
    }
}
declare module egret {
    class DisplayObjectContainer extends DisplayObject implements IDisplayObjectContainer {
        constructor();
        numChildren: number;
        addChild(child: DisplayObject): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        contains(child: DisplayObject): boolean;
        getChildAt(index: number): DisplayObject;
        getChildIndex(child: DisplayObject): number;
        getChildByName(name: string): DisplayObject;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        setChildIndex(child: DisplayObject, index: number): void;
        private doSetChildIndex(child, index);
        swapChildrenAt(index1: number, index2: number): void;
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        private doSwapChildrenAt(index1, index2);
        removeChildren(): void;
        touchChildren: boolean;
        private markChildDirty(child, parentCache);
        private assignParentDisplayList(child, parentCache, newParent);
    }
}
declare module egret {
    interface IEventDispatcher extends HashObject {
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        once(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        hasEventListener(type: string): boolean;
        dispatchEvent(event: Event): boolean;
        willTrigger(type: string): boolean;
    }
}
declare module egret {
    class Filter extends HashObject {
        type: string;
    }
}
declare module egret.sys {
    interface Surface extends BitmapData {
        renderContext: RenderContext;
        toDataURL(type?: string, ...args: any[]): string;
    }
}
declare module egret {
    class NumberUtils {
        static isNumber(value: any): boolean;
        static sin(value: number): number;
        private static sinInt(value);
        static cos(value: number): number;
        private static cosInt(value);
    }
}
declare var egret_sin_map: {};
declare var egret_cos_map: {};
declare var DEG_TO_RAD: number;
declare module egret {
    var $TextureScaleFactor: number;
    class Texture extends HashObject {
        constructor();
        _bitmapX: number;
        _bitmapY: number;
        _bitmapWidth: number;
        _bitmapHeight: number;
        _offsetX: number;
        _offsetY: number;
        private _textureWidth;
        textureWidth: number;
        private _textureHeight;
        textureHeight: number;
        _sourceWidth: number;
        _sourceHeight: number;
        _bitmapData: any;
        _setBitmapData(value: any): void;
        getPixel32(x: number, y: number): number[];
        toDataURL(type: string, rect?: egret.Rectangle): string;
        saveToFile(type: string, filePath: string, rect?: egret.Rectangle): void;
        dispose(): void;
        private static _displayList;
    }
}
declare module egret {
    interface BitmapData extends HashObject {
        width: number;
        height: number;
    }
}
declare module egret {
    class SpriteSheet extends HashObject {
        constructor(texture: Texture);
        private _bitmapX;
        private _bitmapY;
        private texture;
        _textureMap: Object;
        getTexture(name: string): Texture;
        createTexture(name: string, bitmapX: number, bitmapY: number, bitmapWidth: number, bitmapHeight: number, offsetX?: number, offsetY?: number, textureWidth?: number, textureHeight?: number): Texture;
        dispose(): void;
    }
}
declare module egret {
    class Stage extends DisplayObjectContainer {
        constructor();
        frameRate: number;
        stageWidth: number;
        stageHeight: number;
        invalidate(): void;
        private implMap;
        registerImplementation(interfaceName: string, instance: any): void;
        getImplementation(interfaceName: string): any;
        scaleMode: string;
        textureScaleFactor: number;
        maxTouches: number;
    }
}
declare module egret {
    class GlowFilter extends Filter {
        color: number;
        alpha: number;
        blurX: number;
        blurY: number;
        strength: number;
        quality: number;
        inner: boolean;
        knockout: boolean;
        constructor(color?: number, alpha?: number, blurX?: number, blurY?: number, strength?: number, quality?: number, inner?: boolean, knockout?: boolean);
    }
}
declare module egret {
    class Point extends HashObject {
        static release(point: Point): void;
        static create(x: number, y: number): Point;
        constructor(x?: number, y?: number);
        x: number;
        y: number;
        length: number;
        setTo(x: number, y: number): Point;
        clone(): Point;
        equals(toCompare: Point): boolean;
        static distance(p1: Point, p2: Point): number;
        copyFrom(sourcePoint: Point): void;
        add(v: Point): Point;
        static interpolate(pt1: Point, pt2: Point, f: number): Point;
        normalize(thickness: number): void;
        offset(dx: number, dy: number): void;
        static polar(len: number, angle: number): Point;
        subtract(v: Point): Point;
        toString(): string;
    }
    var $TempPoint: Point;
}
declare module egret {
    var $locale_strings: any;
    var $language: string;
}
declare module egret.sys {
    function tr(code: number, ...args: any[]): string;
}
declare module egret {
    interface SoundChannel extends IEventDispatcher {
        volume: number;
        position: number;
        stop(): void;
    }
}
declare module egret.sys {
    interface IScreenAdapter {
        calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): StageDisplaySize;
    }
    interface StageDisplaySize {
        stageWidth: number;
        stageHeight: number;
        displayWidth: number;
        displayHeight: number;
    }
}
declare module egret.sys {
    class Region {
        static release(region: Region): void;
        static create(): Region;
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        width: number;
        height: number;
        area: number;
        moved: boolean;
        setTo(minX: number, minY: number, maxX: number, maxY: number): Region;
        updateArea(): void;
        union(target: Region): void;
        intersect(target: Region): void;
        private setEmpty();
        isEmpty(): boolean;
        intersects(target: Region): boolean;
        updateRegion(bounds: Rectangle, matrix: Matrix): void;
    }
}
declare module egret.sys {
    interface RenderContext {
        surface: Surface;
        globalCompositeOperation: string;
        globalAlpha: number;
        miterLimit: number;
        lineCap: string;
        lineJoin: string;
        lineWidth: number;
        strokeStyle: any;
        fillStyle: any;
        imageSmoothingEnabled: boolean;
        textAlign: string;
        textBaseline: string;
        font: string;
        strokeText(text: any, x: any, y: any, maxWidth: any): any;
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        lineTo(x: number, y: number): void;
        fill(fillRule?: string): void;
        closePath(): void;
        rect(x: number, y: number, w: number, h: number): void;
        moveTo(x: number, y: number): void;
        fillRect(x: number, y: number, w: number, h: number): void;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        stroke(): void;
        strokeRect(x: number, y: number, w: number, h: number): void;
        beginPath(): void;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
        transform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
        translate(x: number, y: number): void;
        scale(x: number, y: number): void;
        rotate(angle: number): void;
        restore(): void;
        save(): void;
        clip(fillRule?: string): void;
        clearRect(x: number, y: number, width: number, height: number): void;
        setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
        createLinearGradient(x0: number, y0: number, x1: number, y1: number): GraphicsGradient;
        createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): GraphicsGradient;
        fillText(text: string, x: number, y: number, maxWidth?: number): void;
        measureText(text: string): TextMetrics;
        drawImage(image: BitmapData, offsetX: number, offsetY: number, width?: number, height?: number, surfaceOffsetX?: number, surfaceOffsetY?: number, surfaceImageWidth?: number, surfaceImageHeight?: number): void;
        createPattern(image: BitmapData, repetition: string): GraphicsPattern;
        getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    }
    interface TextMetrics {
        width: number;
    }
    interface ImageData {
        width: number;
        data: Uint8Array;
        height: number;
    }
}
declare module egret {
    interface StageText extends EventDispatcher {
    }
    var StageText: {
        new (): StageText;
    };
}
declare module egret {
    interface Sound extends EventDispatcher {
        load(url: string): void;
        preload(type: string, callback?: Function, thisObj?: any): void;
        play(startTime?: number, loops?: number): SoundChannel;
        close(): void;
        destroy(): void;
        type: string;
    }
    var Sound: {
        new (): Sound;
        MUSIC: string;
        EFFECT: string;
    };
}
declare module egret.sys {
    class Player extends HashObject {
        constructor(context: RenderContext, stage: Stage, entryClassName: string);
        private createDisplayList(stage, context);
        private screenDisplayList;
        private entryClassName;
        stage: Stage;
        private root;
        private isPlaying;
        start(): void;
        private initialize();
        stop(): void;
        pause(): void;
        private callLaters();
        private callLaterAsyncs();
        updateStageSize(stageWidth: number, stageHeight: number, pixelRatio?: number): void;
        displayFPS: (showFPS: boolean, showLog: boolean, logFilter: string, fpsStyles: Object) => void;
        private showFPS;
        private showLog;
        private fpsDisplay;
        showPaintRect: (value: boolean) => void;
        private drawDirtyRect;
        private _showPaintRect;
        private stageDisplayList;
        private paintList;
        private drawPaintRect;
    }
    var $logToFPS: (info: string) => void;
}
declare module egret {
    var $START_TIME: number;
    function getTimer(): number;
}
declare module egret {
    class IOErrorEvent extends Event {
        static IO_ERROR: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        static dispatchIOErrorEvent(target: IEventDispatcher): boolean;
    }
}
declare module egret.web {
    class HtmlSoundChannel extends egret.EventDispatcher implements egret.SoundChannel {
        private audio;
        constructor(audio: HTMLAudioElement);
        private onPlayEnd;
        stop(): void;
        volume: number;
        position: number;
    }
}
declare module egret.web {
    class QQSoundChannel extends egret.EventDispatcher implements egret.SoundChannel {
        constructor();
        private onPlayEnd;
        stop(): void;
        volume: number;
        private _startTime;
        position: number;
    }
}
declare module egret.web {
    class WebAudioSoundChannel extends egret.EventDispatcher implements egret.SoundChannel {
        private gain;
        private bufferSource;
        private context;
        constructor();
        private _currentTime;
        private _volume;
        stop(): void;
        private onPlayEnd;
        volume: number;
        private _startTime;
        position: number;
    }
}
declare module egret.sys {
    var $invalidateRenderFlag: boolean;
    var $requestRenderingFlag: boolean;
    class SystemTicker {
        constructor();
        private playerList;
        private callBackList;
        private thisObjectList;
        private getTickIndex(callBack, thisObject);
        private concatTick();
        private frameInterval;
        private lastCount;
        update(): void;
        private render(triggerByFrame);
        private broadcastEnterFrame();
        private broadcastRender();
    }
    var $ticker: SystemTicker;
}
declare module egret {
    class HorizontalAlign {
        static LEFT: string;
        static RIGHT: string;
        static CENTER: string;
        static JUSTIFY: string;
        static CONTENT_JUSTIFY: string;
    }
}
declare module egret {
    interface IHitTextElement {
        lineIndex: number;
        textElementIndex: number;
    }
    interface ITextStyle {
        textColor?: number;
        strokeColor?: number;
        size?: number;
        stroke?: number;
        bold?: boolean;
        italic?: boolean;
        fontFamily?: string;
        href?: string;
        target?: string;
    }
    interface ITextElement {
        text: string;
        style?: ITextStyle;
    }
    interface IWTextElement extends ITextElement {
        width: number;
    }
    interface ILineElement {
        width: number;
        height: number;
        charNum: number;
        hasNextLine: boolean;
        elements: Array<IWTextElement>;
    }
}
declare module egret {
    class TextFieldType {
        static DYNAMIC: string;
        static INPUT: string;
    }
}
declare module egret {
    class VerticalAlign {
        static TOP: string;
        static BOTTOM: string;
        static MIDDLE: string;
        static JUSTIFY: string;
        static CONTENT_JUSTIFY: string;
    }
}
declare module egret {
    class Logger {
        static ALL: string;
        static DEBUG: string;
        static INFO: string;
        static WARN: string;
        static ERROR: string;
        static OFF: string;
        private static logFuncs;
        static logLevel: string;
    }
    function getString(id: number, ...args: any[]): string;
}
declare module egret {
    class TextEvent extends Event {
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, text?: string);
        static LINK: string;
        text: string;
        static dispatchTextEvent(target: IEventDispatcher, type: string, text: string): boolean;
    }
}
declare module egret {
    class TouchEvent extends Event {
        static TOUCH_MOVE: string;
        static TOUCH_BEGIN: string;
        static TOUCH_END: string;
        static TOUCH_TAP: string;
        static TOUCH_RELEASE_OUTSIDE: string;
        static TOUCH_ROLL_OUT: string;
        static TOUCH_ROLL_OVER: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, stageX?: number, stageY?: number, touchPointID?: number);
        stageX: number;
        stageY: number;
        private _localX;
        localX: number;
        private _localY;
        localY: number;
        private targetChanged;
        private getLocalXY();
        touchPointID: number;
        updateAfterEvent(): void;
        touchDown: boolean;
        static dispatchTouchEvent(target: IEventDispatcher, type: string, bubbles?: boolean, cancelable?: boolean, stageX?: number, stageY?: number, touchPointID?: number, touchDown?: boolean): boolean;
    }
}
declare module egret {
    class Rectangle extends HashObject {
        static release(rect: Rectangle): void;
        static create(): Rectangle;
        constructor(x?: number, y?: number, width?: number, height?: number);
        x: number;
        y: number;
        width: number;
        height: number;
        right: number;
        bottom: number;
        left: number;
        top: number;
        topLeft: Point;
        bottomRight: Point;
        copyFrom(sourceRect: Rectangle): Rectangle;
        setTo(x: number, y: number, width: number, height: number): Rectangle;
        contains(x: number, y: number): boolean;
        intersection(toIntersect: Rectangle): Rectangle;
        inflate(dx: number, dy: number): void;
        intersects(toIntersect: Rectangle): boolean;
        isEmpty(): boolean;
        setEmpty(): void;
        clone(): Rectangle;
        containsPoint(point: Point): boolean;
        containsRect(rect: egret.Rectangle): boolean;
        equals(toCompare: Rectangle): boolean;
        inflatePoint(point: Point): void;
        offset(dx: number, dy: number): void;
        offsetPoint(point: Point): void;
        toString(): string;
        union(toUnion: Rectangle): Rectangle;
    }
    var $TempRectangle: Rectangle;
}
declare module egret.web {
    class HtmlSound extends egret.EventDispatcher implements egret.Sound {
        static MUSIC: string;
        static EFFECT: string;
        type: string;
        private url;
        private originAudio;
        private loaded;
        constructor();
        load(url: string): void;
        play(startTime?: number, loops?: number): SoundChannel;
        preload(type: string, callback?: Function, thisObj?: any): void;
        close(): void;
        destroy(): void;
        private static audios;
    }
}
declare module QZAppExternal {
    function playLocalSound(call: any, data: any): any;
    function playLocalBackSound(call: any, data: any): any;
    function preloadSound(call: any, data: any): any;
    function stopSound(): any;
    function stopBackSound(): any;
}
declare module egret.web {
    class QQSound extends egret.EventDispatcher implements egret.Sound {
        static MUSIC: string;
        static EFFECT: string;
        type: string;
        private url;
        private loaded;
        constructor();
        load(url: string): void;
        preload(type: string, callback?: Function, thisObj?: any): void;
        play(startTime?: number, loops?: number): SoundChannel;
        close(): void;
        destroy(): void;
    }
}
interface AudioBuffer {
}
interface AudioBufferSourceNodeEgret {
    buffer: any;
    context: any;
    onended: Function;
    stop(when?: number): void;
    noteOff(when?: number): void;
    addEventListener(type: string, listener: Function, useCapture?: boolean): any;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): any;
    disconnect(): any;
}
declare module egret.web {
    class WebAudioDecode {
        static canUseWebAudio: any;
        static ctx: any;
        static decodeArr: Array<any>;
        private static isDecoding;
        static decodeAudios(): void;
    }
    class WebAudioSound extends egret.EventDispatcher implements egret.Sound {
        static MUSIC: string;
        static EFFECT: string;
        type: string;
        private url;
        private loaded;
        constructor();
        private _arrayBuffer;
        private audioBuffer;
        load(url: string): void;
        preload(type: string, callback?: Function, thisObj?: any): void;
        play(startTime?: number, loops?: number): SoundChannel;
        close(): void;
        destroy(): void;
    }
}
declare module egret.sys {
    var sharedRenderContext: sys.RenderContext;
    var surfaceFactory: SurfaceFactory;
    interface SurfaceFactory {
        create(useOnce?: boolean): Surface;
        release(surface: Surface): void;
    }
}
declare module egret {
    class Capabilities {
        static language: string;
        static isMobile: boolean;
        static os: string;
        static hasGeolocation: boolean;
        static hasOrientation: boolean;
        static hasMotion: boolean;
    }
}
declare module egret {
    class TextFieldUtils {
        static _getStartLine(textfield: egret.TextField): number;
        static _getHalign(textfield: egret.TextField): number;
        static _getTextHeight(textfield: egret.TextField): number;
        static _getValign(textfield: egret.TextField): number;
        static _getTextElement(textfield: egret.TextField, x: number, y: number): ITextElement;
        static _getHit(textfield: egret.TextField, x: number, y: number): IHitTextElement;
        static _getScrollNum(textfield: egret.TextField): number;
    }
}
declare module egret {
    function toColorString(value: number): string;
}
declare module egret {
    interface GraphicsGradient {
        addColorStop(offset: number, color: string): void;
    }
}
declare module egret {
    interface GraphicsPattern {
    }
}
declare module egret.sys {
    class TouchHandler extends HashObject {
        private maxTouches;
        private useTouchesCount;
        constructor(stage: Stage);
        private stage;
        private touchDownTarget;
        onTouchBegin(x: number, y: number, touchPointID: number): void;
        private lastTouchX;
        private lastTouchY;
        onTouchMove(x: number, y: number, touchPointID: number): void;
        onTouchEnd(x: number, y: number, touchPointID: number): void;
        private findTarget(stageX, stageY);
    }
}
declare module egret.sys {
    const enum TextKeys {
        fontSize = 0,
        lineSpacing = 1,
        textColor = 2,
        textFieldWidth = 3,
        textFieldHeight = 4,
        textWidth = 5,
        textHeight = 6,
        textDrawWidth = 7,
        fontFamily = 8,
        textAlign = 9,
        verticalAlign = 10,
        textColorString = 11,
        fontString = 12,
        text = 13,
        measuredWidths = 14,
        bold = 15,
        italic = 16,
        fontStringChanged = 17,
        textLinesChanged = 18,
        wordWrap = 19,
        displayAsPassword = 20,
        maxChars = 21,
        selectionActivePosition = 22,
        selectionAnchorPosition = 23,
        type = 24,
        strokeColor = 25,
        strokeColorString = 26,
        stroke = 27,
        scrollV = 28,
        numLines = 29,
        multiline = 30,
        border = 31,
        borderColor = 32,
        background = 33,
        backgroundColor = 34,
        restrictAnd = 35,
        restrictNot = 36,
    }
}
declare module egret {
    class TextField extends DisplayObject {
        static default_fontFamily: string;
        constructor();
        private isInput();
        fontFamily: string;
        size: number;
        bold: boolean;
        italic: boolean;
        private invalidateFontString();
        private getFontString();
        textAlign: string;
        verticalAlign: string;
        lineSpacing: number;
        textColor: number;
        wordWrap: boolean;
        private _inputUtils;
        type: string;
        _setType(value: string): void;
        text: string;
        _setBaseText(value: string): void;
        displayAsPassword: boolean;
        _setDisplayAsPassword(value: boolean): void;
        strokeColor: number;
        _setStrokeColor(value: number): void;
        stroke: number;
        _setStroke(value: number): void;
        maxChars: number;
        _setMaxChars(value: number): void;
        scrollV: number;
        maxScrollV: number;
        selectionBeginIndex: number;
        selectionEndIndex: number;
        caretIndex: number;
        numLines: number;
        multiline: boolean;
        _setMultiline(value: boolean): void;
        restrict: string;
        private _bgGraphics;
        border: boolean;
        borderColor: number;
        background: boolean;
        backgroundColor: number;
        private fillBackground();
        setFocus(): void;
        private _isFlow;
        textFlow: Array<egret.ITextElement>;
        private changeToPassText(text);
        private _textArr;
        private setMiddleStyle(textArr);
        textWidth: number;
        textHeight: number;
        appendText(text: string): void;
        appendElement(element: egret.ITextElement): void;
        private _linesArr;
        _getLinesArr(): Array<egret.ILineElement>;
        _isTyping: boolean;
        private drawText(renderContext);
        private _addEvent();
        private _removeEvent();
        private onTapHandler(e);
    }
}
declare module egret.sys {
    function toFontString(style: {
        fontFamily?: string;
        fontSize?: number;
        bold?: boolean;
        italic?: boolean;
    }): string;
    function toColorString(value: number): string;
}
declare module egret {
    function isUndefined(value: any): boolean;
    function getNumber(value: number): number;
}
declare module egret {
    var $callLaterFunctionList: Array<any>;
    var $callLaterThisList: Array<any>;
    var $callLaterArgsList: Array<any>;
    function callLater(method: Function, thisObject: any, ...args: any[]): void;
    var $callAsyncFunctionList: Array<any>;
    var $callAsyncThisList: Array<any>;
    var $callAsyncArgsList: Array<any>;
}
declare module egret.web {
    class AudioType {
        static QQ_AUDIO: number;
        static WEB_AUDIO: number;
        static HTML5_AUDIO: number;
    }
    class SystemOSType {
        static WPHONE: number;
        static IOS: number;
        static ADNROID: number;
    }
    class Html5Capatibility extends HashObject {
        static _canUseBlob: boolean;
        static _audioType: number;
        static _AudioClass: any;
        static _audioMustLoad: boolean;
        static _QQRootPath: string;
        static _System_OS: number;
        static _WebPSupport: boolean;
        constructor();
        private static ua;
        static _init(): void;
        private static getIOSVersion();
        private static checkHtml5Support();
    }
    function getPrefixStyleName(name: string, element?: any): string;
}
declare module egret {
    class FrameLabel extends EventDispatcher {
        private _name;
        private _frame;
        constructor(name: string, frame: number);
        name: string;
        frame: number;
        clone(): FrameLabel;
    }
}
declare module egret {
    class GraphicsRenderContext extends HashObject {
        static createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): GraphicsGradient;
        static createLinearGradient(x0: number, y0: number, x1: number, y1: number): GraphicsGradient;
        static createPattern(bitmapData: BitmapData, repetition: string): GraphicsPattern;
        constructor();
        private _fillStyle;
        fillStyle: any;
        private _lineWidth;
        lineWidth: number;
        private _lineCap;
        lineCap: string;
        private _strokeStyle;
        strokeStyle: any;
        private _lineJoin;
        lineJoin: string;
        private _miterLimit;
        miterLimit: number;
        scale(x0: number, y0: number): void;
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
        private arcBounds(x, y, radius, startAngle, endAngle);
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        lineTo(x: number, y: number): void;
        fill(fillRule?: string): void;
        closePath(): void;
        rect(x: number, y: number, width: number, height: number): void;
        moveTo(x: number, y: number): void;
        fillRect(x: number, y: number, width: number, height: number): void;
        stroke(): void;
        strokeRect(x: number, y: number, width: number, height: number): void;
        beginPath(): void;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
        clear(): void;
        private isFirst;
        private minX;
        private minY;
        private maxX;
        private maxY;
        private hasMoved;
        private moveToX;
        private moveToY;
        private hasStroke;
        private hasFill;
        private reset();
        private pushCommand(graphicsType, args);
        private checkMoveTo();
        private extendByPoint(x, y);
    }
}
declare module egret.sys {
    interface GraphicsCommand {
        type: number;
        arguments: any[];
    }
    const enum GraphicsCommandType {
        miterLimit = 0,
        lineCap = 1,
        lineJoin = 2,
        lineWidth = 3,
        strokeStyle = 4,
        fillStyle = 5,
        arc = 6,
        quadraticCurveTo = 7,
        lineTo = 8,
        fill = 9,
        closePath = 10,
        rect = 11,
        moveTo = 12,
        fillRect = 13,
        bezierCurveTo = 14,
        stroke = 15,
        strokeRect = 16,
        beginPath = 17,
        arcTo = 18,
        scale = 19,
    }
}
declare module egret {
    class TimerEvent extends Event {
        static TIMER: string;
        static TIMER_COMPLETE: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        updateAfterEvent(): void;
        static emitTimerEvent(target: IEventDispatcher, type: string, bubbles?: boolean, cancelable?: boolean): boolean;
    }
}
declare module egret.sys {
    class DirtyRegion {
        private dirtyList;
        private hasClipRect;
        private clipWidth;
        private clipHeight;
        private clipArea;
        private clipRectChanged;
        setClipRect(width: number, height: number): void;
        addRegion(target: Region): boolean;
        clear(): void;
        getDirtyRegions(): Region[];
        private mergeDirtyList(dirtyList);
    }
}
declare module egret.sys {
    class OrientationMode {
        static AUTO: string;
        static PORTRAIT: string;
        static LANDSCAPE: string;
        static LANDSCAPE_FLIPPED: string;
    }
}
interface PlayerOption {
    entryClassName?: string;
    frameRate?: number;
    scaleMode?: string;
    contentWidth?: number;
    contentHeight?: number;
    orientation?: string;
    showPaintRect?: boolean;
    showFPS?: boolean;
    fpsStyles?: Object;
    showLog?: boolean;
    logFilter?: string;
    maxTouches?: number;
    textureScaleFactor?: number;
}
declare module egret.sys {
    interface Renderable extends HashObject {
    }
}
declare module egret.sys {
    interface Screen {
        updateScreenSize(): any;
        updateMaxTouches(): any;
    }
}
declare module egret.sys {
    var screenAdapter: IScreenAdapter;
    class ScreenAdapter extends HashObject implements IScreenAdapter {
        constructor();
        calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): StageDisplaySize;
    }
}
declare module egret {
    class StageScaleMode {
        static NO_SCALE: string;
        static SHOW_ALL: string;
        static NO_BORDER: string;
        static EXACT_FIT: string;
        static FIXED_WIDTH: string;
        static FIXED_HEIGHT: string;
    }
}
declare module egret {
    class MainContext extends EventDispatcher {
        constructor();
        stage: Stage;
        static deviceType: string;
        static DEVICE_PC: string;
        static DEVICE_MOBILE: string;
        static runtimeType: string;
        static RUNTIME_HTML5: string;
        static RUNTIME_NATIVE: string;
        run(): void;
        private static _instance;
        static instance: egret.MainContext;
    }
}
declare var testDeviceType: () => boolean;
declare var testRuntimeType: () => boolean;
declare module egret.web {
    class HTML5StageText extends EventDispatcher implements StageText {
        private htmlInput;
        constructor();
        private _isNeedShow;
        private inputElement;
        private inputDiv;
        private _gscaleX;
        private _gscaleY;
        private _initElement();
        private onBlurHandler();
        private executeShow();
        private _isNeesHide;
        private textValue;
        private resetText();
        _onInput(): void;
        private setAreaHeight();
        _onClickHandler(e: any): void;
        _onDisconnect(): void;
        private _styleInfoes;
        private setElementStyle(style, value);
    }
}
declare module egret.web {
    class HTMLInput {
        private _stageText;
        private _simpleElement;
        private _multiElement;
        private _inputElement;
        _inputDIV: any;
        isInputOn(): boolean;
        isCurrentStageText(stageText: any): boolean;
        private initValue(dom);
        _needShow: boolean;
        private StageDelegateDiv;
        private canvas;
        _initStageDelegateDiv(container: any, canvas: any): any;
        private initInputElement(multiline);
        show(): void;
        disconnectStageText(stageText: any): void;
        clearInputElement(): void;
        getInputElement(stageText: any): any;
    }
}
declare module egret.web {
}
declare module egret {
    class Tween extends EventDispatcher {
        private static NONE;
        private static LOOP;
        private static REVERSE;
        private static _tweens;
        private static IGNORE;
        private static _plugins;
        private static _inited;
        private _target;
        private _useTicks;
        private ignoreGlobalPause;
        private loop;
        private pluginData;
        private _curQueueProps;
        private _initQueueProps;
        private _steps;
        private _actions;
        private paused;
        private duration;
        private _prevPos;
        private position;
        private _prevPosition;
        private _stepPosition;
        private passive;
        static get(target: any, props?: any, pluginData?: any, override?: boolean): Tween;
        static removeTweens(target: any): void;
        static pauseTweens(target: any): void;
        static resumeTweens(target: any): void;
        private static tick(timeStamp, paused?);
        private static _lastTime;
        private static _register(tween, value);
        static removeAllTweens(): void;
        constructor(target: any, props: any, pluginData: any);
        private initialize(target, props, pluginData);
        private setPosition(value, actionsMode?);
        private _runActions(startPos, endPos, includeStart?);
        private _updateTargetProps(step, ratio);
        setPaused(value: boolean): Tween;
        private _cloneProps(props);
        private _addStep(o);
        private _appendQueueProps(o);
        private _addAction(o);
        private _set(props, o);
        wait(duration: number, passive?: boolean): Tween;
        to(props: any, duration?: number, ease?: Function): Tween;
        call(callback: Function, thisObj?: any, params?: Array<any>): Tween;
        set(props: any, target?: any): Tween;
        play(tween?: Tween): Tween;
        pause(tween?: Tween): Tween;
        tick(delta: number): void;
    }
}
declare module egret {
    function stopTick(callBack: Function, thisObject: any): void;
}
declare module egret.web {
    function toBitmapData(data: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): BitmapData;
}
declare module egret.web {
    class WebHideHandler extends HashObject {
        private stage;
        constructor(stage: egret.Stage);
        private isActivate;
        private registerListener();
    }
}
declare module egret.web {
    class WebTouchHandler extends HashObject {
        constructor(stage: egret.Stage, canvas: HTMLCanvasElement);
        private canvas;
        private touch;
        private addListeners();
        private addMouseListener();
        private addTouchListener();
        private prevent(event);
        private onTouchBegin;
        private onTouchMove;
        private onTouchEnd;
        private getLocation(event);
        private scaleX;
        private scaleY;
        private rotation;
        updateScaleMode(scaleX: number, scaleY: number, rotation: number): void;
    }
}
declare module egret {
    class BitmapFillMode {
        static REPEAT: string;
        static SCALE: string;
    }
}
declare module egret {
    class Graphics extends HashObject {
        private strokeStyleColor;
        private fillStyleColor;
        _dirty: boolean;
        private lineX;
        private lineY;
        graphicsRenderContext: GraphicsRenderContext;
        constructor();
        beginFill(color: number, alpha?: number): void;
        _parseColor(color: number, alpha: number): string;
        private _setStyle(colorStr);
        drawRect(x: number, y: number, width: number, height: number): void;
        drawCircle(x: number, y: number, r: number): void;
        drawRoundRect(x: number, y: number, width: number, height: number, ellipseWidth: number, ellipseHeight?: number): void;
        drawEllipse(x: number, y: number, width: number, height: number): void;
        lineStyle(thickness?: number, color?: number, alpha?: number, pixelHinting?: boolean, scaleMode?: string, caps?: string, joints?: string, miterLimit?: number): void;
        lineTo(x: number, y: number): void;
        curveTo(controlX: number, controlY: number, anchorX: number, anchorY: number): void;
        drawArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
        cubicCurveTo(controlX1: number, controlY1: number, controlX2: number, controlY2: number, anchorX: number, anchorY: number): void;
        moveTo(x: number, y: number): void;
        clear(): void;
        endFill(): void;
        private _createEndFillCommand();
        private _fill();
        private _createEndLineCommand();
        private _firstCheck;
        private _minX;
        private _minY;
        private _maxX;
        private _maxY;
    }
}
declare module egret {
    interface IDisplayObjectContainer extends DisplayObject {
        numChildren: number;
        addChild(child: DisplayObject): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        contains(child: DisplayObject): boolean;
        getChildAt(index: number): DisplayObject;
        getChildIndex(child: DisplayObject): number;
        getChildByName(name: string): DisplayObject;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        setChildIndex(child: DisplayObject, index: number): void;
        swapChildrenAt(index1: number, index2: number): void;
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        removeChildren(): void;
        touchChildren: boolean;
    }
}
declare module egret {
    class MovieClipData extends HashObject {
        numFrames: number;
        frames: any[];
        labels: any[];
        frameRate: number;
        textureData: any;
        spriteSheet: SpriteSheet;
        constructor();
        getKeyFrameData(frame: number): any;
        getTextureByFrame(frame: number): Texture;
        private getTextureByResName(resName);
        private fillFramesData(framesData);
        private fillFrameLabelsData(frameLabelsData);
        mcData: MovieClipData;
        private setMCData(value);
    }
}
declare module egret {
    class ScrollViewProperties {
        _verticalScrollPolicy: string;
        _horizontalScrollPolicy: string;
        _scrollLeft: number;
        _scrollTop: number;
        _hCanScroll: boolean;
        _vCanScroll: boolean;
        _lastTouchPosition: egret.Point;
        _touchStartPosition: egret.Point;
        _scrollStarted: boolean;
        _lastTouchTime: number;
        _lastTouchEvent: TouchEvent;
        _velocitys: Array<{
            x: number;
            y: number;
        }>;
        _isHTweenPlaying: boolean;
        _isVTweenPlaying: boolean;
        _hScrollTween: Tween;
        _vScrollTween: Tween;
        _bounces: boolean;
    }
}
declare module egret {
    class FocusEvent extends egret.Event {
        static FOCUS_IN: string;
        static FOCUS_OUT: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare module egret {
    class ProgressEvent extends egret.Event {
        static PROGRESS: string;
        static SOCKET_DATA: string;
        bytesLoaded: number;
        bytesTotal: number;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, bytesLoaded?: number, bytesTotal?: number);
        static dispatchProgressEvent(target: IEventDispatcher, type: string, bytesLoaded?: number, bytesTotal?: number): boolean;
    }
}
declare module egret {
    class Matrix extends HashObject {
        static release(matrix: Matrix): void;
        static create(): Matrix;
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        clone(): Matrix;
        concat(other: Matrix): void;
        copyFrom(other: Matrix): Matrix;
        identity(): void;
        invert(): void;
        rotate(angle: number): void;
        scale(sx: number, sy: number): void;
        setTo(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        transformPoint(pointX: number, pointY: number, resultPoint?: Point): Point;
        translate(dx: number, dy: number): void;
        equals(other: Matrix): boolean;
        prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        append(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        deltaTransformPoint(point: Point): Point;
        toString(): string;
        createBox(scaleX: number, scaleY: number, rotation?: number, tx?: number, ty?: number): void;
        createGradientBox(width: number, height: number, rotation?: number, tx?: number, ty?: number): void;
        private getDeterminant();
    }
    var $TempMatrix: Matrix;
}
declare module egret {
    interface Video extends DisplayObject {
        load(url: string): void;
        play(startTime?: number, loop?: boolean): any;
        close(): void;
        src: string;
        poster: string;
        fullscreen: boolean;
        volume: number;
        position: number;
        pause(): void;
        bitmapData: BitmapData;
    }
    var Video: {
        new (): Video;
    };
}
declare module egret {
    interface ImageLoader extends EventDispatcher {
        data: BitmapData;
        crossOrigin: string;
        load(url: string): void;
    }
    var ImageLoader: {
        new (): ImageLoader;
    };
}
declare module egret.web {
    class WebHttpRequest extends EventDispatcher implements HttpRequest {
        constructor();
        private _xhr;
        response: any;
        private _responseType;
        responseType: string;
        private _withCredentials;
        withCredentials: boolean;
        private _url;
        private getXHR();
        open(url: string, method?: string): void;
        send(data?: any): void;
        abort(): void;
        getAllResponseHeaders(): string;
        private header;
        private headerValue;
        setRequestHeader(header: string, value: string): void;
        getResponseHeader(header: string): string;
        private onReadyStateChange();
        private updateProgress(event);
    }
}
declare module egret.sys {
    class DisplayList extends HashObject implements Renderable {
        static release(displayList: DisplayList): void;
        static create(target: DisplayObject): DisplayList;
        constructor(root: DisplayObject);
        surface: Surface;
        offsetX: number;
        offsetY: number;
        root: DisplayObject;
        needRedraw: boolean;
        private rootMatrix;
        renderContext: RenderContext;
        setClipRect(width: number, height: number): void;
        private dirtyNodes;
        private dirtyNodeList;
        markDirty(node: Renderable): void;
        private dirtyList;
        private dirtyRegion;
        updateDirtyRegions(): Region[];
        drawToSurface(): number;
        private drawDisplayObject(displayObject, context, dirtyList, rootMatrix, displayList, clipRegion);
        private drawWithClip(displayObject, context, dirtyList, rootMatrix, clipRegion);
        private drawWithScrollRect(displayObject, context, dirtyList, rootMatrix, clipRegion);
        private createRenderContext(width, height);
        private sizeChanged;
        changeSurfaceSize(): void;
        setDevicePixelRatio(ratio?: number): void;
    }
}
declare module egret {
    class BitmapFont extends SpriteSheet {
        constructor(texture: Texture, config: any);
        private charList;
        getTexture(name: string): Texture;
        private firstCharHeight;
        _getFirstCharHeight(): number;
        private parseConfig(fntText);
        private getConfigByKey(configText, key);
    }
}
declare module egret {
    class Ease {
        constructor();
        static get(amount: any): Function;
        static getPowIn(pow: any): Function;
        static getPowOut(pow: any): Function;
        static getPowInOut(pow: any): Function;
        static quadIn: Function;
        static quadOut: Function;
        static quadInOut: Function;
        static cubicIn: Function;
        static cubicOut: Function;
        static cubicInOut: Function;
        static quartIn: Function;
        static quartOut: Function;
        static quartInOut: Function;
        static quintIn: Function;
        static quintOut: Function;
        static quintInOut: Function;
        static sineIn(t: any): number;
        static sineOut(t: any): number;
        static sineInOut(t: any): number;
        static getBackIn(amount: any): Function;
        static backIn: Function;
        static getBackOut(amount: any): Function;
        static backOut: Function;
        static getBackInOut(amount: any): Function;
        static backInOut: Function;
        static circIn(t: any): number;
        static circOut(t: any): number;
        static circInOut(t: any): number;
        static bounceIn(t: any): number;
        static bounceOut(t: any): number;
        static bounceInOut(t: any): number;
        static getElasticIn(amplitude: any, period: any): Function;
        static elasticIn: Function;
        static getElasticOut(amplitude: any, period: any): Function;
        static elasticOut: Function;
        static getElasticInOut(amplitude: any, period: any): Function;
        static elasticInOut: Function;
    }
}
declare module egret {
    class PromiseObject {
        private static promiseObjectList;
        onSuccessFunc: Function;
        onSuccessThisObject: any;
        onErrorFunc: Function;
        onErrorThisObject: any;
        downloadingSizeFunc: Function;
        downloadingSizeThisObject: any;
        constructor();
        static create(): any;
        private onSuccess(...args);
        private onError(...args);
        private downloadingSize(...args);
        private destroy();
    }
}
declare module egret {
    class Timer extends EventDispatcher {
        constructor(delay: number, repeatCount?: number);
        private _delay;
        delay: number;
        repeatCount: number;
        private _currentCount;
        currentCount: number;
        private _running;
        running: boolean;
        reset(): void;
        start(): void;
        stop(): void;
        private updateInterval;
        private lastCount;
    }
}
declare module egret {
    interface XMLNode {
        nodeType: number;
        parent: XML;
    }
    interface XML extends XMLNode {
        attributes: any;
        children: XMLNode[];
        name: string;
        prefix: string;
        localName: string;
        namespace: string;
    }
    interface XMLText extends XMLNode {
        text: string;
    }
    var XML: {
        parse(text: string): XML;
    };
}
declare module egret {
    function getDefinitionByName(name: string): any;
}
declare var __global: any;
declare module egret {
    var getOption: (key: string) => string;
}
declare module egret {
    function getQualifiedClassName(value: any): string;
}
declare module egret {
    function setTimeout(listener: Function, thisObject: any, delay: number, ...args: any[]): number;
    function clearTimeout(key: number): void;
}
declare module egret {
    function startTick(callBack: Function, thisObject: any): void;
}
declare module egret.web {
    class CanvasFactory implements sys.SurfaceFactory {
        constructor();
        create(useOnce?: boolean): sys.Surface;
        release(surface: sys.Surface): void;
        private testCanvasValid(canvas);
        private createSurface(canvas);
    }
}
declare module egret.web {
    class WebPlayer extends egret.HashObject implements egret.sys.Screen {
        constructor(container: HTMLDivElement);
        private init(container);
        private readOption(container);
        private attachCanvas(container, canvas);
        private playerOption;
        private canvas;
        private container;
        private stage;
        private webTouchHandler;
        private player;
        private webInput;
        private webHide;
        updateScreenSize(): void;
        updateMaxTouches(): void;
    }
}
declare module egret {
    class Bitmap extends DisplayObject {
        constructor(bitmapData?: Texture);
        texture: Texture;
        scale9Grid: egret.Rectangle;
        fillMode: string;
        smoothing: boolean;
        private _pixelHitTest;
        pixelHitTest: boolean;
        private hitTestPixel(stageX, stageY);
    }
}
declare module egret {
    class BlendMode {
        static NORMAL: string;
        static ADD: string;
        static ERASE: string;
    }
}
declare module egret.sys {
    function blendModeToNumber(blendMode: string): number;
    function numberToBlendMode(blendMode: number): string;
}
declare module egret {
    class MovieClip extends DisplayObject {
        private frames;
        frameLabels: any[];
        private frameIntervalTime;
        private isStopped;
        private playTimes;
        private displayedKeyFrameNum;
        private passedTime;
        constructor(movieClipData?: MovieClipData);
        private _initFrame();
        private getFrameLabelByName(labelName, ignoreCase?);
        private getFrameLabelByFrame(frame);
        private getFrameLabelForFrame(frame);
        play(playTimes?: number): void;
        stop(): void;
        prevFrame(): void;
        nextFrame(): void;
        gotoAndPlay(frame: any, playTimes?: number): void;
        gotoAndStop(frame: any): void;
        private gotoFrame(frame);
        private lastTime;
        private advanceTime(timeStamp);
        private advanceFrame();
        private constructFrame();
        private handlePendingEvent();
        totalFrames: number;
        currentFrame: number;
        currentFrameLabel: string;
        currentLabel: string;
        frameRate: number;
        isPlaying: boolean;
        movieClipData: MovieClipData;
        private setMovieClipData(value);
        private setPlayTimes(value);
        private setIsStopped(value);
    }
}
declare module egret {
    class MovieClipDataFactory extends EventDispatcher {
        enableCache: boolean;
        constructor(movieClipDataSet?: any, texture?: Texture);
        clearCache(): void;
        generateMovieClipData(movieClipName?: string): MovieClipData;
        private findFromCache(movieClipName, cache);
        private fillData(movieClipName, movieClip, cache);
        mcDataSet: any;
        texture: Texture;
        spriteSheet: SpriteSheet;
        private setTexture(value);
    }
}
declare module egret {
    class RenderTexture extends egret.Texture {
        constructor();
        drawToTexture(displayObject: egret.DisplayObject, clipBounds?: Rectangle, scale?: number): boolean;
        private drawDisplayObject(displayObject, context);
        private drawWithClip(displayObject, context);
        private drawWithScrollRect(displayObject, context);
        private createRenderContext(width, height);
        dispose(): void;
    }
}
declare module egret {
    class ScrollView extends DisplayObjectContainer {
        _ScrV_Props_: ScrollViewProperties;
        scrollBeginThreshold: number;
        scrollSpeed: number;
        bounces: boolean;
        constructor(content?: DisplayObject);
        _content: DisplayObject;
        setContent(content: DisplayObject): void;
        removeContent(): void;
        verticalScrollPolicy: string;
        horizontalScrollPolicy: string;
        scrollLeft: number;
        scrollTop: number;
        setScrollPosition(top: number, left: number, isOffset?: boolean): void;
        private _validatePosition(top?, left?);
        _updateContentPosition(): void;
        _checkScrollPolicy(): boolean;
        private __checkScrollPolicy(policy, contentLength, viewLength);
        _addEvents(): void;
        _removeEvents(): void;
        _onTouchBegin(e: TouchEvent): void;
        private delayTouchBeginEvent;
        private touchBeginTimer;
        _onTouchBeginCapture(event: TouchEvent): void;
        private _onTouchEndCapture(event);
        private _onTouchBeginTimer();
        private dispatchPropagationEvent(event);
        _onTouchMove(event: TouchEvent): void;
        _onTouchEnd(event: TouchEvent): void;
        _onEnterFrame(event: Event): void;
        private _logTouchEvent(e);
        private _getPointChange(e);
        private _calcVelocitys(e);
        _getContentWidth(): number;
        _getContentHeight(): number;
        getMaxScrollLeft(): number;
        getMaxScrollTop(): number;
        private static weight;
        private _moveAfterTouchEnd();
        _onTweenFinished(tw: Tween): void;
        _onScrollStarted(): void;
        _onScrollFinished(): void;
        setScrollTop(scrollTop: number, duration?: number): egret.Tween;
        setScrollLeft(scrollLeft: number, duration?: number): egret.Tween;
        private getAnimationDatas(pixelsPerMS, curPos, maxPos);
        private cloneTouchEvent(event);
        private throwNotSupportedError();
        addChild(child: DisplayObject): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        setChildIndex(child: DisplayObject, index: number): void;
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        swapChildrenAt(index1: number, index2: number): void;
    }
}
declare module egret {
    class Shape extends DisplayObject {
        constructor();
        graphics: Graphics;
    }
}
declare module egret {
    class Sprite extends DisplayObjectContainer implements IDisplayObjectContainer {
        constructor();
        graphics: Graphics;
    }
}
declare module egret {
    const enum EventPhase {
        CAPTURING_PHASE = 1,
        AT_TARGET = 2,
        BUBBLING_PHASE = 3,
    }
}
declare module egret {
    class HTTPStatusEvent extends Event {
        static HTTP_STATUS: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        private _status;
        status: number;
        static dispatchHTTPStatusEvent(target: IEventDispatcher, status: number): boolean;
    }
}
declare module egret {
    interface ExternalInterface {
    }
    var ExternalInterface: {
        call(functionName: string, value: string): void;
        addCallback(functionName: string, listener: (value) => void): void;
    };
}
declare module egret.native {
    class NativeExternalInterface implements ExternalInterface {
        static call(functionName: string, value: string): void;
        static addCallback(functionName: string, listener: (value) => void): void;
    }
}
declare module egret.web {
    class WebExternalInterface implements ExternalInterface {
        static call(functionName: string, value: string): void;
        static addCallback(functionName: string, listener: (value) => void): void;
    }
}
declare module egret {
    const enum BitmapFilterQuality {
        LOW = 1,
        MEDIUM = 2,
        HIGH = 3,
    }
}
declare module egret {
    class BlurFilter extends Filter {
        blurX: number;
        blurY: number;
        constructor(blurX: number, blurY: number);
    }
}
declare module egret {
    class ColorMatrixFilter extends Filter {
        private matrix2;
        constructor(matrix?: Array<number>);
        matrix: Array<number>;
        private setMatrix(value);
    }
}
declare module egret {
    class DropShadowFilter extends GlowFilter {
        distance: number;
        angle: number;
        constructor(distance?: number, angle?: number, color?: number, alpha?: number, blurX?: number, blurY?: number, strength?: number, quality?: number, inner?: boolean, knockout?: boolean, hideObject?: boolean);
    }
}
declare module egret {
}
declare module egret {
}
declare module egret.localStorage {
    var getItem: (key: string) => string;
    var setItem: (key: string, value: string) => boolean;
    var removeItem: (key: string) => void;
    var clear: () => void;
}
declare module egret.localStorage.native {
}
declare module egret.localStorage.web {
}
declare module egret_native_sound {
    var currentPath: string;
}
declare module egret.native {
    class NativeSoundChannel extends egret.EventDispatcher implements egret.SoundChannel {
        private _effectId;
        constructor();
        private onPlayEnd;
        stop(): void;
        volume: number;
        private _startTime;
        position: number;
    }
}
declare module egret.web {
    class WebVideo extends egret.DisplayObject implements egret.Video {
        src: string;
        poster: string;
        private posterData;
        private video;
        private loaded;
        private closed;
        private heightSet;
        private widthSet;
        constructor();
        load(url: string): void;
        play(startTime?: number, loop?: boolean): void;
        private goFullscreen();
        close(): void;
        pause(): void;
        volume: number;
        position: number;
        private _fullscreen;
        fullscreen: boolean;
        private _bitmapData;
        bitmapData: BitmapData;
        private loadPoster();
        private onVideoLoaded;
        private onVideoEnded();
        private onVideoError();
        private markDirty(time);
    }
}
declare module egret.native {
    class NativeHideHandler extends HashObject {
        constructor(stage: Stage);
    }
}
declare module egret {
    class NativeResourceLoader extends egret.EventDispatcher {
        private _downCount;
        private _path;
        private _bytesTotal;
        load(path: string, bytesTotal: number): void;
        private reload();
        private downloadingProgress(bytesLoaded);
        private downloadFileError();
        private loadOver();
    }
}
declare module egret.native {
    class NativeTouchHandler extends HashObject {
        constructor(stage: Stage);
    }
}
declare module egret {
    class HttpMethod {
        static GET: string;
        static POST: string;
    }
}
declare module egret {
    interface HttpRequest extends EventDispatcher {
        response: any;
        responseType: string;
        withCredentials: boolean;
        open(url: string, method?: string): void;
        send(data?: any): void;
        abort(): void;
        getAllResponseHeaders(): string;
        setRequestHeader(header: string, value: string): void;
        getResponseHeader(header: string): string;
    }
    var HttpRequest: {
        new (): HttpRequest;
    };
}
declare module egret {
    class HttpResponseType {
        static TEXT: string;
        static ARRAY_BUFFER: string;
    }
}
declare module egret.native {
    class NativeImageLoader extends EventDispatcher implements ImageLoader {
        data: BitmapData;
        crossOrigin: string;
        load(url: string): void;
        private check(url);
        private download(url);
        private loadTexture(url);
        private isNetUrl(url);
    }
}
declare module egret.web {
    class WebImageLoader extends EventDispatcher implements ImageLoader {
        data: BitmapData;
        crossOrigin: string;
        private currentImage;
        private currentURL;
        private request;
        load(url: string): void;
        private onBlobLoaded(event);
        private onBlobError(event);
        private loadImage(src);
        private onImageComplete(event);
        private onLoadError(event);
        private emitIOError(url);
        private getImage(event);
    }
}
declare module egret {
    function runEgret(): void;
    function updateAllScreens(): void;
}
declare module egret {
    function assert(assertion?: boolean, message?: string, ...optionalParams: any[]): void;
    function warn(message?: any, ...optionalParams: any[]): void;
    function error(message?: any, ...optionalParams: any[]): void;
    function log(message?: any, ...optionalParams: any[]): void;
}
declare module egret {
    class BitmapText extends DisplayObject {
        constructor();
        text: string;
        font: BitmapFont;
        lineSpacing: number;
        letterSpacing: number;
        static EMPTY_FACTOR: number;
        private _textWidth;
        private _textHeight;
        private _textOffsetX;
        private _textOffsetY;
        private _textLines;
        _lineHeights: Array<number>;
        _getTextLines(): Array<string>;
    }
}
declare module egret {
    class HtmlTextParser {
        constructor();
        private replaceArr;
        private initReplaceArr();
        private replaceSpecial(value);
        private resutlArr;
        parser(htmltext: string): Array<egret.ITextElement>;
        private addToResultArr(value);
        private changeStringToObject(str);
        private getHeadReg();
        private addProperty(info, head, value);
        private stackArray;
        private addToArray(infoStr);
    }
}
declare module egret {
    class InputController extends HashObject {
        private stageText;
        private _text;
        private _isFocus;
        constructor();
        init(text: TextField): void;
        _addStageText(): void;
        _removeStageText(): void;
        _getText(): string;
        _setText(value: string): void;
        private focusHandler(event);
        private blurHandler(event);
        private onMouseDownHandler(event);
        private onStageDownHandler(event);
        private updateTextHandler(event);
        private resetText();
        _hideInput(): void;
        private _updateTransform();
        _updateProperties(): void;
    }
}
declare module egret {
    class NativeStageText extends EventDispatcher implements StageText {
        private textValue;
        constructor();
        private isFinishDown;
        private showScreenKeyboard();
    }
}
declare module egret {
    class Endian {
        static LITTLE_ENDIAN: string;
        static BIG_ENDIAN: string;
    }
    class ByteArray {
        private static SIZE_OF_BOOLEAN;
        private static SIZE_OF_INT8;
        private static SIZE_OF_INT16;
        private static SIZE_OF_INT32;
        private static SIZE_OF_UINT8;
        private static SIZE_OF_UINT16;
        private static SIZE_OF_UINT32;
        private static SIZE_OF_FLOAT32;
        private static SIZE_OF_FLOAT64;
        private BUFFER_EXT_SIZE;
        private data;
        private _position;
        private write_position;
        endian: string;
        constructor(buffer?: ArrayBuffer);
        private _setArrayBuffer(buffer);
        setArrayBuffer(buffer: ArrayBuffer): void;
        buffer: ArrayBuffer;
        dataView: DataView;
        bufferOffset: number;
        position: number;
        length: number;
        bytesAvailable: number;
        clear(): void;
        readBoolean(): boolean;
        readByte(): number;
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        readDouble(): number;
        readFloat(): number;
        readInt(): number;
        readShort(): number;
        readUnsignedByte(): number;
        readUnsignedInt(): number;
        readUnsignedShort(): number;
        readUTF(): string;
        readUTFBytes(length: number): string;
        writeBoolean(value: boolean): void;
        writeByte(value: number): void;
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        writeDouble(value: number): void;
        writeFloat(value: number): void;
        writeInt(value: number): void;
        writeShort(value: number): void;
        writeUnsignedInt(value: number): void;
        writeUTF(value: string): void;
        writeUTFBytes(value: string): void;
        toString(): string;
        _writeUint8Array(bytes: Uint8Array, validateBuffer?: boolean): void;
        validate(len: number): boolean;
        private validateBuffer(len, needReplace?);
        private encodeUTF8(str);
        private decodeUTF8(data);
        private encoderError(code_point);
        private decoderError(fatal, opt_code_point?);
        private EOF_byte;
        private EOF_code_point;
        private inRange(a, min, max);
        private div(n, d);
        private stringToCodePoints(string);
    }
}
declare module egret {
    class Injector {
        private static mapClassDic;
        static mapClass(whenAskedFor: any, instantiateClass: any, named?: string): void;
        private static getKey(hostComponentKey);
        private static mapValueDic;
        static mapValue(whenAskedFor: any, useValue: any, named?: string): void;
        static hasMapRule(whenAskedFor: any, named?: string): boolean;
        static getInstance(clazz: any, named?: string): any;
    }
}
declare module egret {
    class Recycler extends HashObject {
        constructor(autoDisposeTime?: number);
        static _callBackList: Array<any>;
        private autoDisposeTime;
        private frameCount;
        private objectPool;
        private _length;
        length: number;
        push(object: any): void;
        pop(): any;
        dispose(): void;
    }
}
declare function __extends(d: any, b: any): void;
declare module egret {
    function superSetter(thisObj: any, type: string, ...values: any[]): any;
    function superGetter(thisObj: any, type: string): any;
}
declare module egret {
    function getQualifiedSuperclassName(value: any): string;
}
declare module egret {
    function hasDefinition(name: string): boolean;
}
declare module egret {
    function is(instance: any, typeName: string): boolean;
}
declare module egret {
    function setInterval(listener: Function, thisObject: any, delay: number, ...args: any[]): number;
    function clearInterval(key: number): void;
}
declare module egret.web {
}
declare module egret.web {
    class WebCapability {
        static detect(): void;
        private static checkHtml5Support();
    }
}
declare module egret.web {
    function getOption(key: string): string;
}
declare module egret.web {
}
declare module egret.web {
    class XMLNode {
        constructor(nodeType: number, parent: XML);
        nodeType: number;
        parent: XML;
    }
    class XML extends XMLNode {
        constructor(localName: string, parent: XML, prefix: string, namespace: string, name: string);
        attributes: {
            [key: string]: string;
        };
        children: XMLNode[];
        name: string;
        prefix: string;
        localName: string;
        namespace: string;
    }
    class XMLText extends XMLNode {
        constructor(text: string, parent: XML);
        text: string;
    }
}