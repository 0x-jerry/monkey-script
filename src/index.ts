import _ from 'lodash'

interface SiteFn {
  test: RegExp
  init(): void
}

function mode() {
  setTimeout(() => {
    if (window.__0x_jerry_dev__) {
      const el = document.createElement('div')
      el.setAttribute(
        'style',
        'position: fixed; top: 0; right: 0; padding: 5px; background: #fff; border: 1px solid grey; z-index: 999999;'
      )
      el.innerText = 'DEV'

      document.body.append(el)
    } else {
      console.log('// [PROD] Useful script loaded.')
    }
  }, 0)
}

;(function () {
  mode()
  console.log(_.uniq([1, 2, 2]))
  const siteFns: SiteFn[] = [
    {
      test: /agdm.tv/,
      init() {
        //
      },
    },
  ]

  const hit = siteFns.find((s) => s.test.test(location.hostname))

  hit?.init()
})()
