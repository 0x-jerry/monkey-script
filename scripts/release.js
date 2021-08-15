const pkg = require('../package.json')
const fs = require('fs/promises')
const path = require('path')
const semver = require('semver')

pkg.version = semver.inc(pkg.version, 'patch')

const tpl = `// ==UserScript==
// @name         Useful Script
// @namespace    http://tampermonkey.net/
// @version      ${pkg.version}
// @description  try to take over the world!
// @author       0x-jerry
// @match        http://*/*
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @downloadURL  https://raw.githubusercontent.com/0x-jerry/monkey-script/main/index.user.js

// @require      dist/0x-jerry.umd.js

// @resource     IMPORTED_CSS dist/style.css

// @grant        GM_getResourceText
// @grant        GM_addStyle

// ==/UserScript==

unsafeWindow.__0x_jerry_prod__ = true
window.__0x_jerry_prod__ = true
;(() => {
  const css = GM_getResourceText('IMPORTED_CSS')
  GM_addStyle(css)
})();
`

main()

async function main() {
  await fs.writeFile(path.resolve('package.json'), JSON.stringify(pkg, null, 2))

  await fs.writeFile(path.resolve('index.user.js'), tpl, {
    encoding: 'utf-8',
  })
}
