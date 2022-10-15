import { Color } from "../color";
import { SpaceDelimitedHslAlphaDetector } from "../detector/space-delimited-hsl-alpha-detector";

/**
 * 空白文字区切りのアルファ値を含むHSL表現の抽出処理を提供します。
 */
class SpaceDelimitedHslAlphaExtractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new SpaceDelimitedHslAlphaDetector();
        if (!detector.match(expression)) return null;

        const head = expression.indexOf("(");
        const tail = expression.indexOf(")");
        const body = expression.slice(head + 1, tail);

        const values = body.split(" ").filter(x => x.length > 0);
        const subValues = values[2].split("/");
        const hue = Number(values[0].trim());
        const saturation = Number(values[1].replace(/[^0-9.]/g, ""));
        const lightness = Number(subValues[0].replace(/[^0-9.]/g, ""));
        const alpha = Number(subValues[1].replace(/[^0-9.]/g, "")) * (subValues[1].indexOf("%") > -1 ? 1 : 100);

        /* ---------------------------------------------------------------------- */
        // 30-seconds-of-code (Licensed under CC BY 4.0)
        // https://www.30secondsofcode.org/js/s/hsl-to-rgb
        const hslToRgb = (h, s, l) => {
            s /= 100;
            l /= 100;
            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
            return [255 * f(0), 255 * f(8), 255 * f(4)];
        };
        /* ---------------------------------------------------------------------- */

        const rgb = hslToRgb(hue, saturation, lightness).map(x => Math.round(x));
        return new Color(rgb[0], rgb[1], rgb[2], alpha);
    }
}

export { SpaceDelimitedHslAlphaExtractor };