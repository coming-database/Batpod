const path = require('path')

const GAME_DASHBOARD_ENTRY = path.join(__dirname, '../src/game_dashboard/index.js')
const PUBLIC_DIR = path.join(__dirname, '../public')
const DIST_DIR = path.join(PUBLIC_DIR, '/dist')
const TEMPLATE_HTML = path.join(__dirname, '../template.html')

module.exports = {
  GAME_DASHBOARD_ENTRY,
  PUBLIC_DIR,
  TEMPLATE_HTML,
  DIST_DIR
}
