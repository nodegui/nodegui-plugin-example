cmake_minimum_required(VERSION 3.1)
if(${CMAKE_VERSION} VERSION_LESS 3.15)
    cmake_policy(VERSION ${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION})
else()
    cmake_policy(VERSION 3.15)
endif()

set(CMAKE_INCLUDE_CURRENT_DIR ON)
# Need for automatic moc. Moc executable path is set in qt.cmake
set(CMAKE_AUTOMOC ON)
set(QT_VERSION_MAJOR 5)
add_executable(Qt5::moc IMPORTED)

project(NodeGUIStatusBar 
    VERSION 1.0
)
set(PLUGIN_ADDON_NAME "nodegui_plugin_statusbar")

# ----------- User config -------------

add_library(${PLUGIN_ADDON_NAME} SHARED  
    "${CMAKE_JS_SRC}"
    "${PROJECT_SOURCE_DIR}/src/cpp/main.cpp"
    "${PROJECT_SOURCE_DIR}/src/cpp/QStatusBar/qstatusbar_wrap.cpp"
    "${PROJECT_SOURCE_DIR}/src/cpp/QStatusBar/nstatusbar.hpp"
) 
target_include_directories(${PLUGIN_ADDON_NAME} PRIVATE 
    "${CMAKE_JS_INC}" 
    "${PROJECT_SOURCE_DIR}"
)
target_link_libraries(${PLUGIN_ADDON_NAME} PRIVATE
    "${CMAKE_JS_LIB}"
)


# --------------Plugin Config---------------- 
execute_process(COMMAND node -p "require('@nodegui/nodegui/plugin').CMAKE_HELPER_FILE"
    WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
    OUTPUT_VARIABLE NODEGUI_PLUGIN_CMAKE_HELPER
)
string(REPLACE "\n" "" NODEGUI_PLUGIN_CMAKE_HELPER ${NODEGUI_PLUGIN_CMAKE_HELPER})
string(REPLACE "\"" "" NODEGUI_PLUGIN_CMAKE_HELPER ${NODEGUI_PLUGIN_CMAKE_HELPER})

include("${NODEGUI_PLUGIN_CMAKE_HELPER}")

AddPluginConfig(${PLUGIN_ADDON_NAME})
# --------------------------------------------