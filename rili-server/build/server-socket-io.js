!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(global,function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="RRgj")}({"+zy4":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("2apR"),s=o("AtKU");t.default=class{constructor(e){this.storeUser=(e=>new Promise((t,o)=>{this.client.setex(e.socketId,e.ttl||s.production.socket.userSocketSessionExpire,e.data,r.default(t,o))})),this.getUser=(e=>new Promise((t,o)=>{this.client.get(e,r.default(t,o))})),this.client=e}}},"/mEI":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("1hBF"),s=o("wy2R"),n=o("40N5"),i=o("jxKE"),u=o("RRgj");t.default=((e,t)=>{r.default({shouldPrintLogs:u.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`${n.SocketClientActionTypes.SEND_MESSAGE}: ${t.toString()}`});const o=s(Date.now()).format("MMMM D/YY, h:mma");e.emit("action",{type:n.SocketServerActionTypes.SEND_MESSAGE,data:{roomId:t.roomId,message:{key:Date.now().toString(),time:o,text:`You: ${t.message}`}}}),e.broadcast.to(t.roomId).emit(i.ACTION,{type:n.SocketServerActionTypes.SEND_MESSAGE,data:{roomId:t.roomId,message:{key:Date.now().toString(),time:o,text:`${t.userName}: ${t.message}`}}}),r.default({shouldPrintLogs:u.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`${t.userName} said: ${t.message}`})})},"1hBF":function(e,t,o){global,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="Sxyf")}({Sxyf:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{if(e.shouldPrintLogs){const t=0!==e.time?`<at:${e.time||new Date}>`:"",o=Array.isArray(e.messages)?e.messages:[e.messages];for(let r=0;r<o.length;r+=1)e.messageOrigin?console.info(`${e.messageOrigin}${t}:`,o[r]):console.info(`LOG${t}:`,o[r])}})}})},"2apR":function(e,t,o){global,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="XDo8")}({XDo8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(o,r)=>{o&&t(o),e(r)})}})},"2lJc":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>{const t=[];return Object.keys(e).filter(t=>1!==e[t].length||t!==Object.keys(e[t].sockets)[0]).forEach(o=>t.push({roomKey:o,length:e[o].length,sockets:Object.keys(e[o].sockets).map(t=>({socketId:t,active:e[o].sockets[t]}))})),t})},"40N5":function(e,t,o){global,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="jxKE")}({"2onj":function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.JOIN_ROOM="CLIENT:JOIN_ROOM",e.LOGIN="CLIENT:LOGIN",e.SEND_MESSAGE="CLIENT:SEND_MESSAGE"}(r||(r={})),t.default=r},"8chb":function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.DISCONNECT="SERVER:DISCONNECT",e.JOINED_ROOM="SERVER:JOINED_ROOM",e.OTHER_JOINED_ROOM="SERVER:OTHER_JOINED_ROOM",e.USER_LOGIN_SUCCESS="SERVER:USER_LOGIN_SUCCESS",e.SEND_ROOMS_LIST="SERVER:SEND_ROOMS_LIST",e.SEND_MESSAGE="SERVER:SEND_MESSAGE",e.SESSION_MESSAGE="SERVER:SESSION_MESSAGE"}(r||(r={})),t.default=r},jxKE:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("2onj");t.SocketClientActionTypes=r.default;const s=o("8chb");t.SocketServerActionTypes=s.default,t.SERVER_PREFIX="SERVER",t.WEB_CLIENT_PREFIX="CLIENT"}})},"4sAb":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("rOLB");t.joinRoom=r.default;const s=o("pRIZ");t.login=s.default;const n=o("/mEI");t.sendMessage=n.default},"7WL4":function(e,t){e.exports=require("https")},AtKU:function(e,t){e.exports={development:{apiPort:7770,baseApiRoute:"http://localhost:7770/api/",baseSocketUrl:"http://localhost:7771",clientPort:7070,googleAnalyticsKey:"",postgresDatabase:"rili_db_main_dev",postgresHost:"127.0.0.1",postgresPassword:"secret",postgresPort:7432,postgresUser:"riliAdmin",redisHost:"127.0.0.1",redisPubPort:17771,redisSubPort:17772,socketPort:7771,security:{certLocation:"/etc/letsencrypt/live/rili.live/fullchain.pem",keyLocation:"/etc/letsencrypt/live/rili.live/privkey.pem"},socket:{pingInterval:1e4,pingTimeout:5e3,userSocketSessionExpire:36e5}},production:{apiPort:7770,baseApiRoute:"http://rili.live:7770/api/",baseSocketUrl:"https://rili.live:7743",clientPort:7070,googleAnalyticsKey:"",postgresDatabase:"rili_db_main_prod",postgresHost:"127.0.0.1",postgresPassword:"secret",postgresPort:7432,postgresUser:"riliAdmin",redisHost:"127.0.0.1",redisPubPort:17771,redisSubPort:17772,socketPort:7743,security:{certLocation:"/etc/letsencrypt/live/rili.live/fullchain.pem",keyLocation:"/etc/letsencrypt/live/rili.live/privkey.pem"},socket:{pingInterval:1e4,pingTimeout:5e3,userSocketSessionExpire:36e5}}}},"F+p8":function(e,t){e.exports=require("socket.io")},KEll:function(e,t){e.exports=require("http")},RRgj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("ZEFf"),s=o("mw/K"),n=(o("KEll"),o("7WL4")),i=o("TM0L"),u=o("F+p8"),c=o("xpYa"),a=o("4sAb"),l=o("40N5"),d=o("jxKE"),p=o("1hBF"),f=o("AtKU"),g=o("sLMG"),S=o("2lJc");t.rsAppName="riliChat",t.shouldIncludeAllLogs="withAllLogs"===process.argv[2],t.shouldIncludeRedisLogs="withRedisLogs"===process.argv[2]||t.shouldIncludeAllLogs,t.shouldIncludeSocketLogs="withSocketLogs"===process.argv[2]||t.shouldIncludeAllLogs||t.shouldIncludeRedisLogs;const m=[{host:f.production.redisHost,port:f.production.redisPubPort},{host:f.production.redisHost,port:f.production.redisSubPort}],O=new i(m[0].port,m[0].host,{connectionName:"redisSocketPub",lazyConnect:!0}),y=new g.default({client:O}),_=new i(m[0].port,m[0].host,{connectionName:"redisSocketSub",lazyConnect:!0}),E=[O.connect(),_.connect()];Promise.all(E).then(e=>{t.shouldIncludeRedisLogs&&O.monitor().then(e=>{e.on("monitor",(e,t,o,r)=>{p.default({time:e,shouldPrintLogs:!0,messageOrigin:"REDIS_PUB_LOG",messages:[`Source: ${o}, Database: ${r}`,...t]})})}),b()});const b=()=>{const e=r();let o;{const t={key:s.readFileSync(f.production.security.keyLocation),cert:s.readFileSync(f.production.security.certLocation)};o=n.createServer(t,e)}const i=o.listen(f.production.socketPort,e=>{const t=f.production.socketPort;p.default({shouldPrintLogs:!0,messageOrigin:"SOCKET_IO_LOGS",messages:`Server running on port, ${t}, with process id ${process.pid}`})}),g=u(i,{pingInterval:f.production.socket.pingInterval,pingTimeout:f.production.socket.pingTimeout}),m=c({pubClient:O,subClient:_});g.adapter(m),m.pubClient.on("error",e=>{p.default({shouldPrintLogs:t.shouldIncludeRedisLogs,messageOrigin:"REDIS_PUB_CLIENT_ERROR",messages:e.toString()})}),m.subClient.on("error",e=>{p.default({shouldPrintLogs:t.shouldIncludeRedisLogs,messageOrigin:"REDIS_SUB_CLIENT_ERROR",messages:e.toString()})}),m.subClient.on("subscribe",(e,o)=>{p.default({shouldPrintLogs:t.shouldIncludeRedisLogs,messageOrigin:"REDIS_SUB_CLIENT",messages:`Subscribed to ${e}. Now subscribed to ${o} channel(s).`})}),m.subClient.on("message",(e,o)=>{p.default({shouldPrintLogs:t.shouldIncludeRedisLogs,messageOrigin:"REDIS_SUB_CLIENT",messages:`Message from channel ${e}: ${o}`})}),g.on("connection",e=>{p.default({shouldPrintLogs:t.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:"NEW CONNECTION..."}),p.default({shouldPrintLogs:t.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`All Rooms: ${JSON.stringify(S.default(g.sockets.adapter.rooms))}`}),e.emit(d.ACTION,{type:l.SocketServerActionTypes.SEND_ROOMS_LIST,data:S.default(g.sockets.adapter.rooms)}),e.on(d.ACTION,t=>{t.type===l.SocketClientActionTypes.JOIN_ROOM&&a.joinRoom(e,y,t.data),t.type===l.SocketClientActionTypes.LOGIN&&a.login(e,y,t.data),t.type===l.SocketClientActionTypes.SEND_MESSAGE&&a.sendMessage(e,t.data)}),e.on("disconnecting",o=>{p.default({shouldPrintLogs:t.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`DISCONNECTING... ${o}`}),h(e)})})},h=e=>{const o=Object.keys(e.rooms).filter(t=>t!==e.id);o.length&&y.get(e.id).then(t=>{o.forEach(o=>{const r=JSON.parse(t);r&&r.userName&&e.broadcast.to(o).emit("event",{type:l.SocketServerActionTypes.DISCONNECT,data:`${r.userName} left the room`})})}).catch(e=>{p.default({shouldPrintLogs:t.shouldIncludeRedisLogs,messageOrigin:"REDIS_SESSION_ERROR",messages:e})})}},TM0L:function(e,t){e.exports=require("ioredis")},ZEFf:function(e,t){e.exports=require("express")},aOOa:function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.transportClose="transport close",e.pingTimeout="ping timeout"}(r||(r={})),t.default=r},jxKE:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("aOOa");t.DisconnectReason=r.default,t.ACTION="action"},"mw/K":function(e,t){e.exports=require("fs")},pRIZ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("wy2R"),s=o("1hBF"),n=o("40N5"),i=o("jxKE"),u=o("RRgj");t.default=((e,t,o)=>{const c=r(Date.now()).format("MMMM D/YY, h:mma");e.handshake&&e.handshake.headers&&e.handshake.headers.host&&t.create({app:u.rsAppName,socketId:e.id,ip:e.handshake.headers.host.split(":")[0],ttl:18e5,data:{userName:o.userName}}).then(t=>{e.emit(i.ACTION,{type:n.SocketServerActionTypes.SESSION_MESSAGE,data:t})}).catch(e=>{s.default({shouldPrintLogs:u.shouldIncludeRedisLogs,messageOrigin:"REDIS_SESSION_ERROR",messages:e.toString()})}),s.default({shouldPrintLogs:u.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`User, ${o.userName} with socketId ${e.id}, has logged in.`}),e.emit(i.ACTION,{type:n.SocketServerActionTypes.USER_LOGIN_SUCCESS,data:{message:{key:Date.now().toString(),time:c,text:"You have been logged in successfully."},userName:o.userName}})})},rOLB:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("wy2R"),s=o("1hBF"),n=o("40N5"),i=o("jxKE"),u=o("RRgj");t.default=((e,t,o)=>{const c=r(Date.now()).format("MMMM D/YY, h:mma");Object.keys(e.rooms).filter(t=>t!==e.id).forEach(t=>{e.broadcast.to(t).emit("event",`${o.userName} left the room`),e.leave(t)}),e.join(o.roomId,()=>{s.default({shouldPrintLogs:u.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`User, ${o.userName} with socketId ${e.id}, joined room ${o.roomId}`}),s.default({shouldPrintLogs:u.shouldIncludeSocketLogs,messageOrigin:"SOCKET_IO_LOGS",messages:`${o.userName}'s Current Rooms: ${JSON.stringify(e.rooms)}`}),e.emit(i.ACTION,{type:n.SocketServerActionTypes.JOINED_ROOM,data:{roomId:o.roomId,message:{key:Date.now().toString(),time:c,text:`You joined room ${o.roomId}`},userName:o.userName}}),e.broadcast.to(o.roomId).emit(i.ACTION,{type:n.SocketServerActionTypes.OTHER_JOINED_ROOM,data:{roomId:o.roomId,message:{key:Date.now().toString(),time:c,text:`${o.userName} joined room ${o.roomId}`}}})})})},sLMG:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("AtKU"),s=o("+zy4");t.default=class{constructor(e){this.client=e.client,this.redisHelper=new s.default(this.client)}create(e){const t=Object.assign({},{app:e.app,socketId:e.socketId,ip:e.ip.toString(),ttl:e.ttl||r.production.socket.userSocketSessionExpire,data:JSON.stringify(e.data)});return this.redisHelper.storeUser(t).then(()=>t)}get(e){return this.redisHelper.getUser(e)}}},wy2R:function(e,t){e.exports=require("moment")},xpYa:function(e,t){e.exports=require("socket.io-redis")}})});