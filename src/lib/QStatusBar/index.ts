import { NativeElement, NodeWidget, QWidgetSignals } from "@nodegui/nodegui";
import addon from "../utils/addon";

export interface QStatusBarSignals extends QWidgetSignals {}
export class QStatusBar extends NodeWidget<QStatusBarSignals> {
  native: NativeElement;
  constructor(parent?: NodeWidget<any>) {
    let native;
    if (parent) {
      native = new addon.QStatusBar(parent.native);
    } else {
      native = new addon.QStatusBar();
    }
    super(native);
    this.native = native;
    this.nodeParent = parent;
  }
  showMessage(message: string, timeout: number) {
    this.native.showMessage(message, timeout);
  }
}
