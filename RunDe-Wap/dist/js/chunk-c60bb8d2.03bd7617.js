(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c60bb8d2"],{"1d5c":function(t,n,i){},"3ade":function(t,n,i){"use strict";var e=i("1d5c"),s=i.n(e);s.a},"4c53d":function(t,n,i){"use strict";var e=i("23e7"),s=i("857a"),a=i("eae9");e({target:"String",proto:!0,forced:a("sub")},{sub:function(){return s(this,"sub","","")}})},"4d59":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("van-popup",{staticClass:"popup-wrapper",on:{closed:t.onClosed},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[i("div",{staticClass:"attendance-wrapper",class:{"attendance-wrapper--result":t.isShow}},[i("span",{staticClass:"attendance-icon",class:t.status},[t._v(" "+t._s(t.count)+" ")]),i("div",{staticClass:"attendance-title"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"attendance-sub",class:{hide:t.isShow}},[t._v(" "+t._s(t.sub)+" ")]),i("div",{staticClass:"attendance-btn",class:{hide:t.isShow},on:{click:t.handleAttendanceClick}},[t._v(" 签到 ")])])])},s=[],a=(i("4c53d"),i("af10")),c=i("aff8"),o=i("90b9"),r={name:"Attendance",mixins:[c["a"]],data:function(){return{show:!1,title:"签到",sub:"各位同学开始签到",status:"",timer:0,info:{pid:"",expireTime:"",remainDuration:0}}},computed:{count:function(){return this.info.remainDuration+"s"},isShow:function(){return"success"===this.status||"fail"===this.status}},methods:{addEvents:function(){var t=this;this.hd.onStartAttendance((function(n){Object(o["c"])("onStartAttendance",n),t.info.pid=n.pid,t.info.expireTime=n.expireTime,t.info.remainDuration=n.remainDuration,t.show=!0,n.expireTime&&(t.status="timer",t.startTimer())})),this.hd.onEndAttendance((function(n){Object(o["c"])("onEndAttendance",n),t.show=!1}))},onEnd:function(){var t=this;this.delay((function(){t.show=!1}),2e3)},onClosed:function(){this.stopTimer(),this.title="签到",this.sub="各位同学开始签到",this.status="",this.timer=0,this.info={pid:"",expireTime:"",remainDuration:0}},handleAttendanceClick:function(){var t=this,n=this.info.pid;this.hd.submitAttendance(n,(function(n){var i=n.success;if(i){var e=n.data.isRepeat;if(e)return;t.onAttendanceSuccess()}else t.onAttendanceFail()}))},onAttendanceSuccess:function(){this.status="success",this.title="恭喜您，签到成功！",this.onEnd()},onAttendanceFail:function(){this.status="fail",this.title="抱歉，签到失败！",this.onEnd()},update:function(){this.info.remainDuration=this.info.remainDuration-1,this.info.remainDuration<=0&&(this.stopTimer(),this.onAttendanceFail())},startTimer:function(){var t=this;this.stopTimer(),this.timer=setInterval((function(){t.update()}),1e3)},stopTimer:function(){clearInterval(this.timer),this.timer=0}},mounted:function(){this.hd=new a["a"],this.addEvents()}},u=r,d=(i("3ade"),i("2877")),h=Object(d["a"])(u,e,s,!1,null,"185cec2c",null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-c60bb8d2.03bd7617.js.map