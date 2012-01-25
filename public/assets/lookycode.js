var handlebars=(function(){var parser={trace:function trace(){},yy:{},symbols_:{"error":2,"root":3,"program":4,"EOF":5,"statements":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"OPEN_PARTIAL":24,"params":25,"hash":26,"param":27,"STRING":28,"INTEGER":29,"BOOLEAN":30,"hashSegments":31,"hashSegment":32,"ID":33,"EQUALS":34,"pathSegments":35,"SEP":36,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:return $$[$0-1]
break;case 2:this.$=new yy.ProgramNode($$[$0-2],$$[$0])
break;case 3:this.$=new yy.ProgramNode($$[$0])
break;case 4:this.$=new yy.ProgramNode([])
break;case 5:this.$=[$$[$0]]
break;case 6:$$[$0-1].push($$[$0]);this.$=$$[$0-1]
break;case 7:this.$=new yy.InverseNode($$[$0-2],$$[$0-1],$$[$0])
break;case 8:this.$=new yy.BlockNode($$[$0-2],$$[$0-1],$$[$0])
break;case 9:this.$=$$[$0]
break;case 10:this.$=$$[$0]
break;case 11:this.$=new yy.ContentNode($$[$0])
break;case 12:this.$=new yy.CommentNode($$[$0])
break;case 13:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1])
break;case 14:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1])
break;case 15:this.$=$$[$0-1]
break;case 16:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1])
break;case 17:this.$=new yy.MustacheNode($$[$0-1][0],$$[$0-1][1],true)
break;case 18:this.$=new yy.PartialNode($$[$0-1])
break;case 19:this.$=new yy.PartialNode($$[$0-2],$$[$0-1])
break;case 20:break;case 21:this.$=[[$$[$0-2]].concat($$[$0-1]),$$[$0]]
break;case 22:this.$=[[$$[$0-1]].concat($$[$0]),null]
break;case 23:this.$=[[$$[$0-1]],$$[$0]]
break;case 24:this.$=[[$$[$0]],null]
break;case 25:$$[$0-1].push($$[$0]);this.$=$$[$0-1];break;case 26:this.$=[$$[$0]]
break;case 27:this.$=$$[$0]
break;case 28:this.$=new yy.StringNode($$[$0])
break;case 29:this.$=new yy.IntegerNode($$[$0])
break;case 30:this.$=new yy.BooleanNode($$[$0])
break;case 31:this.$=new yy.HashNode($$[$0])
break;case 32:$$[$0-1].push($$[$0]);this.$=$$[$0-1]
break;case 33:this.$=[$$[$0]]
break;case 34:this.$=[$$[$0-2],$$[$0]]
break;case 35:this.$=[$$[$0-2],new yy.StringNode($$[$0])]
break;case 36:this.$=[$$[$0-2],new yy.IntegerNode($$[$0])]
break;case 37:this.$=[$$[$0-2],new yy.BooleanNode($$[$0])]
break;case 38:this.$=new yy.IdNode($$[$0])
break;case 39:$$[$0-2].push($$[$0]);this.$=$$[$0-2];break;case 40:this.$=[$$[$0]]
break;}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function parseError(str,hash){throw new Error(str);},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext='',yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=='undefined')
this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);if(typeof this.yy.parseError==='function')
this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n;}
function lex(){var token;token=self.lexer.lex()||1;if(typeof token!=='number'){token=self.symbols_[token]||token;}
return token;};var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){state=stack[stack.length-1];if(this.defaultActions[state]){action=this.defaultActions[state];}else{if(symbol==null)
symbol=lex();action=table[state]&&table[state][symbol];}
if(typeof action==='undefined'||!action.length||!action[0]){if(!recovering){expected=[];for(p in table[state])if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'");}
var errStr='';if(this.lexer.showPosition){errStr='Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');}else{errStr='Parse error on line '+(yylineno+1)+": Unexpected "+
(symbol==1?"end of input":("'"+(this.terminals_[symbol]||symbol)+"'"));}
this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected});}
if(recovering==3){if(symbol==EOF){throw new Error(errStr||'Parsing halted.');}
yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;symbol=lex();}
while(1){if((TERROR.toString())in table[state]){break;}
if(state==0){throw new Error(errStr||'Parsing halted.');}
popStack(1);state=stack[stack.length-1];}
preErrorSymbol=symbol;symbol=TERROR;state=stack[stack.length-1];action=table[state]&&table[state][TERROR];recovering=3;}
if(action[0]instanceof Array&&action.length>1){throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);}
switch(action[0]){case 1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)
recovering--;}else{symbol=preErrorSymbol;preErrorSymbol=null;}
break;case 2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=='undefined'){return r;}
if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len);}
stack.push(this.productions_[action[1]][0]);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:return true;}}
return true;}};var lexer=(function(){var lexer=({EOF:1,parseError:function parseError(str,hash){if(this.yy.parseError){this.yy.parseError(str,hash);}else{throw new Error(str);}},setInput:function(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match='';this.conditionStack=['INITIAL'];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this;},input:function(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.match+=ch;this.matched+=ch;var lines=ch.match(/\n/);if(lines)this.yylineno++;this._input=this._input.slice(1);return ch;},unput:function(ch){this._input=ch+this._input;return this;},more:function(){this._more=true;return this;},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?'...':'')+past.substr(-20).replace(/\n/g,"");},upcomingInput:function(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length);}
return(next.substr(0,20)+(next.length>20?'...':'')).replace(/\n/g,"");},showPosition:function(){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^";},next:function(){if(this.done){return this.EOF;}
if(!this._input)this.done=true;var token,match,col,lines;if(!this._more){this.yytext='';this.match='';}
var rules=this._currentRules();for(var i=0;i<rules.length;i++){match=this._input.match(this.rules[rules[i]]);if(match){lines=match[0].match(/\n.*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-1:this.yylloc.last_column+match[0].length}
this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[i],this.conditionStack[this.conditionStack.length-1]);if(token)return token;else return;}}
if(this._input===""){return this.EOF;}else{this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),{text:"",token:null,line:this.yylineno});}},lex:function lex(){var r=this.next();if(typeof r!=='undefined'){return r;}else{return this.lex();}},begin:function begin(condition){this.conditionStack.push(condition);},popState:function popState(){return this.conditionStack.pop();},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;}});lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){var YYSTATE=YY_START
switch($avoiding_name_collisions){case 0:this.begin("mu");if(yy_.yytext)return 14;break;case 1:return 14;break;case 2:return 24;break;case 3:return 16;break;case 4:return 20;break;case 5:return 19;break;case 6:return 19;break;case 7:return 23;break;case 8:return 23;break;case 9:yy_.yytext=yy_.yytext.substr(3,yy_.yyleng-5);this.begin("INITIAL");return 15;break;case 10:return 22;break;case 11:return 34;break;case 12:return 33;break;case 13:return 33;break;case 14:return 36;break;case 15:break;case 16:this.begin("INITIAL");return 18;break;case 17:this.begin("INITIAL");return 18;break;case 18:yy_.yytext=yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"');return 28;break;case 19:return 30;break;case 20:return 30;break;case 21:return 29;break;case 22:return 33;break;case 23:return'INVALID';break;case 24:return 5;break;}};lexer.rules=[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s/.])/,/^./,/^$/];lexer.conditions={"mu":{"rules":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"inclusive":false},"INITIAL":{"rules":[0,1,24],"inclusive":true}};return lexer;})()
parser.lexer=lexer;return parser;})();if(typeof require!=='undefined'&&typeof exports!=='undefined'){exports.parser=handlebars;exports.parse=function(){return handlebars.parse.apply(handlebars,arguments);}
exports.main=function commonjsMain(args){if(!args[1])
throw new Error('Usage: '+args[0]+' FILE');if(typeof process!=='undefined'){var source=require('fs').readFileSync(require('path').join(process.cwd(),args[1]),"utf8");}else{var cwd=require("file").path(require("file").cwd());var source=cwd.join(args[1]).read({charset:"utf-8"});}
return exports.parser.parse(source);}
if(typeof module!=='undefined'&&require.main===module){exports.main(typeof process!=='undefined'?process.argv.slice(1):require("system").args);}};;var Handlebars={};Handlebars.VERSION="1.0.beta.2";Handlebars.Parser=handlebars;Handlebars.parse=function(string){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(string);};Handlebars.print=function(ast){return new Handlebars.PrintVisitor().accept(ast);};Handlebars.helpers={};Handlebars.partials={};Handlebars.registerHelper=function(name,fn,inverse){if(inverse){fn.not=inverse;}
this.helpers[name]=fn;};Handlebars.registerPartial=function(name,str){this.partials[name]=str;};Handlebars.registerHelper('helperMissing',function(arg){if(arguments.length===2){return undefined;}else{throw new Error("Could not find property '"+arg+"'");}});Handlebars.registerHelper('blockHelperMissing',function(context,fn,inverse){inverse=inverse||function(){};var ret="";var type=Object.prototype.toString.call(context);if(type==="[object Function]"){context=context();}
if(context===true){return fn(this);}else if(context===false||context==null){return inverse(this);}else if(type==="[object Array]"){if(context.length>0){for(var i=0,j=context.length;i<j;i++){ret=ret+fn(context[i]);}}else{ret=inverse(this);}
return ret;}else{return fn(context);}},function(context,fn){return fn(context);});Handlebars.registerHelper('each',function(context,fn,inverse){var ret="";if(context&&context.length>0){for(var i=0,j=context.length;i<j;i++){ret=ret+fn(context[i]);}}else{ret=inverse(this);}
return ret;});Handlebars.registerHelper('if',function(context,fn,inverse){if(!context||context==[]){return inverse(this);}else{return fn(this);}});Handlebars.registerHelper('unless',function(context,fn,inverse){return Handlebars.helpers['if'].call(this,context,inverse,fn);});Handlebars.registerHelper('with',function(context,fn){return fn(context);});Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(level,str){}};Handlebars.log=function(level,str){Handlebars.logger.log(level,str);};;(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(statements,inverse){this.type="program";this.statements=statements;if(inverse){this.inverse=new Handlebars.AST.ProgramNode(inverse);}};Handlebars.AST.MustacheNode=function(params,hash,unescaped){this.type="mustache";this.id=params[0];this.params=params.slice(1);this.hash=hash;this.escaped=!unescaped;};Handlebars.AST.PartialNode=function(id,context){this.type="partial";this.id=id;this.context=context;};var verifyMatch=function(open,close){if(open.original!==close.original){throw new Handlebars.Exception(open.original+" doesn't match "+close.original);}};Handlebars.AST.BlockNode=function(mustache,program,close){verifyMatch(mustache.id,close);this.type="block";this.mustache=mustache;this.program=program;};Handlebars.AST.InverseNode=function(mustache,program,close){verifyMatch(mustache.id,close);this.type="inverse";this.mustache=mustache;this.program=program;};Handlebars.AST.ContentNode=function(string){this.type="content";this.string=string;};Handlebars.AST.HashNode=function(pairs){this.type="hash";this.pairs=pairs;};Handlebars.AST.IdNode=function(parts){this.type="ID";this.original=parts.join(".");var dig=[],depth=0;for(var i=0,l=parts.length;i<l;i++){var part=parts[i];if(part===".."){depth++;}
else if(part==="."||part==="this"){continue;}
else{dig.push(part);}}
this.parts=dig;this.string=dig.join('.');this.depth=depth;this.isSimple=(dig.length===1)&&(depth===0);};Handlebars.AST.StringNode=function(string){this.type="STRING";this.string=string;};Handlebars.AST.IntegerNode=function(integer){this.type="INTEGER";this.integer=integer;};Handlebars.AST.BooleanNode=function(boolean){this.type="BOOLEAN";this.boolean=boolean;};Handlebars.AST.CommentNode=function(comment){this.type="comment";this.comment=comment;};})();;Handlebars.Visitor=function(){};Handlebars.Visitor.prototype={accept:function(object){return this[object.type](object);}};;Handlebars.Exception=function(message){this.message=message;};Handlebars.SafeString=function(string){this.string=string;};Handlebars.SafeString.prototype.toString=function(){return this.string.toString();};(function(){var escape={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var badChars=/&(?!\w+;)|[<>"'`]/g;var possible=/[&<>"'`]/;var escapeChar=function(chr){return escape[chr]||"&amp;"};Handlebars.Utils={escapeExpression:function(string){if(string instanceof Handlebars.SafeString){return string.toString();}else if(string==null||string===false){return"";}
if(!possible.test(string)){return string;}
return string.replace(badChars,escapeChar);},isEmpty:function(value){if(typeof value==="undefined"){return true;}else if(value===null){return true;}else if(value===false){return true;}else if(Object.prototype.toString.call(value)==="[object Array]"&&value.length===0){return true;}else{return false;}}};})();;Handlebars.Compiler=function(){};Handlebars.JavaScriptCompiler=function(){};(function(Compiler,JavaScriptCompiler){Compiler.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,invokeInverse:14,assignToHash:15,pushStringParam:16};Compiler.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:1,lookup:1,invokeMustache:2,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:2,invokePartial:1,push:1,invokeInverse:1,assignToHash:1,pushStringParam:1};Compiler.DISASSEMBLE_MAP={};for(var prop in Compiler.OPCODE_MAP){var value=Compiler.OPCODE_MAP[prop];Compiler.DISASSEMBLE_MAP[value]=prop;}
Compiler.multiParamSize=function(code){return Compiler.MULTI_PARAM_OPCODES[Compiler.DISASSEMBLE_MAP[code]];};Compiler.prototype={compiler:Compiler,disassemble:function(){var opcodes=this.opcodes,opcode,nextCode;var out=[],str,name,value;for(var i=0,l=opcodes.length;i<l;i++){opcode=opcodes[i];if(opcode==='DECLARE'){name=opcodes[++i];value=opcodes[++i];out.push("DECLARE "+name+" = "+value);}else{str=Compiler.DISASSEMBLE_MAP[opcode];var extraParams=Compiler.multiParamSize(opcode);var codes=[];for(var j=0;j<extraParams;j++){nextCode=opcodes[++i];if(typeof nextCode==="string"){nextCode="\""+nextCode.replace("\n","\\n")+"\"";}
codes.push(nextCode);}
str=str+" "+codes.join(" ");out.push(str);}}
return out.join("\n");},guid:0,compile:function(program,options){this.children=[];this.depths={list:[]};this.options=options||{};return this.program(program);},accept:function(node){return this[node.type](node);},program:function(program){var statements=program.statements,statement;this.opcodes=[];for(var i=0,l=statements.length;i<l;i++){statement=statements[i];this[statement.type](statement);}
this.depths.list=this.depths.list.sort(function(a,b){return a-b;});return this;},compileProgram:function(program){var result=new this.compiler().compile(program,this.options);var guid=this.guid++;this.usePartial=this.usePartial||result.usePartial;this.children[guid]=result;for(var i=0,l=result.depths.list.length;i<l;i++){depth=result.depths.list[i];if(depth<2){continue;}
else{this.addDepth(depth-1);}}
return guid;},block:function(block){var mustache=block.mustache;var depth,child,inverse,inverseGuid;var params=this.setupStackForMustache(mustache);var programGuid=this.compileProgram(block.program);if(block.program.inverse){inverseGuid=this.compileProgram(block.program.inverse);this.declare('inverse',inverseGuid);}
this.opcode('invokeProgram',programGuid,params.length);this.declare('inverse',null);this.opcode('append');},inverse:function(block){this.ID(block.mustache.id);var programGuid=this.compileProgram(block.program);this.opcode('invokeInverse',programGuid);this.opcode('append');},hash:function(hash){var pairs=hash.pairs,pair,val;this.opcode('push','{}');for(var i=0,l=pairs.length;i<l;i++){pair=pairs[i];val=pair[1];this.accept(val);this.opcode('assignToHash',pair[0]);}},partial:function(partial){var id=partial.id;this.usePartial=true;if(partial.context){this.ID(partial.context);}else{this.opcode('push','context');}
this.opcode('invokePartial',id.original);this.opcode('append');},content:function(content){this.opcode('appendContent',content.string);},mustache:function(mustache){var params=this.setupStackForMustache(mustache);this.opcode('invokeMustache',params.length,mustache.id.original);if(mustache.escaped){this.opcode('appendEscaped');}else{this.opcode('append');}},ID:function(id){this.addDepth(id.depth);this.opcode('getContext',id.depth);this.opcode('lookupWithHelpers',id.parts[0]||null);for(var i=1,l=id.parts.length;i<l;i++){this.opcode('lookup',id.parts[i]);}},STRING:function(string){this.opcode('pushString',string.string);},INTEGER:function(integer){this.opcode('push',integer.integer);},BOOLEAN:function(boolean){this.opcode('push',boolean.boolean);},comment:function(){},pushParams:function(params){var i=params.length,param;while(i--){param=params[i];if(this.options.stringParams){if(param.depth){this.addDepth(param.depth);}
this.opcode('getContext',param.depth||0);this.opcode('pushStringParam',param.string);}else{this[param.type](param);}}},opcode:function(name,val1,val2){this.opcodes.push(Compiler.OPCODE_MAP[name]);if(val1!==undefined){this.opcodes.push(val1);}
if(val2!==undefined){this.opcodes.push(val2);}},declare:function(name,value){this.opcodes.push('DECLARE');this.opcodes.push(name);this.opcodes.push(value);},addDepth:function(depth){if(depth===0){return;}
if(!this.depths[depth]){this.depths[depth]=true;this.depths.list.push(depth);}},setupStackForMustache:function(mustache){var params=mustache.params;this.pushParams(params);if(mustache.hash){this.hash(mustache.hash);}else{this.opcode('push','{}');}
this.ID(mustache.id);return params;}};JavaScriptCompiler.prototype={nameLookup:function(parent,name,type){if(JavaScriptCompiler.RESERVED_WORDS[name]||name.indexOf('-')!==-1||!isNaN(name)){return parent+"['"+name+"']";}else if(/^[0-9]+$/.test(name)){return parent+"["+name+"]";}else{return parent+"."+name;}},appendToBuffer:function(string){return"buffer = buffer + "+string+";";},initializeBuffer:function(){return this.quotedString("");},compile:function(environment,options){this.environment=environment;this.options=options||{};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.compileChildren(environment,options);Handlebars.log(Handlebars.logger.DEBUG,environment.disassemble()+"\n\n");var opcodes=environment.opcodes,opcode,name,declareName,declareVal;this.i=0;for(l=opcodes.length;this.i<l;this.i++){opcode=this.nextOpcode(0);if(opcode[0]==='DECLARE'){this.i=this.i+2;this[opcode[1]]=opcode[2];}else{this.i=this.i+opcode[1].length;this[opcode[0]].apply(this,opcode[1]);}}
return this.createFunction();},nextOpcode:function(n){var opcodes=this.environment.opcodes,opcode=opcodes[this.i+n],name,val;var extraParams,codes;if(opcode==='DECLARE'){name=opcodes[this.i+1];val=opcodes[this.i+2];return['DECLARE',name,val];}else{name=Compiler.DISASSEMBLE_MAP[opcode];extraParams=Compiler.multiParamSize(opcode);codes=[];for(var j=0;j<extraParams;j++){codes.push(opcodes[this.i+j+1+n]);}
return[name,codes];}},eat:function(opcode){this.i=this.i+opcode.length;},preamble:function(){var out=[];out.push("var buffer = "+this.initializeBuffer()+", currentContext = context");var copies="helpers = helpers || Handlebars.helpers;";if(this.environment.usePartial){copies=copies+" partials = partials || Handlebars.partials;";}
out.push(copies);this.lastContext=0;this.source=out;},createFunction:function(){var container={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(i,helpers,partials,data){var programWrapper=this.programs[i];if(data){return Handlebars.VM.program(this.children[i],helpers,partials,data);}else if(programWrapper){return programWrapper;}else{programWrapper=this.programs[i]=Handlebars.VM.program(this.children[i],helpers,partials);return programWrapper;}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};var locals=this.stackVars.concat(this.registers.list);if(locals.length>0){this.source[0]=this.source[0]+", "+locals.join(", ");}
this.source[0]=this.source[0]+";";this.source.push("return buffer;");var params=["Handlebars","context","helpers","partials"];if(this.options.data){params.push("data");}
for(var i=0,l=this.environment.depths.list.length;i<l;i++){params.push("depth"+this.environment.depths.list[i]);}
if(params.length===4&&!this.environment.usePartial){params.pop();}
params.push(this.source.join("\n"));var fn=Function.apply(this,params);fn.displayName="Handlebars.js";Handlebars.log(Handlebars.logger.DEBUG,fn.toString()+"\n\n");container.render=fn;container.children=this.environment.children;return function(context,options,$depth){try{options=options||{};var args=[Handlebars,context,options.helpers,options.partials,options.data];var depth=Array.prototype.slice.call(arguments,2);args=args.concat(depth);return container.render.apply(container,args);}catch(e){throw e;}};},appendContent:function(content){this.source.push(this.appendToBuffer(this.quotedString(content)));},append:function(){var local=this.popStack();this.source.push("if("+local+" || "+local+" === 0) { "+this.appendToBuffer(local)+" }");},appendEscaped:function(){var opcode=this.nextOpcode(1),extra="";if(opcode[0]==='appendContent'){extra=" + "+this.quotedString(opcode[1][0]);this.eat(opcode);}
this.source.push(this.appendToBuffer("this.escapeExpression("+this.popStack()+")"+extra));},getContext:function(depth){if(this.lastContext!==depth){this.lastContext=depth;if(depth===0){this.source.push("currentContext = context;");}else{this.source.push("currentContext = depth"+depth+";");}}},lookupWithHelpers:function(name){if(name){var topStack=this.nextStack();var toPush="if('"+name+"' in helpers) { "+topStack+" = "+this.nameLookup('helpers',name,'helper')+"; } else { "+topStack+" = "+
this.nameLookup('currentContext',name,'context')+"; }";this.source.push(toPush);}else{this.pushStack("currentContext");}},lookup:function(name){var topStack=this.topStack();this.source.push(topStack+" = "+this.nameLookup(topStack,name,'context')+";");},pushStringParam:function(string){this.pushStack("currentContext");this.pushString(string);},pushString:function(string){this.pushStack(this.quotedString(string));},push:function(name){this.pushStack(name);},invokeMustache:function(paramSize,original){this.populateParams(paramSize,this.quotedString(original),"{}",null,function(nextStack,helperMissingString,id){this.source.push("else if("+id+"=== undefined) { "+nextStack+" = helpers.helperMissing.call("+helperMissingString+"); }");this.source.push("else { "+nextStack+" = "+id+"; }");});},invokeProgram:function(guid,paramSize){var inverse=this.programExpression(this.inverse);var mainProgram=this.programExpression(guid);this.populateParams(paramSize,null,mainProgram,inverse,function(nextStack,helperMissingString,id){this.source.push("else { "+nextStack+" = helpers.blockHelperMissing.call("+helperMissingString+"); }");});},populateParams:function(paramSize,helperId,program,inverse,fn){var id=this.popStack(),nextStack;var params=[],param,stringParam;var hash=this.popStack();this.register('tmp1',program);this.source.push('tmp1.hash = '+hash+';');if(this.options.stringParams){this.source.push('tmp1.contexts = [];');}
for(var i=0;i<paramSize;i++){param=this.popStack();params.push(param);if(this.options.stringParams){this.source.push('tmp1.contexts.push('+this.popStack()+');');}}
if(inverse){this.source.push('tmp1.fn = tmp1;');this.source.push('tmp1.inverse = '+inverse+';');}
if(this.options.data){this.source.push('tmp1.data = data;');}
params.push('tmp1');if(inverse){params.push(inverse);}
this.populateCall(params,id,helperId||id,fn);},populateCall:function(params,id,helperId,fn){var paramString=["context"].concat(params).join(", ");var helperMissingString=["context"].concat(helperId).concat(params).join(", ");nextStack=this.nextStack();this.source.push("if(typeof "+id+" === 'function') { "+nextStack+" = "+id+".call("+paramString+"); }");fn.call(this,nextStack,helperMissingString,id);},invokeInverse:function(guid){var program=this.programExpression(guid);var blockMissingParams=["context",this.topStack(),"this.noop",program];this.pushStack("helpers.blockHelperMissing.call("+blockMissingParams.join(", ")+")");},invokePartial:function(context){this.pushStack("this.invokePartial("+this.nameLookup('partials',context,'partial')+", '"+context+"', "+this.popStack()+", helpers, partials);");},assignToHash:function(key){var value=this.popStack();var hash=this.topStack();this.source.push(hash+"['"+key+"'] = "+value+";");},compiler:JavaScriptCompiler,compileChildren:function(environment,options){var children=environment.children,child,compiler;var compiled=[];for(var i=0,l=children.length;i<l;i++){child=children[i];compiler=new this.compiler();compiled[i]=compiler.compile(child,options);}
environment.rawChildren=children;environment.children=compiled;},programExpression:function(guid){if(guid==null){return"this.noop";}
var programParams=[guid,"helpers","partials"];var depths=this.environment.rawChildren[guid].depths.list;if(this.options.data){programParams.push("data");}
for(var i=0,l=depths.length;i<l;i++){depth=depths[i];if(depth===1){programParams.push("context");}
else{programParams.push("depth"+(depth-1));}}
if(!this.environment.usePartial){if(programParams[3]){programParams[2]="null";}else{programParams.pop();}}
if(depths.length===0){return"this.program("+programParams.join(", ")+")";}else{programParams[0]="this.children["+guid+"]";return"this.programWithDepth("+programParams.join(", ")+")";}},register:function(name,val){this.useRegister(name);this.source.push(name+" = "+val+";");},useRegister:function(name){if(!this.registers[name]){this.registers[name]=true;this.registers.list.push(name);}},pushStack:function(item){this.source.push(this.nextStack()+" = "+item+";");return"stack"+this.stackSlot;},nextStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot);}
return"stack"+this.stackSlot;},popStack:function(){return"stack"+this.stackSlot--;},topStack:function(){return"stack"+this.stackSlot;},quotedString:function(str){return'"'+str.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'\\r')+'"';}};var reservedWords=("break case catch continue default delete do else finally "+"for function if in instanceof new return switch this throw "+"try typeof var void while with null true false").split(" ");compilerWords=JavaScriptCompiler.RESERVED_WORDS={};for(var i=0,l=reservedWords.length;i<l;i++){compilerWords[reservedWords[i]]=true;}})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);Handlebars.VM={programWithDepth:function(fn,helpers,partials,data,$depth){var args=Array.prototype.slice.call(arguments,4);return function(context,options){options=options||{};options={helpers:options.helpers||helpers,partials:options.partials||partials,data:options.data||data};return fn.apply(this,[context,options].concat(args));};},program:function(fn,helpers,partials,data){return function(context,options){options=options||{};return fn(context,{helpers:options.helpers||helpers,partials:options.partials||partials,data:options.data||data});};},noop:function(){return"";},compile:function(string,options){var ast=Handlebars.parse(string);var environment=new Handlebars.Compiler().compile(ast,options);return new Handlebars.JavaScriptCompiler().compile(environment,options);},invokePartial:function(partial,name,context,helpers,partials){if(partial===undefined){throw new Handlebars.Exception("The partial "+name+" could not be found");}else if(partial instanceof Function){return partial(context,{helpers:helpers,partials:partials});}else{partials[name]=Handlebars.VM.compile(partial);return partials[name](context,{helpers:helpers,partials:partials});}}};Handlebars.compile=Handlebars.VM.compile;;
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
(function(){function qa(a,b){a||(a={});for(var c in b)a[c]=b[c];return a}function oa(a,b){return parseInt(a,b||10)}function Kb(a){return typeof a=="string"}function Eb(a){return typeof a=="object"}function ac(a){return typeof a=="number"}function mc(a,b){for(var c=a.length;c--;)if(a[c]==b){a.splice(c,1);break}}function J(a){return a!==Ra&&a!==null}function za(a,b,c){var d,e;if(Kb(b))if(J(c))a.setAttribute(b,c);else{if(a&&a.getAttribute)e=a.getAttribute(b)}else if(J(b)&&Eb(b))for(d in b)a.setAttribute(d,
b[d]);return e}function nc(a){if(!a||a.constructor!=Array)a=[a];return a}function y(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++){c=a[b];if(typeof c!=="undefined"&&c!==null)return c}}function Wd(a){var b="",c;for(c in a)b+=Ad(c)+":"+a[c]+";";return b}function Ia(a,b){if(Ac)if(b&&b.opacity!==Ra)b.filter="alpha(opacity="+b.opacity*100+")";qa(a.style,b)}function fb(a,b,c,d,e){a=Aa.createElement(a);b&&qa(a,b);e&&Ia(a,{padding:0,border:nb,margin:0});c&&Ia(a,c);d&&d.appendChild(a);return a}function bc(a,
b){Bc=y(a,b.animation)}function Bd(){var a=Sa.global.useUTC;Cc=a?Date.UTC:function(b,c,d,e,f,g){return(new Date(b,c,y(d,1),y(e,0),y(f,0),y(g,0))).getTime()};bd=a?"getUTCMinutes":"getMinutes";cd=a?"getUTCHours":"getHours";dd=a?"getUTCDay":"getDay";oc=a?"getUTCDate":"getDate";Dc=a?"getUTCMonth":"getMonth";Ec=a?"getUTCFullYear":"getFullYear";Cd=a?"setUTCMinutes":"setMinutes";Dd=a?"setUTCHours":"setHours";ed=a?"setUTCDate":"setDate";Ed=a?"setUTCMonth":"setMonth";Fd=a?"setUTCFullYear":"setFullYear"}function Fc(a){Gc||
(Gc=fb(Lb));a&&Gc.appendChild(a);Gc.innerHTML=""}function xb(a,b){var c=function(){};c.prototype=new a;qa(c.prototype,b);return c}function Gd(a,b,c,d){var e=Sa.lang;a=a;var f=isNaN(b=cb(b))?2:b;b=c===undefined?e.decimalPoint:c;d=d===undefined?e.thousandsSep:d;e=a<0?"-":"";c=oa(a=cb(+a||0).toFixed(f))+"";var g=(g=c.length)>3?g%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+cb(a-c).toFixed(f).slice(2):"")}function Hc(){}function Hd(a,b){function c(m,h){function x(l,
p){this.pos=l;this.minor=p;this.isNew=true;p||this.addLabel()}function w(l){if(l){this.options=l;this.id=l.id}return this}function O(){var l=[],p=[],r;Ta=u=null;Z=[];t(Ba,function(o){r=false;t(["xAxis","yAxis"],function(la){if(o.isCartesian&&(la=="xAxis"&&ma||la=="yAxis"&&!ma)&&(o.options[la]==h.index||o.options[la]===Ra&&h.index===0)){o[la]=s;Z.push(o);r=true}});if(!o.visible&&v.ignoreHiddenSeries)r=false;if(r){var T,Y,G,B,ia;if(!ma){T=o.options.stacking;Ic=T=="percent";if(T){B=o.type+y(o.options.stack,
"");ia="-"+B;o.stackKey=B;Y=l[B]||[];l[B]=Y;G=p[ia]||[];p[ia]=G}if(Ic){Ta=0;u=99}}if(o.isCartesian){t(o.data,function(la){var C=la.x,na=la.y,S=na<0,$=S?G:Y;S=S?ia:B;if(Ta===null)Ta=u=la[H];if(ma)if(C>u)u=C;else{if(C<Ta)Ta=C}else if(J(na)){if(T)$[C]=J($[C])?$[C]+na:na;na=$?$[C]:na;la=y(la.low,na);if(!Ic)if(na>u)u=na;else if(la<Ta)Ta=la;if(T){ea[S]||(ea[S]={});ea[S][C]={total:na,cum:na}}}});if(/(area|column|bar)/.test(o.type)&&!ma)if(Ta>=0){Ta=0;Id=true}else if(u<0){u=0;Jd=true}}}})}function ja(l,p){var r;
Fb=p?1:Ua.pow(10,ob(Ua.log(l)/Ua.LN10));r=l/Fb;if(!p){p=[1,2,2.5,5,10];if(h.allowDecimals===false)if(Fb==1)p=[1,2,5,10];else if(Fb<=0.1)p=[1/Fb]}for(var o=0;o<p.length;o++){l=p[o];if(r<=(p[o]+(p[o+1]||p[o]))/2)break}l*=Fb;return l}function L(l){var p;p=l;if(J(Fb)){p=(Fb<1?fa(1/Fb):1)*10;p=fa(l*p)/p}return p}function ga(){var l,p,r,o,T=h.tickInterval,Y=h.tickPixelInterval;l=h.maxZoom||(ma?pb(m.smallestInterval*5,u-Ta):null);A=M?wa:sa;if(Mb){r=m[ma?"xAxis":"yAxis"][h.linkedTo];o=r.getExtremes();K=y(o.min,
o.dataMin);P=y(o.max,o.dataMax)}else{K=y(pa,h.min,Ta);P=y(Na,h.max,u)}if(P-K<l){o=(l-P+K)/2;K=Ca(K-o,y(h.min,K-o),Ta);P=pb(K+l,y(h.max,K+l),u)}if(!Va&&!Ic&&!Mb&&J(K)&&J(P)){l=P-K||1;if(!J(h.min)&&!J(pa)&&Vb&&(Ta<0||!Id))K-=l*Vb;if(!J(h.max)&&!J(Na)&&Kd&&(u>0||!Jd))P+=l*Kd}Wa=K==P?1:Mb&&!T&&Y==r.options.tickPixelInterval?r.tickInterval:y(T,Va?1:(P-K)*Y/A);if(!N&&!J(h.tickInterval))Wa=ja(Wa);s.tickInterval=Wa;Jc=h.minorTickInterval==="auto"&&Wa?Wa/5:h.minorTickInterval;if(N){ra=[];T=Sa.global.useUTC;
var G=1E3/qb,B=6E4/qb,ia=36E5/qb;Y=864E5/qb;l=6048E5/qb;o=2592E6/qb;var la=31556952E3/qb,C=[["second",G,[1,2,5,10,15,30]],["minute",B,[1,2,5,10,15,30]],["hour",ia,[1,2,3,4,6,8,12]],["day",Y,[1,2]],["week",l,[1,2]],["month",o,[1,2,3,4,6]],["year",la,null]],na=C[6],S=na[1],$=na[2];for(r=0;r<C.length;r++){na=C[r];S=na[1];$=na[2];if(C[r+1])if(Wa<=(S*$[$.length-1]+C[r+1][1])/2)break}if(S==la&&Wa<5*S)$=[1,2,5];C=ja(Wa/S,$);$=new Date(K*qb);$.setMilliseconds(0);if(S>=G)$.setSeconds(S>=B?0:C*ob($.getSeconds()/
C));if(S>=B)$[Cd](S>=ia?0:C*ob($[bd]()/C));if(S>=ia)$[Dd](S>=Y?0:C*ob($[cd]()/C));if(S>=Y)$[ed](S>=o?1:C*ob($[oc]()/C));if(S>=o){$[Ed](S>=la?0:C*ob($[Dc]()/C));p=$[Ec]()}if(S>=la){p-=p%C;$[Fd](p)}S==l&&$[ed]($[oc]()-$[dd]()+h.startOfWeek);r=1;p=$[Ec]();G=$.getTime()/qb;B=$[Dc]();for(ia=$[oc]();G<P&&r<wa;){ra.push(G);if(S==la)G=Cc(p+r*C,0)/qb;else if(S==o)G=Cc(p,B+r*C)/qb;else if(!T&&(S==Y||S==l))G=Cc(p,B,ia+r*C*(S==Y?1:7));else G+=S*C;r++}ra.push(G);Kc=h.dateTimeLabelFormats[na[0]]}else{r=ob(K/Wa)*
Wa;p=fd(P/Wa)*Wa;ra=[];for(r=L(r);r<=p;){ra.push(r);r=L(r+Wa)}}if(!Mb){if(Va||ma&&m.hasColumn){p=(Va?1:Wa)*0.5;if(Va||!J(y(h.min,pa)))K-=p;if(Va||!J(y(h.max,Na)))P+=p}p=ra[0];r=ra[ra.length-1];if(h.startOnTick)K=p;else K>p&&ra.shift();if(h.endOnTick)P=r;else P<r&&ra.pop();Gb||(Gb={x:0,y:0});if(!N&&ra.length>Gb[H])Gb[H]=ra.length}}function Ea(){var l,p;gb=K;cc=P;O();ga();ha=D;D=A/(P-K||1);if(!ma)for(l in ea)for(p in ea[l])ea[l][p].cum=ea[l][p].total;if(!s.isDirty)s.isDirty=K!=gb||P!=cc}function ua(l){l=
(new w(l)).render();Nb.push(l);return l}function bb(){var l=h.title,p=h.alternateGridColor,r=h.lineWidth,o,T,Y=m.hasRendered,G=Y&&J(gb)&&!isNaN(gb);o=Z.length&&J(K)&&J(P);A=M?wa:sa;D=A/(P-K||1);xa=M?V:rb;if(o||Mb){if(Jc&&!Va)for(o=K+(ra[0]-K)%Jc;o<=P;o+=Jc){Wb[o]||(Wb[o]=new x(o,true));G&&Wb[o].isNew&&Wb[o].render(null,true);Wb[o].isActive=true;Wb[o].render()}t(ra,function(B,ia){if(!Mb||B>=K&&B<=P){G&&sb[B].isNew&&sb[B].render(ia,true);sb[B].isActive=true;sb[B].render(ia)}});p&&t(ra,function(B,ia){if(ia%
2===0&&B<P){dc[B]||(dc[B]=new w);dc[B].options={from:B,to:ra[ia+1]!==Ra?ra[ia+1]:P,color:p};dc[B].render();dc[B].isActive=true}});Y||t((h.plotLines||[]).concat(h.plotBands||[]),function(B){Nb.push((new w(B)).render())})}t([sb,Wb,dc],function(B){for(var ia in B)if(B[ia].isActive)B[ia].isActive=false;else{B[ia].destroy();delete B[ia]}});if(r){o=V+(Oa?wa:0)+Q;T=Pa-rb-(Oa?sa:0)+Q;o=aa.crispLine([Za,M?V:o,M?T:ba,Da,M?Xa-Ab:o,M?T:Pa-rb],r);if(Fa)Fa.animate({d:o});else Fa=aa.path(o).attr({stroke:h.lineColor,
"stroke-width":r,zIndex:7}).add()}if(s.axisTitle){o=M?V:ba;r=oa(l.style.fontSize||12);o={low:o+(M?0:A),middle:o+A/2,high:o+(M?A:0)}[l.align];r=(M?ba+sa:V)+(M?1:-1)*(Oa?-1:1)*gd+(E==2?r:0);s.axisTitle[Y?"animate":"attr"]({x:M?o:r+(Oa?wa:0)+Q+(l.x||0),y:M?r-(Oa?sa:0)+Q:o+(l.y||0)})}s.isDirty=false}function Ja(l){for(var p=Nb.length;p--;)Nb[p].id==l&&Nb[p].destroy()}var ma=h.isX,Oa=h.opposite,M=Ga?!ma:ma,E=M?Oa?0:2:Oa?1:3,ea={};h=ya(ma?Lc:hd,[Xd,Yd,Ld,Zd][E],h);var s=this,N=h.type=="datetime",Q=h.offset||
0,H=ma?"x":"y",A,D,ha,xa=M?V:rb,va,Ka,tb,Hb,Fa,Ta,u,Z,pa,Na,P=null,K=null,gb,cc,Vb=h.minPadding,Kd=h.maxPadding,Mb=J(h.linkedTo),Id,Jd,Ic,Md=h.events,id,Nb=[],Wa,Jc,Fb,ra,sb={},Wb={},dc={},ec,fc,gd,Kc,Va=h.categories,$d=h.labels.formatter||function(){var l=this.value;return Kc?Mc(Kc,l):Wa%1E6===0?l/1E6+"M":Wa%1E3===0?l/1E3+"k":!Va&&l>=1E3?Gd(l,0):l},Nc=M&&h.labels.staggerLines,Xb=h.reversed,Yb=Va&&h.tickmarkPlacement=="between"?0.5:0;x.prototype={addLabel:function(){var l=this.pos,p=h.labels,r=!(l==
K&&!y(h.showFirstLabel,1)||l==P&&!y(h.showLastLabel,0)),o=Va&&M&&Va.length&&!p.step&&!p.staggerLines&&!p.rotation&&wa/Va.length||!M&&wa/2,T=this.label;l=$d.call({isFirst:l==ra[0],isLast:l==ra[ra.length-1],dateTimeLabelFormat:Kc,value:Va&&Va[l]?Va[l]:l});o=o&&{width:o-2*(p.padding||10)+$a};o=qa(o,p.style);if(T===Ra)this.label=J(l)&&r&&p.enabled?aa.text(l,0,0).attr({align:p.align,rotation:p.rotation}).css(o).add(tb):null;else T&&T.attr({text:l}).css(o)},getLabelSize:function(){var l=this.label;return l?
(this.labelBBox=l.getBBox())[M?"height":"width"]:0},render:function(l,p){var r=!this.minor,o=this.label,T=this.pos,Y=h.labels,G=this.gridLine,B=r?h.gridLineWidth:h.minorGridLineWidth,ia=r?h.gridLineColor:h.minorGridLineColor,la=r?h.gridLineDashStyle:h.minorGridLineDashStyle,C=this.mark,na=r?h.tickLength:h.minorTickLength,S=r?h.tickWidth:h.minorTickWidth||0,$=r?h.tickColor:h.minorTickColor,pc=r?h.tickPosition:h.minorTickPosition;r=Y.step;var hb=p&&Oc||Pa,Ob;Ob=M?va(T+Yb,null,null,p)+xa:V+Q+(Oa?(p&&
jd||Xa)-Ab-V:0);hb=M?hb-rb+Q-(Oa?sa:0):hb-va(T+Yb,null,null,p)-xa;if(B){T=Ka(T+Yb,B,p);if(G===Ra){G={stroke:ia,"stroke-width":B};if(la)G.dashstyle=la;this.gridLine=G=B?aa.path(T).attr(G).add(Hb):null}G&&T&&G.animate({d:T})}if(S){if(pc=="inside")na=-na;if(Oa)na=-na;B=aa.crispLine([Za,Ob,hb,Da,Ob+(M?0:-na),hb+(M?na:0)],S);if(C)C.animate({d:B});else this.mark=aa.path(B).attr({stroke:$,"stroke-width":S}).add(tb)}if(o){Ob=Ob+Y.x-(Yb&&M?Yb*D*(Xb?-1:1):0);hb=hb+Y.y-(Yb&&!M?Yb*D*(Xb?1:-1):0);J(Y.y)||(hb+=
parseInt(o.styles.lineHeight)*0.9-o.getBBox().height/2);if(Nc)hb+=l%Nc*16;if(r)o[l%r?"hide":"show"]();o[this.isNew?"attr":"animate"]({x:Ob,y:hb})}this.isNew=false},destroy:function(){for(var l in this)this[l]&&this[l].destroy&&this[l].destroy()}};w.prototype={render:function(){var l=this,p=l.options,r=p.label,o=l.label,T=p.width,Y=p.to,G,B=p.from,ia=p.dashStyle,la=l.svgElem,C=[],na,S,$=p.color;S=p.zIndex;var pc=p.events;if(T){C=Ka(p.value,T);p={stroke:$,"stroke-width":T};if(ia)p.dashstyle=ia}else if(J(B)&&
J(Y)){B=Ca(B,K);Y=pb(Y,P);G=Ka(Y);if((C=Ka(B))&&G)C.push(G[4],G[5],G[1],G[2]);else C=null;p={fill:$}}else return;if(J(S))p.zIndex=S;if(la)if(C)la.animate({d:C},null,la.onGetPath);else{la.hide();la.onGetPath=function(){la.show()}}else if(C&&C.length){l.svgElem=la=aa.path(C).attr(p).add();if(pc){ia=function(hb){la.on(hb,function(Ob){pc[hb].apply(l,[Ob])})};for(na in pc)ia(na)}}if(r&&J(r.text)&&C&&C.length&&wa>0&&sa>0){r=ya({align:M&&G&&"center",x:M?!G&&4:10,verticalAlign:!M&&G&&"middle",y:M?G?16:10:
G?6:-4,rotation:M&&!G&&90},r);if(!o)l.label=o=aa.text(r.text,0,0).attr({align:r.textAlign||r.align,rotation:r.rotation,zIndex:S}).css(r.style).add();G=[C[1],C[4],C[6]||C[1]];C=[C[2],C[5],C[7]||C[2]];na=pb.apply(Ua,G);S=pb.apply(Ua,C);o.align(r,false,{x:na,y:S,width:Ca.apply(Ua,G)-na,height:Ca.apply(Ua,C)-S});o.show()}else o&&o.hide();return l},destroy:function(){for(var l in this){this[l]&&this[l].destroy&&this[l].destroy();delete this[l]}mc(Nb,this)}};va=function(l,p,r,o){var T=1,Y=0,G=o?ha:D;o=
o?gb:K;G||(G=D);if(r){T*=-1;Y=A}if(Xb){T*=-1;Y-=T*A}if(p){if(Xb)l=A-l;l=l/G+o}else l=T*(l-o)*G+Y;return l};Ka=function(l,p,r){var o,T,Y;l=va(l,null,null,r);var G=r&&Oc||Pa,B=r&&jd||Xa,ia;r=T=fa(l+xa);o=Y=fa(G-l-xa);if(isNaN(l))ia=true;else if(M){o=ba;Y=G-rb;if(r<V||r>V+wa)ia=true}else{r=V;T=B-Ab;if(o<ba||o>ba+sa)ia=true}return ia?null:aa.crispLine([Za,r,o,Da,T,Y],p||0)};if(Ga&&ma&&Xb===Ra)Xb=true;qa(s,{addPlotBand:ua,addPlotLine:ua,adjustTickAmount:function(){if(Gb&&!N&&!Va&&!Mb){var l=ec,p=ra.length;
ec=Gb[H];if(p<ec){for(;ra.length<ec;)ra.push(L(ra[ra.length-1]+Wa));D*=(p-1)/(ec-1);P=ra[ra.length-1]}if(J(l)&&ec!=l)s.isDirty=true}},categories:Va,getExtremes:function(){return{min:K,max:P,dataMin:Ta,dataMax:u}},getPlotLinePath:Ka,getThreshold:function(l){if(K>l)l=K;else if(P<l)l=P;return va(l,0,1)},isXAxis:ma,options:h,plotLinesAndBands:Nb,getOffset:function(){var l=Z.length&&J(K)&&J(P),p=0,r=0,o=h.title,T=h.labels,Y=[-1,1,1,-1][E];if(!tb){tb=aa.g("axis").attr({zIndex:7}).add();Hb=aa.g("grid").attr({zIndex:1}).add()}fc=
0;if(l||Mb){t(ra,function(B){if(sb[B])sb[B].addLabel();else sb[B]=new x(B);if(E===0||E==2||{1:"left",3:"right"}[E]==T.align)fc=Ca(sb[B].getLabelSize(),fc)});if(Nc)fc+=(Nc-1)*16}else for(var G in sb){sb[G].destroy();delete sb[G]}if(o&&o.text){if(!s.axisTitle)s.axisTitle=aa.text(o.text,0,0).attr({zIndex:7,rotation:o.rotation||0,align:o.textAlign||{low:"left",middle:"center",high:"right"}[o.align]}).css(o.style).add();p=s.axisTitle.getBBox()[M?"height":"width"];r=y(o.margin,M?5:10)}Q=Y*(h.offset||Pb[E]);
gd=fc+(E!=2&&fc&&Y*h.labels[M?"y":"x"])+r;Pb[E]=Ca(Pb[E],gd+p+Y*Q)},render:bb,setCategories:function(l,p){s.categories=Va=l;t(Z,function(r){r.translate();r.setTooltipPoints(true)});s.isDirty=true;y(p,true)&&m.redraw()},setExtremes:function(l,p,r,o){r=y(r,true);La(s,"setExtremes",{min:l,max:p},function(){pa=l;Na=p;r&&m.redraw(o)})},setScale:Ea,setTickPositions:ga,translate:va,redraw:function(){gc.resetTracker&&gc.resetTracker();bb();t(Nb,function(l){l.render()});t(Z,function(l){l.isDirty=true})},removePlotBand:Ja,
removePlotLine:Ja,reversed:Xb,stacks:ea});for(id in Md)Qa(s,id,Md[id]);Ea()}function d(){var m={};return{add:function(h,x,w,O){if(!m[h]){x=aa.text(x,0,0).css(a.toolbar.itemStyle).align({align:"right",x:-Ab-20,y:ba+30}).on("click",O).attr({align:"right",zIndex:20}).add();m[h]=x}},remove:function(h){Fc(m[h].element);m[h]=null}}}function e(m){function h(){var H=this.points||nc(this),A=H[0].series.xAxis,D=this.x;A=A&&A.options.type=="datetime";var ha=Kb(D)||A,xa;xa=ha?['<span style="font-size: 10px">',
A?Mc("%A, %b %e, %Y",D):D,"</span><br/>"]:[];t(H,function(va){xa.push(va.point.tooltipFormatter(ha))});return xa.join("")}function x(H,A){E=ma?H:(2*E+H)/3;ea=ma?A:(ea+A)/2;s.translate(E,ea);kd=cb(H-E)>1||cb(A-ea)>1?function(){x(H,A)}:null}function w(){if(!ma){var H=q.hoverPoints;s.hide();t(ga,function(A){A&&A.hide()});H&&t(H,function(A){A.setState()});q.hoverPoints=null;ma=true}}var O,ja=m.borderWidth,L=m.crosshairs,ga=[],Ea=m.style,ua=m.shared,bb=oa(Ea.padding),Ja=ja+bb,ma=true,Oa,M,E=0,ea=0;Ea.padding=
0;var s=aa.g("tooltip").attr({zIndex:8}).add(),N=aa.rect(Ja,Ja,0,0,m.borderRadius,ja).attr({fill:m.backgroundColor,"stroke-width":ja}).add(s).shadow(m.shadow),Q=aa.text("",bb+Ja,oa(Ea.fontSize)+bb+Ja).attr({zIndex:1}).css(Ea).add(s);s.hide();return{shared:ua,refresh:function(H){var A,D,ha,xa=0,va={},Ka=[];ha=H.tooltipPos;A=m.formatter||h;va=q.hoverPoints;var tb=function(Fa){return{series:Fa.series,point:Fa,x:Fa.category,y:Fa.y,percentage:Fa.percentage,total:Fa.total||Fa.stackTotal}};if(ua){va&&t(va,
function(Fa){Fa.setState()});q.hoverPoints=H;t(H,function(Fa){Fa.setState(yb);xa+=Fa.plotY;Ka.push(tb(Fa))});D=H[0].plotX;xa=fa(xa)/H.length;va={x:H[0].category};va.points=Ka;H=H[0]}else va=tb(H);va=A.call(va);O=H.series;D=ua?D:H.plotX;xa=ua?xa:H.plotY;A=fa(ha?ha[0]:Ga?wa-xa:D);D=fa(ha?ha[1]:Ga?sa-D:xa);ha=ua||!H.series.isCartesian||hc(A,D);if(va===false||!ha)w();else{if(ma){s.show();ma=false}Q.attr({text:va});ha=Q.getBBox();Oa=ha.width+2*bb;M=ha.height+2*bb;N.attr({width:Oa,height:M,stroke:m.borderColor||
H.color||O.color||"#606060"});A=A-Oa+V-25;D=D-M+ba+10;if(A<7){A=7;D-=30}if(D<5)D=5;else if(D+M>Pa)D=Pa-M-5;x(fa(A-Ja),fa(D-Ja))}if(L){L=nc(L);D=L.length;for(var Hb;D--;)if(L[D]&&(Hb=H.series[D?"yAxis":"xAxis"])){A=Hb.getPlotLinePath(H[D?"y":"x"],1);if(ga[D])ga[D].attr({d:A,visibility:Bb});else{ha={"stroke-width":L[D].width||1,stroke:L[D].color||"#C0C0C0",zIndex:2};if(L[D].dashStyle)ha.dashstyle=L[D].dashStyle;ga[D]=aa.path(A).attr(ha).add()}}}},hide:w}}function f(m,h){function x(E){var ea;E=E||ib.event;
if(!E.target)E.target=E.srcElement;ea=E.touches?E.touches.item(0):E;if(E.type!="mousemove"||ib.opera){for(var s=ta,N={left:s.offsetLeft,top:s.offsetTop};s=s.offsetParent;){N.left+=s.offsetLeft;N.top+=s.offsetTop;if(s!=Aa.body&&s!=Aa.documentElement){N.left-=s.scrollLeft;N.top-=s.scrollTop}}qc=N}if(Ac){E.chartX=E.x;E.chartY=E.y}else if(ea.layerX===Ra){E.chartX=ea.pageX-qc.left;E.chartY=ea.pageY-qc.top}else{E.chartX=E.layerX;E.chartY=E.layerY}return E}function w(E){var ea={xAxis:[],yAxis:[]};t(ab,function(s){var N=
s.translate,Q=s.isXAxis;ea[Q?"xAxis":"yAxis"].push({axis:s,value:N((Ga?!Q:Q)?E.chartX-V:sa-E.chartY+ba,true)})});return ea}function O(){var E=m.hoverSeries,ea=m.hoverPoint;ea&&ea.onMouseOut();E&&E.onMouseOut();rc&&rc.hide();ld=null}function ja(){if(ua){var E={xAxis:[],yAxis:[]},ea=ua.getBBox(),s=ea.x-V,N=ea.y-ba;if(Ea){t(ab,function(Q){var H=Q.translate,A=Q.isXAxis,D=Ga?!A:A,ha=H(D?s:sa-N-ea.height,true);H=H(D?s+ea.width:sa-N,true);E[A?"xAxis":"yAxis"].push({axis:Q,min:pb(ha,H),max:Ca(ha,H)})});La(m,
"selection",E,md)}ua=ua.destroy()}m.mouseIsDown=nd=Ea=false;Cb(Aa,Ib?"touchend":"mouseup",ja)}var L,ga,Ea,ua,bb=v.zoomType,Ja=/x/.test(bb),ma=/y/.test(bb),Oa=Ja&&!Ga||ma&&Ga,M=ma&&!Ga||Ja&&Ga;Pc=function(){if(Qc){Qc.translate(V,ba);Ga&&Qc.attr({width:m.plotWidth,height:m.plotHeight}).invert()}else m.trackerGroup=Qc=aa.g("tracker").attr({zIndex:9}).add()};Pc();if(h.enabled)m.tooltip=rc=e(h);(function(){var E=true;ta.onmousedown=function(s){s=x(s);m.mouseIsDown=nd=true;L=s.chartX;ga=s.chartY;Qa(Aa,
Ib?"touchend":"mouseup",ja)};var ea=function(s){if(!(s&&s.touches&&s.touches.length>1)){s=x(s);if(!Ib)s.returnValue=false;var N=s.chartX,Q=s.chartY,H=!hc(N-V,Q-ba);if(Ib&&s.type=="touchstart")if(za(s.target,"isTracker"))m.runTrackerClick||s.preventDefault();else!ae&&!H&&s.preventDefault();if(H){E||O();if(N<V)N=V;else if(N>V+wa)N=V+wa;if(Q<ba)Q=ba;else if(Q>ba+sa)Q=ba+sa}if(nd&&s.type!="touchstart"){if(Ea=Math.sqrt(Math.pow(L-N,2)+Math.pow(ga-Q,2))>10){if(ic&&(Ja||ma)&&hc(L-V,ga-ba))ua||(ua=aa.rect(V,
ba,Oa?1:wa,M?1:sa,0).attr({fill:"rgba(69,114,167,0.25)",zIndex:7}).add());if(ua&&Oa){N=N-L;ua.attr({width:cb(N),x:(N>0?0:N)+L})}if(ua&&M){Q=Q-ga;ua.attr({height:cb(Q),y:(Q>0?0:Q)+ga})}}}else if(!H){var A;Q=m.hoverPoint;N=m.hoverSeries;var D,ha,xa=Xa,va=Ga?s.chartY:s.chartX-V;if(rc&&h.shared){A=[];D=Ba.length;for(ha=0;ha<D;ha++)if(Ba[ha].visible&&Ba[ha].tooltipPoints.length){s=Ba[ha].tooltipPoints[va];s._dist=cb(va-s.plotX);xa=pb(xa,s._dist);A.push(s)}for(D=A.length;D--;)A[D]._dist>xa&&A.splice(D,
1);if(A.length&&A[0].plotX!=ld){rc.refresh(A);ld=A[0].plotX}}if(N&&N.tracker)(s=N.tooltipPoints[va])&&s!=Q&&s.onMouseOver()}return(E=H)||!ic}};ta.onmousemove=ea;Qa(ta,"mouseleave",O);ta.ontouchstart=function(s){if(Ja||ma)ta.onmousedown(s);ea(s)};ta.ontouchmove=ea;ta.ontouchend=function(){Ea&&O()};ta.onclick=function(s){var N=m.hoverPoint;s=x(s);s.cancelBubble=true;if(!Ea)if(N&&za(s.target,"isTracker")){var Q=N.plotX,H=N.plotY;qa(N,{pageX:qc.left+V+(Ga?wa-H:Q),pageY:qc.top+ba+(Ga?sa-Q:H)});La(N.series,
"click",qa(s,{point:N}));N.firePointEvent("click",s)}else{qa(s,w(s));hc(s.chartX-V,s.chartY-ba)&&La(m,"click",s)}Ea=false}})();Nd=setInterval(function(){kd&&kd()},32);qa(this,{zoomX:Ja,zoomY:ma,resetTracker:O})}function g(m){var h=m.type||v.type||v.defaultSeriesType,x=ub[h],w=q.hasRendered;if(w)if(Ga&&h=="column")x=ub.bar;else if(!Ga&&h=="bar")x=ub.column;h=new x;h.init(q,m);if(!w&&h.inverted)Ga=true;if(h.isCartesian)ic=h.isCartesian;Ba.push(h);return h}function i(){v.alignTicks!==false&&t(ab,function(m){m.adjustTickAmount()});
Gb=null}function k(m){var h=q.isDirtyLegend,x,w=q.isDirtyBox,O=Ba.length,ja=O,L=q.clipRect;for(bc(m,q);ja--;){m=Ba[ja];if(m.isDirty&&m.options.stacking){x=true;break}}if(x)for(ja=O;ja--;){m=Ba[ja];if(m.options.stacking)m.isDirty=true}t(Ba,function(ga){if(ga.isDirty){ga.cleanData();ga.getSegments();if(ga.options.legendType=="point")h=true}});if(h&&od.renderLegend){od.renderLegend();q.isDirtyLegend=false}if(ic){if(!Rc){Gb=null;t(ab,function(ga){ga.setScale()})}i();sc();t(ab,function(ga){if(ga.isDirty||
w){ga.redraw();w=true}})}if(w){pd();Pc();if(L){Sc(L);L.animate({width:q.plotSizeX,height:q.plotSizeY})}}t(Ba,function(ga){if(ga.isDirty&&ga.visible&&(!ga.isCartesian||ga.xAxis))ga.redraw()});gc&&gc.resetTracker&&gc.resetTracker();La(q,"redraw")}function j(){var m=a.xAxis||{},h=a.yAxis||{},x;m=nc(m);t(m,function(w,O){w.index=O;w.isX=true});h=nc(h);t(h,function(w,O){w.index=O});ab=m.concat(h);q.xAxis=[];q.yAxis=[];ab=jc(ab,function(w){x=new c(q,w);q[x.isXAxis?"xAxis":"yAxis"].push(x);return x});i()}
function n(m,h){kc=ya(a.title,m);tc=ya(a.subtitle,h);t([["title",m,kc],["subtitle",h,tc]],function(x){var w=x[0],O=q[w],ja=x[1];x=x[2];if(O&&ja){O.destroy();O=null}if(x&&x.text&&!O)q[w]=aa.text(x.text,0,0).attr({align:x.align,"class":"highcharts-"+w,zIndex:1}).css(x.style).add().align(x,false,uc)})}function z(){jb=v.renderTo;Od=Zb+qd++;if(Kb(jb))jb=Aa.getElementById(jb);jb.innerHTML="";if(!jb.offsetWidth){Qb=jb.cloneNode(0);Ia(Qb,{position:lc,top:"-9999px",display:""});Aa.body.appendChild(Qb)}Tc=
(Qb||jb).offsetWidth;vc=(Qb||jb).offsetHeight;q.chartWidth=Xa=v.width||Tc||600;q.chartHeight=Pa=v.height||(vc>19?vc:400);q.container=ta=fb(Lb,{className:"highcharts-container"+(v.className?" "+v.className:""),id:Od},qa({position:Pd,overflow:vb,width:Xa+$a,height:Pa+$a,textAlign:"left"},v.style),Qb||jb);q.renderer=aa=v.forExport?new Uc(ta,Xa,Pa,true):new Qd(ta,Xa,Pa);var m,h;if(Rd&&ta.getBoundingClientRect){m=function(){Ia(ta,{left:0,top:0});h=ta.getBoundingClientRect();Ia(ta,{left:-h.left%1+$a,top:-h.top%
1+$a})};m();Qa(ib,"resize",m);Qa(q,"destroy",function(){Cb(ib,"resize",m)})}}function F(){function m(){var x=v.width||jb.offsetWidth,w=v.height||jb.offsetHeight;if(x&&w){if(x!=Tc||w!=vc){clearTimeout(h);h=setTimeout(function(){rd(x,w,false)},100)}Tc=x;vc=w}}var h;Qa(window,"resize",m);Qa(q,"destroy",function(){Cb(window,"resize",m)})}function W(){var m=a.labels,h=a.credits,x;n();od=q.legend=new be(q);sc();t(ab,function(w){w.setTickPositions(true)});i();sc();pd();ic&&t(ab,function(w){w.render()});
if(!q.seriesGroup)q.seriesGroup=aa.g("series-group").attr({zIndex:3}).add();t(Ba,function(w){w.translate();w.setTooltipPoints();w.render()});m.items&&t(m.items,function(){var w=qa(m.style,this.style),O=oa(w.left)+V,ja=oa(w.top)+ba+12;delete w.left;delete w.top;aa.text(this.html,O,ja).attr({zIndex:2}).css(w).add()});if(!q.toolbar)q.toolbar=d(q);if(h.enabled&&!q.credits){x=h.href;aa.text(h.text,0,0).on("click",function(){if(x)location.href=x}).attr({align:h.position.align,zIndex:8}).css(h.style).add().align(h.position)}Pc();
q.hasRendered=true;if(Qb){jb.appendChild(ta);Fc(Qb)}}function ca(){var m=Ba.length,h=ta&&ta.parentNode;La(q,"destroy");Cb(ib,"unload",ca);Cb(q);for(t(ab,function(x){Cb(x)});m--;)Ba[m].destroy();if(ta){ta.innerHTML="";Cb(ta);h&&h.removeChild(ta);ta=null}if(aa)aa.alignedObjects=null;clearInterval(Nd);for(m in q)delete q[m]}function ka(){if(!wc&&ib==ib.top&&Aa.readyState!="complete")Aa.attachEvent("onreadystatechange",function(){Aa.detachEvent("onreadystatechange",ka);ka()});else{z();sd();td();t(a.series||
[],function(m){g(m)});q.inverted=Ga=y(Ga,a.chart.inverted);j();q.render=W;q.tracker=gc=new f(q,a.tooltip);W();La(q,"load");b&&b.apply(q,[q]);t(q.callbacks,function(m){m.apply(q,[q])})}}Lc=ya(Lc,Sa.xAxis);hd=ya(hd,Sa.yAxis);Sa.xAxis=Sa.yAxis=null;a=ya(Sa,a);var v=a.chart,I=v.margin;I=Eb(I)?I:[I,I,I,I];var da=y(v.marginTop,I[0]),X=y(v.marginRight,I[1]),U=y(v.marginBottom,I[2]),R=y(v.marginLeft,I[3]),Ha=v.spacingTop,Ya=v.spacingRight,ud=v.spacingBottom,Vc=v.spacingLeft,uc,kc,tc,ba,Ab,rb,V,Pb,jb,Qb,ta,
Od,Tc,vc,Xa,Pa,jd,Oc,Wc,vd,wd,Xc,q=this,ae=(I=v.events)&&!!I.click,xd,hc,rc,nd,$b,Sd,yd,sa,wa,gc,Qc,Pc,od,Rb,Sb,qc,ic=v.showAxes,Rc=0,ab=[],Gb,Ba=[],Ga,aa,kd,Nd,ld,pd,sc,sd,td,rd,md,Td,be=function(m){function h(u,Z){var pa=u.legendItem,Na=u.legendLine,P=u.legendSymbol,K=M.color,gb=Z?L.itemStyle.color:K;K=Z?u.color:K;pa&&pa.css({fill:gb});Na&&Na.attr({stroke:K});P&&P.attr({stroke:K,fill:K})}function x(u,Z,pa){var Na=u.legendItem,P=u.legendLine,K=u.legendSymbol;u=u.checkbox;Na&&Na.attr({x:Z,y:pa});
P&&P.translate(Z,pa-4);K&&K.attr({x:Z+K.xOff,y:pa+K.yOff});if(u){u.x=Z;u.y=pa}}function w(){t(bb,function(u){var Z=u.checkbox;Z&&Ia(Z,{left:Ka.attr("translateX")+u.legendItemWidth+Z.x-40+$a,top:Ka.attr("translateY")+Z.y-11+$a})})}function O(u){var Z,pa,Na,P,K,gb=u.legendItem;P=u.series||u;if(!gb){K=/^(bar|pie|area|column)$/.test(P.type);u.legendItem=gb=aa.text(L.labelFormatter.call(u),0,0).css(u.visible?ma:M).on("mouseover",function(){u.setState(yb);gb.css(Oa)}).on("mouseout",function(){gb.css(u.visible?
ma:M);u.setState()}).on("click",function(){var Vb=function(){u.setVisible()};u.firePointEvent?u.firePointEvent("legendItemClick",null,Vb):La(u,"legendItemClick",null,Vb)}).attr({zIndex:2}).add(Ka);if(!K&&u.options&&u.options.lineWidth){var cc=u.options;P={"stroke-width":cc.lineWidth,zIndex:2};if(cc.dashStyle)P.dashstyle=cc.dashStyle;u.legendLine=aa.path([Za,-Ea-ua,0,Da,-ua,0]).attr(P).add(Ka)}if(K)Z=aa.rect(pa=-Ea-ua,Na=-11,Ea,12,2).attr({"stroke-width":0,zIndex:3}).add(Ka);else if(u.options&&u.options.marker&&
u.options.marker.enabled)Z=aa.symbol(u.symbol,pa=-Ea/2-ua,Na=-4,u.options.marker.radius).attr(u.pointAttr[db]).attr({zIndex:3}).add(Ka);if(Z){Z.xOff=pa;Z.yOff=Na}u.legendSymbol=Z;h(u,u.visible);if(u.options&&u.options.showCheckbox){u.checkbox=fb("input",{type:"checkbox",checked:u.selected,defaultChecked:u.selected},L.itemCheckboxStyle,ta);Qa(u.checkbox,"click",function(Vb){La(u,"checkboxClick",{checked:Vb.target.checked},function(){u.select()})})}}Z=gb.getBBox();pa=u.legendItemWidth=L.itemWidth||
Ea+ua+Z.width+ea;D=Z.height;if(ga&&Q-N+pa>(Hb||Xa-2*E-N)){Q=N;H+=D}A=H;x(u,Q,H);if(ga)Q+=pa;else H+=D;tb=Hb||Ca(ga?Q-N:pa,tb);bb.push(u)}function ja(){Q=N;H=s;A=tb=0;bb=[];Ka||(Ka=aa.g("legend").attr({zIndex:7}).add());Ta&&Fa.reverse();t(Fa,function(Na){if(Na.options.showInLegend)t(Na.options.legendType=="point"?Na.data:[Na],O)});Ta&&Fa.reverse();Rb=Hb||tb;Sb=A-s+D;if(xa||va){Rb+=2*E;Sb+=2*E;if(ha)Rb>0&&Sb>0&&ha.animate(ha.crisp(null,null,null,Rb,Sb));else ha=aa.rect(0,0,Rb,Sb,L.borderRadius,xa||
0).attr({stroke:L.borderColor,"stroke-width":xa||0,fill:va||nb}).add(Ka).shadow(L.shadow);ha[bb.length?"show":"hide"]()}for(var u=["left","right","top","bottom"],Z,pa=4;pa--;){Z=u[pa];if(Ja[Z]&&Ja[Z]!="auto"){L[pa<2?"align":"verticalAlign"]=Z;L[pa<2?"x":"y"]=oa(Ja[Z])*(pa%2?-1:1)}}Ka.align(qa(L,{width:Rb,height:Sb}),true,uc);Rc||w()}var L=m.options.legend;if(L.enabled){var ga=L.layout=="horizontal",Ea=L.symbolWidth,ua=L.symbolPadding,bb,Ja=L.style,ma=L.itemStyle,Oa=L.itemHoverStyle,M=L.itemHiddenStyle,
E=oa(Ja.padding),ea=20,s=18,N=4+E+Ea+ua,Q,H,A,D=0,ha,xa=L.borderWidth,va=L.backgroundColor,Ka,tb,Hb=L.width,Fa=m.series,Ta=L.reversed;ja();Qa(m,"endResize",w);return{colorizeItem:h,destroyItem:function(u){var Z=u.checkbox;t(["legendItem","legendLine","legendSymbol"],function(pa){u[pa]&&u[pa].destroy()});Z&&Fc(u.checkbox)},renderLegend:ja}}};hc=function(m,h){return m>=0&&m<=wa&&h>=0&&h<=sa};Td=function(){La(q,"selection",{resetSelection:true},md);q.toolbar.remove("zoom")};md=function(m){var h=Sa.lang,
x=q.pointCount<100;q.toolbar.add("zoom",h.resetZoom,h.resetZoomTitle,Td);!m||m.resetSelection?t(ab,function(w){w.setExtremes(null,null,false,x)}):t(m.xAxis.concat(m.yAxis),function(w){var O=w.axis;if(q.tracker[O.isXAxis?"zoomX":"zoomY"])O.setExtremes(w.min,w.max,false,x)});k()};sc=function(){var m=a.legend,h=y(m.margin,10),x=m.x,w=m.y,O=m.align,ja=m.verticalAlign,L;sd();if((q.title||q.subtitle)&&!J(da))if(L=Ca(q.title&&!kc.floating&&!kc.verticalAlign&&kc.y||0,q.subtitle&&!tc.floating&&!tc.verticalAlign&&
tc.y||0))ba=Ca(ba,L+y(kc.margin,15)+Ha);if(m.enabled&&!m.floating)if(O=="right")J(X)||(Ab=Ca(Ab,Rb-x+h+Ya));else if(O=="left")J(R)||(V=Ca(V,Rb+x+h+Vc));else if(ja=="top")J(da)||(ba=Ca(ba,Sb+w+h+Ha));else if(ja=="bottom")J(U)||(rb=Ca(rb,Sb-w+h+ud));ic&&t(ab,function(ga){ga.getOffset()});J(R)||(V+=Pb[3]);J(da)||(ba+=Pb[0]);J(U)||(rb+=Pb[2]);J(X)||(Ab+=Pb[1]);td()};rd=function(m,h,x){var w=q.title,O=q.subtitle;Rc+=1;bc(x,q);Oc=Pa;jd=Xa;Xa=fa(m);Pa=fa(h);Ia(ta,{width:Xa+$a,height:Pa+$a});aa.setSize(Xa,
Pa,x);wa=Xa-V-Ab;sa=Pa-ba-rb;Gb=null;t(ab,function(ja){ja.isDirty=true;ja.setScale()});t(Ba,function(ja){ja.isDirty=true});q.isDirtyLegend=true;q.isDirtyBox=true;sc();w&&w.align(null,null,uc);O&&O.align(null,null,uc);k(x);Oc=null;La(q,"resize");setTimeout(function(){La(q,"endResize",null,function(){Rc-=1})},Bc&&Bc.duration||500)};td=function(){q.plotLeft=V=fa(V);q.plotTop=ba=fa(ba);q.plotWidth=wa=fa(Xa-V-Ab);q.plotHeight=sa=fa(Pa-ba-rb);q.plotSizeX=Ga?sa:wa;q.plotSizeY=Ga?wa:sa;uc={x:Vc,y:Ha,width:Xa-
Vc-Ya,height:Pa-Ha-ud}};sd=function(){ba=y(da,Ha);Ab=y(X,Ya);rb=y(U,ud);V=y(R,Vc);Pb=[0,0,0,0]};pd=function(){var m=v.borderWidth||0,h=v.backgroundColor,x=v.plotBackgroundColor,w=v.plotBackgroundImage,O,ja={x:V,y:ba,width:wa,height:sa};O=m+(v.shadow?8:0);if(m||h)if(Wc)Wc.animate(Wc.crisp(null,null,null,Xa-O,Pa-O));else Wc=aa.rect(O/2,O/2,Xa-O,Pa-O,v.borderRadius,m).attr({stroke:v.borderColor,"stroke-width":m,fill:h||nb}).add().shadow(v.shadow);if(x)if(vd)vd.animate(ja);else vd=aa.rect(V,ba,wa,sa,
0).attr({fill:x}).add().shadow(v.plotShadow);if(w)if(wd)wd.animate(ja);else wd=aa.image(w,V,ba,wa,sa).add();if(v.plotBorderWidth)if(Xc)Xc.animate(Xc.crisp(null,V,ba,wa,sa));else Xc=aa.rect(V,ba,wa,sa,0,v.plotBorderWidth).attr({stroke:v.plotBorderColor,"stroke-width":v.plotBorderWidth,zIndex:4}).add();q.isDirtyBox=false};Yc=Jb=0;Qa(ib,"unload",ca);v.reflow!==false&&Qa(q,"load",F);if(I)for(xd in I)Qa(q,xd,I[xd]);q.options=a;q.series=Ba;q.addSeries=function(m,h,x){var w;if(m){bc(x,q);h=y(h,true);La(q,
"addSeries",{options:m},function(){w=g(m);w.isDirty=true;q.isDirtyLegend=true;h&&q.redraw()})}return w};q.animation=y(v.animation,true);q.destroy=ca;q.get=function(m){var h,x,w;for(h=0;h<ab.length;h++)if(ab[h].options.id==m)return ab[h];for(h=0;h<Ba.length;h++)if(Ba[h].options.id==m)return Ba[h];for(h=0;h<Ba.length;h++){w=Ba[h].data;for(x=0;x<w.length;x++)if(w[x].id==m)return w[x]}return null};q.getSelectedPoints=function(){var m=[];t(Ba,function(h){m=m.concat(zd(h.data,function(x){return x.selected}))});
return m};q.getSelectedSeries=function(){return zd(Ba,function(m){return m.selected})};q.hideLoading=function(){Zc($b,{opacity:0},{duration:a.loading.hideDuration,complete:function(){Ia($b,{display:nb})}});yd=false};q.isInsidePlot=hc;q.redraw=k;q.setSize=rd;q.setTitle=n;q.showLoading=function(m){var h=a.loading;if(!$b){$b=fb(Lb,{className:"highcharts-loading"},qa(h.style,{left:V+$a,top:ba+$a,width:wa+$a,height:sa+$a,zIndex:10,display:nb}),ta);Sd=fb("span",null,h.labelStyle,$b)}Sd.innerHTML=m||a.lang.loading;
if(!yd){Ia($b,{opacity:0,display:""});Zc($b,{opacity:h.style.opacity},{duration:h.showDuration});yd=true}};q.pointCount=0;ka()}var Aa=document,ib=window,Ua=Math,fa=Ua.round,ob=Ua.floor,fd=Ua.ceil,Ca=Ua.max,pb=Ua.min,cb=Ua.abs,kb=Ua.cos,zb=Ua.sin,Tb=Ua.PI,Ud=Tb*2/360,xc=navigator.userAgent,Ac=/msie/i.test(xc)&&!ib.opera,yc=Aa.documentMode==8,ce=/AppleWebKit/.test(xc),Rd=/Firefox/.test(xc),wc=!!Aa.createElementNS&&!!Aa.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,Ib="ontouchstart"in
Aa.documentElement,Jb,Yc,de={},qd=0,qb=1,Gc,Sa,Mc,Bc,$c,Ra,Lb="div",lc="absolute",Pd="relative",vb="hidden",Zb="highcharts-",Bb="visible",$a="px",nb="none",Za="M",Da="L",Vd="rgba(192,192,192,"+(wc?1.0E-6:0.0020)+")",db="",yb="hover",Cc,bd,cd,dd,oc,Dc,Ec,Cd,Dd,ed,Ed,Fd,eb=ib.HighchartsAdapter,Db=eb||{},t=Db.each,zd=Db.grep,jc=Db.map,ya=Db.merge,Ad=Db.hyphenate,Qa=Db.addEvent,Cb=Db.removeEvent,La=Db.fireEvent,Zc=Db.animate,Sc=Db.stop,ub={};eb&&eb.init&&eb.init();if(!eb&&ib.jQuery){var lb=jQuery;t=function(a,
b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===false)return c};zd=lb.grep;jc=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};ya=function(){var a=arguments;return lb.extend(true,null,a[0],a[1],a[2],a[3])};Ad=function(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()})};Qa=function(a,b,c){lb(a).bind(b,c)};Cb=function(a,b,c){var d=Aa.removeEventListener?"removeEventListener":"detachEvent";if(Aa[d]&&!a[d])a[d]=function(){};lb(a).unbind(b,
c)};La=function(a,b,c,d){var e=lb.Event(b),f="detached"+b;qa(e,c);if(a[b]){a[f]=a[b];a[b]=null}lb(a).trigger(e);if(a[f]){a[b]=a[f];a[f]=null}d&&!e.isDefaultPrevented()&&d(e)};Zc=function(a,b,c){var d=lb(a);if(b.d){a.toD=b.d;b.d=1}d.stop();d.animate(b,c)};Sc=function(a){lb(a).stop()};lb.extend(lb.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}});var ee=jQuery.fx.step._default,fe=jQuery.fx.prototype.cur;lb.fx.step._default=function(a){var b=a.elem;b.attr?b.attr(a.prop,a.now):ee.apply(this,
arguments)};lb.fx.step.d=function(a){var b=a.elem;if(!a.started){var c=$c.init(b,b.d,b.toD);a.start=c[0];a.end=c[1];a.started=true}b.attr("d",$c.step(a.start,a.end,a.pos,b.toD))};lb.fx.prototype.cur=function(){var a=this.elem;return a.attr?a.attr(this.prop):fe.apply(this,arguments)}}$c={init:function(a,b,c){b=b||"";var d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g;b=b.split(" ");c=[].concat(c);var i,k,j=function(n){for(g=n.length;g--;)n[g]==Za&&n.splice(g+1,0,n[g+1],n[g+2],n[g+1],n[g+2])};if(e){j(b);j(c)}if(a.isArea){i=
b.splice(b.length-6,6);k=c.splice(c.length-6,6)}if(d){c=[].concat(c).splice(0,f).concat(c);a.shift=false}if(b.length)for(a=c.length;b.length<a;){d=[].concat(b).splice(b.length-f,f);if(e){d[f-6]=d[f-2];d[f-5]=d[f-1]}b=b.concat(d)}if(i){b=b.concat(i);c=c.concat(k)}return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c==1)e=d;else if(f==b.length&&c<1)for(;f--;){d=parseFloat(a[f]);e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d}else e=b;return e}};eb={enabled:true,align:"center",x:0,y:15,style:{color:"#666",
fontSize:"11px",lineHeight:"14px"}};Sa={colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",
thousandsSep:","},global:{useUTC:true},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:true,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0"},title:{text:"Chart title",align:"center",y:15,style:{color:"#3E576F",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#6D869F"}},
plotOptions:{line:{allowPointSelect:false,showCheckbox:false,animation:{duration:1E3},events:{},lineWidth:2,shadow:true,marker:{enabled:true,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:ya(eb,{enabled:false,y:-6,formatter:function(){return this.y}}),showInLegend:true,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:true}},labels:{style:{position:lc,color:"#3E576F"}},legend:{enabled:true,
align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderWidth:1,borderColor:"#909090",borderRadius:5,shadow:false,style:{padding:"5px"},itemStyle:{cursor:"pointer",color:"#3E576F"},itemHoverStyle:{cursor:"pointer",color:"#000000"},itemHiddenStyle:{color:"#C0C0C0"},itemCheckboxStyle:{position:lc,width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0},loading:{hideDuration:100,labelStyle:{fontWeight:"bold",position:Pd,top:"1em"},showDuration:100,
style:{position:lc,backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:true,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:true,snap:Ib?25:10,style:{color:"#333333",fontSize:"12px",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",cursor:"pointer"}},credits:{enabled:true,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",
fontSize:"10px"}}};var Lc={dateTimeLabelFormats:{second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:false,gridLineColor:"#C0C0C0",labels:eb,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,
tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#6D869F",fontWeight:"bold"}},type:"linear"},hd=ya(Lc,{endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,title:{rotation:270,text:"Y-values"}}),Zd={labels:{align:"right",x:-8,y:null},title:{rotation:270}},Yd={labels:{align:"left",x:8,y:null},title:{rotation:90}},Ld={labels:{align:"center",x:0,y:14},title:{rotation:0}},
Xd=ya(Ld,{labels:{y:-5}}),wb=Sa.plotOptions;eb=wb.line;wb.spline=ya(eb);wb.scatter=ya(eb,{lineWidth:0,states:{hover:{lineWidth:0}}});wb.area=ya(eb,{});wb.areaspline=ya(wb.area);wb.column=ya(eb,{borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,states:{hover:{brightness:0.1,shadow:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}}});wb.bar=ya(wb.column,{dataLabels:{align:"left",x:5,y:0}});wb.pie=ya(eb,{borderColor:"#FFFFFF",
borderWidth:1,center:["50%","50%"],colorByPoint:true,dataLabels:{distance:30,enabled:true,formatter:function(){return this.point.name},y:5},legendType:"point",marker:null,size:"75%",showInLegend:false,slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}}});Bd();var Ub=function(a){var b=[],c;(function(d){if(c=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d))b=[oa(c[1]),oa(c[2]),oa(c[3]),parseFloat(c[4],10)];else if(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))b=
[oa(c[1],16),oa(c[2],16),oa(c[3],16),1]})(a);return{get:function(d){return b&&!isNaN(b[0])?d=="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":d=="a"?b[3]:"rgba("+b.join(",")+")":a},brighten:function(d){if(ac(d)&&d!==0){var e;for(e=0;e<3;e++){b[e]+=oa(d*255);if(b[e]<0)b[e]=0;if(b[e]>255)b[e]=255}}return this},setOpacity:function(d){b[3]=d;return this}}};Mc=function(a,b,c){function d(F){return F.toString().replace(/^([0-9])$/,"0$1")}if(!J(b)||isNaN(b))return"Invalid date";a=y(a,"%Y-%m-%d %H:%M:%S");b=new Date(b*
qb);var e=b[cd](),f=b[dd](),g=b[oc](),i=b[Dc](),k=b[Ec](),j=Sa.lang,n=j.weekdays;j=j.months;b={a:n[f].substr(0,3),A:n[f],d:d(g),e:g,b:j[i].substr(0,3),B:j[i],m:d(i+1),y:k.toString().substr(2,2),Y:k,H:d(e),I:d(e%12||12),l:e%12||12,M:d(b[bd]()),p:e<12?"AM":"PM",P:e<12?"am":"pm",S:d(b.getSeconds())};for(var z in b)a=a.replace("%"+z,b[z]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};Hc.prototype={init:function(a,b){this.element=Aa.createElementNS("http://www.w3.org/2000/svg",b);this.renderer=a},
animate:function(a,b,c){if(b=y(b,Bc,true)){b=ya(b);if(c)b.complete=c;Zc(this,a,b)}else{this.attr(a);c&&c()}},attr:function(a,b){var c,d,e,f,g=this.element,i=g.nodeName,k=this.renderer,j,n=this.shadows,z,F=this;if(Kb(a)&&J(b)){c=a;a={};a[c]=b}if(Kb(a)){c=a;if(i=="circle")c={x:"cx",y:"cy"}[c]||c;else if(c=="strokeWidth")c="stroke-width";F=za(g,c)||this[c]||0;if(c!="d"&&c!="visibility")F=parseFloat(F)}else for(c in a){j=false;d=a[c];if(c=="d"){if(d&&d.join)d=d.join(" ");if(/(NaN| {2}|^$)/.test(d))d=
"M 0 0";this.d=d}else if(c=="x"&&i=="text"){for(e=0;e<g.childNodes.length;e++){f=g.childNodes[e];za(f,"x")==za(g,"x")&&za(f,"x",d)}if(this.rotation)za(g,"transform","rotate("+this.rotation+" "+d+" "+oa(a.y||za(g,"y"))+")")}else if(c=="fill")d=k.color(d,g,c);else if(i=="circle"&&(c=="x"||c=="y"))c={x:"cx",y:"cy"}[c]||c;else if(c=="translateX"||c=="translateY"||c=="rotation"||c=="verticalAlign"){this[c]=d;this.updateTransform();j=true}else if(c=="stroke")d=k.color(d,g,c);else if(c=="dashstyle"){c="stroke-dasharray";
if(d){d=d.toLowerCase().replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(e=d.length;e--;)d[e]=oa(d[e])*a["stroke-width"];d=d.join(",")}}else if(c=="isTracker")this[c]=d;else if(c=="width")d=oa(d);else if(c=="align"){c="text-anchor";d={left:"start",center:"middle",right:"end"}[d]}if(c=="strokeWidth")c="stroke-width";
if(ce&&c=="stroke-width"&&d===0)d=1.0E-6;if(this.symbolName&&/^(x|y|r|start|end|innerR)/.test(c)){if(!z){this.symbolAttr(a);z=true}j=true}if(n&&/^(width|height|visibility|x|y|d)$/.test(c))for(e=n.length;e--;)za(n[e],c,d);if(c=="text"){this.textStr=d;this.added&&k.buildText(this)}else j||za(g,c,d)}return F},symbolAttr:function(a){var b=this;t(["x","y","r","start","end","width","height","innerR"],function(c){b[c]=y(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.r,{start:b.start,end:b.end,
width:b.width,height:b.height,innerR:b.innerR})})},clip:function(a){return this.attr("clip-path","url("+this.renderer.url+"#"+a.id+")")},crisp:function(a,b,c,d,e){var f,g={},i={},k;a=a||this.strokeWidth||0;k=a%2/2;i.x=ob(b||this.x||0)+k;i.y=ob(c||this.y||0)+k;i.width=ob((d||this.width||0)-2*k);i.height=ob((e||this.height||0)-2*k);i.strokeWidth=a;for(f in i)if(this[f]!=i[f])this[f]=g[f]=i[f];return g},css:function(a){var b=this.element;b=a&&a.width&&b.nodeName=="text";if(a&&a.color)a.fill=a.color;
this.styles=a=qa(this.styles,a);if(Ac&&!wc){b&&delete a.width;Ia(this.element,a)}else this.attr({style:Wd(a)});b&&this.added&&this.renderer.buildText(this);return this},on:function(a,b){var c=b;if(Ib&&a=="click"){a="touchstart";c=function(d){d.preventDefault();b()}}this.element["on"+a]=c;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=true;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||
0,c=this.inverted,d=this.rotation,e=[];if(c){a+=this.attr("width");b+=this.attr("height")}if(a||b)e.push("translate("+a+","+b+")");if(c)e.push("rotate(90) scale(-1,1)");else d&&e.push("rotate("+d+" "+this.x+" "+this.y+")");e.length&&za(this.element,"transform",e.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){if(a){this.alignOptions=a;this.alignByTranslate=b;c||this.renderer.alignedObjects.push(this)}else{a=this.alignOptions;b=this.alignByTranslate}c=
y(c,this.renderer);var d=a.align,e=a.verticalAlign,f=(c.x||0)+(a.x||0),g=(c.y||0)+(a.y||0),i={};if(/^(right|center)$/.test(d))f+=(c.width-(a.width||0))/{right:1,center:2}[d];i[b?"translateX":"x"]=fa(f);if(/^(bottom|middle)$/.test(e))g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);i[b?"translateY":"y"]=fa(g);this[this.placed?"animate":"attr"](i);this.placed=true;return this},getBBox:function(){var a,b,c,d=this.rotation,e=d*Ud;try{a=qa({},this.element.getBBox())}catch(f){a={width:0,height:0}}b=
a.width;c=a.height;if(d){a.width=cb(c*zb(e))+cb(b*kb(e));a.height=cb(c*kb(e))+cb(b*zb(e))}return a},show:function(){return this.attr({visibility:Bb})},hide:function(){return this.attr({visibility:vb})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=d.childNodes,f=this.element,g=za(f,"zIndex");this.parentInverted=a&&a.inverted;this.textStr!==undefined&&b.buildText(this);if(g){c.handleZ=true;g=oa(g)}if(c.handleZ)for(c=0;c<e.length;c++){a=e[c];b=za(a,"zIndex");if(a!=f&&(oa(b)>g||!J(g)&&
J(b))){d.insertBefore(f,a);return this}}d.appendChild(f);this.added=true;return this},destroy:function(){var a=this.element||{},b=this.shadows,c=a.parentNode,d;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=null;Sc(this);c&&c.removeChild(a);b&&t(b,function(e){(c=e.parentNode)&&c.removeChild(e)});mc(this.renderer.alignedObjects,this);for(d in this)delete this[d];return null},empty:function(){for(var a=this.element,b=a.childNodes,c=b.length;c--;)a.removeChild(b[c])},shadow:function(a){var b=[],
c,d=this.element,e=this.parentInverted?"(-1,-1)":"(1,1)";if(a){for(a=1;a<=3;a++){c=d.cloneNode(0);za(c,{isShadow:"true",stroke:"rgb(0, 0, 0)","stroke-opacity":0.05*a,"stroke-width":7-2*a,transform:"translate"+e,fill:nb});d.parentNode.insertBefore(c,d);b.push(c)}this.shadows=b}return this}};var Uc=function(){this.init.apply(this,arguments)};Uc.prototype={init:function(a,b,c,d){var e=location,f;this.Element=Hc;f=this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg",version:"1.1"});a.appendChild(f.element);
this.box=f.element;this.boxWrapper=f;this.alignedObjects=[];this.url=Ac?"":e.href.replace(/#.*?$/,"");this.defs=this.createElement("defs").add();this.forExport=d;this.setSize(b,c,false)},createElement:function(a){var b=new this.Element;b.init(this,a);return b},buildText:function(a){for(var b=a.element,c=y(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,
"</span>").split(/<br[^>]?>/g),d=b.childNodes,e=/style="([^"]+)"/,f=/href="([^"]+)"/,g=za(b,"x"),i=a.styles,k=Rd&&i&&i.HcDirection=="rtl"&&!this.forExport,j,n=i&&oa(i.width),z=i&&i.lineHeight,F,W=d.length;W--;)b.removeChild(d[W]);n&&!a.added&&this.box.appendChild(b);t(c,function(ca,ka){var v,I=0,da;ca=ca.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");v=ca.split("|||");t(v,function(X){if(X!==""||v.length==1){var U={},R=Aa.createElementNS("http://www.w3.org/2000/svg","tspan");e.test(X)&&
za(R,"style",X.match(e)[1].replace(/(;| |^)color([ :])/,"$1fill$2"));if(f.test(X)){za(R,"onclick",'location.href="'+X.match(f)[1]+'"');Ia(R,{cursor:"pointer"})}X=X.replace(/<(.|\n)*?>/g,"")||" ";if(k){j=[];for(W=X.length;W--;)j.push(X.charAt(W));X=j.join("")}R.appendChild(Aa.createTextNode(X));if(I)U.dx=3;else U.x=g;if(!I){if(ka){da=oa(window.getComputedStyle(F,null).getPropertyValue("line-height"));if(isNaN(da))da=z||F.offsetHeight||18;za(R,"dy",da)}F=R}za(R,U);b.appendChild(R);I++;if(n){X=X.replace(/-/g,
"- ").split(" ");for(var Ha,Ya=[];X.length||Ya.length;){Ha=b.getBBox().width;U=Ha>n;if(!U||X.length==1){X=Ya;Ya=[];if(X.length){R=Aa.createElementNS("http://www.w3.org/2000/svg","tspan");za(R,{x:g,dy:z||16});b.appendChild(R);if(Ha>n)n=Ha}}else{R.removeChild(R.firstChild);Ya.unshift(X.pop())}R.appendChild(Aa.createTextNode(X.join(" ").replace(/- /g,"-")))}}}})})},crispLine:function(a,b){if(a[1]==a[4])a[1]=a[4]=fa(a[1])+b%2/2;if(a[2]==a[5])a[2]=a[5]=fa(a[2])+b%2/2;return a},path:function(a){return this.createElement("path").attr({d:a,
fill:nb})},circle:function(a,b,c){a=Eb(a)?a:{x:a,y:b,r:c};return this.createElement("circle").attr(a)},arc:function(a,b,c,d,e,f){if(Eb(a)){b=a.y;c=a.r;d=a.innerR;e=a.start;f=a.end;a=a.x}return this.symbol("arc",a||0,b||0,c||0,{innerR:d||0,start:e||0,end:f||0})},rect:function(a,b,c,d,e,f){if(Eb(a)){b=a.y;c=a.width;d=a.height;e=a.r;a=a.x}e=this.createElement("rect").attr({rx:e,ry:e,fill:nb});return e.attr(e.crisp(f,a,b,Ca(c,0),Ca(d,0)))},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;
this.width=a;this.height=b;for(this.boxWrapper[y(c,true)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){return this.createElement("g").attr(J(a)&&{"class":Zb+a})},image:function(a,b,c,d,e){var f={preserveAspectRatio:nb};arguments.length>1&&qa(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a);return f},symbol:function(a,b,c,d,e){var f,g=this.symbols[a];g=g&&g(b,c,d,e);var i=/^url\((.*?)\)$/;
if(g){f=this.path(g);qa(f,{symbolName:a,x:b,y:c,r:d});e&&qa(f,e)}else if(i.test(a)){a=a.match(i)[1];f=this.image(a).attr({x:b,y:c});fb("img",{onload:function(){var k=de[this.src]||[this.width,this.height];f.attr({width:k[0],height:k[1]}).translate(-fa(k[0]/2),-fa(k[1]/2))},src:a})}else f=this.circle(b,c,d);return f},symbols:{square:function(a,b,c){c=0.707*c;return[Za,a-c,b-c,Da,a+c,b-c,a+c,b+c,a-c,b+c,"Z"]},triangle:function(a,b,c){return[Za,a,b-1.33*c,Da,a+c,b+0.67*c,a-c,b+0.67*c,"Z"]},"triangle-down":function(a,
b,c){return[Za,a,b+1.33*c,Da,a-c,b-0.67*c,a+c,b-0.67*c,"Z"]},diamond:function(a,b,c){return[Za,a,b-c,Da,a+c,b,a,b+c,a-c,b,"Z"]},arc:function(a,b,c,d){var e=d.start,f=d.end-1.0E-6,g=d.innerR,i=kb(e),k=zb(e),j=kb(f);f=zb(f);d=d.end-e<Tb?0:1;return[Za,a+c*i,b+c*k,"A",c,c,0,d,1,a+c*j,b+c*f,Da,a+g*j,b+g*f,"A",g,g,0,d,0,a+g*i,b+g*k,"Z"]}},clipRect:function(a,b,c,d){var e=Zb+qd++,f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=this.rect(a,b,c,d,0).add(f);a.id=e;return a},color:function(a,
b,c){var d,e=/^rgba/;if(a&&a.linearGradient){var f=this;b=a.linearGradient;c=Zb+qd++;var g,i,k;g=f.createElement("linearGradient").attr({id:c,gradientUnits:"userSpaceOnUse",x1:b[0],y1:b[1],x2:b[2],y2:b[3]}).add(f.defs);t(a.stops,function(j){if(e.test(j[1])){d=Ub(j[1]);i=d.get("rgb");k=d.get("a")}else{i=j[1];k=1}f.createElement("stop").attr({offset:j[0],"stop-color":i,"stop-opacity":k}).add(g)});return"url("+this.url+"#"+c+")"}else if(e.test(a)){d=Ub(a);za(b,c+"-opacity",d.get("a"));return d.get("rgb")}else return a},
text:function(a,b,c){var d=Sa.chart.style;b=fa(y(b,0));c=fa(y(c,0));a=this.createElement("text").attr({x:b,y:c,text:a}).css({"font-family":d.fontFamily,"font-size":d.fontSize});a.x=b;a.y=c;return a}};var Ma;if(!wc){var ge=xb(Hc,{init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ",lc,";"];if(b=="shape"||b==Lb)d.push("left:0;top:0;width:10px;height:10px;");if(yc)d.push("visibility: ",b==Lb?vb:Bb);c.push(' style="',d.join(""),'"/>');if(b){c=b==Lb||b=="span"||b=="img"?c.join(""):
a.prepVML(c);this.element=fb(c)}this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box;d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);yc&&d.gVis==vb&&Ia(c,{visibility:vb});d.appendChild(c);this.added=true;this.alignOnAdd&&this.updateTransform();return this},attr:function(a,b){var c,d,e,f=this.element||{},g=f.style,i=f.nodeName,k=this.renderer,j=this.symbolName,n,z,F=this.shadows,W=this;if(Kb(a)&&J(b)){c=a;a={};a[c]=b}if(Kb(a)){c=a;W=c=="strokeWidth"||c=="stroke-width"?this.strokeweight:
this[c]}else for(c in a){d=a[c];n=false;if(j&&/^(x|y|r|start|end|width|height|innerR)/.test(c)){if(!z){this.symbolAttr(a);z=true}n=true}else if(c=="d"){d=d||[];this.d=d.join(" ");e=d.length;for(n=[];e--;)n[e]=ac(d[e])?fa(d[e]*10)-5:d[e]=="Z"?"x":d[e];d=n.join(" ")||"x";f.path=d;if(F)for(e=F.length;e--;)F[e].path=d;n=true}else if(c=="zIndex"||c=="visibility"){if(yc&&c=="visibility"&&i=="DIV"){f.gVis=d;n=f.childNodes;for(e=n.length;e--;)Ia(n[e],{visibility:d});if(d==Bb)d=null}if(d)g[c]=d;n=true}else if(/^(width|height)$/.test(c)){if(this.updateClipping){this[c]=
d;this.updateClipping()}else g[c]=d;n=true}else if(/^(x|y)$/.test(c)){this[c]=d;if(f.tagName=="SPAN")this.updateTransform();else g[{x:"left",y:"top"}[c]]=d}else if(c=="class")f.className=d;else if(c=="stroke"){d=k.color(d,f,c);c="strokecolor"}else if(c=="stroke-width"||c=="strokeWidth"){f.stroked=d?true:false;c="strokeweight";this[c]=d;if(ac(d))d+=$a}else if(c=="dashstyle"){(f.getElementsByTagName("stroke")[0]||fb(k.prepVML(["<stroke/>"]),null,null,f))[c]=d||"solid";this.dashstyle=d;n=true}else if(c==
"fill")if(i=="SPAN")g.color=d;else{f.filled=d!=nb?true:false;d=k.color(d,f,c);c="fillcolor"}else if(c=="translateX"||c=="translateY"||c=="rotation"||c=="align"){if(c=="align")c="textAlign";this[c]=d;this.updateTransform();n=true}else if(c=="text"){f.innerHTML=d;n=true}if(F&&c=="visibility")for(e=F.length;e--;)F[e].style[c]=d;if(!n)if(yc)f[c]=d;else za(f,c,d)}return W},clip:function(a){var b=this,c=a.members;c.push(b);b.destroyClip=function(){mc(c,b)};return b.css(a.getCSS(b.inverted))},css:function(a){var b=
this.element;if(b=a&&b.tagName=="SPAN"&&a.width){delete a.width;this.textWidth=b;this.updateTransform()}this.styles=qa(this.styles,a);Ia(this.element,a);return this},destroy:function(){this.destroyClip&&this.destroyClip();Hc.prototype.destroy.apply(this)},empty:function(){for(var a=this.element.childNodes,b=a.length,c;b--;){c=a[b];c.parentNode.removeChild(c)}},getBBox:function(){var a=this.element;if(a.nodeName=="text")a.style.position=lc;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},
on:function(a,b){this.element["on"+a]=function(){var c=ib.event;c.target=c.srcElement;b(c)};return this},updateTransform:function(){if(this.added){var a=this,b=a.element,c=a.translateX||0,d=a.translateY||0,e=a.x||0,f=a.y||0,g=a.textAlign||"left",i={left:0,center:0.5,right:1}[g],k=g&&g!="left";if(c||d)a.css({marginLeft:c,marginTop:d});a.inverted&&t(b.childNodes,function(I){a.renderer.invertChild(I,b)});if(b.tagName=="SPAN"){var j,n;c=a.rotation;var z;j=0;d=1;var F=0,W;z=oa(a.textWidth);var ca=a.xCorr||
0,ka=a.yCorr||0,v=[c,g,b.innerHTML,a.textWidth].join(",");if(v!=a.cTT){if(J(c)){j=c*Ud;d=kb(j);F=zb(j);Ia(b,{filter:c?["progid:DXImageTransform.Microsoft.Matrix(M11=",d,", M12=",-F,", M21=",F,", M22=",d,", sizingMethod='auto expand')"].join(""):nb})}j=b.offsetWidth;n=b.offsetHeight;if(j>z){Ia(b,{width:z+$a,display:"block",whiteSpace:"normal"});j=z}z=fa(oa(b.style.fontSize||12)*1.2);ca=d<0&&-j;ka=F<0&&-n;W=d*F<0;ca+=F*z*(W?1-i:i);ka-=d*z*(c?W?i:1-i:1);if(k){ca-=j*i*(d<0?-1:1);if(c)ka-=n*i*(F<0?-1:
1);Ia(b,{textAlign:g})}a.xCorr=ca;a.yCorr=ka}Ia(b,{left:e+ca,top:f+ka});a.cTT=v}}else this.alignOnAdd=true},shadow:function(a){var b=[],c=this.element,d=this.renderer,e,f=c.style,g,i=c.path;if(""+c.path==="")i="x";if(a){for(a=1;a<=3;a++){g=['<shape isShadow="true" strokeweight="',7-2*a,'" filled="false" path="',i,'" coordsize="100,100" style="',c.style.cssText,'" />'];e=fb(d.prepVML(g),null,{left:oa(f.left)+1,top:oa(f.top)+1});g=['<stroke color="black" opacity="',0.05*a,'"/>'];fb(d.prepVML(g),null,
null,e);c.parentNode.insertBefore(e,c);b.push(e)}this.shadows=b}return this}});Ma=function(){this.init.apply(this,arguments)};Ma.prototype=ya(Uc.prototype,{isIE8:xc.indexOf("MSIE 8.0")>-1,init:function(a,b,c){var d;this.Element=ge;this.alignedObjects=[];d=this.createElement(Lb);a.appendChild(d.element);this.box=d.element;this.boxWrapper=d;this.setSize(b,c,false);if(!Aa.namespaces.hcv){Aa.namespaces.add("hcv","urn:schemas-microsoft-com:vml");Aa.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}},
clipRect:function(a,b,c,d){var e=this.createElement();return qa(e,{members:[],left:a,top:b,width:c,height:d,getCSS:function(f){var g=this.top,i=this.left,k=i+this.width,j=g+this.height;g={clip:"rect("+fa(f?i:g)+"px,"+fa(f?j:k)+"px,"+fa(f?k:j)+"px,"+fa(f?g:i)+"px)"};!f&&yc&&qa(g,{width:k+$a,height:j+$a});return g},updateClipping:function(){t(e.members,function(f){f.css(e.getCSS(f.inverted))})}})},color:function(a,b,c){var d,e=/^rgba/;if(a&&a.linearGradient){var f,g,i=a.linearGradient,k,j,n,z;t(a.stops,
function(F,W){if(e.test(F[1])){d=Ub(F[1]);f=d.get("rgb");g=d.get("a")}else{f=F[1];g=1}if(W){n=f;z=g}else{k=f;j=g}});a=90-Ua.atan((i[3]-i[1])/(i[2]-i[0]))*180/Tb;c=["<",c,' colors="0% ',k,",100% ",n,'" angle="',a,'" opacity="',z,'" o:opacity2="',j,'" type="gradient" focus="100%" />'];fb(this.prepVML(c),null,null,b)}else if(e.test(a)&&b.tagName!="IMG"){d=Ub(a);c=["<",c,' opacity="',d.get("a"),'"/>'];fb(this.prepVML(c),null,null,b);return d.get("rgb")}else return a},prepVML:function(a){var b=this.isIE8;
a=a.join("");if(b){a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />');a=a.indexOf('style="')==-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')}else a=a.replace("<","<hcv:");return a},text:function(a,b,c){var d=Sa.chart.style;return this.createElement("span").attr({text:a,x:fa(b),y:fa(c)}).css({whiteSpace:"nowrap",fontFamily:d.fontFamily,fontSize:d.fontSize})},path:function(a){return this.createElement("shape").attr({coordsize:"100 100",
d:a})},circle:function(a,b,c){return this.path(this.symbols.circle(a,b,c))},g:function(a){var b;if(a)b={className:Zb+a,"class":Zb+a};return this.createElement(Lb).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.css({left:b,top:c,width:d,height:e});return f},rect:function(a,b,c,d,e,f){if(Eb(a)){b=a.y;c=a.width;d=a.height;e=a.r;a=a.x}var g=this.symbol("rect");g.r=e;return g.attr(g.crisp(f,a,b,Ca(c,0),Ca(d,0)))},invertChild:function(a,b){var c=b.style;
Ia(a,{flip:"x",left:oa(c.width)-10,top:oa(c.height)-10,rotation:-90})},symbols:{arc:function(a,b,c,d){var e=d.start,f=d.end,g=kb(e),i=zb(e),k=kb(f),j=zb(f);d=d.innerR;var n=0.07/c,z=d&&0.1/d||0;if(f-e===0)return["x"];else if(2*Tb-f+e<n)k=-n;else if(f-e<z)k=kb(e+z);return["wa",a-c,b-c,a+c,b+c,a+c*g,b+c*i,a+c*k,b+c*j,"at",a-d,b-d,a+d,b+d,a+d*k,b+d*j,a+d*g,b+d*i,"x","e"]},circle:function(a,b,c){return["wa",a-c,b-c,a+c,b+c,a+c,b,a+c,b,"e"]},rect:function(a,b,c,d){if(!J(d))return[];var e=d.width;d=d.height;
var f=a+e,g=b+d;c=pb(c,e,d);return[Za,a+c,b,Da,f-c,b,"wa",f-2*c,b,f,b+2*c,f-c,b,f,b+c,Da,f,g-c,"wa",f-2*c,g-2*c,f,g,f,g-c,f-c,g,Da,a+c,g,"wa",a,g-2*c,a+2*c,g,a+c,g,a,g-c,Da,a,b+c,"wa",a,b,a+2*c,b+2*c,a,b+c,a+c,b,"x","e"]}}})}var Qd=wc?Uc:Ma;Hd.prototype.callbacks=[];var zc=function(){};zc.prototype={init:function(a,b){var c;this.series=a;this.applyOptions(b);this.pointAttr={};if(a.options.colorByPoint){c=a.chart.options.colors;if(!this.options)this.options={};this.color=this.options.color=this.color||
c[Jb++];if(Jb>=c.length)Jb=0}a.chart.pointCount++;return this},applyOptions:function(a){var b=this.series;this.config=a;if(ac(a)||a===null)this.y=a;else if(Eb(a)&&!ac(a.length)){qa(this,a);this.options=a}else if(Kb(a[0])){this.name=a[0];this.y=a[1]}else if(ac(a[0])){this.x=a[0];this.y=a[1]}if(this.x===Ra)this.x=b.autoIncrement()},destroy:function(){var a=this,b=a.series,c;b.chart.pointCount--;a==b.chart.hoverPoint&&a.onMouseOut();b.chart.hoverPoints=null;Cb(a);t(["graphic","tracker","group","dataLabel",
"connector"],function(d){a[d]&&a[d].destroy()});a.legendItem&&a.series.chart.legend.destroyItem(a);for(c in a)a[c]=null},select:function(a,b){var c=this,d=c.series.chart;c.selected=a=y(a,!c.selected);c.firePointEvent(a?"select":"unselect");c.setState(a&&"select");b||t(d.getSelectedPoints(),function(e){if(e.selected&&e!=c){e.selected=false;e.setState(db);e.firePointEvent("unselect")}})},onMouseOver:function(){var a=this.series.chart,b=a.tooltip,c=a.hoverPoint;c&&c!=this&&c.onMouseOut();this.firePointEvent("mouseOver");
b&&!b.shared&&b.refresh(this);this.setState(yb);a.hoverPoint=this},onMouseOut:function(){this.firePointEvent("mouseOut");this.setState();this.series.chart.hoverPoint=null},tooltipFormatter:function(a){var b=this.series;return['<span style="color:'+b.color+'">',this.name||b.name,"</span>: ",!a?"<b>x = "+(this.name||this.x)+",</b> ":"","<b>",!a?"y = ":"",this.y,"</b><br/>"].join("")},getDataLabelText:function(){return this.series.options.dataLabels.formatter.call({x:this.x,y:this.y,series:this.series,
point:this,percentage:this.percentage,total:this.total||this.stackTotal})},update:function(a,b,c){var d=this,e=d.series,f=d.dataLabel,g=d.graphic,i=e.chart;b=y(b,true);d.firePointEvent("update",{options:a},function(){d.applyOptions(a);f&&f.attr({text:d.getDataLabelText()});if(Eb(a)){e.getAttribs();g&&g.attr(d.pointAttr[e.state])}e.isDirty=true;b&&i.redraw(c)})},remove:function(a,b){var c=this,d=c.series,e=d.chart,f=d.data;bc(b,e);a=y(a,true);c.firePointEvent("remove",null,function(){mc(f,c);c.destroy();
d.isDirty=true;a&&e.redraw()})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;if(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])this.importEvents();if(a=="click"&&e.allowPointSelect)c=function(f){d.select(null,f.ctrlKey||f.metaKey||f.shiftKey)};La(this,a,b,c)},importEvents:function(){if(!this.hasImportedEvents){var a=ya(this.series.options.point,this.options).events,b;this.events=a;for(b in a)Qa(this,b,a[b]);this.hasImportedEvents=true}},setState:function(a){var b=
this.series,c=b.options.states,d=wb[b.type].marker&&b.options.marker,e=d&&!d.enabled,f=(d=d&&d.states[a])&&d.enabled===false,g=b.stateMarkerGraphic,i=b.chart,k=this.pointAttr;a||(a=db);if(!(a==this.state||this.selected&&a!="select"||c[a]&&c[a].enabled===false||a&&(f||e&&!d.enabled))){if(this.graphic)this.graphic.attr(k[a]);else{if(a){if(!g)b.stateMarkerGraphic=g=i.renderer.circle(0,0,k[a].r).attr(k[a]).add(b.group);g.translate(this.plotX,this.plotY)}if(g)g[a?"show":"hide"]()}this.state=a}}};var mb=
function(){};mb.prototype={isCartesian:true,type:"line",pointClass:zc,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},init:function(a,b){var c,d;d=a.series.length;this.chart=a;b=this.setOptions(b);qa(this,{index:d,options:b,name:b.name||"Series "+(d+1),state:db,pointAttr:{},visible:b.visible!==false,selected:b.selected===true});d=b.events;for(c in d)Qa(this,c,d[c]);if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=
true;this.getColor();this.getSymbol();this.setData(b.data,false)},autoIncrement:function(){var a=this.options,b=this.xIncrement;b=y(b,a.pointStart,0);this.pointInterval=y(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},cleanData:function(){var a=this.chart,b=this.data,c,d,e=a.smallestInterval,f,g;b.sort(function(i,k){return i.x-k.x});for(g=b.length-1;g>=0;g--)b[g-1]&&b[g-1].x==b[g].x&&b.splice(g-1,1);for(g=b.length-1;g>=0;g--)if(b[g-1]){f=b[g].x-b[g-1].x;if(d===
Ra||f<d){d=f;c=g}}if(e===Ra||d<e)a.smallestInterval=d;this.closestPoints=c},getSegments:function(){var a=-1,b=[],c=this.data;t(c,function(d,e){if(d.y===null){e>a+1&&b.push(c.slice(a+1,e));a=e}else e==c.length-1&&b.push(c.slice(a+1,e+1))});this.segments=b},setOptions:function(a){var b=this.chart.options.plotOptions;return ya(b[this.type],b.series,a)},getColor:function(){var a=this.chart.options.colors;this.color=this.options.color||a[Jb++]||"#0000ff";if(Jb>=a.length)Jb=0},getSymbol:function(){var a=
this.chart.options.symbols;this.symbol=this.options.marker.symbol||a[Yc++];if(Yc>=a.length)Yc=0},addPoint:function(a,b,c,d){var e=this.data,f=this.graph,g=this.area,i=this.chart;a=(new this.pointClass).init(this,a);bc(d,i);if(f&&c)f.shift=c;if(g){g.shift=c;g.isArea=true}b=y(b,true);e.push(a);c&&e[0].remove(false);this.isDirty=true;b&&i.redraw()},setData:function(a,b){var c=this,d=c.data,e=c.initialColor,f=c.chart,g=d&&d.length||0;c.xIncrement=null;if(J(e))Jb=e;for(a=jc(nc(a||[]),function(i){return(new c.pointClass).init(c,
i)});g--;)d[g].destroy();c.data=a;c.cleanData();c.getSegments();c.isDirty=true;f.isDirtyBox=true;y(b,true)&&f.redraw(false)},remove:function(a,b){var c=this,d=c.chart;a=y(a,true);if(!c.isRemoving){c.isRemoving=true;La(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=true;a&&d.redraw(b)})}c.isRemoving=false},translate:function(){for(var a=this.chart,b=this.options.stacking,c=this.xAxis.categories,d=this.yAxis,e=this.data,f=e.length;f--;){var g=e[f],i=g.x,k=g.y,j=g.low,n=d.stacks[(k<
0?"-":"")+this.stackKey];g.plotX=this.xAxis.translate(i);if(b&&this.visible&&n&&n[i]){j=n[i];i=j.total;j.cum=j=j.cum-k;k=j+k;if(b=="percent"){j=i?j*100/i:0;k=i?k*100/i:0}g.percentage=i?g.y*100/i:0;g.stackTotal=i}if(J(j))g.yBottom=d.translate(j,0,1);if(k!==null)g.plotY=d.translate(k,0,1);g.clientX=a.inverted?a.plotHeight-g.plotX:g.plotX;g.category=c&&c[g.x]!==Ra?c[g.x]:g.x}},setTooltipPoints:function(a){var b=this.chart,c=b.inverted,d=[],e=fa((c?b.plotTop:b.plotLeft)+b.plotSizeX),f,g,i=[];if(a)this.tooltipPoints=
null;t(this.segments,function(k){d=d.concat(k)});if(this.xAxis&&this.xAxis.reversed)d=d.reverse();t(d,function(k,j){f=d[j-1]?d[j-1].high+1:0;for(g=k.high=d[j+1]?ob((k.plotX+(d[j+1]?d[j+1].plotX:e))/2):e;f<=g;)i[c?e-f++:f++]=k});this.tooltipPoints=i},onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(!(!Ib&&a.mouseIsDown)){b&&b!=this&&b.onMouseOut();this.options.events.mouseOver&&La(this,"mouseOver");this.tracker&&this.tracker.toFront();this.setState(yb);a.hoverSeries=this}},onMouseOut:function(){var a=
this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;d&&d.onMouseOut();this&&a.events.mouseOut&&La(this,"mouseOut");c&&!a.stickyTracking&&c.hide();this.setState();b.hoverSeries=null},animate:function(a){var b=this.chart,c=this.clipRect,d=this.options.animation;if(d&&!Eb(d))d={};if(a){if(!c.isAnimating){c.attr("width",0);c.isAnimating=true}}else{c.animate({width:b.plotSizeX},d);this.animate=null}},drawPoints:function(){var a,b=this.data,c=this.chart,d,e,f,g,i,k;if(this.options.marker.enabled)for(f=
b.length;f--;){g=b[f];d=g.plotX;e=g.plotY;k=g.graphic;if(e!==Ra&&!isNaN(e)){a=g.pointAttr[g.selected?"select":db];i=a.r;if(k)k.animate({x:d,y:e,r:i});else g.graphic=c.renderer.symbol(y(g.marker&&g.marker.symbol,this.symbol),d,e,i).attr(a).add(this.group)}}},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,i={};a=a||{};b=b||{};c=c||{};d=d||{};for(f in e){g=e[f];i[f]=y(a[g],b[f],c[f],d[f])}return i},getAttribs:function(){var a=this,b=wb[a.type].marker?a.options.marker:a.options,c=
b.states,d=c[yb],e,f=a.color,g={stroke:f,fill:f},i=a.data,k=[],j,n=a.pointAttrToOptions;if(a.options.marker){d.radius=d.radius||b.radius+2;d.lineWidth=d.lineWidth||b.lineWidth+1}else d.color=d.color||Ub(d.color||f).brighten(d.brightness).get();k[db]=a.convertAttribs(b,g);t([yb,"select"],function(F){k[F]=a.convertAttribs(c[F],k[db])});a.pointAttr=k;for(f=i.length;f--;){g=i[f];if((b=g.options&&g.options.marker||g.options)&&b.enabled===false)b.radius=0;e=false;if(g.options)for(var z in n)if(J(b[n[z]]))e=
true;if(e){j=[];c=b.states||{};e=c[yb]=c[yb]||{};if(!a.options.marker)e.color=Ub(e.color||g.options.color).brighten(e.brightness||d.brightness).get();j[db]=a.convertAttribs(b,k[db]);j[yb]=a.convertAttribs(c[yb],k[yb],j[db]);j.select=a.convertAttribs(c.select,k.select,j[db])}else j=k;g.pointAttr=j}},destroy:function(){var a=this,b=a.chart,c=/\/5[0-9\.]+ (Safari|Mobile)\//.test(xc),d,e;Cb(a);a.legendItem&&a.chart.legend.destroyItem(a);t(a.data,function(f){f.destroy()});t(["area","graph","dataLabelsGroup",
"group","tracker"],function(f){if(a[f]){d=c&&f=="group"?"hide":"destroy";a[f][d]()}});if(b.hoverSeries==a)b.hoverSeries=null;mc(b.series,a);for(e in a)delete a[e]},drawDataLabels:function(){if(this.options.dataLabels.enabled){var a,b,c=this.data,d=this.options.dataLabels,e,f=this.dataLabelsGroup,g=this.chart,i=g.inverted,k=this.type,j;if(!f)f=this.dataLabelsGroup=g.renderer.g(Zb+"data-labels").attr({visibility:this.visible?Bb:vb,zIndex:5}).translate(g.plotLeft,g.plotTop).add();j=d.color;if(j=="auto")j=
null;d.style.color=y(j,this.color);t(c,function(n){var z=n.barX;z=z&&z+n.barW/2||n.plotX||-999;var F=y(n.plotY,-999),W=n.dataLabel,ca=d.align;e=n.getDataLabelText();a=(i?g.plotWidth-F:z)+d.x;b=(i?g.plotHeight-z:F)+d.y;if(k=="column")a+={left:-1,right:1}[ca]*n.barW/2||0;if(W)W.animate({x:a,y:b});else if(J(e))W=n.dataLabel=g.renderer.text(e,a,b).attr({align:ca,rotation:d.rotation,zIndex:1}).css(d.style).add(f);i&&!d.y&&W.attr({y:b+parseInt(W.styles.lineHeight)*0.9-W.getBBox().height/2})})}},drawGraph:function(){var a=
this,b=a.options,c=a.graph,d=[],e,f=a.area,g=a.group,i=b.lineColor||a.color,k=b.lineWidth,j=b.dashStyle,n,z=a.chart.renderer,F=a.yAxis.getThreshold(b.threshold||0),W=/^area/.test(a.type),ca=[],ka=[];t(a.segments,function(v){n=[];t(v,function(U,R){if(a.getPointSpline)n.push.apply(n,a.getPointSpline(v,U,R));else{n.push(R?Da:Za);R&&b.step&&n.push(U.plotX,v[R-1].plotY);n.push(U.plotX,U.plotY)}});if(v.length>1)d=d.concat(n);else ca.push(v[0]);if(W){var I=[],da,X=n.length;for(da=0;da<X;da++)I.push(n[da]);
X==3&&I.push(Da,n[1],n[2]);if(b.stacking&&a.type!="areaspline")for(da=v.length-1;da>=0;da--)I.push(v[da].plotX,v[da].yBottom);else I.push(Da,v[v.length-1].plotX,F,Da,v[0].plotX,F);ka=ka.concat(I)}});a.graphPath=d;a.singlePoints=ca;if(W){e=y(b.fillColor,Ub(a.color).setOpacity(b.fillOpacity||0.75).get());if(f)f.animate({d:ka});else a.area=a.chart.renderer.path(ka).attr({fill:e}).add(g)}if(c)c.animate({d:d});else if(k){c={stroke:i,"stroke-width":k};if(j)c.dashstyle=j;a.graph=z.path(d).attr(c).add(g).shadow(b.shadow)}},
render:function(){var a=this,b=a.chart,c,d,e=a.options,f=e.animation,g=f&&a.animate;f=g?f&&f.duration||500:0;var i=a.clipRect;d=b.renderer;if(!i){i=a.clipRect=!b.hasRendered&&b.clipRect?b.clipRect:d.clipRect(0,0,b.plotSizeX,b.plotSizeY);if(!b.clipRect)b.clipRect=i}if(!a.group){c=a.group=d.g("series");if(b.inverted){d=function(){c.attr({width:b.plotWidth,height:b.plotHeight}).invert()};d();Qa(b,"resize",d)}c.clip(a.clipRect).attr({visibility:a.visible?Bb:vb,zIndex:e.zIndex}).translate(b.plotLeft,b.plotTop).add(b.seriesGroup)}a.drawDataLabels();
g&&a.animate(true);a.getAttribs();a.drawGraph&&a.drawGraph();a.drawPoints();a.options.enableMouseTracking!==false&&a.drawTracker();g&&a.animate();setTimeout(function(){i.isAnimating=false;if((c=a.group)&&i!=b.clipRect&&i.renderer){c.clip(a.clipRect=b.clipRect);i.destroy()}},f);a.isDirty=false},redraw:function(){var a=this.chart,b=this.group;if(b){a.inverted&&b.attr({width:a.plotWidth,height:a.plotHeight});b.animate({translateX:a.plotLeft,translateY:a.plotTop})}this.translate();this.setTooltipPoints(true);
this.render()},setState:function(a){var b=this.options,c=this.graph,d=b.states;b=b.lineWidth;a=a||db;if(this.state!=a){this.state=a;if(!(d[a]&&d[a].enabled===false)){if(a)b=d[a].lineWidth||b+1;if(c&&!c.dashstyle)c.attr({"stroke-width":b},a?0:500)}}},setVisible:function(a,b){var c=this.chart,d=this.legendItem,e=this.group,f=this.tracker,g=this.dataLabelsGroup,i,k=this.data,j=c.options.chart.ignoreHiddenSeries;i=this.visible;i=(this.visible=a=a===Ra?!i:a)?"show":"hide";e&&e[i]();if(f)f[i]();else for(e=
k.length;e--;){f=k[e];f.tracker&&f.tracker[i]()}g&&g[i]();d&&c.legend.colorizeItem(this,a);this.isDirty=true;this.options.stacking&&t(c.series,function(n){if(n.options.stacking&&n.visible)n.isDirty=true});if(j)c.isDirtyBox=true;b!==false&&c.redraw();La(this,i)},show:function(){this.setVisible(true)},hide:function(){this.setVisible(false)},select:function(a){this.selected=a=a===Ra?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;La(this,a?"select":"unselect")},drawTracker:function(){var a=
this,b=a.options,c=[].concat(a.graphPath),d=c.length,e=a.chart,f=e.options.tooltip.snap,g=a.tracker,i=b.cursor;i=i&&{cursor:i};var k=a.singlePoints,j;if(d)for(j=d+1;j--;){c[j]==Za&&c.splice(j+1,0,c[j+1]-f,c[j+2],Da);if(j&&c[j]==Za||j==d)c.splice(j,0,Da,c[j-2]+f,c[j-1])}for(j=0;j<k.length;j++){d=k[j];c.push(Za,d.plotX-f,d.plotY,Da,d.plotX+f,d.plotY)}if(g)g.attr({d:c});else a.tracker=e.renderer.path(c).attr({isTracker:true,stroke:Vd,fill:nb,"stroke-width":b.lineWidth+2*f,visibility:a.visible?Bb:vb,
zIndex:1}).on(Ib?"touchstart":"mouseover",function(){e.hoverSeries!=a&&a.onMouseOver()}).on("mouseout",function(){b.stickyTracking||a.onMouseOut()}).css(i).add(e.trackerGroup)}};Ma=xb(mb);ub.line=Ma;Ma=xb(mb,{type:"area"});ub.area=Ma;Ma=xb(mb,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],i,k,j,n;if(c&&c<a.length-1){a=f.plotY;j=g.plotX;g=g.plotY;var z;i=(1.5*d+f.plotX)/2.5;k=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;n=(1.5*e+g)/2.5;z=(n-k)*(j-d)/(j-i)+e-n;k+=z;n+=z;if(k>
a&&k>e){k=Ca(a,e);n=2*e-k}else if(k<a&&k<e){k=pb(a,e);n=2*e-k}if(n>g&&n>e){n=Ca(g,e);k=2*e-n}else if(n<g&&n<e){n=pb(g,e);k=2*e-n}b.rightContX=j;b.rightContY=n}if(c){b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,i||d,k||e,d,e];f.rightContX=f.rightContY=null}else b=[Za,d,e];return b}});ub.spline=Ma;Ma=xb(Ma,{type:"areaspline"});ub.areaspline=Ma;var ad=xb(mb,{type:"column",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},init:function(){mb.prototype.init.apply(this,
arguments);var a=this,b=a.chart;b.hasColumn=true;b.hasRendered&&t(b.series,function(c){if(c.type==a.type)c.isDirty=true})},translate:function(){var a=this,b=a.chart,c=0,d=a.xAxis.reversed,e=a.xAxis.categories,f={},g,i;mb.prototype.translate.apply(a);t(b.series,function(I){if(I.type==a.type){if(I.options.stacking){g=I.stackKey;if(f[g]===Ra)f[g]=c++;i=f[g]}else if(I.visible)i=c++;I.columnIndex=i}});var k=a.options,j=a.data,n=a.closestPoints;b=cb(j[1]?j[n].plotX-j[n-1].plotX:b.plotSizeX/(e?e.length:
1));e=b*k.groupPadding;n=(b-2*e)/c;var z=k.pointWidth,F=J(z)?(n-z)/2:n*k.pointPadding,W=Ca(y(z,n-2*F),1),ca=F+(e+((d?c-a.columnIndex:a.columnIndex)||0)*n-b/2)*(d?-1:1),ka=a.yAxis.getThreshold(k.threshold||0),v=y(k.minPointLength,5);t(j,function(I){var da=I.plotY,X=I.yBottom||ka,U=I.plotX+ca,R=fd(pb(da,X)),Ha=fd(Ca(da,X)-R),Ya;if(cb(Ha)<v){if(v){Ha=v;R=cb(R-ka)>v?X-v:ka-(da<=ka?v:0)}Ya=R-3}qa(I,{barX:U,barY:R,barW:W,barH:Ha});I.shapeType="rect";I.shapeArgs={x:U,y:R,width:W,height:Ha,r:k.borderRadius};
I.trackerArgs=J(Ya)&&ya(I.shapeArgs,{height:Ca(6,Ha+3),y:Ya})})},getSymbol:function(){},drawGraph:function(){},drawPoints:function(){var a=this,b=a.options,c=a.chart.renderer,d,e;t(a.data,function(f){var g=f.plotY;if(g!==Ra&&!isNaN(g)){d=f.graphic;e=f.shapeArgs;if(d){Sc(d);d.animate(e)}else f.graphic=c[f.shapeType](e).attr(f.pointAttr[f.selected?"select":db]).add(a.group).shadow(b.shadow)}})},drawTracker:function(){var a=this,b=a.chart,c=b.renderer,d,e,f=+new Date,g=a.options.cursor,i=g&&{cursor:g},
k;t(a.data,function(j){e=j.tracker;d=j.trackerArgs||j.shapeArgs;if(j.y!==null)if(e)e.attr(d);else j.tracker=c[j.shapeType](d).attr({isTracker:f,fill:Vd,visibility:a.visible?Bb:vb,zIndex:1}).on(Ib?"touchstart":"mouseover",function(n){k=n.relatedTarget||n.fromElement;b.hoverSeries!=a&&za(k,"isTracker")!=f&&a.onMouseOver();j.onMouseOver()}).on("mouseout",function(n){if(!a.options.stickyTracking){k=n.relatedTarget||n.toElement;za(k,"isTracker")!=f&&a.onMouseOut()}}).css(i).add(b.trackerGroup)})},animate:function(a){var b=
this,c=b.data;if(!a){t(c,function(d){var e=d.graphic;if(e){e.attr({height:0,y:b.yAxis.translate(0,0,1)});e.animate({height:d.barH,y:d.barY},b.options.animation)}});b.animate=null}},remove:function(){var a=this,b=a.chart;b.hasRendered&&t(b.series,function(c){if(c.type==a.type)c.isDirty=true});mb.prototype.remove.apply(a,arguments)}});ub.column=ad;Ma=xb(ad,{type:"bar",init:function(a){a.inverted=this.inverted=true;ad.prototype.init.apply(this,arguments)}});ub.bar=Ma;Ma=xb(mb,{type:"scatter",translate:function(){var a=
this;mb.prototype.translate.apply(a);t(a.data,function(b){b.shapeType="circle";b.shapeArgs={x:b.plotX,y:b.plotY,r:a.chart.options.tooltip.snap}})},drawTracker:function(){var a=this,b=a.options.cursor,c=b&&{cursor:b},d;t(a.data,function(e){(d=e.graphic)&&d.attr({isTracker:true}).on("mouseover",function(){a.onMouseOver();e.onMouseOver()}).on("mouseout",function(){a.options.stickyTracking||a.onMouseOut()}).css(c)})},cleanData:function(){}});ub.scatter=Ma;Ma=xb(zc,{init:function(){zc.prototype.init.apply(this,
arguments);var a=this,b;qa(a,{visible:a.visible!==false,name:y(a.name,"Slice")});b=function(){a.slice()};Qa(a,"select",b);Qa(a,"unselect",b);return a},setVisible:function(a){var b=this.series.chart,c=this.tracker,d=this.dataLabel,e=this.connector,f;f=(this.visible=a=a===Ra?!this.visible:a)?"show":"hide";this.group[f]();c&&c[f]();d&&d[f]();e&&e[f]();this.legendItem&&b.legend.colorizeItem(this,a)},slice:function(a,b,c){var d=this.series.chart,e=this.slicedTranslation;bc(c,d);y(b,true);a=this.sliced=
J(a)?a:!this.sliced;this.group.animate({translateX:a?e[0]:d.plotLeft,translateY:a?e[1]:d.plotTop})}});Ma=xb(mb,{type:"pie",isCartesian:false,pointClass:Ma,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:function(){this.initialColor=Jb},animate:function(){var a=this;t(a.data,function(b){var c=b.graphic;b=b.shapeArgs;var d=-Tb/2;if(c){c.attr({r:0,start:d,end:d});c.animate({r:b.r,start:b.start,end:b.end},a.options.animation)}});a.animate=null},translate:function(){var a=
0,b=-0.25,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f=c.center,g=this.chart,i=g.plotWidth,k=g.plotHeight,j,n,z,F=this.data,W=2*Tb,ca,ka=pb(i,k),v,I,da,X=c.dataLabels.distance;f.push(c.size,c.innerSize||0);f=jc(f,function(U,R){return(v=/%$/.test(U))?[i,k,ka,ka][R]*oa(U)/100:U});this.getX=function(U,R){z=Ua.asin((U-f[1])/(f[2]/2+X));return f[0]+(R?-1:1)*kb(z)*(f[2]/2+X)};this.center=f;t(F,function(U){a+=U.y});t(F,function(U){ca=a?U.y/a:0;j=fa(b*W*1E3)/1E3;b+=ca;n=fa(b*W*1E3)/1E3;U.shapeType=
"arc";U.shapeArgs={x:f[0],y:f[1],r:f[2]/2,innerR:f[3]/2,start:j,end:n};z=(n+j)/2;U.slicedTranslation=jc([kb(z)*d+g.plotLeft,zb(z)*d+g.plotTop],fa);I=kb(z)*f[2]/2;da=zb(z)*f[2]/2;U.tooltipPos=[f[0]+I*0.7,f[1]+da*0.7];U.labelPos=[f[0]+I+kb(z)*X,f[1]+da+zb(z)*X,f[0]+I+kb(z)*e,f[1]+da+zb(z)*e,f[0]+I,f[1]+da,X<0?"center":z<W/4?"left":"right",z];U.percentage=ca*100;U.total=a});this.setTooltipPoints()},render:function(){this.getAttribs();this.drawPoints();this.options.enableMouseTracking!==false&&this.drawTracker();
this.drawDataLabels();this.options.animation&&this.animate&&this.animate();this.isDirty=false},drawPoints:function(){var a=this.chart,b=a.renderer,c,d,e,f;t(this.data,function(g){d=g.graphic;f=g.shapeArgs;e=g.group;if(!e)e=g.group=b.g("point").attr({zIndex:5}).add();c=g.sliced?g.slicedTranslation:[a.plotLeft,a.plotTop];e.translate(c[0],c[1]);if(d)d.animate(f);else g.graphic=b.arc(f).attr(qa(g.pointAttr[db],{"stroke-linejoin":"round"})).add(g.group);g.visible===false&&g.setVisible(false)})},drawDataLabels:function(){var a=
this.data,b,c=this.chart,d=this.options.dataLabels,e=y(d.connectorPadding,10),f=y(d.connectorWidth,1),g,i,k=d.distance>0,j,n,z=this.center[1],F=[[],[],[],[]],W,ca,ka,v,I,da,X,U=4,R;mb.prototype.drawDataLabels.apply(this);t(a,function(Ha){var Ya=Ha.labelPos[7];F[Ya<0?0:Ya<Tb/2?1:Ya<Tb?2:3].push(Ha)});F[1].reverse();F[3].reverse();for(X=function(Ha,Ya){return Ha.y>Ya.y};U--;){a=0;b=[].concat(F[U]);b.sort(X);for(R=b.length;R--;)b[R].rank=R;for(v=0;v<2;v++){n=(da=U%3)?9999:-9999;I=da?-1:1;for(R=0;R<F[U].length;R++){b=
F[U][R];if(g=b.dataLabel){i=b.labelPos;ka=Bb;W=i[0];ca=i[1];j||(j=g&&g.getBBox().height);if(k)if(v&&b.rank<a)ka=vb;else if(!da&&ca<n+j||da&&ca>n-j){ca=n+I*j;W=this.getX(ca,U>1);if(!da&&ca+j>z||da&&ca-j<z)if(v)ka=vb;else a++}if(b.visible===false)ka=vb;if(ka==Bb)n=ca;if(v){g.attr({visibility:ka,align:i[6]})[g.moved?"animate":"attr"]({x:W+d.x+({left:e,right:-e}[i[6]]||0),y:ca+d.y});g.moved=true;if(k&&f){g=b.connector;i=[Za,W+(i[6]=="left"?5:-5),ca,Da,W,ca,Da,i[2],i[3],Da,i[4],i[5]];if(g){g.animate({d:i});
g.attr("visibility",ka)}else b.connector=g=this.chart.renderer.path(i).attr({"stroke-width":f,stroke:d.connectorColor||"#606060",visibility:ka,zIndex:3}).translate(c.plotLeft,c.plotTop).add()}}}}}}},drawTracker:ad.prototype.drawTracker,getSymbol:function(){}});ub.pie=Ma;ib.Highcharts={Chart:Hd,dateFormat:Mc,pathAnim:$c,getOptions:function(){return Sa},numberFormat:Gd,Point:zc,Color:Ub,Renderer:Qd,seriesTypes:ub,setOptions:function(a){Sa=ya(Sa,a);Bd();return Sa},Series:mb,addEvent:Qa,createElement:fb,
discardElement:Fc,css:Ia,each:t,extend:qa,map:jc,merge:ya,pick:y,extendClass:xb,version:"2.1.4"}})();


