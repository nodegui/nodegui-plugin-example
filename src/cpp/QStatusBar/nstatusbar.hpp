#pragma once

#include <nodegui/core/NodeWidget/nodewidget.h>
#include <QStatusBar>

class NStatusBar : public QStatusBar, public NodeWidget {
 public:
  Q_OBJECT
  NODEWIDGET_IMPLEMENTATIONS(QStatusBar)
 public:
  using QStatusBar::QStatusBar;  // inherit all constructors of QStatusBar
};
