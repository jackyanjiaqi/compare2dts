(function(){
	var LineReader = require('./lib/line_reader');

	var parseMap = {lines:[]};

	var solvedJson = null;

	var GRADULE_PARSE = 1;

	var CLASS_INTERFACE_ENUM_PARSE = 2;

	var IGNORE_PARSE = 3;

	var mark = undefined;

	var currentLineNum = 0;

	var state = -1;

	var braceStack = [];//花括号栈

	/*控制项*/
	var isComment = false;//去除注释
	var isParseEnabled = false;//解析开关,目前只解析egret模组的内容

	/*统计项*/
	var keep_count = 0;
	var differ_count = 0;
	var ignore_count = 0;
	var solved_count = 0;

	/**
	 * 解析行并构成简单解析Map（用于后续比较）
	 * @param lineStr
	 */
	function parseLineAndMergeInMap(lineStr){
		//行号＋1
		currentLineNum ++;
		//console.log(lineStr);

		//注释忽略
		if(isCommentIgnored(lineStr)){
			return ;
		}

		//标记解析范围并打开解析开关 不允许declare module egret嵌套
		if(!isParseEnabled && lineStr.indexOf('declare module egret {') !== -1){
			state = GRADULE_PARSE;
			braceStack.push(state);
			isParseEnabled = true;
			return ;
		}
		//执行解析
		if(isParseEnabled){
			//解析class和interface以及enum并将行作为索引
			if((lineStr.indexOf('class ') !== -1 ||
				lineStr.indexOf('interface ') !== -1 ||
				lineStr.indexOf('enum ') !== -1) && lineStr.indexOf('{') !== -1){
				state = CLASS_INTERFACE_ENUM_PARSE;
				braceStack.push(state);
				//空格切分单词
				var reg=/\s+/g;
				var arr = lineStr.split(reg);
				//类＋类名/接口 + 接口名 为索引值
				mark = (function(arr){
					//去掉前导限定符 比如 static declare const
					for(var i =0;i<arr.length;i++){
						if(arr[i] == 'class' ||
							arr[i] == 'interface' ||
							arr[i] == 'enum'){
							return arr[i] + ' ' + arr[i+1];
						}
					}
				})(arr);
				//预定义数据格式（当前开始行号）
				parseMap[mark] = {lineFrom:currentLineNum,lines:[]};
			}else
			if(lineStr.indexOf('{') !== -1){
				braceStack.push(IGNORE_PARSE);
			}
			else
			//回括及处理
			if(lineStr.indexOf('}') !== -1){
				var endState = braceStack.pop();
				if(endState === CLASS_INTERFACE_ENUM_PARSE){
					parseMap[mark].lineEnd = currentLineNum;
				}else
				if(endState === GRADULE_PARSE){
					isParseEnabled = false;
					mark = undefined;
				}
				//弹出栈后标记当前状态
				if(braceStack.length>=1){
					state = braceStack[braceStack.length-1];
				}else{
					state = -1;
				}
			}else{
				//根据状态直接将行插入到lines数组中
				if(state === GRADULE_PARSE){
					parseMap.lines.push(lineStr);
				}
				if(state === CLASS_INTERFACE_ENUM_PARSE){
					parseMap[mark].lines.push(lineStr);
				}
			}
		}
	}

	/**
	 * 解析行并于解析好的Map比较
	 * @param lineStr
	 */
	function parseLineAndCompareWithMap(lineStr) {
		//行号＋1
		currentLineNum ++;
		//console.log(lineStr);

		//注释忽略
		if(isCommentIgnored(lineStr)){
			return ;
		}
		//标记解析范围并打开解析开关 不允许declare module egret嵌套
		if (!isParseEnabled && lineStr.indexOf('declare module egret {') !== -1) {
			state = GRADULE_PARSE;
			braceStack.push(state);
			isParseEnabled = true;
			return;
		}
		//执行解析
		if (isParseEnabled) {
			//解析class和interface并将行作为索引
			if ((lineStr.indexOf('class ') !== -1 ||
				lineStr.indexOf('interface ') !== -1 ||
				lineStr.indexOf('enum ')) && lineStr.indexOf('{') !== -1) {
				state = CLASS_INTERFACE_ENUM_PARSE;
				braceStack.push(state);
				//空格切分单词
				var reg = /\s+/g;
				var arr = lineStr.split(reg);
				//类＋类名/接口 + 接口名 为索引值
				mark = (function (arr) {
					//去掉前导限定符 比如 static declare const
					for (var i = 0; i < arr.length; i++) {
						if (arr[i] == 'class' ||
							arr[i] == 'interface' ||
							arr[i] == 'enum') {
							return arr[i] + ' ' + arr[i + 1];
						}
					}
				})(arr);
				//预定义数据格式（当前开始行号）
				//parseMap[mark] = {lineFrom:currentLineNum,lines:[]};
			} else if (lineStr.indexOf('{') !== -1) {
				braceStack.push(IGNORE_PARSE);
			}
			else
			//回括及处理
			if (lineStr.indexOf('}') !== -1) {
				var endState = braceStack.pop();
				if (endState === CLASS_INTERFACE_ENUM_PARSE) {

				} else if (endState === GRADULE_PARSE) {
					isParseEnabled = false;
					mark = undefined;
				}
				//弹出栈后标记当前状态
				if (braceStack.length >= 1) {
					state = braceStack[braceStack.length - 1];
				} else {
					state = -1;
				}
			} else {
				//根据状态与Map中的行比较并输出
				if (state === GRADULE_PARSE) {
					if (!_isLineMatch(lineStr, parseMap.lines)) {
						differ_count++;
						//输出不匹配项
						consoleOut(currentLineNum,null,lineStr);
						//输出不匹配原因
						//console.log('///Member_Undefined');
					} else {
						keep_count++;
					}
				}else
				if (state === CLASS_INTERFACE_ENUM_PARSE) {
					if (_isMarkMatch(mark, parseMap)) {
						if (!_isLineMatch(lineStr, parseMap[mark].lines)) {
							differ_count ++;
							//输出不匹配项
							consoleOut(currentLineNum,mark,lineStr);
							//输出不匹配原因
							//console.log('///ClassOrInterfaceOrEnum_Member_Undefined');
						} else {
							keep_count ++;
						}
					} else {
						differ_count ++;
						//输出不匹配项
						consoleOut(currentLineNum,mark,lineStr);
						//输出不匹配原因
						//console.log('///ClassOrInterfaceOrEnum_Not_Found');
					}
				}
			}
		}
	}

	function _isMarkMatch(mark, obj) {
		return mark in obj;
	}

	function _isLineMatch(str, matching) {
		if (matching instanceof Array) {
			return matching.some(function (item, i) {
				if (str == item) {
					//删除该行便于加速后续的比较
					matching.splice(i, 1);
					return true;
				} else
					return false;
			});
		} else if (typeof matching === 'object') {
			if (str in matching) {
				delete matching[str];
				return true;
			}
		}
		return false;
	}

	//输出
	function consoleOut(lineNum,mark,lineStr){
        var solvedKeyPattern;
        var lineNumPattern = 'Line ' + lineNum + ':';
        if(mark){
            solvedKeyPattern = mark + '{ ' + lineStr + ' }';
        }else{
            solvedKeyPattern = lineStr;
        }

		if(isConsoleIgnored(solvedKeyPattern)){
			solved_count ++;
			return ;
		}

        console.log(lineNumPattern + solvedKeyPattern);

	}

	function isCommentIgnored(lineStr){
		//单行注释
		if(lineStr.indexOf('//') !== -1){
			return true;
		}
		if(lineStr.indexOf('/*') !== -1){
			//单行注释
			if(lineStr.indexOf('*/') !== -1){
				isComment = false;
				return true;
			}
			isComment = true;
		}
		//多行注释结尾
		if(lineStr.indexOf('*/') !== -1){
			isComment = false;
			return true;
		}
		return isComment;
	}

	function isConsoleIgnored(solvedKey){
		if(solvedJson){
			return solvedJson.some(function(item){
				return item.desc == solvedKey;
			});
		}
		return false;
	}

	function buildJsonObject(jsonFilePath,doneFunc){
		var jsonStr = "";
		LineReader.eachLine(jsonFilePath,function(line,last){
			jsonStr += line;
			if(last){
				solvedJson = JSON.parse(jsonStr);
				doneFunc();
			}
		});
	}

	function startParse(comparedFilePath,comparingFilePath){
		currentLineNum = 0;
		LineReader.eachLine(comparedFilePath, function (line, last) {
			if (typeof line == 'string') {
				parseLineAndMergeInMap(trim(line));
			}
			if (last) {
				console.log("-ParseEnd-");
				startCompare(comparingFilePath);
			}
		});
	}

	function startCompare(comparingFilePath) {
		currentLineNum = 0;
		LineReader.eachLine(comparingFilePath, function (line, last) {
			if (typeof line == 'string') {
				parseLineAndCompareWithMap(trim(line));
			}
			if (last) {
				console.log("-CompareEnd-");
				console.log("Differences:" + differ_count);
				console.log("Kept:" + keep_count);
                if(solvedJson){
                    console.log("Solved:" + solved_count);
                    console.log("Left:" + (differ_count - solved_count));
                }
				//console.log("Ignored:" + ignore_count);
			}
		});
	}

	function trim(str) {
		return str.replace(/(^\s+)|(\s+$)/g, "");
	}

	function compare(){
		if(arguments.length<2){
			return help();
		}
		var comparingFilePath = arguments[0];
		var comparedFilePath = arguments[1];
		var solvedJsonFile = arguments[2];//过滤已经处理的json
		if(solvedJsonFile){
			buildJsonObject(solvedJsonFile,function(){
				startParse(comparedFilePath,comparingFilePath);
			});
		}else{
			startParse(comparedFilePath,comparingFilePath);
		}
	}

	function help(){
		console.log('tip:need at least 2 params ');
		console.log('example: arg1.dts arg2.dts [config.json]');
	}

	module.exports.compare = compare;
})();

if(process.argv.length>3){
	module.exports.compare(process.argv[2],process.argv[3],process.argv[4]);
}


