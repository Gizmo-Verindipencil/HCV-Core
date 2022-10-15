import { Color } from "../color";
import { Hex3Creator } from "./hex3-creator";
import { Hex4Creator } from "./hex4-creator";
import { Hex6Creator } from "./hex6-creator";
import { Hex8Creator } from "./hex8-creator";
import { HslAlphaCreator } from "./hsl-alpha-creator";
import { HslCreator } from "./hsl-creator";
import { HslaCreator } from "./hsla-creator";
import { RgbAlphaCreator } from "./rgb-alpha-creator";
import { RgbCreator } from "./rgb-creator";
import { RgbPercentAlphaCreator } from "./rgb-percent-alpha-creator";
import { RgbPercentCreator } from "./rgb-percent-creator";
import { RgbaCreator } from "./rgba-creator";
import { RgbaPercentCreator } from "./rgba-percent-creator";
import { SpaceDelimitedHslAlphaCreator } from "./space-delimited-hsl-alpha-creator";
import { SpaceDelimitedHslCreator } from "./space-delimited-hsl-creator";
import { WebColorCreator } from "./web-color-creator";
import { ColorExpressionType } from "../color-expression-type";

/**
 * RGBA表現の作成処理を提供します。
 */
class ColorCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @param {String} type 色表現の種類。
     * @return {String} 色表現。
     */
    create(color, type) {
        switch(type) {
            case ColorExpressionType.hex3                   : return this._createHex3(color)                   ;
            case ColorExpressionType.hex4                   : return this._createHex4(color)                   ;
            case ColorExpressionType.hex6                   : return this._createHex6(color)                   ;
            case ColorExpressionType.hex8                   : return this._createHex8(color)                   ;
            case ColorExpressionType.hslAlpha               : return this._createHslAlpha(color)               ;
            case ColorExpressionType.hsl                    : return this._createHsl(color)                    ;
            case ColorExpressionType.hsla                   : return this._createHsla(color)                   ;
            case ColorExpressionType.rgbAlpha               : return this._createRgbAlpha(color)               ;
            case ColorExpressionType.rgb                    : return this._createRgb(color)                    ;
            case ColorExpressionType.rgbPercentAlpha        : return this._createRgbPercentAlpha(color)        ;
            case ColorExpressionType.rgbPercent             : return this._createRgbPercent(color)             ;
            case ColorExpressionType.rgba                   : return this._createRgba(color)                   ;
            case ColorExpressionType.rgbaPercent            : return this._createRgbaPercent(color)            ;
            case ColorExpressionType.spaceDelimitedHslAlpha : return this._createSpaceDelimitedHslAlpha(color) ;
            case ColorExpressionType.spaceDelimitedHsl      : return this._createSpaceDelimitedHsl(color)      ;
            case ColorExpressionType.webColor               : return this._createWebColor(color)               ;
        }
        return null;
    }

    /**
     * 3桁の16進数表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHex3(color) {
        const creator = new Hex3Creator();
        return creator.create(color);
    }

    /**
     * 4桁の16進数表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHex4(color) {
        const creator = new Hex4Creator();
        return creator.create(color);
    }

    /**
     * 6桁の16進数表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHex6(color) {
        const creator = new Hex6Creator();
        return creator.create(color);
    }

    /**
     * 8桁の16進数表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHex8(color) {
        const creator = new Hex8Creator();
        return creator.create(color);
    }

    /**
     * アルファ値を含むHSL表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHslAlpha(color) {
        const creator = new HslAlphaCreator();
        return creator.create(color);
    }

    /**
     * HSL表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHsl(color) {
        const creator = new HslCreator();
        return creator.create(color);
    }

    /**
     * HSLA表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createHsla(color) {
        const creator = new HslaCreator();
        return creator.create(color);
    }

    /**
     * アルファ値を含むRGB表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createRgbAlpha(color) {
        const creator = new RgbAlphaCreator();
        return creator.create(color);
    }

    /**
     * RGB表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createRgb(color) {
        const creator = new RgbCreator();
        return creator.create(color);
    }

    /**
     * アルファ値を含む%指定RGB表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createRgbPercentAlpha(color) {
        const creator = new RgbPercentAlphaCreator();
        return creator.create(color);
    }

    /**
     * %指定RGB表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createRgbPercent(color) {
        const creator = new RgbPercentCreator();
        return creator.create(color);
    }

    /**
     * RGBA表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createRgba(color) {
        const creator = new RgbaCreator();
        return creator.create(color);
    }

    /**
     * %指定RGBA表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createRgbaPercent(color) {
        const creator = new RgbaPercentCreator();
        return creator.create(color);
    }

    /**
     * 空白文字区切りのアルファ値を含むHSL表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createSpaceDelimitedHslAlpha(color) {
        const creator = new SpaceDelimitedHslAlphaCreator();
        return creator.create(color);
    }

    /**
     * 空白文字区切りのHSL表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createSpaceDelimitedHsl(color) {
        const creator = new SpaceDelimitedHslCreator();
        return creator.create(color);
    }

    /**
     * WEBカラー表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    _createWebColor(color) {
        const creator = new WebColorCreator();
        const name = creator.create(color);
        if (name) return name;

        const altCreator = new Hex6Creator();
        return altCreator.create(color);
    }
}

export { ColorCreator };