//
// Generated on Tue Dec 06 2011 04:47:21 GMT-0500 (EST) by Nodejitsu, Inc (Using Codesurgeon).
// Version 1.0.7
//

(function (exports) {


/*
 * browser.js: Browser specific functionality for director.
 *
 * (C) 2011, Nodejitsu Inc.
 * MIT LICENSE
 *
 */

if (!Array.prototype.filter) {
  Array.prototype.filter = function(filter, that) {
    var other = [], v;
    for (var i = 0, n = this.length; i < n; i++) {
      if (i in this && filter.call(that, v = this[i], i, this)) {
        other.push(v);
      }
    }
    return other;
  };
}

if (!Array.isArray){
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
}

var dloc = document.location;

var listener = {
  mode: 'modern',
  hash: dloc.hash,

  check: function () {
    var h = dloc.hash;
    if (h != this.hash) {
      this.hash = h;
      this.onHashChanged();
    }
  },

  fire: function () {
    if (this.mode === 'modern') {
      window.onhashchange();
    }
    else {
      this.onHashChanged();
    }
  },

  init: function (fn) {
    var self = this;

    if (!window.Router.listeners) {
      window.Router.listeners = [];
    }

    function onchange() {
      for (var i = 0, l = window.Router.listeners.length; i < l; i++) {
        window.Router.listeners[i]();
      }
    }

    //note IE8 is being counted as 'modern' because it has the hashchange event
    if ('onhashchange' in window && (document.documentMode === undefined
      || document.documentMode > 7)) {
      window.onhashchange = onchange;
      this.mode = 'modern';
    }
    else {
      //
      // IE support, based on a concept by Erik Arvidson ...
      //
      var frame = document.createElement('iframe');
      frame.id = 'state-frame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      this.writeFrame('');

      if ('onpropertychange' in document && 'attachEvent' in document) {
        document.attachEvent('onpropertychange', function () {
          if (event.propertyName === 'location') {
            self.check();
          }
        });
      }

      window.setInterval(function () { self.check(); }, 50);

      this.onHashChanged = onchange;
      this.mode = 'legacy';
    }

    window.Router.listeners.push(fn);

    return this.mode;
  },

  destroy: function (fn) {
    if (!window.Router || !window.Router.listeners) {
      return;
    }

    var listeners = window.Router.listeners;

    for (var i = listeners.length - 1; i >= 0; i--) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
      }
    }
  },

  setHash: function (s) {
    // Mozilla always adds an entry to the history
    if (this.mode === 'legacy') {
      this.writeFrame(s);
    }

    dloc.hash = (s[0] === '/') ? s : '/' + s;
    return this;
  },

  writeFrame: function (s) {
    // IE support...
    var f = document.getElementById('state-frame');
    var d = f.contentDocument || f.contentWindow.document;
    d.open();
    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
    d.close();
  },

  syncHash: function () {
    // IE support...
    var s = this._hash;
    if (s != dloc.hash) {
      dloc.hash = s;
    }
    return this;
  },

  onHashChanged: function () {}
};

