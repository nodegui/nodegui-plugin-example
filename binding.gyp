{
    "targets": [
        {
            "target_name": "nodegui_statusbar",
            'include_dirs': [
                '.',
                'node_modules/@nodegui'
            ],
            "includes": [
                "node_modules/@nodegui/nodegui/plugin/plugin.gypi",
                "./config/moc.gypi",
                "./config/application.gypi",
            ],
        },
    ]
}
