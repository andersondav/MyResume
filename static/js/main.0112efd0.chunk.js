(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{38:function(e,t,n){},43:function(e,t,n){e.exports=n(58)},48:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(33),o=n.n(i),c=(n(48),n(15)),l=n(9),s=n(11),u=n(10),p=n(12),m=(n(38),n(42)),d=(n(52),{name:"Anderson David",phoneNum:"317-900-6111",email:"david25@purdue.edu",campusAddress:"1016 W Stadium Ave, West Lafayette, IN 47907, Rm. SW419",homeAddress:"3437 Wexley Ct., Carmel, IN 46032",linkedIn:"www.linkedin.com/in/anderson-david",github:"www.github.com/andersondav",education:{school:"Purdue University",location:"West Lafayette, IN",degree:"Bachelor of Science in Computer Science",degree2:"Minor in Mathematics",degree3:"Minor in Management",gpa:"4.0/4.0",gradDate:"Expected Spring 2022"},technicalSkills:{proficient:["C/C++","Swift/iOS","TypeScript","ReactJS","Python","Assembly","Linux","Github"],basic:["Docker","Django","SQL"]},softSkills:["Team player","Communicator","Problem-solver","Decision-maker"],workExperience:[{company:"Intuit",location:"San Diego, CA (Remote)",date:"Summer 2021",desc:["Software Engineering Intern on the UIPlatform team","Worked in agile environment to develop scalable UI for TTO (TurboTax Online)","Utilized various platforms such as React, TypeScript, Jira","Contributed to team and company objectives"]}],objective:"CS student with great attention to detail, communication skills, and desire to learn seeking employment in a professional production environment while contributing to meaningful projects.",coursework:"Architecture, Systems Programming, Data Mining & Machine Learning, iOS Development, Operating Systems, Algorithms, Networks, Security, Compilers",projects:[{title:"Remote File Systems in Xinu OS",link:null,github:"https://github.com/real-xinu/xinu-galileo/tree/rfs-cache",type:"Research",date:"Spring 2021",info:["Undergrad Research Project under Professor Douglas Comer","Aimed to explore and improve Remote File System implementation in the Xinu OS","Investigated how the Remote File System interacts with Xinu kernel's networking interface and device switch table","Made multiple improvements to existing system, most notably implementing a local cache for remote files into kernel","Tested performance gain from caching, which revealed up to 80% faster file access speeds"],keywords:["Xinu","syscalls","Linux","OS","Remote","File","System","Linux","local","kernel","kernel's","cache","device","switch","table","80%","faster","file","access","speeds"]},{title:"Data Sphere",link:"https://datasphere.space",github:"https://github.com/KritR/DataSphere",type:"BoilerMake Hackathon Winning Project",date:"2020",info:["Website that allows users to visualize historical events across space and time.","Data loaded into MongoDB Atlas from Google Cloud BigQuery","Used natural language processing (NLP) packages in Python","Project involved quickly learning and adapting to new frameworks and technologies."],keywords:["MongoDB","Atlas","Google","Cloud","BigQuery","Elixir","Phoenix","Python","(NLP)"]}],activities:[{name:"Purdue iOS Dev Club",dates:"Sep '18 - Present, Club President since May '21"},{name:"Hello World Hackathon Executive Team",dates:"Summer/Fall '19"},{name:"CodePath iOS Tech Fellow",dates:"Spring '20, '21"},{name:"CodePath Interview Prep Course TA",dates:"August '21-present"}]}),g=n(13),b=n(23),h=n.n(b),y=n(26),f=n.n(y),O=n(30),v=n(28),j=n(27),k='div {\n        font-family: "Times New Roman", "Times-Roman";\n        font-size: 14px;\n    }\n    \n    h1 {\n        font-size: 20px;\n    }';function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).convertSVGToImage=function(e){var t=n.refs.canvas;n.canvLoaded||(n.canvLoaded=!0,t.getContext("2d"),e.forEach((function(e,n){var r=h.a.renderToStaticMarkup(a.a.createElement(j.a,{icon:e.icon,size:"3x",style:{color:"black",height:"500px",width:"500px"}}));f()(t,r),e.icon=t.toDataURL("image/png")})))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d,{showLinks:!0}),n.iconsToConvert=[{icon:v.a,alt:"Email:"},{icon:O.a,alt:"Github icon:"},{icon:O.b,alt:"Linked in:"}],n.canvLoaded=!1,n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.convertSVGToImage(this.iconsToConvert),this.setState({})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:{backgroundColor:"black",position:"absolute",height:"19%",width:"55%",margin:"4% 4%",zIndex:0}}),a.a.createElement("div",{style:{backgroundColor:"rgba(192, 192, 192, 1.0)",height:"19%",position:"absolute",width:"55%",margin:"3% 3%",zIndex:1}},a.a.createElement("div",{style:{padding:"3% 5%"}},!this.canvLoaded&&a.a.createElement("canvas",{ref:"canvas",style:{display:"none"}}),a.a.createElement("h1",{style:{margin:"0 0",padding:"0 0",fontSize:"30px"}},this.state.name),a.a.createElement("p",{style:{background:"none",padding:"0 0",margin:"0 0"}},"Phone: ",this.state.phoneNum),this.canvLoaded&&a.a.createElement("img",{src:this.iconsToConvert[0].icon,key:"img-0",alt:this.iconsToConvert[0].alt,style:{position:"absolute",top:"41%",height:25,width:25}}),a.a.createElement("p",{style:{background:"none",padding:"0 0",margin:"6px 0 0 30px"}}," ",this.props.email),this.canvLoaded&&a.a.createElement("img",{src:this.iconsToConvert[1].icon,key:"img-1",alt:this.iconsToConvert[1].alt,style:{position:"absolute",top:"58%",height:25,width:25}}),a.a.createElement("p",{style:{background:"none",padding:"0 0",margin:"9px 0 0 30px"}},this.props.github),this.canvLoaded&&a.a.createElement("img",{src:this.iconsToConvert[2].icon,key:"img-2",alt:this.iconsToConvert[2].alt,style:{position:"absolute",top:"75%",height:25,width:25}}),a.a.createElement("p",{style:{background:"none",padding:"0 0",margin:"9px 0 0 30px"}},this.props.linkedIn))),a.a.createElement("style",null,k))}}]),t}(a.a.Component);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{backgroundColor:"none",height:"18%",position:"absolute",width:"37%",marginTop:"3%",marginLeft:"63%",zIndex:1}},a.a.createElement("h1",{style:{margin:"1% 3%",padding:"0 0"}},"Education"),a.a.createElement("p",{style:{margin:"0 3%"}},this.state.education.school),a.a.createElement("p",{style:{margin:"0 3%"}},"(",this.state.education.location,")"),a.a.createElement("ul",{style:{margin:"0 0"}},a.a.createElement("li",{style:{margin:"1% 0 1% 0"}},this.state.education.degree),a.a.createElement("li",{style:{margin:"1% 0 1% 0"}},this.state.education.degree2),a.a.createElement("li",{style:{margin:"1% 0 1% 0"}},this.state.education.degree3),a.a.createElement("li",{style:{margin:"1% 0 1% 0"}},"GPA: ",this.state.education.gpa),a.a.createElement("li",{style:{margin:"1% 0 1% 0"}},this.state.education.gradDate)),a.a.createElement("style",null,k))}}]),t}(a.a.Component),D=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{position:"absolute",borderLeft:"1px solid black",height:"75%",top:"23%",left:"30%"}})}}]),t}(a.a.Component);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"0 0",background:"none"}},a.a.createElement("h1",{style:{margin:"0 0"}},"Technical Skills"),a.a.createElement("p",{style:{margin:"0 0 0 0",textDecoration:"underline"}},"Proficient in:"),a.a.createElement("p",{style:{margin:"0 0"}},this.state.technicalSkills.proficient.map((function(e,t,n){return t!=n.length-1?"".concat(e,", "):"".concat(e)}))),a.a.createElement("p",{style:{margin:"2% 0 0 0",textDecoration:"underline"}},"Basic knowledge of:"),a.a.createElement("p",{style:{margin:"0 0"}},this.state.technicalSkills.basic.map((function(e,t,n){return t!=n.length-1?"".concat(e,", "):"".concat(e)}))),a.a.createElement("style",null,k))}}]),t}(a.a.Component);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"0 0 1% 0",background:"none"}},a.a.createElement("h1",{style:{margin:"0 0"}},"Work Experience"),this.state.workExperience.map((function(e,t,n){var r;return r=e.location?a.a.createElement("li",{style:{margin:"0 0 0 0"}},e.date," in ",e.location):a.a.createElement("li",{style:{margin:"0 0 0 0"}},e.date),a.a.createElement("div",{style:{margin:"0 0",padding:"0 0",background:"none"}},a.a.createElement("p",{style:{margin:"0 0 0 0",textDecoration:"underline"}},e.company),a.a.createElement("ul",{style:{margin:"0 0",padding:"0 0 0 5%"}},r,"string"===typeof e.desc?a.a.createElement("li",{style:{margin:"0 0 0 0"}},e.desc):e.desc.map((function(e){return a.a.createElement("li",{style:{margin:"0 0 0 0"}},e)}))))})),a.a.createElement("style",null,k))}}]),t}(a.a.Component);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"3% 4% 3% 2%",background:"none"}},a.a.createElement("h1",{style:{margin:"0 0"}},"Soft Skills"),a.a.createElement("p",{style:{margin:"0 0 0 0"}},this.state.softSkills.map((function(e,t,n){return t!=n.length-1?"".concat(e,", "):"".concat(e)}))))}}]),t}(a.a.Component);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"0 0 2% 0",padding:"0 0",background:"none"}},a.a.createElement("h1",{style:{padding:"0 0 0 0",margin:"0 0"}},"Objective"),a.a.createElement("p",{style:{margin:"0 0 0 0"}},this.state.objective))}}]),t}(a.a.Component);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"0 0 3% 0",padding:"0 0",background:"none"}},a.a.createElement("h1",{style:{margin:"0 0",padding:"0 0"}},"Coursework"),a.a.createElement("p",{style:{margin:"0 0 0 0",padding:"0 0"}},this.state.coursework))}}]),t}(a.a.Component);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).convertSVGsToImages=function(e){var t=n.refs.canvas;n.canvLoaded||(n.canvLoaded=!0,t.getContext("2d"),e.forEach((function(e,n){var r=h.a.renderToStaticMarkup(a.a.createElement(j.a,{icon:e.icon,size:"3x",style:{color:"black",height:"500px",width:"500px"}}));f()(t,r),e.icon=t.toDataURL("image/png")})))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n.canvLoaded=!1,n.iconsToConvert=[{icon:O.a,alt:"Github:"},{icon:v.b,alt:"Weblink:"}],n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.convertSVGsToImages(this.iconsToConvert),this.setState({})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{margin:"0 0",padding:"0 0",background:"none"}},!this.canvLoaded&&a.a.createElement("canvas",{ref:"canvas",style:{display:"none"}}),a.a.createElement("h1",{style:{margin:"0 0",padding:"0 0"}},"Projects"),this.state.projects.map((function(t,n,r){return a.a.createElement("div",{style:{margin:"0 0",padding:"0 0",background:"none"}},a.a.createElement("div",{style:{margin:"0 0",padding:"0 0",display:"flex",background:"none"}},a.a.createElement("p",{style:{display:"inline-block",margin:"0 0",padding:"0 0",textDecoration:"underline",background:"none"}},t.title),a.a.createElement("p",{style:{display:"inline-block",margin:"0 0 0 auto",padding:"0 0",background:"none"}},t.type," - ",t.date)),a.a.createElement("div",{style:{margin:"1% 0 0 0",display:"flex",height:"20px",background:"none"}},null!=t.github&&e.canvLoaded&&a.a.createElement("img",{src:e.iconsToConvert[0].icon,key:"img-0",alt:e.iconsToConvert[0].alt,style:{height:20,width:20}}),a.a.createElement("div",{style:{position:"relative",top:"15%",margin:"0 2% 0 1%",padding:"0 0"}},e.props.githubs[n]),null!=t.link&&e.canvLoaded&&a.a.createElement("div",{style:{margin:"0 0",padding:"0 0",display:"flex"}},a.a.createElement("img",{src:e.iconsToConvert[1].icon,key:"img-1",alt:e.iconsToConvert[1].alt,style:{height:20,width:20}}),a.a.createElement("div",{style:{position:"relative",top:"15%",margin:"0 0 0 2%",padding:"0 0"}},e.props.links[n]))),a.a.createElement("div",{style:{margin:"1% 0",padding:"0 0"}},a.a.createElement("ul",{style:{margin:"0 0",padding:"0 0 0 5%"}},t.info.map((function(e,n){var r=e.split(" "),i=r.map((function(e,n){return t.keywords.includes(e)||t.keywords.includes(e.replace(",",""))||t.keywords.includes(e.replace(".",""))?n!=r.length?a.a.createElement("p",{style:{display:"inline-block",padding:"0 0",margin:"0 0",fontWeight:"bold"}},e,a.a.createElement("span",null,"\xa0")):a.a.createElement("p",{style:{display:"inline-block",padding:"0 0",margin:"0 0",fontWeight:"bold"}},e):n!=r.length?a.a.createElement("p",{style:{display:"inline-block",padding:"0 0",margin:"0 0"}},e,a.a.createElement("span",null,"\xa0")):a.a.createElement("p",{style:{display:"inline-block",padding:"0 0",margin:"0 0"}},e)}));return a.a.createElement("li",null,a.a.createElement("span",null,i))})))))})))}}]),t}(a.a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{position:"absolute",top:"23%",left:"33%",background:"none",margin:"0 4% 0 0"}},a.a.createElement(M,null),a.a.createElement(T,null),a.a.createElement(N,{githubs:this.props.projectGithubs,links:this.props.projectLinks}))}}]),t}(a.a.Component);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"0 0",padding:"0 0"}},a.a.createElement("h1",{style:{margin:"0 0",padding:"0 0"}},"Activities"),a.a.createElement("ul",{style:{margin:"2% 0",padding:"0 0 0 10%"}},this.state.activities.map((function(e,t){return a.a.createElement("li",{style:{padding:"0 0",margin:"0 0"}},"".concat(e.name," (").concat(e.dates,")"))}))))}}]),t}(a.a.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{margin:"0 0 0 4%",width:"25%",position:"absolute",top:"23%",background:"none"}},a.a.createElement(x,null),a.a.createElement(A,null),a.a.createElement(G,null),a.a.createElement(U,null))}}]),t}(a.a.Component);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var V=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleLinks=function(){"Show hyperlinks"===n.state.linkStatus?n.setState({showLinks:!0,linkStatus:"Remove hyperlinks"}):n.setState({showLinks:!1,linkStatus:"Show hyperlinks"})},n.exportPDF=function(){n.resume.save()},n.render=function(){var e,t,r,i,o;return n.state.showLinks?(e=a.a.createElement("a",{style:{color:"blue"},href:"mailto:david25@purdue.edu"},n.state.email),t=a.a.createElement("a",{style:{color:"blue"},target:"_blank",href:"https://".concat(n.state.github)},n.state.github),r=a.a.createElement("a",{style:{color:"blue"},target:"_blank",href:"https://".concat(n.state.linkedIn)},n.state.linkedIn),i=n.state.projects.map((function(e,t){return a.a.createElement("a",{style:{color:"blue"},target:"_blank",href:"".concat(e.github)},e.github)})),o=n.state.projects.map((function(e,t){return a.a.createElement("a",{style:{color:"blue"},target:"_blank",href:"".concat(e.link)},e.link)}))):(e=a.a.createElement("p",{style:{padding:"0 0",margin:"0 0"}},n.state.email),t=a.a.createElement("p",{style:{padding:"0 0",margin:"0 0"}},n.state.github),r=a.a.createElement("p",{style:{padding:"0 0",margin:"0 0"}},n.state.linkedIn),i=n.state.projects.map((function(e,t){return a.a.createElement("p",{style:{padding:"0 0",margin:"0 0"}},e.github)})),o=n.state.projects.map((function(e,t){return a.a.createElement("p",{style:{padding:"0 0",margin:"0 0"}},e.link)}))),a.a.createElement("div",null,a.a.createElement("button",{onClick:n.exportPDF},"Download"),a.a.createElement("button",{onClick:n.toggleLinks},n.state.linkStatus),a.a.createElement(m.a,{fileName:"AndersonDavid.pdf",title:"",subject:"",keywords:"",ref:function(e){return n.resume=e}},a.a.createElement("div",{style:{height:792,width:612,padding:"none",position:"relative",backgroundColor:"white",boxShadow:"5px 5px 5px black",margin:"auto",overflowX:"hidden",overflowY:"hidden"}},a.a.createElement(w,{email:e,github:t,linkedIn:r}),a.a.createElement(S,null),a.a.createElement(D,null),a.a.createElement(X,null),a.a.createElement(B,{projectGithubs:i,projectLinks:o}))),a.a.createElement("style",null,k))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d,{showLinks:!1,linkStatus:"Show hyperlinks"}),n}return Object(p.a)(t,e),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.0112efd0.chunk.js.map