var Router = exports.Router = function (routes) {
  if (!(this instanceof Router)) return new Router(routes);

  this.params   = {};
  this.routes   = {};
  this.methods  = ['on', 'once', 'after', 'before'];
  this._methods = {};

  this._insert = this.insert;
  this.insert = this.insertEx;

  this.configure();
  this.mount(routes || {});
};

Router.prototype.init = function (r) {
  var self = this;
  this.handler = function() {
    var hash = dloc.hash.replace(/^#/, '');
    self.dispatch('on', hash);
  };

  if (dloc.hash === '' && r) {
    dloc.hash = r;
  }

  if (dloc.hash.length > 0) {
    this.handler();
  }

  listener.init(this.handler);
  return this;
};

Router.prototype.explode = function () {
  var v = dloc.hash;
  if (v[1] === '/') { v=v.slice(1) }
  return v.slice(1, v.length).split("/");
};

Router.prototype.setRoute = function (i, v, val) {
  var url = this.explode();

  if (typeof i === 'number' && typeof v === 'string') {
    url[i] = v;
  }
  else if (typeof val === 'string') {
    url.splice(i, v, s);
  }
  else {
    url = [i];
  }

  listener.setHash(url.join('/'));
  return url;
};

//
// ### function insertEx(method, path, route, parent)
// #### @method {string} Method to insert the specific `route`.
// #### @path {Array} Parsed path to insert the `route` at.
// #### @route {Array|function} Route handlers to insert.
// #### @parent {Object} **Optional** Parent "routes" to insert into.
// insert a callback that will only occur once per the matched route.
//
Router.prototype.insertEx = function(method, path, route, parent) {
  if (method === "once") {
    method = "on";
    route = function(route) {
      var once = false;
      return function() {
        if (once) return;
        once = true;
        return route.apply(this, arguments);
      };
    }(route);
  }
  return this._insert(method, path, route, parent);
};


Router.prototype.getState = function () {
  return this.state;
};

Router.prototype.getRoute = function (v) {
  var ret = v;

  if (typeof v === "number") {
    ret = this.explode()[v];
  }
  else if (typeof v === "string"){
    var h = this.explode();
    ret = h.indexOf(v);
  }
  else {
    ret = this.explode();
  }

  return ret;
};

Router.prototype.destroy = function () {
  listener.destroy(this.handler);
  return this;
};function _every(arr, iterator) {
    for (var i = 0; i < arr.length; i += 1) {
        if (iterator(arr[i], i, arr) === false) {
            return;
        }
    }
}

function _flatten(arr) {
    var flat = [];
    for (var i = 0, n = arr.length; i < n; i++) {
        flat = flat.concat(arr[i]);
    }
    return flat;
}

function _asyncEverySeries(arr, iterator, callback) {
    if (!arr.length) {
        return callback();
    }
    var completed = 0;
    (function iterate() {
        iterator(arr[completed], function(err) {
            if (err || err === false) {
                callback(err);
                callback = function() {};
            } else {
                completed += 1;
                if (completed === arr.length) {
                    callback();
                } else {
                    iterate();
                }
            }
        });
    })();
}

function paramifyString(str, params, mod) {
    mod = str;
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            mod = params[param](str);
            if (mod !== str) {
                break;
            }
        }
    }
    return mod === str ? "([a-zA-Z0-9-]+)" : mod;
}

