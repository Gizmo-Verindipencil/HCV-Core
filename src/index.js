import { ColorCreator } from "./creator/color-creator";
import { Hex3Creator } from "./creator/hex3-creator";
import { Hex4Creator } from "./creator/hex4-creator";
import { Hex6Creator } from "./creator/hex6-creator";
import { Hex8Creator } from "./creator/hex8-creator";
import { HslAlphaCreator } from "./creator/hsl-alpha-creator";
import { HslCreator } from "./creator/hsl-creator";
import { HslaCreator } from "./creator/hsla-creator";
import { RgbAlphaCreator } from "./creator/rgb-alpha-creator";
import { RgbCreator } from "./creator/rgb-creator";
import { RgbPercentAlphaCreator } from "./creator/rgb-percent-alpha-creator";
import { RgbPercentCreator } from "./creator/rgb-percent-creator";

import { ColorDetector } from "./detector/color-detector";
import { Hex3Detector } from "./detector/hex3-detector";
import { Hex4Detector } from "./detector/hex4-detector";
import { Hex6Detector } from "./detector/hex6-detector";
import { Hex8Detector } from "./detector/hex8-detector";
import { HslAlphaDetector } from "./detector/hsl-alpha-detector";
import { HslDetector } from "./detector/hsl-detector";
import { HslaDetector } from "./detector/hsla-detector";
import { RgbAlphaDetector } from "./detector/rgb-alpha-detector";
import { RgbDetector } from "./detector/rgb-detector";
import { RgbPercentAlphaDetector } from "./detector/rgb-percent-alpha-detector";
import { RgbPercentDetector } from "./detector/rgb-percent-detector";
import { WebColorDetector } from "./detector/web-color-detector";

import { ColorExtractor } from "./extractor/color-extractor";
import { Hex3Extractor } from "./extractor/hex3-extractor";
import { Hex4Extractor } from "./extractor/hex4-extractor";
import { Hex6Extractor } from "./extractor/hex6-extractor";
import { Hex8Extractor } from "./extractor/hex8-extractor";
import { HslAlphaExtractor } from "./extractor/hsl-alpha-extractor";
import { HslExtractor } from "./extractor/hsl-extractor";
import { HslaExtractor } from "./extractor/hsla-extractor";
import { RgbAlphaExtractor } from "./extractor/rgb-alpha-extractor";
import { RgbExtractor } from "./extractor/rgb-extractor";
import { RgbPercentAlphaExtractor } from "./extractor/rgb-percent-alpha-extractor";
import { RgbPercentExtractor } from "./extractor/rgb-percent-extractor";
import { WebColorExtractor } from "./extractor/web-color-extractor";

class _Manager {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        this._cache = {};
    }

    /**
     * 対応するインスタンスを取得します。
     * @param {String} key インスタンスの管理キー。
     * @param {Function} type クラスの定義。
     * @returns {Object} インスタンスを返します。
     */
    _getInstance(key, type) {
        let instance = this._cache[key];
        if (instance !== null) return instance;
        instance = new type();
        this._cache[key] = instance;
        return instance;
    }
}

// 作成処理を公開
class _CreatorManager extends _Manager {
    /**
     * @type {ColorCreator}
     */
    get color() {
        return this._getInstance("color", ColorCreator);
    }

    /**
     * @type {Hex3Creator}
     */
    get hex3() {
        return this._getInstance("hex3", Hex3Creator);
    }
    
    /**
     * @type {Hex4Creator}
     */
    get hex4() {
        return this._getInstance("hex4", Hex4Creator);
    }

    /**
     * @type {Hex6Creator}
     */
    get hex6() {
        return this._getInstance("hex6", Hex6Creator);
    }

    /**
     * @type {Hex8Creator}
     */
    get hex8() {
        return this._getInstance("hex8", Hex8Creator);
    }

    /**
     * @type {HslAlphaCreator}
     */
    get hslAlpha() {
        return this._getInstance("hsl-alpha", HslAlphaCreator);
    }

    /**
     * @type {HslCreator}
     */
    get hsl() {
        return this._getInstance("hsl", HslCreator);
    }

    /**
     * @type {HslaCreator}
     */
    get hsla() {
        return this._getInstance("hsla", HslaCreator);
    }

    /**
     * @type {RgbAlphaCreator}
     */
    get rgbAlpha() {
        return this._getInstance("rgb-alpha", RgbAlphaCreator);
    }
    
    /**
     * @type {RgbCreator}
     */
    get rgb() {
        return this._getInstance("rgb", RgbCreator);
    }
    
