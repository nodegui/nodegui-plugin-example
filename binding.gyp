{
    "targets": [
        {
            "target_name": "nodegui_statusbar",
            'include_dirs': [
                '.',
                './node_modules/@nodegui'
            ],
            "includes": [
                "./node_modules/@nodegui/nodegui/config/common.gypi",
                "./node_modules/@nodegui/nodegui/config/qt.gypi",
                "./node_modules/@nodegui/nodegui/config/deps.gypi",
                "./config/moc.gypi",
                "./config/application.gypi",
            ],
            'conditions':[
                ['OS=="mac"', {
                    'xcode_settings': {
                        'OTHER_LDFLAGS': ['-Wl,-rpath,@loader_path'],
                    },
                }]
            ]
        },
    ]
}
