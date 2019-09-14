"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodegui_1 = require("@nodegui/nodegui");
const QStatusBar_1 = require("./lib/QStatusBar");
const win = new nodegui_1.QMainWindow();
const rootView = new nodegui_1.QWidget();
rootView.setObjectName("root");
rootView.setLayout(new nodegui_1.FlexLayout());
const statusBar = new QStatusBar_1.QStatusBar();
statusBar.setInlineStyle("align-self:'stretch';");
const button = new nodegui_1.QPushButton();
button.setText("Push Push Push!");
button.addEventListener("clicked", () => {
    statusBar.showMessage(`hello ${Date.now()}`, 1000);
});
if (rootView.layout) {
    rootView.layout.addWidget(button);
    rootView.layout.addWidget(statusBar);
}
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
global.win = win; // To prevent win from being garbage collected.
