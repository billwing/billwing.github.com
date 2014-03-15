define("tpl/login/1.0.0/login", ["$", "dialog", "confirmbox", "util", "urlconfig", "validatorrules"], function(require, exports, module) {

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

    // 登录验证
    var loginForm = $('#J-loginForm');
    if(loginForm.length) {
	    var LoginCheck = new ValidatorRules({
	        element: loginForm,
	        autoSubmit: false
	    });
	    LoginCheck.addItem({
	        element: '[name=account]',
	        required: true,
	        display: '账号',
	        rule: 'loginAccount'
	    });
	    LoginCheck.addItem({
	        element: '[name=pwd]',
	        required: true,
	        display: '密码',
	        rule: 'password'
	    });

	    loginForm.submit(function() {
	    	Util.userAsync($(this), UrlConfig.login_url);
	    });
	}

});
