<<<<<<< HEAD
const fs = require('fs')

global.creator = 'YuuXD'
global.deepaiapikey = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'
global.openaiapi = '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'
global.stableapi = 'hVBeyrikyYruPpJIW0pFKYJ2UDkULWFAk9zvw6WgA7MtEERVALvHa9XhO2d9'
global.MONGO_DB_URI = "mongodb+srv://YuuXD-Api:Bayujelek03@cluster0.ys3kg89.mongodb.net/?retryWrites=true&w=majority"
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" 
global.your_email = "yuuxdrestapi@gmail.com"
global.email_password = "ejiyridmrxeykwzb" 
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
=======
function _0x38f1(){const _0xf1ddf5=['YuuXD','-@Pqnap+@(/1jAPPnew/@10','resolve','Forbiden,\x20Invlid\x20url,\x20masukkan\x20parameter\x20url','6360264hYtcfM','338459BkVEPq','202640FcpXPA','ACTIVATION_TOKEN_SECRET','limitCount','917287SgAxpX','ejiyridmrxeykwzb','6tIDxyD','watchFile','5DcIEij','3301704SVAnkf','5133820ygcMqx','Forbiden,\x20Invalid\x20apikey','862244qbeTuK','log','42obHWAJ','loghandler','YUOR_PORT','unwatchFile','yuuxdrestapi@gmail.com','creator'];_0x38f1=function(){return _0xf1ddf5;};return _0x38f1();}const _0x1c31fb=_0x3bc1;(function(_0x1b7d50,_0x2d153c){const _0x19a184=_0x3bc1,_0x59875b=_0x1b7d50();while(!![]){try{const _0x12f1e0=-parseInt(_0x19a184(0x1b5))/0x1*(parseInt(_0x19a184(0x1bb))/0x2)+parseInt(_0x19a184(0x1a5))/0x3+-parseInt(_0x19a184(0x1a8))/0x4*(parseInt(_0x19a184(0x1bd))/0x5)+-parseInt(_0x19a184(0x1aa))/0x6*(-parseInt(_0x19a184(0x1b9))/0x7)+-parseInt(_0x19a184(0x1b6))/0x8+-parseInt(_0x19a184(0x1b4))/0x9+parseInt(_0x19a184(0x1a6))/0xa;if(_0x12f1e0===_0x2d153c)break;else _0x59875b['push'](_0x59875b['shift']());}catch(_0x452291){_0x59875b['push'](_0x59875b['shift']());}}}(_0x38f1,0x8abd1));const fs=require('fs');global[_0x1c31fb(0x1af)]=_0x1c31fb(0x1b0),global['MONGO_DB_URI']='mongodb+srv://YuuXD-Api:Bayujelek03@cluster0.ys3kg89.mongodb.net/?retryWrites=true&w=majority',global[_0x1c31fb(0x1b7)]=_0x1c31fb(0x1b1),global['your_email']=_0x1c31fb(0x1ae),global['email_password']=_0x1c31fb(0x1ba),global[_0x1c31fb(0x1b8)]=0x2710,global[_0x1c31fb(0x1ac)]=0x1f40,global[_0x1c31fb(0x1ab)]={'noapikey':{'status':0x193,'message':'Input\x20parameter\x20apikey','creator':''+creator,'result':'error'},'error':{'status':0x1f7,'message':'Service\x20Unavaible,\x20Sedang\x20dalam\x20perbaikan','creator':''+creator},'apikey':{'status':0x193,'message':_0x1c31fb(0x1a7),'creator':''+creator},'noturl':{'status':0x193,'message':_0x1c31fb(0x1b3),'creator':''+creator}};let file=require[_0x1c31fb(0x1b2)](__filename);function _0x3bc1(_0x329bd6,_0x354b6a){const _0x38f13b=_0x38f1();return _0x3bc1=function(_0x3bc19c,_0x50d1c0){_0x3bc19c=_0x3bc19c-0x1a5;let _0x238046=_0x38f13b[_0x3bc19c];return _0x238046;},_0x3bc1(_0x329bd6,_0x354b6a);}fs[_0x1c31fb(0x1bc)](file,()=>{const _0x22b9ac=_0x1c31fb;fs[_0x22b9ac(0x1ad)](file),console[_0x22b9ac(0x1a9)]('Update\x27'+__filename+'\x27'),delete require['cache'][file],require(file);});
>>>>>>> 920b0f82513294e056712d769591759f76da44aa
