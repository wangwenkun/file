// ==UserScript==
// @name         百度文库 文档打印
// @namespace    http://github.com/HelloCodeMing/baidu-wenku
// @require      https://raw.githubusercontent.com/HelloCodeMing/baidu-wenku/master/index.js
// @version      0.1
// @description  enter something useful
// @author       wanghuanming
// @match        wenku.baidu.com/view*
// @grant        none
// ==/UserScript==

$('.goBtn').click();
$(".aside").remove();
$("#doc #hd").remove();
$(".crubms-wrap").remove();
$(".user-bar").remove();
$("#doc-header").remove();
$(".reader-tools-bar-wrap").remove();
$(".fix-searchbar-wrap").remove();
$("#bottom-doc-list-8").remove();
$(".ft").remove();
$("#ft").remove();
$("#docBubble").remove();
$('.hd').remove();
$('.wk-other-new-cntent').remove();
$('#html-reader-go-more').remove();
$('.new-wm').remove();
$('#bottom-download').remove();
$('#pay-page').remove();
$('.banner-wrap').remove();
$('#next_doc_box').remove();
$('.high-quality-doc').remove();
$('.new-ico-wkmember-free-doc').remove();
$('.doc-tag-pay-normal').remove();
$('.doc-tag-professional').remove();
$('.doc-tag-pay-discount').remove();
$('.doc-tag-ticket').remove();
$("body").attr("margin", "auto");
$(".bd").attr("style", "height:1262.879px");
$('.reader-page').css({
    border: 0
});
jQuery.fn.extend({
    remove: function () {
        return false;
    }
});
div=document.getElementById('doc_bottom_wrap')
div.parentNode.removeChild(div)
div = document.getElementsByClassName("mod lastcell-dialog");
for (i = 0; i < div.length; i++) {
    div[i].parentNode.removeChild(div[i]);
}
div = document.getElementsByClassName("doc-tag-wrap super-vip fixed");
for (i = 0; i < div.length; i++) {
    div[i].parentNode.removeChild(div[i]);
}
var _h = document.body.scrollHeight,
    _tmp = 0;
var _t = window.setInterval(function () {
    $(window).scrollTop(_tmp);
    _tmp = _tmp + 700;
    _h = document.body.scrollHeight;
    if (_tmp > _h) {
        window.clearInterval(_t);
        window.setTimeout(function () {
            window.print();
        }, 2000)
    }
}, 400);
