import {
  QMainWindow,
  QLabel,
  QPushButton,
  FlexLayout,
  QWidget,
  CursorShape,
  WindowState
} from "@nodegui/nodegui";

import { QStatusBar } from "./lib";

const win = new QMainWindow();

const label = new QLabel();
label.setText("Hello world 🧙");
label.setInlineStyle("font-size: 20px;");
label.setCursor(CursorShape.ForbiddenCursor);

const button = new QPushButton();
button.setText("Push Push Push!");
button.addEventListener("clicked", () => {
  statusBar.showMessage(`hello ${Date.now()}`, 1000);
});

const rootView = new QWidget();
rootView.setObjectName("root");
rootView.setLayout(new FlexLayout());

const statusBar = new QStatusBar();

if (rootView.layout) {
  rootView.layout.addWidget(label);
  rootView.layout.addWidget(button);
  rootView.layout.addWidget(statusBar);
}
statusBar.setInlineStyle("align-self:'stretch';");
// statusBar.show();

win.setCentralWidget(rootView);
win.setStyleSheet(`
    #root {
      flex: 1;
      height: '100%';
      align-items: 'center';
      justify-content: 'space-around';
    }
  `);

win.setWindowTitle("NodeGUI Demo");

win.resize(400, 700);
win.show();
win.setWindowState(WindowState.WindowActive);

(global as any).win = win; // To prevent win from being garbage collected.
