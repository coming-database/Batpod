const path = require('path')

const GAME_DASHBOARD_ENTRY = path.join(__dirname, '../src/game_dashboard/index.js')
const ADMIN_DASHBOARD_ENTRY = path.join(__dirname, '../src/admin_dashboard/index.js')

const PUBLIC_DIR = path.join(__dirname, '../public')
const DIST_DIR = path.join(PUBLIC_DIR, '/dist')
const APP_TEMPLATE_HTML = path.join(__dirname, './templates/app_template.html')
const ADMIN_TEMPLATE_HTML = path.join(__dirname, './templates/admin_template.html')

module.exports = {
  GAME_DASHBOARD_ENTRY,
  ADMIN_DASHBOARD_ENTRY,

  APP_TEMPLATE_HTML,
  ADMIN_TEMPLATE_HTML,

  PUBLIC_DIR,
  DIST_DIR
}
