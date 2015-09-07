/**
 *
 * 三个参数分别为
 * 1.比较的文件
 * 2.被比较的文件
 * 3.修复配置文件（不会显示在比较差异列表中）
 * 结果以控制台输出为主
 *
 * Created by yanjiaqi on 15/8/27.
 */
var DTSCompareTool = require('./compare2dts');

var comparingFilePath = __dirname + '/testdata/allinone2.0.4.d.ts';
var comparedFilePath = __dirname + '/testdata/allinone2.4.0.d.ts';
var jsonConfigFilePath = __dirname + '/testdata/solved.json';
//测试compare
//DTSCompareTool.compare('-simple',comparingFilePath,comparedFilePath,jsonConfigFilePath);
//DTSCompareTool.compare(comparingFilePath,comparedFilePath,jsonConfigFilePath);
//测试compare_gen
DTSCompareTool.compare_gen(comparingFilePath,comparedFilePath,jsonConfigFilePath,__dirname + '/testdata/gen.json');