function regifyString(str, params) {
    if (~str.indexOf("*")) {
        str = str.replace(/\*/g, "([_.()!\\ %@&a-zA-Z0-9-]+)");
    }
    var captures = str.match(/:([^\/]+)/ig), length;
    if (captures) {
        length = captures.length;
        for (var i = 0; i < length; i++) {
            str = str.replace(captures[i], paramifyString(captures[i], params));
        }
    }
    return str;
}

Router.prototype.configure = function(options) {
    options = options || {};
    for (var i = 0; i < this.methods.length; i++) {
        this._methods[this.methods[i]] = true;
    }
    this.recurse = options.recurse || this.recurse || false;
    this.async = options.async || false;
    this.delimiter = options.delimiter || "/";
    this.strict = typeof options.strict === "undefined" ? true : options.strict;
    this.notfound = options.notfound;
    this.resource = options.resource;
    this.every = {
        after: options.after || null,
        before: options.before || null,
        on: options.on || null
    };
    return this;
};

Router.prototype.param = function(token, matcher) {
    if (token[0] !== ":") {
        token = ":" + token;
    }
    var compiled = new RegExp(token, "g");
    this.params[token] = function(str) {
        return str.replace(compiled, matcher.source || matcher);
    };
};

Router.prototype.on = Router.prototype.route = function(method, path, route) {
    var self = this;
    if (!route && typeof path == "function") {
        route = path;
        path = method;
        method = "on";
    }
    if (path.source) {
        path = path.source.replace(/\\\//ig, "/");
    }
    if (Array.isArray(method)) {
        return method.forEach(function(m) {
            self.on(m.toLowerCase(), path, route);
        });
    }
    this.insert(method, this.scope.concat(path.split(new RegExp(this.delimiter))), route);
};

Router.prototype.dispatch = function(method, path, callback) {
    var self = this, fns = this.traverse(method, path, this.routes, ""), invoked = this._invoked, after;
    this._invoked = true;
    if (!fns || fns.length === 0) {
        this.last = [];
        if (typeof this.notfound === "function") {
            this.invoke([ this.notfound ], {
                method: method,
                path: path
            }, callback);
        }
        return false;
    }
    if (this.recurse === "forward") {
        fns = fns.reverse();
    }
    function updateAndInvoke() {
        self.last = fns.after;
        self.invoke(self.runlist(fns), self, callback);
    }
    after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
    if (after && after.length > 0 && invoked) {
        if (this.async) {
            this.invoke(after, this, updateAndInvoke);
        } else {
            this.invoke(after, this);
            updateAndInvoke();
        }
        return true;
    }
    updateAndInvoke();
    return true;
};

Router.prototype.invoke = function(fns, thisArg, callback) {
    var self = this;
    if (this.async) {
        _asyncEverySeries(fns, function(fn, next) {
            if (typeof fn == "function") {
                fn.apply(thisArg, fns.captures.concat(next));
            }
        }, function() {
            if (callback) {
                callback.apply(thisArg, arguments);
            }
        });
    } else {
        _every(fns, function apply(fn) {
            if (Array.isArray(fn)) {
                return _every(fn, apply);
            } else if (typeof fn === "function") {
                return fn.apply(thisArg, fns.captures || null);
            } else if (typeof fn === "string" && self.resource) {
                self.resource[fn].apply(thisArg, fns.captures || null);
            }
        });
    }
};

Router.prototype.traverse = function(method, path, routes, regexp) {
    var fns = [], current, exact, match, next, that;
    if (path === this.delimiter && routes[method]) {
        next = [ [ routes.before, routes[method] ].filter(Boolean) ];
        next.after = [ routes.after ].filter(Boolean);
        next.matched = true;
        next.captures = [];
        return next;
    }
    for (var r in routes) {
        if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
            current = exact = regexp + this.delimiter + r;
            if (!this.strict) {
                exact += "[" + this.delimiter + "]?";
            }
            match = path.match(new RegExp("^" + exact));
            if (!match) {
                continue;
            }
            if (match[0] && match[0] == path && routes[r][method]) {
                next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
                next.after = [ routes[r].after ].filter(Boolean);
                next.matched = true;
                next.captures = match.slice(1);
                if (this.recurse && routes === this.routes) {
                    next.push([ routes["before"], routes["on"] ].filter(Boolean));
                    next.after = next.after.concat([ routes["after"] ].filter(Boolean));
                }
                return next;
            }
            next = this.traverse(method, path, routes[r], current);
            if (next.matched) {
                if (next.length > 0) {
                    fns = fns.concat(next);
                }
                if (this.recurse) {
                    fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
                    next.after = next.after.concat([ routes[r].after ].filter(Boolean));
                    if (routes === this.routes) {
                        fns.push([ routes["before"], routes["on"] ].filter(Boolean));
                        next.after = next.after.concat([ routes["after"] ].filter(Boolean));
                    }
                }
                fns.matched = true;
                fns.captures = next.captures;
                fns.after = next.after;
                return fns;
            }
        }
    }
    return false;
};

