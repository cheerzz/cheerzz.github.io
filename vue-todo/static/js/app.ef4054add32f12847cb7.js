webpackJsonp([1,2],[,,,,,,,,function(t,e,n){"use strict";var o=n(16);e.a=new o.a},,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(66);var o=n(2)(n(30),n(75),null,null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(36),s=n.n(o),i=n(8),r=n(69),a=n.n(r),c=n(71),u=n.n(c),d=n(68),l=n.n(d),p=n(70),f=n.n(p);e.default={name:"app",data:function(){return{todos:[{id:Date.now(),content:"吃饭",isFinished:!1},{id:Date.now()+1,content:"睡觉",isFinished:!1},{id:Date.now()+2,content:"打豆豆",isFinished:!1}]}},mounted:function(){var t=this;i.a.$on("deleteTodo",function(e){t.todos=t.todos.concat().filter(function(t){return t.id!==e.id})}),i.a.$on("addTodo",function(e){t.todos=[].concat(s()(t.todos),[{id:Date.now(),content:e,isFinished:!1}])})},computed:{result:function(){return{total:this.todos.length,completed:this.todos.concat().filter(function(t){return t.isFinished!==!1}).length}}},methods:{},components:{Header:a.a,TodoList:u.a,Footer:l.a,TodoForm:f.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Footer",props:["result"],data:function(){return{msg:"bye world!"}},methods:{},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Header",props:["title"],data:function(){return{}},methods:{},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8);e.default={name:"TodoForm",props:[],data:function(){return{msg:"bye world!"}},methods:{addTodo:function(t){t.preventDefault(),o.a.$emit("addTodo",this.$refs.input.value),this.$refs.input.value=""}},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8);e.default={name:"TodoList",props:["todos"],data:function(){return{}},methods:{toggleCompleted:function(t){t.isFinished=!t.isFinished},deleteTodo:function(t){o.a.$emit("deleteTodo",t)}},components:{}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(64);var o=n(2)(n(31),n(73),"data-v-57ec6895",null);t.exports=o.exports},function(t,e,n){n(65);var o=n(2)(n(32),n(74),"data-v-791ecc87",null);t.exports=o.exports},function(t,e,n){n(63);var o=n(2)(n(33),n(72),"data-v-56213924",null);t.exports=o.exports},function(t,e,n){n(67);var o=n(2)(n(34),n(76),"data-v-ebcb4004",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),t._v(" "),n("form",{staticClass:"form-horizontal",on:{submit:t.addTodo}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-md-2 control-label"},[t._v("Task")]),t._v(" "),n("div",{staticClass:"col-md-10"},[n("input",{ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"你想做点什么"}})])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 text-right"},[n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Save Task"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v("完成/总和:"+t._s(t.result.completed)+"/"+t._s(t.result.total))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"well",staticStyle:{width:"50%",margin:"0 auto"}},[n("Header",{attrs:{title:"TodoList via Vue"}}),t._v(" "),n("TodoList",{attrs:{todos:t.todos}}),t._v(" "),n("Footer",{attrs:{result:t.result}}),t._v(" "),n("TodoForm")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-group"},t._l(t.todos,function(e){return n("li",{staticClass:"list-group-item"},[n("input",{staticStyle:{"margin-right":"10px"},attrs:{type:"checkbox"},on:{change:function(n){t.toggleCompleted(e)}}}),t._v(" "),e.isFinished?n("span",[n("s",[t._v(t._s(e.content))])]):n("span",[t._v("\n      "+t._s(e.content)+"\n    ")]),t._v(" "),n("input",{staticClass:"btn btn-xs pull-right",attrs:{type:"button",value:"x"},on:{click:function(n){t.deleteTodo(e)}}})])}))},staticRenderFns:[]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(16),s=n(29),i=n.n(s);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:i.a}})}],[79]);
//# sourceMappingURL=app.ef4054add32f12847cb7.js.map