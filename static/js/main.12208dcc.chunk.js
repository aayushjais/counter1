(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{25:function(A,t,i){},26:function(A,t,i){},45:function(A,t,i){},47:function(A,t,i){"use strict";i.r(t);var e=i(2),n=i.n(e),c=i(15),a=i.n(c),g=(i(25),i(26),i(16)),s=i(17),Q=i(20),h=i(19),M=i(18),o=i.n(M),G=(i(45),i(0)),I=function(A){Object(Q.a)(i,A);var t=Object(h.a)(i);function i(A){var e;return Object(g.a)(this,i),(e=t.call(this,A)).getData=function(){e.setState({isFetching:!0});o.a.get("https://www.reddit.com/r/reactjs.json").then((function(A){console.log(A),e.setState({isFetching:!1,data:[A.data]})})).catch((function(A){console.log(A),e.setState({isFetching:!1})}))},e.state={isFetching:!1,data:[],isError:!1,comapanyType:""},e}return Object(s.a)(i,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var A=this.state,t=(A.isFetching,A.data),i=(A.isError,function(A){var t=document.createElement("div");return t.innerHTML=A,0===t.childNodes.length?"":t.childNodes[0].nodeValue});return Object(G.jsxs)("div",{children:[Object(G.jsxs)("div",{style:{display:"flex"},children:[Object(G.jsx)("img",{src:"data:image/png;base64,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",style:{width:100,height:50},alt:"Logo"}),Object(G.jsx)("h1",{style:{marginLeft:"25%",fontWeight:"bold"},children:"Task for React Js Developer"})]}),Object(G.jsx)("div",{class:"container",children:t.map((function(A,t){return Object(G.jsx)("div",{class:"row",children:A.data.children.map((function(A,t){return Object(G.jsxs)("div",{class:"card",children:[Object(G.jsx)("div",{class:"card-header",children:Object(G.jsxs)("h1",{children:[" ",A.data.title]})},t),Object(G.jsxs)("div",{class:"card-body",children:[Object(G.jsx)("p",{children:Object(G.jsx)("div",{dangerouslySetInnerHTML:{__html:i(A.data.selftext_html)}})}),Object(G.jsxs)("a",{href:"#",class:"btn",children:[" ",A.data.url]}),Object(G.jsxs)("p",{children:[" ",A.data.score]})]})]})}))},t)}))})]})}}]),i}(e.Component);var B=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("div",{children:Object(G.jsx)(I,{})})})},r=function(A){A&&A instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,e=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;i(A),e(A),n(A),c(A),a(A)}))};a.a.render(Object(G.jsx)(n.a.StrictMode,{children:Object(G.jsx)(B,{})}),document.getElementById("root")),r()}},[[47,1,2]]]);
//# sourceMappingURL=main.12208dcc.chunk.js.map