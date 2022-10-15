import { NumberExpression } from "./number-expression";

/**
 * アルファ値を含むRGB表現の検出処理を提供します。
 */
class RgbAlphaDetector {
    /**
     * 色表現の正規表現を取得します。
     * @returns {String} 正規表現を返します。
     */
    _getColorExpression() {
        const values = [
            [...Array(3)].map(x => NumberExpression.numericWithMargins),
            NumberExpression.questionablePercentWithMargins
        ].flat();
        return `rgb\\(${values.join(",")}\\)`;
    }

    /**
     * 表現を検査します。
     * @param {String} expression 検査対象の表現。
     * @returns {Boolean} 検証結果(true : 一致、false : 不一致)を返します。
     */
    match(expression) {
        const color = this._getColorExpression();
        const regExp = new RegExp(`^\\s*${color}\\s*$`, "i");
        return regExp.test(expression);
    }

    /**
     * 文字列中の該当表現を検出します。
     * @param {String} expression 検査対象の表現。
     * @returns {Array<String>} 検出した表現を返します。
     */
    detect(expression) {
        const color = this._getColorExpression();
        const regExp = new RegExp(color, "gi");
        const results = (expression || "").match(regExp) || [];
        return results.map(x => x.trim());
    }
}

export { RgbAlphaDetector };