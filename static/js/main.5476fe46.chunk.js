(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n(1),l=n.n(c),i=n(3),s=n(4),u=n(7),h=n(6),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:n,name:t[n].name,email:t[n].email,id:t[n].id})})))},b=(n(24),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue border",type:"search",placeholder:"Search Robots",onChange:t}))}),f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"46rem"}},e.children)},p=(n(25),function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"contact"},"My name is Miguel De Carvalho"))}),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooopsss has error"):this.props.children}}]),n}(a.Component),v=(n(26),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,a=t.onSearchChange,o=e.filter((function(e){return e.name.toLowerCase().includes(n)}));return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchChange:a}),r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(d,{robots:o}))),r.a.createElement(p,null)):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component)),g=Object(o.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(v),y=n(2);n(27),n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={searchField:""},C=Object(y.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));l.a.render(r.a.createElement(o.a,{store:C},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.5476fe46.chunk.js.map