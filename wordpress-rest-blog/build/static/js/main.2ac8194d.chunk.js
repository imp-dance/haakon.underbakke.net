(window["webpackJsonpwordpress-rest-blog"]=window["webpackJsonpwordpress-rest-blog"]||[]).push([[0],{126:function(e,t,n){e.exports=n(249)},131:function(e,t,n){},186:function(e,t){},23:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(113),s=n.n(r),c=(n(131),n(4)),i=n(5),l=n(7),m=n(6),u=n(8),p={siteURL:"https://impedans.me/web/",baseName:"/blog/"},d=n(46),h=n.n(d),g=n(125),f=n(114),E=(n(23),n(18)),b=n.n(E),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={errorMessage:"",showError:!1,commentEmail:"",commentName:"",commentContent:""},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.validateEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},n.postNewComment=function(){n.setState({showError:!1});var e=n.state,t=e.commentEmail,a=e.commentName,o=e.commentContent,r={author_name:a,author_email:t,content:o,post:n.props.postID};null!==n.props.replyTo&&(r.parent=n.props.replyTo);var s=0,c="";n.validateEmail(t)||(s++,c="Please enter a valid email address"),a.length<3&&(s++,c="Name needs to be atleast three characters"),o.length<10&&(s++,c="Comment needs to be atleast 10 characters"),0===s?b.a.post("".concat(n.props.WPConfig.siteURL,"wp-json/wp/v2/comments"),r,{headers:{"Content-Type":"application/json"}}).then(function(e){return e.data}).then(function(e){var t=n.props.comments,a=e;a.customStatus="pending",a=t.unshift(a),n.setState({comments:a,commentEmail:"",commentName:"",commentContent:""}),null!==n.props.onUpdate&&n.props.onUpdate(a)}):n.setState({showError:!0,errorMessage:c})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"comment-poster",key:9996},this.state.showError&&o.a.createElement("div",{className:"comment-poster-error"},this.state.errorMessage),o.a.createElement("table",null,o.a.createElement("tbody",{valign:"top"},o.a.createElement("tr",null,o.a.createElement("td",null,"Your email: "),o.a.createElement("td",null,o.a.createElement("input",{type:"email",name:"commentEmail",onChange:this.onChange,value:this.state.commentEmail}))),o.a.createElement("tr",null,o.a.createElement("td",null,"Your name: "),o.a.createElement("td",null,o.a.createElement("input",{type:"text",name:"commentName",onChange:this.onChange,value:this.state.commentName}))),o.a.createElement("tr",null,o.a.createElement("td",null,"Comment: "),o.a.createElement("td",null,o.a.createElement("textarea",{name:"commentContent",onChange:this.onChange,value:this.state.commentContent}))),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement("button",{onClick:this.postNewComment},"Submit comment"))))))}}]),t}(o.a.Component),C=n(82).Parser,w=function e(t){var n=Object(a.useState)(!1),r=Object(g.a)(n,2),s=r[0],c=r[1],i=function(e){void 0!==t.onUpdate&&t.onUpdate(e),c(!1)},l=t.comment.author_name,m=function(e){var t=(new C).parse(e);return h.a.renderToStaticMarkup(t)}(t.comment.content.rendered),u=function(e){var t=e.substring(0,4),n=e.substring(5,7),a=e.substring(8,10),o=e.substring(11,13),r=e.substring(14,16);return"".concat(o,":").concat(r," ").concat(a,"/").concat(n,"/").concat(t)}(t.comment.date),d=t.comment.author_avatar_urls[48],f=t.nestedComments,E=[];f.length>=1&&f.forEach(function(n,a){var r=t.allComments,s=n.id,c=r.filter(function(e){return e.parent===s});E.push(o.a.createElement(e,{key:a,comment:n,index:a,onUpdate:i,nestedComments:c,allComments:r}))});var b="pending"===t.comment.customStatus?"comment pending":"comment";return o.a.createElement("div",{className:b,key:t.index},o.a.createElement("div",{className:"comment-header"},o.a.createElement("img",{src:d,alt:"Comment avatar"}),o.a.createElement("strong",{className:"comment-username"},1===t.comment.author&&o.a.createElement("span",null,"\u2605"),l),o.a.createElement("em",null,"#",t.comment.id)),o.a.createElement("div",{className:"comment-body",dangerouslySetInnerHTML:{__html:m}}),o.a.createElement("i",{className:"comment-date"},"pending"!==t.comment.customStatus&&o.a.createElement("button",{onClick:function(){c(!s)}},s?"Cancel":"Reply"),u),s&&o.a.createElement(v,{replyTo:t.comment.id,postID:t.comment.post,onUpdate:i,WPConfig:p,comments:t.allComments}),f.length>=1&&o.a.createElement("div",{className:"nestedComments"},E))},y=n(16),k=n(115),j=n(251),O=n(252),T=n(253),N=n(254),D=n(255),I=n(82).Parser,P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={blogPosts:[{id:0,title:{rendered:""},excerpt:{rendered:""},content:{rendered:""},categories:[]}],comments:[{author_name:"",content:{rendered:""},author_avatar_urls:{48:""},date:""}],categories:[{name:"",id:null}],sortArticles:null,postID:n.props.postID||!1,renderComments:!1,commentEmail:"",commentName:"",commentContent:"",commentReply:null},n.goToArticle=function(e){window.location.href="".concat(n.props.WPConfig.baseName,"post/").concat(e.target.parentElement.getAttribute("data-id"))},n.sortArticles=function(e){var t=e.target.getAttribute("data-categoryid");n.setState({sortArticles:t}),n.scrollToTop()},n.scrollToTop=function(){window.scrollTo(0,0),document.body.scrollTop=0},n.reactParse=function(e){var t=(new I).parse(e);return h.a.renderToStaticMarkup(t).replace("<code>","<code class='markUpBaby'>")},n.parseDate=function(e){var t=e.substring(0,4),n=e.substring(5,7),a=e.substring(8,10),o=e.substring(11,13),r=e.substring(14,16);return"".concat(o,":").concat(r," ").concat(a,"/").concat(n,"/").concat(t)},n.updateComments=function(e){n.setState({newComments:e})},n.goToMusic=function(){window.location.href="/blog/post/128"},n.goToCV=function(){window.open("https://haakon.underbakke.net/cv","_blank")},n.goToContact=function(){window.location.href="https://impedans.me/web/contact-me/"},n.ignoreAction=function(e){e.preventDefault()},n.goHome=function(){window.location.href="/"},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;!1===this.state.postID?(b.a.get("".concat(this.props.WPConfig.siteURL,"wp-json/wp/v2/posts")).then(function(e){return e.data}).then(function(t){e.setState({blogPosts:t,loaded:!0})}),b.a.get("".concat(this.props.WPConfig.siteURL,"wp-json/wp/v2/categories")).then(function(e){return e.data}).then(function(t){e.setState({categories:t})}),this.scrollToTop()):(b.a.get("".concat(this.props.WPConfig.siteURL,"wp-json/wp/v2/posts/?include[]=").concat(this.state.postID)).then(function(e){return e.data}).then(function(t){e.setState({blogPosts:t,loaded:!0})}),b.a.get("".concat(this.props.WPConfig.siteURL,"wp-json/wp/v2/comments/?post=").concat(this.state.postID)).then(function(e){return e.data}).then(function(t){e.setState({comments:t})}),this.scrollToTop())}},{key:"render",value:function(){var e=this,t=[],n=[];if(this.state.categories.forEach(function(t,a){1!==t.id&&n.push(o.a.createElement("li",{key:"art1888"+a,"data-id":t.id},o.a.createElement("button",{onClick:e.sortArticles,"data-categoryid":t.id,className:null===e.state.sortArticles||parseInt(e.state.sortArticles)===parseInt(t.id)?"white":"gray"},t.name)))}),!1!==this.state.postID&&n.push(o.a.createElement("li",{key:"fart1923"},o.a.createElement("button",{onClick:this.goHome},"\u2039 Articles & Projects"))),n.push(o.a.createElement("li",{key:"bart1923",className:"seperator"},"|")),t.push(o.a.createElement("nav",{key:"part9991"},o.a.createElement("ul",null,n,o.a.createElement("li",null,o.a.createElement(y.b,{to:"/post/128"},o.a.createElement("button",{onClick:!1!==this.state.postID&&this.goToMusic},"Music"))),o.a.createElement("li",null,o.a.createElement("button",{onClick:this.goToContact},"Contact")),o.a.createElement("li",null,o.a.createElement("button",{onClick:this.goToCV},"CV"))))),this.state.blogPosts.forEach(function(n,a){if(null===e.state.sortArticles||n.categories.includes(parseInt(e.state.sortArticles))||n.categories===parseInt(e.state.sortArticles)){var r=e.reactParse(n.title.rendered),s=!1===e.state.postID?e.reactParse(n.excerpt.rendered):e.reactParse(n.content.rendered);!1===e.state.postID&&(s=s.substring(0,s.length-9)+"...</p>");var c=!1===e.state.postID?"collapsed":"open";(!1===e.state.postID&&!n.categories.includes(1)||!1!==e.state.postID)&&t.push(o.a.createElement("article",{key:a,className:c,"data-id":n.id},o.a.createElement(y.b,{to:"/post/"+n.id,"data-id":n.id,className:"articleLink"},o.a.createElement("h3",{"data-id":n.id,dangerouslySetInnerHTML:{__html:r}})),!1===e.state.postID?o.a.createElement(y.b,{to:"/post/"+n.id,"data-id":n.id,className:"articleBodyLink"},o.a.createElement("div",{className:"body","data-id":n.id,dangerouslySetInnerHTML:{__html:s}})):o.a.createElement("div",{className:"body",onClick:!1===e.state.postID?e.goToArticle:e.ignoreAction,"data-id":n.id,dangerouslySetInnerHTML:{__html:s}})))}}),!1!==this.state.postID){if(""!==this.state.blogPosts[0].title.rendered){var a=this.reactParse(this.state.blogPosts[0].excerpt.rendered);a=(a=a.substring(3)).slice(0,-5);var r=this.reactParse(this.state.blogPosts[0].title.rendered);t.push(o.a.createElement(k.Helmet,{key:"123653"},o.a.createElement("title",null,r),o.a.createElement("meta",{name:"description",content:a})))}var s=this.state.comments.filter(function(e){return 0===e.parent}),c=window.location.href;if(t.push(o.a.createElement("h5",{key:"aaart9994"},"Share on...")),t.push(o.a.createElement("div",{className:"social",key:"arts9993"},o.a.createElement(j.a,{url:c},"Facebook"),o.a.createElement(O.a,{url:c},"Reddit"),o.a.createElement(T.a,{url:c},"Linkedin"),o.a.createElement(N.a,{url:c},"Twitter"),o.a.createElement(D.a,{url:c},"Email"))),!this.state.blogPosts[0].categories.includes(1)){1===this.state.comments.length?t.push(o.a.createElement("h4",{key:"bbbbart9999"},"1 Comment")):0===this.state.comments.length?t.push(o.a.createElement("h4",{key:"bbbart9999"},"Be the first to leave a comment")):t.push(o.a.createElement("h4",{key:"bbart9999"},this.state.comments.length," Comments")),t.push(o.a.createElement(v,{postID:this.state.postID,onUpdate:this.updateComments,key:9991,WPConfig:this.props.WPConfig,comments:this.state.comments}));var i=[];s.forEach(function(t,n){var a=t.id,r=e.state.comments.filter(function(e){return e.parent===a});i.push(o.a.createElement(w,{comment:t,index:n,key:n,onUpdate:e.updateComments,nestedComments:r,allComments:e.state.comments}))}),t.push(o.a.createElement("div",{className:"comments-container",key:9998},i))}}return o.a.createElement(o.a.Fragment,null,!this.state.loaded&&o.a.createElement("main",{className:"showLoading"},"Loading..."),o.a.createElement("main",{className:this.state.loaded?"loaded":"loading"},t))}}]),t}(o.a.Component);var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{WPConfig:p}))},S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={postID:n.props.match.params.postID||null},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{WPConfig:p,postID:this.state.postID}))}}]),t}(o.a.Component),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={siteTitle:"Loading...",siteDescription:"..."},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat(this.props.WPConfig.siteURL,"wp-json/")).then(function(e){return e.data}).then(function(t){e.setState({siteTitle:t.name,siteDescription:t.description})})}},{key:"render",value:function(){return o.a.createElement("header",{className:"Loading..."===this.state.siteTitle?"loading":"loaded"},o.a.createElement(y.b,{to:p.baseName},o.a.createElement("h1",null,this.state.siteTitle)),o.a.createElement("p",null,this.state.siteDescription))}}]),t}(o.a.Component),U=n(124),_=n(22),M=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.path===this.props.location.pathname&&this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.component,n=Object(U.a)(e,["component"]);return o.a.createElement(_.a,Object.assign({},n,{render:function(e){return o.a.createElement(t,e)}}))}}]),t}(a.Component),W=Object(_.f)(M),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).scrollToTop=function(){window.scrollTo(0,0),document.body.scrollTop=0},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(y.a,{basename:p.baseName,onUpdate:function(){return window.scrollTo(0,0)}},o.a.createElement(L,{WPConfig:p}),o.a.createElement("div",{className:"minHeight"},o.a.createElement(R,null,o.a.createElement(_.c,null,o.a.createElement(W,{path:"/post/:postID",component:S}),o.a.createElement(_.a,{path:"/",exact:!0,component:A}),o.a.createElement(_.a,{component:A})))))),o.a.createElement("footer",null,o.a.createElement("a",{href:"#"},"Back to top")))}}]),t}(o.a.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(o.a.Component),H=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,1,2]]]);
//# sourceMappingURL=main.2ac8194d.chunk.js.map