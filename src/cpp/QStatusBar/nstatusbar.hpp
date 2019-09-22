#pragma once

#include <QStatusBar>
#include <nodegui/core/NodeWidget/nodewidget.h>

class NStatusBar: public QStatusBar, public NodeWidget
{
    Q_OBJECT
    NODEWIDGET_IMPLEMENTATIONS(QStatusBar)
public:
    using QStatusBar::QStatusBar; //inherit all constructors of QStatusBar
};


