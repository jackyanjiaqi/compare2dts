/**
 *
 * 三个参数分别为
 * 1.比较的文件
 * 2.被比较的文件
 * 3.可选的修复配置文件（单个文件［文件名］或多个文件［需配合“load_multi_formt”命令］）
 * 结果以控制台输出为主
 *
 * Created by yanjiaqi on 15/8/27.
 */
var DTSCompareTool = require('./compare2dts');

var comparingFilePath = __dirname + '/testdata/allinone2.0.4.d.ts';
var comparedFilePath = __dirname + '/testdata/allinone2.4.0.d.ts';
var jsonConfigFilePath = __dirname + '/testdata/solved.json';

//测试compare命令
//DTSCompareTool.compare('-simple',comparingFilePath,comparedFilePath,jsonConfigFilePath);
//DTSCompareTool.compare(comparingFilePath,comparedFilePath,jsonConfigFilePath);

//测试多json版本的compare命令
DTSCompareTool.compare(
    comparingFilePath,
    comparedFilePath,
    DTSCompareTool.load_multi_format(
        jsonConfigFilePath,
        __dirname + '/testdata/merge_test1.json',
        __dirname + '/testdata/merge_test2.json'
    ));

//测试compare_gen命令
//DTSCompareTool.compare_gen(comparingFilePath,comparedFilePath,jsonConfigFilePath,__dirname + '/testdata/gen.json');
//DTSCompareTool.compare_gen(comparingFilePath,comparedFilePath,jsonConfigFilePath);

