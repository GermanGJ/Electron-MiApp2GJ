const {Menu} = require('electron')

const template = [
    {
        label: 'Archivo',
        submenu: [
            {
                label: 'Abrir Proyecto',
            },
            {
                label: 'Nuevo Proyecto',
            }
        ]
    },
    {
        label: 'Configuracion',
        submenu: [
            {
                label: 'OData',
            }
        ]
    },
    {
        label: 'Ayuda',
        submenu: [
        {
            role: 'toggledevtools'
        },
        {
          label: 'Ayuda Electron',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
]

const menu = Menu.buildFromTemplate(template)

module.exports = menu



/*
const template = [
    {
      label: 'Configuracion',
      submenu: [
        { role: 'Ambientes' },
        { role: 'Llaves OData' },
        { type: 'separator' },
        { role: 'toggledevtools' }
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    /*
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  */