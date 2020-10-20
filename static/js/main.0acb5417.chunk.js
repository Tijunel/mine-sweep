(this["webpackJsonpmine-sweep"]=this["webpackJsonpmine-sweep"]||[]).push([[0],{29:function(e,t,n){e.exports=n(45)},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(8),o=n(7),s=n(0),i=n.n(s),l=n(12),c=n.n(l),u=n(50),d=n(51),m=(n(34),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidUpdate=function(e){e!==r.props&&r.setState({showModal:r.props.showModal})},r.render=function(){return i.a.createElement("div",{id:"modal"},i.a.createElement(u.a,{style:{color:"black"},show:r.state.showModal,onHide:r.props.modalInfo.failureCallback,top:!0},i.a.createElement(u.a.Header,{closeButton:!0},i.a.createElement(u.a.Title,{style:{fontSize:"25px"}},r.props.modalInfo.title)),i.a.createElement(u.a.Body,null,i.a.createElement("b",null,r.props.modalInfo.message)),i.a.createElement(u.a.Footer,null,i.a.createElement(d.a,{id:"modalButton",onClick:r.props.modalInfo.successCallback},i.a.createElement("div",null,i.a.createElement("b",null,r.props.modalInfo.primaryButtonTitle))),r.props.modalInfo.cancelOption?i.a.createElement(d.a,{id:"modalButton",onClick:r.props.modalInfo.failureCallback},i.a.createElement("div",null,i.a.createElement("b",null,"Cancel"))):"")))},r.state={showModal:!1},r}return n}(i.a.Component)),f=n(28),h=n(27);function p(e,t){var n=[Math.ceil(e),Math.floor(t)];return t=n[1],(e=n[0])+Math.floor(Math.random()*(t-e+1))}var v=function(){function e(){Object(a.a)(this,e),this.init(10,10,10)}return Object(h.a)(e,[{key:"setGameMode",value:function(e){e?this.init(10,10,10):this.init(15,15,25)}},{key:"validCoord",value:function(e,t){return e>=0&&e<this.nrows&&t>=0&&t<this.ncols}},{key:"init",value:function(e,t,n){this.nrows=e,this.ncols=t,this.nmines=n,this.nmarked=0,this.nuncovered=0,this.exploded=!1,this.arr=function(e,t,n){for(var a=[],r=0;r<e;r++){a[r]=[];for(var o=0;o<t;o++)a[r][o]=n(r,o)}return a}(e,t,(function(){return{mine:!1,state:"hidden",count:0}}))}},{key:"count",value:function(e,t){for(var n,a,r=this,o=0,s=-1;s<=1;s++)for(var i=-1;i<=1;i++)o+=(n=e+s,a=t+i,r.validCoord(n,a)&&r.arr[n][a].mine?1:0);return o}},{key:"sprinkleMines",value:function(e,t){for(var n=[],a=0;a<this.nrows;a++)for(var r=0;r<this.ncols;r++)(Math.abs(e-a)>2||Math.abs(t-r)>2)&&n.push([a,r]);this.nmines=Math.min(this.nmines,n.length);for(var o=0;o<this.nmines;o++){var s=p(o,n.length-1),i=[n[s],n[o]];n[o]=i[0],n[s]=i[1];var l=Object(f.a)(n[o],2),c=l[0],u=l[1];this.arr[c][u].mine=!0}for(var d=0;d<this.nrows;d++)for(var m=0;m<this.ncols;m++)"marked"===this.arr[d][m].state&&(this.arr[d][m].state="hidden"),this.arr[d][m].count=this.count(d,m);for(var h=[],v=0;v<this.nrows;v++){for(var g="",E=0;E<this.ncols;E++)g+=this.arr[v][E].mine?"B":".";g+="  |  ";for(var S=0;S<this.ncols;S++)g+=this.arr[v][S].count.toString();h[v]=g}}},{key:"uncover",value:function(e,t){var n=this;if(!this.validCoord(e,t))return!1;if(0===this.nuncovered&&this.sprinkleMines(e,t),"hidden"!==this.arr[e][t].state)return!1;return function e(t,a){n.validCoord(t,a)&&"hidden"===n.arr[t][a].state&&(n.arr[t][a].state="shown",n.nuncovered++,0===n.arr[t][a].count&&(e(t-1,a-1),e(t-1,a),e(t-1,a+1),e(t,a-1),e(t,a+1),e(t+1,a-1),e(t+1,a),e(t+1,a+1)))}(e,t),this.arr[e][t].mine&&(this.exploded=!0),!0}},{key:"mark",value:function(e,t){return!!this.validCoord(e,t)&&("shown"!==this.arr[e][t].state&&(this.nmarked+="marked"===this.arr[e][t].state?-1:1,this.arr[e][t].state="marked"===this.arr[e][t].state?"hidden":"marked",!0))}},{key:"getRendering",value:function(){for(var e=[],t=0;t<this.nrows;t++){for(var n="",a=0;a<this.ncols;a++){var r=this.arr[t][a];this.exploded&&r.mine?n+="M":"hidden"===r.state?n+="H":"marked"===r.state?n+="F":r.mine?n+="M":n+=r.count.toString()}e[t]=n}return e}},{key:"getStatus",value:function(){return{done:this.exploded||this.nuncovered===this.nrows*this.ncols-this.nmines,exploded:this.exploded,nrows:this.nrows,ncols:this.ncols,nmarked:this.nmarked,nuncovered:this.nuncovered,nmines:this.nmines}}},{key:"getTileStatus",value:function(e,t){return this.arr[e][t].mine?-1:this.arr[e][t].count}}],[{key:"getInstance",value:function(){return null===e.instance&&(e.instance=new e),this.instance}}]),e}();v.instance=null;n(38),n(39),n(40);var g=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).render=function(){return i.a.createElement("div",{id:"top-nav"},i.a.createElement("div",{id:"top-nav-title"},i.a.createElement("b",null,"Minesweeper")))},e}return n}(i.a.Component),E=n(47),S=n(48),k=n(49),y=(n(41),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).toggleMode=function(){r.setState({easy:!r.state.easy},r.props.updateDifficulty(!r.state.easy,(function(e){e?r.setState({started:!1},r.props.updateStarted(!1)):r.setState({easy:!r.state.easy})})))},r.toggleStart=function(){r.setState({started:!r.state.started},r.props.updateStarted(!r.state.started,(function(e){e||r.setState({started:!0})})))},r.render=function(){return i.a.createElement("div",{id:"settings"},i.a.createElement("div",{id:"difficulty"},i.a.createElement(E.a,null,i.a.createElement(S.a,null,i.a.createElement(k.a,null,i.a.createElement(d.a,{disabled:r.state.easy,onClick:r.toggleMode},i.a.createElement("div",null,i.a.createElement("b",null,"Easy")))),i.a.createElement(k.a,null,i.a.createElement(d.a,{disabled:!r.state.easy,onClick:r.toggleMode},i.a.createElement("div",null,i.a.createElement("b",null,"Hard"))))))),i.a.createElement("div",{id:"start"},i.a.createElement(E.a,null,i.a.createElement(S.a,null,i.a.createElement(k.a,null,i.a.createElement(d.a,{onClick:r.toggleStart},i.a.createElement("div",null,i.a.createElement("b",null,r.state.started?"Stop":"Start"))))))))},r.state={easy:!0,started:!1},r}return n}(i.a.Component)),b=n(16),M=(n(42),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){window.addEventListener("resize",r.handleResize),r.setState({height:r.tileRef.current.offsetWidth})},r.componentDidUpdate=function(e){e!==r.props&&(r.setState({count:r.props.count,uncovered:r.props.uncovered,colour:r.props.colour,fontSize:.25*r.tileRef.current.offsetWidth}),r.handleResize())},r.handleResize=function(){r.setState({fontSize:.25*r.tileRef.current.offsetWidth,height:r.tileRef.current.offsetWidth})},r.handleClick=function(){r.props.started&&"F"!==r.state.count&&r.props.uncoverTile(r.props.row,r.props.col)},r.handleRightClick=function(e){e.preventDefault(),r.props.started&&0===r.state.touchTime&&r.props.markTile(r.props.row,r.props.col)},r.handleTouchStart=function(){(r.props.started||0!==r.state.touchTime)&&(r.timer=setInterval((function(){r.setState({touchTime:r.state.touchTime+10})}),10))},r.handleTouchEnd=function(){!r.props.started&&r.state.touchTime>0||(r.state.touchTime>660&&r.props.markTile(r.props.row,r.props.col),clearInterval(r.timer),r.setState({touchTime:0}))},r.render=function(){return i.a.createElement("div",{id:"tile",style:{backgroundColor:r.state.colour,height:r.state.height,cursor:r.state.uncovered?"":"pointer"},onClick:r.handleClick,onContextMenu:r.handleRightClick,onTouchStart:r.handleTouchStart,onTouchEnd:r.handleTouchEnd,ref:r.tileRef},i.a.createElement("div",{style:{fontSize:r.state.fontSize,margin:"auto"}},r.state.uncovered?"0"===r.state.count||"M"===r.state.count?"":r.state.count:""))},r.tileRef=i.a.createRef(),r.state={count:r.props.count,uncovered:r.props.uncovered,colour:r.props.colour,fontSize:0,height:0,touchTime:0},r.handleClick=r.handleClick.bind(Object(b.a)(r)),r}return n}(i.a.Component)),w=(n(43),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){r.generateTiles()},r.componentDidUpdate=function(e){e!==r.props&&r.generateTiles()},r.uncoverTile=function(e,t){r.state.engine.uncover(e,t),r.handleGameEnd(),r.generateTiles()},r.handleGameEnd=function(){var e=r.state.engine.getStatus(),t=function(){r.state.engine.setGameMode(r.props.easy),r.props.reset()};e.done&&r.props.gameStats.current.pauseTimer(),e.done&&e.exploded?r.props.showModal(!0,!1,t,t):e.done&&!e.exploded&&r.props.showModal(!0,!0,t,t)},r.markTile=function(e,t){r.state.engine.mark(e,t),"F"===r.state.engine.getRendering()[e][t]?r.props.gameStats.current.decrementMines():r.props.gameStats.current.incrementMines(),r.generateTiles()},r.generateTiles=function(){for(var e=r.state.engine.getRendering(),t=r.props.easy?10:15,n=[[]],a=[],o=0;o<t;o++){n[o]=[];for(var s=0;s<t;s++){var l=(o+10+s)%2===0?"#0494F5":"#0476C2";void 0===e||isNaN(e[o][s])||(l="#FFF"),void 0===e||"F"!==e[o][s]&&"M"!==e[o][s]||(l="#800000"),n[o].push(i.a.createElement(k.a,{key:10*o+s,style:{padding:0,margin:0}},i.a.createElement(M,{row:o,col:s,colour:l,started:r.props.started,count:e[o][s],uncovered:"H"!==e[o][s]&&"F"!==e[o][s],uncoverTile:r.uncoverTile,markTile:r.markTile})))}}for(o=0;o<t;o++)a.push(i.a.createElement(S.a,{key:10*o,style:{margin:"auto"}},n[o]));r.setState({tiles:n,info:a})},r.render=function(){return i.a.createElement("div",{id:"game-border"},i.a.createElement("div",{id:"tile-area"},i.a.createElement(E.a,null,r.state.info)))},r.state={tiles:[[]],info:[],engine:v.getInstance()},r}return n}(i.a.Component)),T=(n(44),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidUpdate=function(e){e.started!==r.props.started&&(r.props.started?r.startTimer():r.resetTimer())},r.startTimer=function(){r.timer=setInterval((function(){r.setState({time:r.state.time+1})}),1e3),r.setState({mines:r.state.engine.getStatus().nmines})},r.resetTimer=function(){clearInterval(r.timer),r.setState({time:0,mines:0})},r.pauseTimer=function(){clearInterval(r.timer)},r.getTime=function(){return r.state.time},r.incrementMines=function(){r.setState({mines:r.state.mines+1})},r.decrementMines=function(){r.setState({mines:r.state.mines-1})},r.render=function(){return i.a.createElement("div",{id:"game-stats"},i.a.createElement(E.a,null,i.a.createElement(S.a,null,i.a.createElement(k.a,null,i.a.createElement("b",null,"Time: ",r.state.time)),i.a.createElement(k.a,null,i.a.createElement("b",null,"Mines: ",r.state.mines)))))},r.state={timerOn:!1,time:0,mines:0,engine:v.getInstance()},r}return n}(i.a.Component)),C=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).updateDifficulty=function(t,n){e.state.started?e.showModal(!1,!1,(function(){e.state.engine.setGameMode(t),e.setState({easy:t,started:!1,showModal:!1},n(!0))}),(function(){e.setState({started:!0,showModal:!1},n(!1))})):(e.state.engine.setGameMode(t),e.setState({easy:t,started:!1}))},e.updateStarted=function(t,n){e.state.started?e.showModal(!1,!1,(function(){e.state.engine.setGameMode(e.state.easy),e.setState({started:t,showModal:!1},n(!0))}),(function(){e.setState({showModal:!1},n(!1))})):e.setState({started:t})},e.showModal=function(t,n,a,r){var o={title:"You have a game in progress.",message:"Are you sure you want to stop? You will lose your progress.",cancelOption:!0,primaryButtonTitle:"Continue",successCallback:a,failureCallback:r};t&&(o.cancelOption=!1,o.primaryButtonTitle="Try Again",n?(o.title="Congratulations! You win!",o.message="You finished in ".concat(e.gameStatsRef.current.getTime()," seconds.")):(o.title="Boom!",o.message="You hit a mine! Please try again.")),e.setState({showModal:!0,modalInfo:o})},e.reset=function(){e.setState({showModal:!1,started:!1},e.settingsRef.current.toggleStart())},e.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"top-div"},i.a.createElement(g,null),i.a.createElement("div",{id:"content"},i.a.createElement(y,{updateDifficulty:e.updateDifficulty,updateStarted:e.updateStarted,ref:e.settingsRef}),i.a.createElement(w,{easy:e.state.easy,started:e.state.started,showModal:e.showModal,reset:e.reset,gameStats:e.gameStatsRef}),i.a.createElement(T,{started:e.state.started,ref:e.gameStatsRef})),i.a.createElement(m,{showModal:e.state.showModal,modalInfo:e.state.modalInfo})))},e.settingsRef=i.a.createRef(),e.gameStatsRef=i.a.createRef(),e.state={easy:!0,started:!1,showModal:!1,modalInfo:{title:"",message:"",cancelOption:!0,primaryButtonTitle:"Continue",successCallback:function(){},failureCallback:function(){}},engine:v.getInstance()},e}return n}(i.a.Component);c.a.render(i.a.createElement(C,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0acb5417.chunk.js.map