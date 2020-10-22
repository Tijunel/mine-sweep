(this["webpackJsonpmine-sweep"]=this["webpackJsonpmine-sweep"]||[]).push([[0],{29:function(e,t,n){e.exports=n(45)},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(8),s=n(7),o=n(0),i=n.n(o),l=n(12),c=n.n(l),u=n(50),d=n(51),m=(n(34),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidUpdate=function(e){e!==r.props&&r.setState({showModal:r.props.showModal})},r.render=function(){return i.a.createElement("div",{id:"modal"},i.a.createElement(u.a,{style:{color:"black"},show:r.state.showModal,onHide:r.props.modalInfo.failureCallback,top:!0},i.a.createElement(u.a.Header,{closeButton:!0},i.a.createElement(u.a.Title,{style:{fontSize:"25px"}},r.props.modalInfo.title)),i.a.createElement(u.a.Body,null,i.a.createElement("b",null,r.props.modalInfo.message)),i.a.createElement(u.a.Footer,null,i.a.createElement(d.a,{id:"modalButton",onClick:r.props.modalInfo.successCallback},i.a.createElement("div",null,i.a.createElement("b",null,r.props.modalInfo.primaryButtonTitle))),r.props.modalInfo.cancelOption?i.a.createElement(d.a,{id:"modalButton",onClick:r.props.modalInfo.failureCallback},i.a.createElement("div",null,i.a.createElement("b",null,"Cancel"))):"")))},r.state={showModal:!1},r}return n}(i.a.Component)),f=n(28),h=n(27);function p(e,t){var n=[Math.ceil(e),Math.floor(t)];return t=n[1],(e=n[0])+Math.floor(Math.random()*(t-e+1))}var v=function(){function e(){Object(a.a)(this,e),this.init(10,10,10)}return Object(h.a)(e,[{key:"setGameMode",value:function(e){e?this.init(10,10,10):this.init(15,15,25)}},{key:"validCoord",value:function(e,t){return e>=0&&e<this.nrows&&t>=0&&t<this.ncols}},{key:"init",value:function(e,t,n){this.nrows=e,this.ncols=t,this.nmines=n,this.nmarked=0,this.nuncovered=0,this.exploded=!1,this.arr=function(e,t,n){for(var a=[],r=0;r<e;r++){a[r]=[];for(var s=0;s<t;s++)a[r][s]=n(r,s)}return a}(e,t,(function(){return{mine:!1,state:"hidden",count:0}}))}},{key:"count",value:function(e,t){for(var n,a,r=this,s=0,o=-1;o<=1;o++)for(var i=-1;i<=1;i++)s+=(n=e+o,a=t+i,r.validCoord(n,a)&&r.arr[n][a].mine?1:0);return s}},{key:"sprinkleMines",value:function(e,t){for(var n=[],a=0;a<this.nrows;a++)for(var r=0;r<this.ncols;r++)(Math.abs(e-a)>2||Math.abs(t-r)>2)&&n.push([a,r]);this.nmines=Math.min(this.nmines,n.length);for(var s=0;s<this.nmines;s++){var o=p(s,n.length-1),i=[n[o],n[s]];n[s]=i[0],n[o]=i[1];var l=Object(f.a)(n[s],2),c=l[0],u=l[1];this.arr[c][u].mine=!0}for(var d=0;d<this.nrows;d++)for(var m=0;m<this.ncols;m++)"marked"==this.arr[d][m].state&&(this.arr[d][m].state="hidden"),this.arr[d][m].count=this.count(d,m);for(var h=[],v=0;v<this.nrows;v++){for(var g="",k=0;k<this.ncols;k++)g+=this.arr[v][k].mine?"B":".";g+="  |  ";for(var y=0;y<this.ncols;y++)g+=this.arr[v][y].count.toString();h[v]=g}}},{key:"uncover",value:function(e,t){var n=this;if(!this.validCoord(e,t))return!1;if(0===this.nuncovered&&this.sprinkleMines(e,t),"hidden"!==this.arr[e][t].state)return!1;return function e(t,a){n.validCoord(t,a)&&"hidden"===n.arr[t][a].state&&(n.arr[t][a].state="shown",n.nuncovered++,0===n.arr[t][a].count&&(e(t-1,a-1),e(t-1,a),e(t-1,a+1),e(t,a-1),e(t,a+1),e(t+1,a-1),e(t+1,a),e(t+1,a+1)))}(e,t),this.arr[e][t].mine&&(this.exploded=!0),!0}},{key:"mark",value:function(e,t){return!!this.validCoord(e,t)&&("shown"!==this.arr[e][t].state&&(this.nmarked+="marked"===this.arr[e][t].state?-1:1,this.arr[e][t].state="marked"===this.arr[e][t].state?"hidden":"marked",!0))}},{key:"getRendering",value:function(){for(var e=[],t=0;t<this.nrows;t++){for(var n="",a=0;a<this.ncols;a++){var r=this.arr[t][a];this.exploded&&r.mine?n+="M":"hidden"===r.state?n+="H":"marked"===r.state?n+="F":r.mine?n+="M":n+=r.count.toString()}e[t]=n}return e}},{key:"getStatus",value:function(){return{done:this.exploded||this.nuncovered===this.nrows*this.ncols-this.nmines,exploded:this.exploded,nrows:this.nrows,ncols:this.ncols,nmarked:this.nmarked,nuncovered:this.nuncovered,nmines:this.nmines}}},{key:"unmarkAll",value:function(){for(var e=this.getRendering(),t=0;t<this.nrows;t++)for(var n=0;n<this.ncols;n++)"F"===e[t][n]&&this.mark(t,n)}},{key:"markBombs",value:function(){for(var e=this.getRendering(),t=0;t<this.nrows;t++)for(var n=0;n<this.ncols;n++)"H"===e[t][n]&&this.mark(t,n)}},{key:"getTileStatus",value:function(e,t){return this.arr[e][t].mine?-1:this.arr[e][t].count}}],[{key:"getInstance",value:function(){return null===e.instance&&(e.instance=new e),this.instance}}]),e}();v.instance=null;n(38),n(39),n(40);var g=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){return i.a.createElement("div",{id:"top-nav"},i.a.createElement("div",{id:"top-nav-title"},i.a.createElement("b",null,"Minesweeper")))},e}return n}(i.a.Component),k=n(47),y=n(48),E=n(49),S=(n(41),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).toggleMode=function(){r.setState({easy:!r.state.easy},r.props.updateDifficulty(!r.state.easy,(function(e){e?r.setState({started:!1},r.props.updateStarted(!1)):r.setState({easy:!r.state.easy})})))},r.toggleStart=function(){r.setState({started:!r.state.started},r.props.updateStarted(!r.state.started,(function(e){e||r.setState({started:!0})})))},r.render=function(){return i.a.createElement("div",{id:"settings"},i.a.createElement("div",{id:"difficulty"},i.a.createElement(k.a,null,i.a.createElement(y.a,null,i.a.createElement(E.a,null,i.a.createElement(d.a,{disabled:r.state.easy,onClick:r.toggleMode},i.a.createElement("div",null,i.a.createElement("b",null,"Easy")))),i.a.createElement(E.a,null,i.a.createElement(d.a,{disabled:!r.state.easy,onClick:r.toggleMode},i.a.createElement("div",null,i.a.createElement("b",null,"Hard"))))))))},r.state={easy:!0,started:!1},r}return n}(i.a.Component)),b=n(16),w=(n(42),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){window.addEventListener("resize",r.handleResize),r.setState({height:r.tileRef.current.offsetWidth})},r.componentDidUpdate=function(e){e!==r.props&&(r.setState({count:r.props.count,uncovered:r.props.uncovered,colour:r.props.colour,fontSize:.25*r.tileRef.current.offsetWidth}),r.handleResize())},r.handleResize=function(){r.setState({fontSize:.25*r.tileRef.current.offsetWidth,height:r.tileRef.current.offsetWidth})},r.handleClick=function(){if(r.props.started||"H"!==r.state.count){if(!r.props.started||"F"===r.state.count)return}else r.props.startOnClick();r.props.uncoverTile(r.props.row,r.props.col)},r.handleRightClick=function(e){e.preventDefault(),0===r.state.touchTime&&r.props.markTile(r.props.row,r.props.col)},r.handleTouchStart=function(){(r.props.started||0!==r.state.touchTime)&&(r.timer=setInterval((function(){r.setState({touchTime:r.state.touchTime+10}),r.state.touchTime+10>990&&!r.state.marked&&(r.props.markTile(r.props.row,r.props.col),r.setState({marked:!0}))}),10))},r.handleTouchEnd=function(){clearInterval(r.timer),r.setState({touchTime:0,marked:!1})},r.render=function(){return i.a.createElement("div",{id:"tile",style:{backgroundColor:r.state.colour,height:r.state.height,cursor:r.state.uncovered?"":"pointer"},onClick:r.handleClick,onContextMenu:r.handleRightClick,onTouchStart:r.handleTouchStart,onTouchEnd:r.handleTouchEnd,ref:r.tileRef},i.a.createElement("div",{style:{fontSize:r.state.fontSize,margin:"auto"}},r.state.uncovered?"0"===r.state.count||"M"===r.state.count?"":r.state.count:""))},r.tileRef=i.a.createRef(),r.state={count:r.props.count,uncovered:r.props.uncovered,colour:r.props.colour,fontSize:0,height:0,touchTime:0,marked:!1},r.handleClick=r.handleClick.bind(Object(b.a)(r)),r}return n}(i.a.Component)),M=(n(43),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){r.generateTiles()},r.componentDidUpdate=function(e){e!==r.props&&r.generateTiles()},r.uncoverTile=function(e,t){r.state.engine.uncover(e,t),r.handleGameEnd(),r.generateTiles()},r.handleGameEnd=function(){var e=r.state.engine.getStatus(),t=function(){r.state.engine.setGameMode(r.props.easy),r.props.reset()};e.done&&(r.props.gameStats.current.pauseTimer(),r.state.engine.unmarkAll()),e.done&&e.exploded?r.props.showModal(!0,!1,t,t):e.done&&!e.exploded&&(r.props.showModal(!0,!0,t,t),r.state.engine.markBombs())},r.markTile=function(e,t){r.state.engine.mark(e,t),"F"===r.state.engine.getRendering()[e][t]?r.props.gameStats.current.decrementMines():r.props.gameStats.current.incrementMines(),r.generateTiles()},r.generateTiles=function(){for(var e=r.state.engine.getRendering(),t=r.props.easy?10:15,n=[[]],a=[],s=0;s<t;s++){n[s]=[];for(var o=0;o<t;o++){var l=(s+10+o)%2===0?"#0494F5":"#0476C2";isNaN(e[s][o])||(l="#FFF"),"F"!==e[s][o]&&"M"!==e[s][o]||(l="#800000"),n[s].push(i.a.createElement(E.a,{key:10*s+o,style:{padding:0,margin:0}},i.a.createElement(w,{row:s,col:o,colour:l,started:r.props.started,count:e[s][o],uncovered:"H"!==e[s][o]&&"F"!==e[s][o],uncoverTile:r.uncoverTile,markTile:r.markTile,startOnClick:r.startOnClick})))}}for(s=0;s<t;s++)a.push(i.a.createElement(y.a,{key:10*s,style:{margin:"auto"}},n[s]));r.setState({tiles:n,info:a})},r.startOnClick=function(){r.props.settings.current.toggleStart()},r.render=function(){return i.a.createElement("div",{id:"game-border"},i.a.createElement("div",{id:"tile-area"},i.a.createElement(k.a,null,r.state.info)))},r.state={tiles:[[]],info:[],engine:v.getInstance()},r}return n}(i.a.Component)),T=(n(44),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentDidUpdate=function(e){e.started!==r.props.started?r.props.started?r.startTimer():r.resetTimer():e.easy!==r.props.easy&&r.setState({mines:r.state.engine.getStatus().nmines})},r.startTimer=function(){r.timer=setInterval((function(){r.setState({time:r.state.time+1})}),1e3)},r.resetTimer=function(){clearInterval(r.timer),r.setState({time:0,mines:r.state.engine.getStatus().nmines})},r.pauseTimer=function(){clearInterval(r.timer)},r.getTime=function(){return r.state.time},r.incrementMines=function(){r.setState({mines:r.state.mines+1})},r.decrementMines=function(){r.setState({mines:r.state.mines-1})},r.render=function(){return i.a.createElement("div",{id:"game-stats"},i.a.createElement(k.a,null,i.a.createElement(y.a,null,i.a.createElement(E.a,null,i.a.createElement("b",null,"Time: ",r.state.time)),i.a.createElement(E.a,null,i.a.createElement("b",null,"Mines: ",r.state.mines)))))},r.state={timerOn:!1,time:0,mines:10,engine:v.getInstance()},r}return n}(i.a.Component)),C=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).updateDifficulty=function(t,n){e.state.started?e.showModal(!1,!1,(function(){e.state.engine.setGameMode(t),e.setState({easy:t,started:!1,showModal:!1},n(!0))}),(function(){e.setState({started:!0,showModal:!1},n(!1))})):(e.state.engine.setGameMode(t),e.setState({easy:t,started:!1}))},e.updateStarted=function(t,n){e.state.started?e.showModal(!1,!1,(function(){e.state.engine.setGameMode(e.state.easy),e.setState({started:t,showModal:!1},n(!0))}),(function(){e.setState({showModal:!1},n(!1))})):e.setState({started:t})},e.showModal=function(t,n,a,r){var s={title:"You have a game in progress.",message:"Are you sure you want to stop? You will lose your progress.",cancelOption:!0,primaryButtonTitle:"Continue",successCallback:a,failureCallback:r};t&&(s.cancelOption=!1,s.primaryButtonTitle="Try Again",n?(s.title="Congratulations! You win!",s.message="You finished in ".concat(e.gameStatsRef.current.getTime()," seconds.")):(s.title="Boom!",s.message="You hit a mine! Please try again.")),e.setState({showModal:!0,modalInfo:s})},e.reset=function(){e.setState({showModal:!1,started:!1},e.settingsRef.current.toggleStart())},e.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"top-div"},i.a.createElement(g,null),i.a.createElement("div",{id:"content"},i.a.createElement(S,{updateDifficulty:e.updateDifficulty,updateStarted:e.updateStarted,ref:e.settingsRef}),i.a.createElement(M,{easy:e.state.easy,started:e.state.started,showModal:e.showModal,reset:e.reset,gameStats:e.gameStatsRef,settings:e.settingsRef}),i.a.createElement(T,{easy:e.state.easy,started:e.state.started,ref:e.gameStatsRef})),i.a.createElement(m,{showModal:e.state.showModal,modalInfo:e.state.modalInfo})))},e.settingsRef=i.a.createRef(),e.gameStatsRef=i.a.createRef(),e.state={easy:!0,started:!1,showModal:!1,modalInfo:{title:"",message:"",cancelOption:!0,primaryButtonTitle:"Continue",successCallback:function(){},failureCallback:function(){}},engine:v.getInstance()},e}return n}(i.a.Component);c.a.render(i.a.createElement(C,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f4d9fe1f.chunk.js.map