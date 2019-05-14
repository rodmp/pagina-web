import { config as dotenv } from 'dotenv'
import {
  app,
  BrowserWindow,
} from 'electron'
import isDev from 'electron-is-dev'
// @ts-ignore: Cannot find module
// TODO:W waiting this PR to be merged:
// https://github.com/leo/electron-next/pull/26
import prepareRenderer from 'electron-next'
import { resolve } from 'path'
import { format } from 'url'

dotenv({ path: '.env.local' })
dotenv()

const { PORT = 4000 } = process.env

app.on('ready', async () => {
  await prepareRenderer('./src', PORT)

  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  })

  const devPath = `http://localhost:${PORT}/index`

  const prodPath = format({
    pathname: resolve('src/out/index/index.html'),
    protocol: 'file:',
    slashes: true,
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
})

app.on('window-all-closed', app.quit)
