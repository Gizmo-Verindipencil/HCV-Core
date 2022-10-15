import { RgbaDetector } from "../../../src/detector/rgba-detector";
import { ExpressionSetFactory } from "../expression-set-factory";

// rgba
// RGBA表現(例: rgba(0, 0, 0, 0) )に関するテスト

describe("RgbaDetector.match - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 整数のRGBA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 小数のRGBA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // アルファ値が整数のRGBA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値が小数のRGBA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        for (const expression of [
            " rgba(0,0,0,0) ",
            " rgba(1,1,1,1)",
            "rgba(2,2,2,2) "
        ]) {
            const result = detector.match(expression);
            
            // 結果確認
            // 前後の空白は無視されること
            expect(result).toBe(true);
        }
    });

    // 6:
    it("6: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 負数のRGBA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 7:
    it("7: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 整数部が省略された小数のRGBA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 8:
    it("8: その他アンマッチ", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // テスト対象の処理を実行
        for (const expression of ExpressionSetFactory.createElse("rgba")) {
            const result = detector.match(expression);
            
            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});