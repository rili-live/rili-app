!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(global,function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="RRgj")}({"/mEI":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("1hBF"),n=o("wy2R"),s=o("40N5"),i=o("jxKE"),u=o("RRgj");t.default=((e,t)=>{r.default(u.shouldIncludeLogs,s.SocketClientActionTypes.SEND_MESSAGE,null,t);const o=n(Date.now()).format("MMMM D/YY, h:mma");e.emit("action",{type:s.SocketServerActionTypes.SEND_MESSAGE,data:{roomId:t.roomId,message:{key:Date.now().toString(),time:o,text:`You: ${t.message}`}}}),e.broadcast.to(t.roomId).emit(i.ACTION,{type:s.SocketServerActionTypes.SEND_MESSAGE,data:{roomId:t.roomId,message:{key:Date.now().toString(),time:o,text:`${t.userName}: ${t.message}`}}}),r.default(u.shouldIncludeSocketLogs,"SOCKET_IO_LOGS",null,`${t.userName} said: ${t.message}`)})},"1hBF":function(e,t,o){global,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="Sxyf")}({Sxyf:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,o,...r)=>{if(e){const e=0!==o?`<at:${o||Date.now()}>`:"";for(let o=0;o<r.length;o++)t?console.info(`${t}${e}:`,r[o]):console.info(`LOG${e}:`,r[o])}})}})},"2apR":function(e,t,o){global,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="XDo8")}({XDo8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(o,r)=>{o&&t(o),e(r)})}})},"2lJc":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>{const t=[];return Object.keys(e).filter(t=>1!==e[t].length||t!==Object.keys(e[t].sockets)[0]).forEach(o=>t.push({roomKey:o,length:e[o].length,sockets:Object.keys(e[o].sockets).map(t=>({socketId:t,active:e[o].sockets[t]}))})),t})},"40N5":function(e,t,o){global,e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="jxKE")}({"0sdN":function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.JOIN_ROOM="CLIENT:JOIN_ROOM",e.SEND_MESSAGE="CLIENT:SEND_MESSAGE"}(r||(r={})),t.default=r},jxKE:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("0sdN");t.SocketClientActionTypes=r.default;const n=o("nwmR");t.SocketServerActionTypes=n.default,t.SERVER_PREFIX="SERVER",t.WEB_CLIENT_PREFIX="CLIENT"},nwmR:function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.DISCONNECT="SERVER:DISCONNECT",e.JOINED_ROOM="SERVER:JOINED_ROOM",e.OTHER_JOINED_ROOM="SERVER:OTHER_JOINED_ROOM",e.SEND_ROOMS_LIST="SERVER:SEND_ROOMS_LIST",e.SEND_MESSAGE="SERVER:SEND_MESSAGE",e.SESSION_MESSAGE="SERVER:SESSION_MESSAGE"}(r||(r={})),t.default=r}})},"4sAb":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("rOLB");t.joinRoom=r.default;const n=o("/mEI");t.sendMessage=n.default},"6T5q":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("AtKU"),n=o("D1nh");t.default=class{constructor(e){this.client=e.client,this.redisHelper=new n.default(this.client)}create(e){const t=Object.assign({},{app:e.app,socketId:e.socketId,ip:e.ip.toString(),ttl:e.ttl||r.production.socket.userSocketSessionExpire,data:JSON.stringify(e.data)});return this.redisHelper.storeUser(t).then(()=>t)}get(e){return this.redisHelper.getUser(e)}}},"7WL4":function(e,t){e.exports=require("https")},AtKU:function(e,t){e.exports={development:{apiPort:7770,baseApiRoute:"http://localhost:7770/api/",baseSocketUrl:"http://localhost:7771",clientPort:7070,googleAnalyticsKey:"",redisHost:"127.0.0.1",redisPubPort:17771,redisSubPort:17772,socketPort:7771,security:{certLocation:"/etc/letsencrypt/live/rili.live/fullchain.pem",keyLocation:"/etc/letsencrypt/live/rili.live/privkey.pem"},socket:{pingInterval:1e4,pingTimeout:5e3,userSocketSessionExpire:36e5}},production:{apiPort:7770,baseApiRoute:"http://rili.live:7770/api/",baseSocketUrl:"https://rili.live:7743",clientPort:7070,googleAnalyticsKey:"",redisHost:"127.0.0.1",redisPubPort:17771,redisSubPort:17772,socketPort:7743,security:{certLocation:"/etc/letsencrypt/live/rili.live/fullchain.pem",keyLocation:"/etc/letsencrypt/live/rili.live/privkey.pem"},socket:{pingInterval:1e4,pingTimeout:5e3,userSocketSessionExpire:36e5}}}},D1nh:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("2apR"),n=o("AtKU");t.default=class{constructor(e){this.storeUser=(e=>new Promise((t,o)=>{this.client.setex(e.socketId,e.ttl||n.production.socket.userSocketSessionExpire,e.data,r.default(t,o))})),this.getUser=(e=>new Promise((t,o)=>{this.client.get(e,r.default(t,o))})),this.client=e}}},"F+p8":function(e,t){e.exports=require("socket.io")},KEll:function(e,t){e.exports=require("http")},RRgj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("ZEFf"),n=o("mw/K"),s=(o("KEll"),o("7WL4")),i=o("TM0L"),u=o("F+p8"),c=o("xpYa"),l=o("4sAb"),a=o("40N5"),d=o("jxKE"),f=o("1hBF"),p=o("AtKU"),S=o("6T5q"),O=o("2lJc");t.rsAppName="riliChat",t.shouldIncludeAllLogs="withAllLogs"===process.argv[2],t.shouldIncludeLogs="withLogs"===process.argv[2],t.shouldIncludeRedisLogs="withRedisLogs"===process.argv[2]||t.shouldIncludeAllLogs,t.shouldIncludeSocketLogs="withSocketLogs"===process.argv[2]||t.shouldIncludeAllLogs||t.shouldIncludeRedisLogs;const y=[{host:p.production.redisHost,port:p.production.redisPubPort},{host:p.production.redisHost,port:p.production.redisSubPort}],m=new i(y[0].port,y[0].host,{connectionName:"redisSocketPub",lazyConnect:!0}),E=new S.default({client:m}),_=new i(y[0].port,y[0].host,{connectionName:"redisSocketSub",lazyConnect:!0}),b=[m.connect(),_.connect()];Promise.all(b).then(e=>{t.shouldIncludeRedisLogs&&m.monitor().then(function(e){e.on("monitor",function(e,t,o,r){f.default(!0,"REDIS_PUB_LOG",e,`Source: ${o}, Database: ${r}`,...t)})}),g()});const g=()=>{let e,o=r();{let t={key:n.readFileSync(p.production.security.keyLocation),cert:n.readFileSync(p.production.security.certLocation)};e=s.createServer(t,o)}let i=e.listen(p.production.socketPort,e=>{const t=p.production.socketPort;f.default(!0,"SOCKET_IO_LOGS",null,`Server running on port, ${t}, with process id ${process.pid}`)}),S=u(i,{pingInterval:p.production.socket.pingInterval,pingTimeout:p.production.socket.pingTimeout});const y=c({pubClient:m,subClient:_});S.adapter(y),y.pubClient.on("error",e=>{f.default(t.shouldIncludeRedisLogs,"REDIS_PUB_CLIENT_ERROR",null,e)}),y.subClient.on("error",e=>{f.default(t.shouldIncludeRedisLogs,"REDIS_SUB_CLIENT_ERROR",null,e)}),y.subClient.on("subscribe",(e,o)=>{f.default(t.shouldIncludeRedisLogs,"REDIS_SUB_CLIENT",null,`Subscribed to ${e}. Now subscribed to ${o} channel(s).`)}),y.subClient.on("message",(e,o)=>{f.default(t.shouldIncludeRedisLogs,"REDIS_SUB_CLIENT",null,`Message from channel ${e}: ${o}`)}),S.on("connection",e=>{f.default(t.shouldIncludeSocketLogs,"SOCKET_IO_LOGS",null,"NEW CONNECTION..."),f.default(t.shouldIncludeSocketLogs,"SOCKET_IO_LOGS",null,`All Rooms: ${JSON.stringify(O.default(S.sockets.adapter.rooms))}`),e.emit(d.ACTION,{type:a.SocketServerActionTypes.SEND_ROOMS_LIST,data:O.default(S.sockets.adapter.rooms)}),e.on(d.ACTION,t=>{t.type===a.SocketClientActionTypes.JOIN_ROOM&&l.joinRoom(e,E,t.data),t.type===a.SocketClientActionTypes.SEND_MESSAGE&&l.sendMessage(e,t.data)}),e.on("disconnecting",o=>{f.default(t.shouldIncludeSocketLogs,"SOCKET_IO_LOGS",null,`DISCONNECTING... ${o}`),I(e)})})},I=e=>{const o=Object.keys(e.rooms).filter(t=>t!==e.id);o.length&&E.get(e.id).then(t=>{o.forEach(o=>{const r=JSON.parse(t);r&&r.userName&&e.broadcast.to(o).emit("event",{type:a.SocketServerActionTypes.DISCONNECT,data:`${r.userName} left the room`})})}).catch(e=>{f.default(t.shouldIncludeRedisLogs,"REDIS_SESSION_ERROR",null,e)})}},TM0L:function(e,t){e.exports=require("ioredis")},ZEFf:function(e,t){e.exports=require("express")},jxKE:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("qbaI");t.SocketDisconnectReason=r.default,t.ACTION="action"},"mw/K":function(e,t){e.exports=require("fs")},qbaI:function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.transportClose="transport close",e.pingTimeout="ping timeout"}(r||(r={})),t.default=r},rOLB:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("wy2R"),n=o("1hBF"),s=o("40N5"),i=o("jxKE"),u=o("RRgj");t.default=((e,t,o)=>{const c=r(Date.now()).format("MMMM D/YY, h:mma");Object.keys(e.rooms).filter(t=>t!==e.id).forEach(t=>{e.broadcast.to(t).emit("event",`${o.userName} left the room`),e.leave(t)}),setTimeout(()=>{e.join(o.roomId,()=>{e.handshake&&e.handshake.headers&&e.handshake.headers.host&&t.create({app:u.rsAppName,socketId:e.id,ip:e.handshake.headers.host.split(":")[0],ttl:18e5,data:{userName:o.userName}}).then(t=>{e.emit(i.ACTION,{type:s.SocketServerActionTypes.SESSION_MESSAGE,data:t})}).catch(e=>{n.default(u.shouldIncludeRedisLogs,"REDIS_SESSION_ERROR",null,e)}),n.default(u.shouldIncludeSocketLogs,"SOCKET_IO_LOGS",null,`User, ${o.userName} with socketId ${e.id}, joined room ${o.roomId}`),n.default(u.shouldIncludeSocketLogs,"SOCKET_IO_LOGS",null,`${o.userName}'s Current Rooms: ${JSON.stringify(e.rooms)}`),e.emit(i.ACTION,{type:s.SocketServerActionTypes.JOINED_ROOM,data:{roomId:o.roomId,message:{key:Date.now().toString(),time:c,text:`You joined room ${o.roomId}`},userName:o.userName}}),e.broadcast.to(o.roomId).emit(i.ACTION,{type:s.SocketServerActionTypes.OTHER_JOINED_ROOM,data:{roomId:o.roomId,message:{key:Date.now().toString(),time:c,text:`${o.userName} joined room ${o.roomId}`}}})})},0)})},wy2R:function(e,t){e.exports=require("moment")},xpYa:function(e,t){e.exports=require("socket.io-redis")}})});