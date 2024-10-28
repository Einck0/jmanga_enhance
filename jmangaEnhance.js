// ==UserScript==
// @name         使Jmanga取消等待时间
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make zing.timeleft variable always equal to 1
// @author       You
// @match        *://jmanga.plus/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 目标变量名
    const targetVariableName = 'zing.timeleft';

    // 使用一个函数来监测并重置变量
    function keepTimeLeftOne() {
        if (window.zing) {
            window.zing.timeleft = 1;
        }
    }

    keepTimeLeftOne();
})();
