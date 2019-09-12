#pragma once

#include <QStatusBar>
#include "src/cpp/core/NodeWidget/nodewidget.h"

class NStatusBar: public QStatusBar, public NodeWidget
{
    NODEWIDGET_IMPLEMENTATIONS(QStatusBar)
public:
    using QStatusBar::QStatusBar; //inherit all constructors of QStatusBar
};


