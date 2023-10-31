fx_version 'cerulean'

description 'React TS Vite Boilerplate for FiveM'
author 'daZepelin'

lua54 'yes'
use_fxv2_oal 'yes'
game 'gta5'


server_scripts {
    'server/**/*',
}

client_scripts {
    'client/**/*',
}

ui_page 'dist/index.html'

files {
    'dist/index.html',
    'dist/**/*'
}