Router.prototype.insert = function(method, path, route, parent) {
    var methodType, parentType, isArray, nested, part;
    path = path.filter(function(p) {
        return p && p.length > 0;
    });
    parent = parent || this.routes;
    part = path.shift();
    if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
        part = regifyString(part, this.params);
    }
    if (path.length > 0) {
        parent[part] = parent[part] || {};
        return this.insert(method, path, route, parent[part]);
    }
    if (!part && !path.length && parent === this.routes) {
        methodType = typeof parent[method];
        switch (methodType) {
          case "function":
            parent[method] = [ parent[method], route ];
            return;
          case "object":
            parent[method].push(route);
            return;
          case "undefined":
            parent[method] = route;
            return;
        }
        return;
    }
    parentType = typeof parent[part];
    isArray = Array.isArray(parent[part]);
    if (parent[part] && !isArray && parentType == "object") {
        methodType = typeof parent[part][method];
        switch (methodType) {
          case "function":
            parent[part][method] = [ parent[part][method], route ];
            return;
          case "object":
            parent[part][method].push(route);
            return;
          case "undefined":
            parent[part][method] = route;
            return;
        }
    } else if (parentType == "undefined") {
        nested = {};
        nested[method] = route;
        parent[part] = nested;
        return;
    }
    throw new Error("Invalid route context: " + parentType);
};



