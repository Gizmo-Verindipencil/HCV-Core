import { HslDetector } from "../../../src/detector/hsl-detector";
import { ExpressionSetFactory } from "../expression-set-factory";

// hsl
// HSL表現(例: hsl(0, 0%, 0%) )に関するテスト

describe("HslDetector.match - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(2)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 整数のHSL表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(2)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 小数のHSL表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        for (const expression of [
            " hsl(0,0%,0%) ",
            " hsl(1,1%,1%)",
            "hsl(2,2%,2%) "
        ]) {
            const result = detector.match(expression);
            
            // 結果確認
            // 前後の空白は無視されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(2)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 負数のHSL表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(2)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 整数部が省略された小数のHSL表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 6:
    it("6: degキーワードあり", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const getDegree = x => x != x.trimEnd() ? `${x.trimEnd()}deg ` : `${x}deg`;
        const valueSets = values.map(x => [ getDegree(x), [...Array(2)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // degキーワードを含むHSL表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 7:
    it("7: その他アンマッチ", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslDetector();

        // テスト対象の処理を実行
        for (const expression of ExpressionSetFactory.createElse("hsl")) {
            const result = detector.match(expression);
            
            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});