interface SiteFn {
  test: RegExp
  init(): void
}

;(function () {
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