Router.prototype.extend = function(methods) {
    var self = this, len = methods.length, i;
    for (i = 0; i < len; i++) {
        (function(method) {
            self._methods[method] = true;
            self[method] = function() {
                var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
                self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
            };
        })(methods[i]);
    }
};

Router.prototype.runlist = function(fns) {
    var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
    if (this.every && this.every.on) {
        runlist.push(this.every.on);
    }
    runlist.captures = fns.captures;
    runlist.source = fns.source;
    return runlist;
};

Router.prototype.mount = function(routes, path) {
    if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
        return;
    }
    var self = this;
    path = path || [];
    function insertOrMount(route, local) {
        var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
        if (isRoute) {
            rename = rename.slice(self.delimiter.length);
            parts.shift();
        }
        if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
            local = local.concat(parts);
            self.mount(routes[route], local);
            return;
        }
        if (isRoute) {
            local = local.concat(rename.split(self.delimiter));
        }
        self.insert(event, local, routes[route]);
    }
    for (var route in routes) {
        if (routes.hasOwnProperty(route)) {
            insertOrMount(route, path.slice(0));
        }
    }
};



}(window));

var GitHub;
var Owner;
var Repo;
var current_user = 'mephux';

(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text();  }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);

var __bind = function(fn, me) { 
  return function(){ return fn.apply(me, arguments) }; 
};

