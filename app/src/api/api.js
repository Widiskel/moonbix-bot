const a1_0x383470=a1_0x5e3a;function a1_0x5e3a(_0x2c3c5a,_0x12924e){const _0x21e216=a1_0x21e2();return a1_0x5e3a=function(_0x5e3ad5,_0x35deb1){_0x5e3ad5=_0x5e3ad5-0xfb;let _0x44dbfa=_0x21e216[_0x5e3ad5];return _0x44dbfa;},a1_0x5e3a(_0x2c3c5a,_0x12924e);}(function(_0x5ccb5a,_0x53da2c){const _0x518a88=a1_0x5e3a,_0x2d0b5e=_0x5ccb5a();while(!![]){try{const _0x30783a=-parseInt(_0x518a88(0x109))/0x1+parseInt(_0x518a88(0x11f))/0x2*(parseInt(_0x518a88(0x10d))/0x3)+parseInt(_0x518a88(0x111))/0x4*(parseInt(_0x518a88(0x117))/0x5)+parseInt(_0x518a88(0x100))/0x6*(parseInt(_0x518a88(0x10e))/0x7)+parseInt(_0x518a88(0x113))/0x8*(-parseInt(_0x518a88(0x10a))/0x9)+-parseInt(_0x518a88(0x119))/0xa*(-parseInt(_0x518a88(0xfb))/0xb)+parseInt(_0x518a88(0x115))/0xc;if(_0x30783a===_0x53da2c)break;else _0x2d0b5e['push'](_0x2d0b5e['shift']());}catch(_0x3c076d){_0x2d0b5e['push'](_0x2d0b5e['shift']());}}}(a1_0x21e2,0x3ad39));import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';function a1_0x21e2(){const _0x52112d=['2037BcFDtG','body','host','3964ZzIDOt','application/json,\x20text/plain,\x20*/*','2649568GtZKLG','en-US,en;q=0.9,id;q=0.8','665664QWcLRP','url','100xuWBkP','error','1450fApBfO','\x20-\x20','text','application/json','statusText','headers','515802zxxvxf','Request\x20Body\x20:\x20','proxy','json','status','empty','10219llXzyG','agent','referer','info','cors','2190yYwnlc','content-type','same-site','randomUserAgent','generateHeaders','GET','Error\x20:\x20','stringify','fetch','1964meNOaQ','9KRalBF','Request\x20Header\x20:\x20','Response\x20Data\x20:\x20','3TrdYwu'];a1_0x21e2=function(){return _0x52112d;};return a1_0x21e2();}import a1_0x3d55f7 from'../utils/logger.js';export class API{constructor(_0x4d6c0a,_0x36c8a7,_0x29a837,_0x330467,_0x1f19b3,_0x1c0593){const _0x4ce30f=a1_0x5e3a;this[_0x4ce30f(0x116)]=_0x29a837,this['origin']=_0x1f19b3,this[_0x4ce30f(0xfd)]=_0x1c0593,this['ua']=Helper[_0x4ce30f(0x103)](),this['query']=_0x4d6c0a,this['proxy']=_0x36c8a7;}['generateHeaders'](_0x178093){const _0x232217=a1_0x5e3a;var _0x3eed9d={'Accept':_0x232217(0x112),'Accept-Language':_0x232217(0x114),'Content-Type':'application/json','Sec-Fetch-Dest':_0x232217(0x124),'Sec-Fetch-Site':_0x232217(0x102),'Sec-Fetch-Mode':_0x232217(0xff),'User-Agent':this['ua'],'Host':this[_0x232217(0x110)],'Origin':this['origin'],'Referer':this[_0x232217(0xfd)]};return _0x178093&&(_0x3eed9d={..._0x3eed9d,'X-Growth-Token':_0x178093}),_0x3eed9d;}async[a1_0x383470(0x108)](_0x117161,_0x420478,_0x577d22,_0xf9980b={},_0x1275d1={}){const _0x184177=a1_0x383470;try{const _0x5c7b5=''+this[_0x184177(0x116)]+_0x117161,_0x3ce4ce={..._0x1275d1,...this[_0x184177(0x104)](_0x577d22)},_0x383bbd={'headers':_0x3ce4ce,'method':_0x420478};this[_0x184177(0x121)]&&(_0x383bbd[_0x184177(0xfc)]=new HttpsProxyAgent(this[_0x184177(0x121)]));a1_0x3d55f7['info'](_0x420478+'\x20:\x20'+_0x5c7b5+'\x20'+(this[_0x184177(0x121)]?this[_0x184177(0x121)]:'')),a1_0x3d55f7['info'](_0x184177(0x10b)+JSON[_0x184177(0x107)](_0x3ce4ce));_0x420478!==_0x184177(0x105)&&(_0x383bbd[_0x184177(0x10f)]=''+JSON[_0x184177(0x107)](_0xf9980b),a1_0x3d55f7[_0x184177(0xfe)](_0x184177(0x120)+_0x383bbd[_0x184177(0x10f)]));const _0x3dc614=await fetch(_0x5c7b5,_0x383bbd);a1_0x3d55f7[_0x184177(0xfe)]('Response\x20:\x20'+_0x3dc614[_0x184177(0x123)]+'\x20'+_0x3dc614[_0x184177(0x11d)]);if(_0x3dc614['ok']||_0x3dc614[_0x184177(0x123)]==0x190||_0x3dc614[_0x184177(0x123)]==0x193){const _0x6e247c=_0x3dc614[_0x184177(0x11e)]['get'](_0x184177(0x101));let _0x1d5169;_0x6e247c&&_0x6e247c['includes'](_0x184177(0x11c))?(_0x1d5169=await _0x3dc614[_0x184177(0x122)](),_0x1d5169[_0x184177(0x123)]=_0x3dc614['status']):_0x1d5169={'status':_0x3dc614['status'],'message':await _0x3dc614[_0x184177(0x11b)]()};if(_0x3dc614['ok'])_0x1d5169[_0x184177(0x123)]=0xc8;return a1_0x3d55f7[_0x184177(0xfe)](_0x184177(0x10c)+JSON['stringify'](_0x1d5169)),_0x1d5169;}else throw new Error(_0x3dc614[_0x184177(0x123)]+_0x184177(0x11a)+_0x3dc614[_0x184177(0x11d)]);}catch(_0x1f52e7){a1_0x3d55f7[_0x184177(0x118)](_0x184177(0x106)+_0x1f52e7['message']);throw _0x1f52e7;}}}