import { ColorCreator } from "./creator/color-creator";
import { ColorDetector } from "./detector/color-detector";
import { ColorExtractor } from "./extractor/color-extractor";

exports.creator = new ColorCreator();
exports.detector = new ColorDetector();
exports.extractor = new ColorExtractor();