function update_request_count (requests) {
  if (requests.meta) {
    $('span#request-counter').html(requests.meta['X-RateLimit-Remaining']);
  };
};

function render(source, data) {
  var template = Handlebars.compile(source);
  return template(data);
};

function loading(callback) {

  $('img.lookycode-loading').remove();
  $('#user .inside').html("<div id='user-loading'></div>");
  
  $('<img class="lookycode-loading" width="341px" height="104px" ' + 
    'src="images/loading.png" />').css({
    position: 'absolute',
    display: 'block',
    width: '341px',
    opacity: 0,
    height: '104px',
    top: '350px',
    'z-index': 99999,
    left: $(window).width() / 2 - (341 / 2)
  }).prependTo('body').animate({
    opacity: 0.6
  }, 500);
  
  $('#page').stop().css({
    opacity: 1,
    display: 'block'
  }).animate({
    opacity: 0.4,
  }, 700, function() {
    
    $('img.lookycode-loading').fadeOut('fast');
    if (typeof callback == 'function') { callback(); };
    
  });
  
};

function buildChart(username, repos) {
  var chart;
  var data = { watchers: [], categories: [], forks: [], issues: []};
  
  if (repos.length < 2) {
    var text = '<div id="no-data">This user does not have enough ' + 
    'information to graph.</div>';

    $('#page').prepend('<div id="user-metrics" ' + 
    'style="width:960px;margin:auto;">' + text + '</div>');

    return false;
  };
  
  $('#page').prepend('<div id="user-metrics" ' + 
  'style="width:960px;margin:auto;"></div>');
  
  for (var i=0; i < repos.length; i++) {
    data.categories.push(repos[i].name)
    data.watchers.push(repos[i].watchers);
    data.forks.push(repos[i].forks);
    data.issues.push(repos[i].open_issues);
  };
  
  $(document).ready(function() {
     chart = new Highcharts.Chart({
        chart: {
           renderTo: 'user-metrics',
           defaultSeriesType: 'column',
           backgroundColor: 'transparent',
           zoomType: 'x',
           margin: [ 60, 30, null, 60],
           spacingRight: 20
        },
        credits: {
          enabled: false
        },
        title: {
          align: 'center',
          y: 25,
           text: username + ' repository metrics',
           style: {
             color: '#acacac'
           }
        },
        xAxis: {
          gridLineColor: '#000',
          categories: data.categories,
          labels: {
             rotation: -35,
             align: 'right',
             style: {
                  color: '#adadad',
                 font: 'normal 0.9em Verdana, sans-serif'
             }
          }
        },
        yAxis: {
          gridLineColor: '#515151',
          opposite: false,
           title: {
              text: 'Watchers, Forks, Issues.',
              margin: 5,
              style: {
                fontWeight: 'none',
                color: '#acacac'
              }
           },
           min: 0
        },
        legend: {
           align: 'right',
           x: 0,
           verticalAlign: 'top',
           y: 7,
           floating: false,
           backgroundColor: 'transparent',
           borderColor: '#000',
           borderWidth: 0,
           shadow: false,
           itemHoverStyle: {
           	color: '#FFF'
           },
           itemStyle: {
           	cursor: 'pointer',
           	color: '#d1d1d1'
           }
        },
        plotOptions: {
          column: {
            borderColor: 'transparent',
            borderWidth: 0,
            color: '#fff' 
          }
        },
        tooltip: {
          backgroundColor: {
             linearGradient: [0, 0, 0, 50],
             stops: [
                [0, 'rgba(96, 96, 96, .8)'],
                [1, 'rgba(16, 16, 16, .8)']
             ]
          },
          borderWidth: 0,
          style: {
             color: '#FFF'
          },
            formatter: function() {
               return '<b>'+ this.x +'</b>: '+
                   this.series.name +': '+ this.y +'<br/>';
            }
         },
        series: [{
           name: 'Watchers',
           color: '#84c2f0',
           data: data.watchers
        },{
          name: 'Forks',
          color: '#cb2b00',
          data: data.forks
       },{
          name: 'issues',
          color: '#79bc79',
          data: data.issues
       }]
     });

  });
}

