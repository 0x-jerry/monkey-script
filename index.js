// ==UserScript==
// @name         Useful Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// @license      MIT
// ==/UserScript==

;
(function() {
  const siteFns = [
    {
      test: /agdm.tv/,
      init() {
      }
    }
  ];
  const hit = siteFns.find((s) => s.test.test(location.hostname));
  hit?.init();
})();
