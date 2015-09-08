/**
 *
 * 三个参数分别为
 * 1.比较的文件
 * 2.被比较的文件
 * 3.修复配置文件（单个文件［文件名］或多个文件［需配合“load_multi_formt”命令］）
 * 4.结果以配置文件的方式输出,必须给出genFilePath参数,不能省略
 *
 * Created by yanjiaqi on 15/9/7.
 */
var DTSCompareTool = require('./compare2dts');

var comparingFilePath = __dirname + '/testdata/allinone2.0.4.d.ts';
var comparedFilePath = __dirname + '/testdata/allinone2.4.0.d.ts';
var jsonConfigFilePath = __dirname + '/testdata/solved.json';
var genFilePath = __dirname + '/testdata/gen.json';

//测试compare_gen命令
//DTSCompareTool.compare_gen(comparingFilePath,comparedFilePath,jsonConfigFilePath,genFilePath);
//写回配置文件
//DTSCompareTool.compare_gen(comparingFilePath,comparedFilePath,jsonConfigFilePath);
//多文件输入并生成额外的配置文件
DTSCompareTool.compare_gen(
    comparingFilePath,//用于比较的dts文件
    comparedFilePath,//用于参照的dts文件
    DTSCompareTool.load_multi_format(
        jsonConfigFilePath,//多项配置文件载入
        __dirname + '/testdata/merge_test1.json',
        __dirname + '/testdata/merge_test2.json'
    ),
    genFilePath//输出配置文件
)

