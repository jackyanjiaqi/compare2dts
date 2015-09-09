/**
 * Created by yanjiaqi on 15/9/9.
 */
var DTSCompareTool = require('./compare2dts');
var comparingFilePath = __dirname + '/testdata/allinone2.0.4.d.ts';
var comparedFilePath = __dirname + '/testdata/allinone2.4.0.d.ts';
var genFilePath = __dirname + '/testdata/gen.json';

DTSCompareTool.compare_gen(
    comparingFilePath,
    comparedFilePath,
    DTSCompareTool.load_format(__dirname + '/real-data'),
    genFilePath);

//DTSCompareTool.load_multi_format(
//        __dirname + '/real-data/solved_copy.json',
//        __dirname + '/real-data/solved_deprecated.json',
//        __dirname + '/real-data/solved_mainloop.json',
//        __dirname + '/real-data/solved_name_change.json',
//        __dirname + '/real-data/solved_other.json',
//        __dirname + '/real-data/solved_right.json'
//    );