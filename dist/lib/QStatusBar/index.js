"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodegui_1 = require("@nodegui/nodegui");
const addon_1 = __importDefault(require("../utils/addon"));
exports.QStatusBarEvents = Object.freeze(Object.assign({}, nodegui_1.BaseWidgetEvents));
class QStatusBar extends nodegui_1.NodeWidget {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QStatusBar(parent.native);
        }
        else {
            native = new addon_1.default.QStatusBar();
        }
        super(native);
        this.native = native;
        this.parent = parent;
        // bind member functions
        this.showMessage.bind(this);
    }
    showMessage(message, timeout) {
        this.native.showMessage(message, timeout);
    }
}
exports.QStatusBar = QStatusBar;