    /**
     * @type {RgbPercentAlphaCreator}
     */
    get rgbPercentAlpha() {
        return this._getInstance("rgb-percent-alpha", RgbPercentAlphaCreator);
    }

    /**
     * @type {RgbPercentCreator}
     */
    get rgbPercent() {
        return this._getInstance("rgb-percent", RgbPercentCreator);
    }
}
exports.creator = new _CreatorManager();

// 検出処理を公開
class _DetectorManager extends _Manager {
    /**
     * @type {ColorDetector}
     */
    get color() {
        return this._getInstance("color", ColorDetector);
    }

    /**
     * @type {Hex3Detector}
     */
    get hex3() {
        return this._getInstance("hex3", Hex3Detector);
    }
    
    /**
     * @type {Hex4Detector}
     */
    get hex4() {
        return this._getInstance("hex4", Hex4Detector);
    }

    /**
     * @type {Hex6Detector}
     */
    get hex6() {
        return this._getInstance("hex6", Hex6Detector);
    }

    /**
     * @type {Hex8Detector}
     */
    get hex8() {
        return this._getInstance("hex8", Hex8Detector);
    }

    /**
     * @type {HslAlphaDetector}
     */
    get hslAlpha() {
        return this._getInstance("hsl-alpha", HslAlphaDetector);
    }

    /**
     * @type {HslDetector}
     */
    get hsl() {
        return this._getInstance("hsl", HslDetector);
    }

    /**
     * @type {HslaDetector}
     */
    get hsla() {
        return this._getInstance("hsla", HslaDetector);
    }

    /**
     * @type {RgbAlphaDetector}
     */
    get rgbAlpha() {
        return this._getInstance("rgb-alpha", RgbAlphaDetector);
    }
    
    /**
     * @type {RgbDetector}
     */
    get rgb() {
        return this._getInstance("rgb", RgbDetector);
    }
    
    /**
     * @type {RgbPercentAlphaDetector}
     */
    get rgbPercentAlpha() {
        return this._getInstance("rgb-percent-alpha", RgbPercentAlphaDetector);
    }

    /**
     * @type {RgbPercentDetector}
     */
    get rgbPercent() {
        return this._getInstance("rgb-percent", RgbPercentDetector);
    }

    /**
     * @type {WebColorDetector}
     */
    get webColor() {
        return this._getInstance("web-color", WebColorDetector);
    }
}
exports.detector = new _DetectorManager();

// 抽出処理を公開
class _ExtractorManager extends _Manager {
    /**
     * @type {ColorExtractor}
     */
    get color() {
        return this._getInstance("color", ColorExtractor);
    }

    /**
     * @type {Hex3Extractor}
     */
    get hex3() {
        return this._getInstance("hex3", Hex3Extractor);
    }
    
    /**
     * @type {Hex4Extractor}
     */
    get hex4() {
        return this._getInstance("hex4", Hex4Extractor);
    }

    /**
     * @type {Hex6Extractor}
     */
    get hex6() {
        return this._getInstance("hex6", Hex6Extractor);
    }

    /**
     * @type {Hex8Extractor}
     */
    get hex8() {
        return this._getInstance("hex8", Hex8Extractor);
    }

    /**
     * @type {HslAlphaExtractor}
     */
    get hslAlpha() {
        return this._getInstance("hsl-alpha", HslAlphaExtractor);
    }

    /**
     * @type {HslExtractor}
     */
    get hsl() {
        return this._getInstance("hsl", HslExtractor);
    }

    /**
     * @type {HslaExtractor}
     */
    get hsla() {
        return this._getInstance("hsla", HslaExtractor);
    }

    /**
     * @type {RgbAlphaExtractor}
     */
    get rgbAlpha() {
        return this._getInstance("rgb-alpha", RgbAlphaExtractor);
    }
    
    /**
     * @type {RgbExtractor}
     */
    get rgb() {
        return this._getInstance("rgb", RgbExtractor);
    }
    
    /**
     * @type {RgbPercentAlphaExtractor}
     */
    get rgbPercentAlpha() {
        return this._getInstance("rgb-percent-alpha", RgbPercentAlphaExtractor);
    }

    /**
     * @type {RgbPercentExtractor}
     */
    get rgbPercent() {
        return this._getInstance("rgb-percent", RgbPercentExtractor);
    }

    /**
     * @type {WebColorExtractor}
     */
    get webColor() {
        return this._getInstance("web-color", WebColorExtractor);
    }
}
exports.extrator = new _ExtractorManager();