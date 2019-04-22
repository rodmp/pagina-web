import { resolve } from 'app-root-path'
import { config as dotenv } from 'dotenv'
import {
  app,
  BrowserWindow
} from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import { format } from 'url'

dotenv({ path: '.env.local' })
dotenv()

const { PORT } = process.env

app.on('ready', async () => {
  await prepareNext('./src', PORT)

  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  const devPath = `http://localhost:${PORT}/index`

  const prodPath = format({
    pathname: resolve('src/out/index/index.html'),
    protocol: 'file:',
    slashes: true
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
})

app.on('window-all-closed', app.quit)