Handlebars.registerHelper('repo-description', function(description) {
  if (description != null && description.length > 0) {
    return description;
  } else {
    return 'This repository description is currently unavailable.';
  };
});

Handlebars.registerHelper('truncate', function(string, length, message) {
  if (string != null && string.length > 0) {
    if (string.length > length) {
      return string.substring(0,length) + '...';
    } else {
      return string;
    };
  } else {
    return message;
  };
});

Handlebars.registerHelper('nil', function(data) {
  if (data != null && data.length > 0) {
    return data;
  } else {
    return '☹ Not Available';
  };
});

Handlebars.registerHelper('fullname', function() {
  if (this.name != null && this.name.length > 0) {
    return this.name;
  } else {
    return this.login;
  };
});

Handlebars.registerHelper('link', function(url) {
  if (url != null) {
    return url;
  } else {
    return '#';
  };
});

function error(data) {
  var error = $('<div id="error"></div>').css('opacity', 0);
  error.html('<div class="error-message">'+data.message+'</div>');
  $('#wrapper').css('opacity',0.1);
  $('body').prepend(error);
  error.animate({opacity: 1}, 200);
};

GitHub = (function() {
  
  function GitHub(username, callback) {
    var self = this;
    self.callback = callback;
    
    self.name = username;
    var raw = { 
      user: null, 
      repos: null
    };
    
    self.urls = {
      profile: {
        api: 'https://api.github.com/users/' + self.name,
        https: 'https://github.com/' + self.name,
      },
      repositories: {
        api: 'https://api.github.com/users/'+self.name+'/repos',
        https: 'https://github.com/' + self.name,
        other: 'https://api.github.com/users/'+self.name+'/repos' // '/fetch/' + self.name
      },
      followers: {
        api: 'https://api.github.com/users/'+self.name+'/followers',
        https: 'https://github.com/'+self.name+'/followers'
      },
      following: {
        api: 'https://api.github.com/users/'+self.name+'/following',
        https: 'https://github.com/'+self.name+'/following'
      }
    };
    
    self.fetch_user();
  };
  
  GitHub.prototype = {
    
    fetch_user: function() {
       var self = this;
       $.ajax({
         url: self.urls.profile.api,
         type: 'GET',
         contentType: "application/json; charset=utf-8",
         dataType: 'jsonp',
         success: function(json, textStatus, xhr) {
           update_request_count(json);
           
           self.user = json.data;
           self.user.more = {};

           self.user.more.followers = null;
           self.user.more.repos = null;
           self.user.more.following = null;
           self.user.more.gists = null;
           
           self.fetch_repos();
         },
         error: function(xhr, textStatus, errorThrown) {
           self.userError();
         }
       });
     },

     fetch_repos: function() {
       var self = this;
       
       $.ajax({
         url: self.urls.repositories.other,
         type: 'GET',
         contentType: "application/json; charset=utf-8",
         dataType: 'jsonp',
         success: function(data, textStatus, xhr) {
           update_request_count(data);
           self.repos = data.data;
           
           //self.build_repos();
           self.addUserInformation();
           
           if (self.callback) { self.callback(); };
         },
         error: function(xhr, textStatus, errorThrown) {
           self.repoError();
         }
       });
     },

     build_repos: function(){
       var self = this;
       $('#page').html("<ul id='repos' class='repos'></ul>");
       updateURL(self.name + " - Repositories", self.name);

       var count = 1;
       for (var i=0; i < self.repos.length; i++) {
         if (count == 1) {
           self.repos[i].klass = 'first'
           self.addUserRepo(self.repos[i]);
           count++
         } else if (count == 2) {
           self.repos[i].klass = 'middle'
           self.addUserRepo(self.repos[i]);
           count++
         } else {
           self.repos[i].klass = 'last'
           self.addUserRepo(self.repos[i]);
           count = 1;
         };

       };
       
       if (self.user) {
         self.user.repos = self.repos;
         self.addUserInformation();
       } else {
         self.userError();
       };
       
       buildChart(self.name, self.repos);
     },

     fetch_followers: function(){
      var self = this;

      updateURL(self.name + " - Followers", self.name + "/followers");

      var source = " \
        <ul id='followers' class='image-box'> \
        {{#more/followers}} \
        <li> \
        <a href='{{login}}' class='load-new-user' data-username='{{login}}'> \
          <img width='80px' height='80px' src='{{avatar_url}}' /> \
        </a> \
        <div id='username'>{{truncate login 13 \"???\"}}</div> \
        </li> \
        {{/more/followers}} \
        </ul>";
      
      if (self.user.more.followers == null) {
        $.ajax({
          url: self.urls.followers.api,
          type: 'GET',
          contentType: "application/json; charset=utf-8",
          dataType: 'jsonp',
          success: function(data, textStatus, xhr) {
            update_request_count(data);
            self.user.more.followers = data.data;
            
            if (data.meta.Link) {
              $('#page').html(render(source, self.user));
              
              var count = parseInt(data.meta.Link[data.meta.Link.length - 1]
              .toString().match(/page\=(\d+)/m)[1]) + 1;
              
              for (var i=2; i < count; i++) {
                
                self.fetch_more('https://api.github.com/users/' + 
                self.user.login + '/followers?page=' + i, 'followers');

              };
              
            } else {
              $('#page').html(render(source, self.user));
            };
            
          },
          error: function(xhr, textStatus, errorThrown) {
            self.user.more.followers = [];
            self.repoError();
          }
        });
        
      } else {
        $('#page').html(render(source, self.user));
      };
      
     },

     fetch_more: function(url, holder){
       var self = this;
       var source = " \
       {{#users}} \
       <li> \
         <a href='{{login}}' class='load-new-user' data-username='{{login}}'> \
           <img width='80px' height='80px' src='{{avatar_url}}' /> \
         </a> \
         <div id='username'>{{truncate login 13 \"???\"}}</div> \
       </li> \
       {{/users}}";
         
       $.ajax({
         url: url,
         type: 'GET',
         dataType: 'jsonp',
         success: function(data, textStatus, xhr) {
           update_request_count(data);
           
           for (var i=0; i < data.data.length; i++) {
             
            if (holder == 'followers') {
              self.user.more.followers.push(data.data[i]);
            } else {
              self.user.more.following.push(data.data[i]);
            };
            
           };
           
           $('ul#' + holder).append(render(source, { users: data.data }));
         }
       });
     },

     fetch_following: function(){
      var self = this;
     
      updateURL(self.name + " - Following", self.name + "/following");

      var source = " \
        <ul id='following' class='image-box'> \
          {{#more/following}} \
          <li> \
            <a href='{{login}}' class='load-new-user' data-username='{{login}}'> \
              <img width='80px' height='80px' src='{{avatar_url}}' /> \
            </a> \
            <div id='username'>{{truncate login 10 \"???\"}}</div> \
          </li> \
          {{/more/following}} \
        </ul>";
      
      if (self.user.more.following == null) {
        $.ajax({
          url: self.urls.following.api,
          type: 'GET',
          contentType: "application/json; charset=utf-8",
          dataType: 'jsonp',
          success: function(data, textStatus, xhr) {
            update_request_count(data);
            self.user.more.following = data.data;
            
            if (data.meta.Link) {
              $('#page').html(render(source, self.user));
              var count = parseInt(data.meta.Link[data.meta.Link.length - 1].toString().match(/page\=(\d+)/m)[1]) + 1;
              
              for (var i=2; i < count; i++) {
                self.fetch_more('https://api.github.com/users/'+self.user.login+'/following?page=' + i, 'following');
              };
              
            } else {
              $('#page').html(render(source, self.user));
            };

          },
          error: function(xhr, textStatus, errorThrown) {
            self.user.more.following = [];
            self.repoError();
          }
        });
        
      } else {
        $('#page').html(render(source, self.user));
      };
      
     },

     userError: function() {
       var user = new Handlebars.SafeString(self.name).string;
       error({
         message: '<s>We</s> You were unable to fetch this users' + 
          ' github information.',
         user: user
       });
     },

     repoError: function() {
       var user = new Handlebars.SafeString(self.name).string;
       error({
         message: '<s>We</s> You were unable to fetch the repository list from github.',
         user: user
       });
     },

     addUserRepo: function(repo) {
       var self = this;
       var source = " \
         <li class='repo {{klass}}' data-size='{{size}}' data-lang='{{language}}' data-fork='{{fork}}'> \
           <div class='inside'> \
             <div class='repo-title'> \
               <div class='repo-name'><a href='{{html_url}}' target='_blank'>{{name}}</a></div> \
               <div class='repo-size'>{{size}} KB</div> \
             </div> \
             <div class='repo-metadata'> \
               <div class='repo-description'>{{truncate description 130 \"This repository description is currently unavailable.\"}}</div> \
             </div> \
             <div class='repo-footer'> \
               <div class='repo-box first'> \
                 <a href='{{html_url}}/watchers' target='_blank'> \
                   {{watchers}}<div class='box-title'>Watchers</div> \
                 </a> \
               </div> \
               <div class='repo-box'> \
                 <a href='{{html_url}}/issues' target='_blank'> \
                   {{open_issues}}<div class='box-title'>Open Issues</div> \
                 </a> \
               </div> \
               <div class='repo-box last'> \
                 <a href='{{html_url}}/network' target='_blank'> \
                   {{forks}}<div class='box-title'>Forks</div> \
                 </a> \
               </div> \
             </div> \
           </div> \
         </li>";
         
       $('#page ul#repos').append(render(source, repo));
     },
     
     addUserInformation: function(){
       var self = this;
       var source = " \
       <div id='user-information'> \
         <div class='detail'> \
           <div id='avatar'> \
             <img width='80' height='80' id='user-avatar-paper' src='{{avatar_url}}' /> \
           </div> \
           <div id='name'>{{fullname}} <span class='username' title='{{login}}'>({{truncate login 10 \"???\"}})</span></div> \
           <ul id='more'> \
             <li><div class='key'>Company</div> <div class='value'>{{nil company}}</div></li> \
             <li><div class='key'>Website</div> <div class='value'><a href='{{link blog}}'>{{nil blog}}</a></div></li> \
             <li><div class='key'>Location</div> <div class='value'>{{nil location}}</div></li> \
           </ul> \
         </div> \
         <ul id='user-info'> \
           <li> \
             <div class='user-inside'> \
               <a class='followers' href='https://github.com/{{login}}/followers' target='_blank'> \
                 <div class='info-title green'>followers</div><div class='info-count'>{{followers}}</div> \
               </a> \
             </div> \
           </li> \
           <li> \
             <div class='user-inside'> \
               <a class='following' href='https://github.com/{{login}}/following' target='_blank'> \
               <div class='info-title blue'>following</div><div class='info-count'>{{following}}</div> \
               </a> \
             </div> \
           </li> \
           <li> \
             <div class='user-inside'> \
               <a class='gists' href='https://gist.github.com/{{login}}' target='_blank'> \
                 <div class='info-title orange'>public gists</div><div class='info-count'>{{public_gists}}</div> \
               </a> \
             </div> \
           </li> \
           <li> \
             <div class='user-inside'> \
               <a class='repositories' href='{{html_url}}' target='_blank'> \
                 <div class='info-title red'>public repos</div><div class='info-count'>{{public_repos}}</div> \
               </a> \
             </div> \
           </li> \
         </ul> \
       </div>";
       
       $('#user .inside').html(render(source, self.user));
     }
  };
  
  return GitHub;
})();

Owner = (function() {
  
  function Owner(user) {
    this.name = user.login;
  };
  
  Owner.prototype.toHTML = function() {
    return '<strong>' + this.name + '</strong><br />';
  };
  
  return Owner;
})();

Repo = (function() {
  function Repo(repository) {
    return repository;
  };
  
  Repo.prototype.toHTML = function() {
    return '<strong>' + this.name + '</strong><br />';
  };
  
  return Repo;
})();

updateURL = function(title, route) {
  if (history && history.pushState) {
    history.pushState(null, title, "#/" + route);
  } else {
    document.title = title;
    window.location.hash = "#/" + route;
  };
};

jQuery(document).ready(function($) {
  
  if ((window.location.hash == "") || (window.location.pathname != "/")) {
    updateURL("Mephux", "mephux");
    current_user = new GitHub("mephux", function() {
      current_user.build_repos();
    });
  };
 
  $('#logo a').live('click', function() {
    event.preventDefault();

    updateURL("Mephux", "mephux");

    if (current_user && (current_user.name === "mephux")) {
      current_user.build_repos();
    } else {
      current_user = new GitHub("mephux", function() {
        current_user.build_repos();
      });
    }
  });

  $('a.followers').live('click', function(event) {
    event.preventDefault();
    current_user.fetch_followers();
  });
  
  $('a.following').live('click', function(event) {
    event.preventDefault();
    current_user.fetch_following();
  });
  
  $('a.repositories').live('click', function(event) {
    event.preventDefault();
    current_user.build_repos();
  });
  
  $('a.load-new-user').live('click', function(event) {
    event.preventDefault();
    var username = $(this).data('username');
    
    $('img#user-avatar-paper').animate({
      opacity: 0
    }, 400);
    
    $.scrollTo('#header', 500);
    
    var image = $('img', this).clone().addClass('tmp-avatar').css({
      display: 'block',
      position: 'absolute',
      'z-index': 99999,
      overflow: 'hidden',
    	border: '1px solid #383838',
      top: $('img', this).offset().top,
      left: $('img', this).offset().left
    }).appendTo('body').animate({
      top: $('img#user-avatar-paper').offset().top,
      left: $('img#user-avatar-paper').offset().left
    }, 400, function() {
       current_user = new GitHub(username, function() {
         $('title').html('Looky some code from ' + username);

        updateURL(username, username);
        current_user.build_repos();
        
        $('img.tmp-avatar').remove();
     });
     
    });
    
  });
  
  $('form#find-user').submit(function(event) {
    event.preventDefault();
    var self = this;
    var username = $('input', this).attr('value');
    
    if (username.length > 0) {
      
      loading(function() {

        current_user = new GitHub(username, function() {
          
          $('#page').animate({
            opacity: 1
          }, 500);
          
          $('title').html('Looky some code from ' + username);

          updateURL(document.title, username)

          $('input', self).blur();
          $('input', self).val('');

          current_user.build_repos();
          
        });
        
      });
      
    };
  });
  
  $('#error').live('click', function(event) {
    event.preventDefault();
    $(this).animate({
      opacity: 0
      }, 500, function() {
      $(this).remove();
      
      loading(function() {
        current_user = new GitHub('mephux', function() {
        $('#wrapper, #page').fadeTo('fast', 1);
        });
      });
      
    });
  });
 

  // Router

  route = function(type) {
    if (type === "followers") {
      current_user.fetch_followers();
    } else if (type === "following") {
      current_user.fetch_following();
    } else if (type === "/") {
      current_user.build_repos(); 
    } else {
    
    };
  };

  var routes = {
    '/:username': function(username) {
      if (username === current_user.name) {
        route("/");
      } else {
        current_user = new GitHub(username, function() {
          current_user.build_repos();
        });
      };
    },
    '/:username/:type': function(username, type) {

      if (username === current_user.name) {
        route(type);
      } else {
        current_user = new GitHub(username, function() {
          route(type);
        });
      };

    }
  };

  var router = Router(routes); 
  router.init();

});
