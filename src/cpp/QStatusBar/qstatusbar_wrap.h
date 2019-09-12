#pragma once

#include <napi.h>
#include <stdlib.h>
#include "nstatusbar.h"
#include "src/cpp/QtWidgets/QWidget/qwidget_macro.h"

class QStatusBarWrap : public  Napi::ObjectWrap<QStatusBarWrap>{
 private:
  std::unique_ptr<NStatusBar> instance;
 public:
  static Napi::Object init(Napi::Env env, Napi::Object exports);
  QStatusBarWrap(const Napi::CallbackInfo& info);
  ~QStatusBarWrap();
  NStatusBar* getInternalInstance();
  //class constructor
  static Napi::FunctionReference constructor;
  //wrapped methods
  Napi::Value showMessage(const Napi::CallbackInfo& info);

  QWIDGET_WRAPPED_METHODS_DECLARATION
 
};

