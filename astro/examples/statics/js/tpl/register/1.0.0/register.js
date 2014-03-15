define("tpl/register/1.0.0/register", ["$", "dialog", "confirmbox", "util", "urlconfig", "validatorrules", "mobilecode", "moment"], function(require, exports, module) {

    var $ = require('$');

    // dialog
    var Dialog = require('dialog');

    // confirmbox
    var ConfirmBox = require('confirmbox');

    // util
    var Util = require('util');

    // urlconfig
    var UrlConfig = require('urlconfig');

    // validatorrules
    var ValidatorRules = require('validatorrules');

    // mobilecode
    var MobileCode = require('mobilecode');

    // 用户注册
    var userRegForm = $('#J-userRegForm');
    if(userRegForm.length) {
        var userRegVal = new ValidatorRules({
            element: userRegForm,
            autoSubmit: false
        });
        userRegVal.addItem({
            element: '[name=account]',
            required: true,
            rule: 'account checkAccount'
        });
        userRegVal.addItem({
            element: '[name=pwd]',
            required: true,
            rule: 'password'
        });
        userRegVal.addItem({
            element: '[name=re_pwd]',
            required: true,
            rule: 'confirmation{target: "#J-userRegPwd"}'
        });
        if(userRegForm.find('[name=img_code]').length) {
	        userRegVal.addItem({
	            element: '[name=img_code]',
	            required: true,
	            rule: 'imgCode'
	        });
	    }

        userRegForm.submit(function() {
            Util.userAsync($(this), UrlConfig.register_url);
        });
    }

    // 手机注册
    var mobiRegForm = $('#J-mobiRegForm');
    if(mobiRegForm.length) {
        var mobiRegVal = new ValidatorRules({
            element: mobiRegForm,
            autoSubmit: false
        });
        mobiRegVal.addItem({
            element: '[name=mobile]',
            required: true,
            rule: 'mobile'
        });
        mobiRegVal.addItem({
            element: '[name=mob_code]',
            required: true,
            rule: 'mobiCode'
        });
        mobiRegVal.addItem({
            element: '[name=pwd]',
            required: true,
            rule: 'password'
        });
        mobiRegVal.addItem({
            element: '[name=re_pwd]',
            required: true,
            rule: 'confirmation{target: "#J-mobiRegPwd"}'
        });

        mobiRegForm.submit(function() {
            Util.userAsync($(this), UrlConfig.registerByMobile_url);
        });
    }

    // 邮箱注册
    var mailRegForm = $('#J-mailRegForm');
    if(mailRegForm.length) {
        var mailRegVal = new ValidatorRules({
            element: mailRegForm,
            autoSubmit: false
        });
        mailRegVal.addItem({
            element: '[name=email]',
            required: true,
            rule: 'email'
        });
        mailRegVal.addItem({
            element: '[name=pwd]',
            required: true,
            rule: 'password'
        });
        mailRegVal.addItem({
            element: '[name=re_pwd]',
            required: true,
            rule: 'confirmation{target: "#J-mailRegPwd"}'
        });

        mailRegForm.submit(function() {
            Util.userAsync($(this), UrlConfig.registerByEmail_url);
        });
    }

    // 注册协议
    if($('.J-agreeBtn').length) {
        var agreementBox = new Dialog({
            trigger: '.J-agreeBtn',
            width: 600,
            height: 500,
            content: UrlConfig.agreement_url
        });
    }

});
