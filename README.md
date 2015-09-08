# compare2dts
A tool used to compare 2 .d.ts files find differences under egret module including classes interfaces enums ignoring others.
generate a template .json(gen.json) which is used for editing to make a list of problems solved as a config next time to compare.

2015.9.8 NEW FEATURES
2015年9月8日新特性
support multiple .json files merging into a single config.json Obj innerside
支持多个json文件输入合并成为一个在内存中的配置文件

new commend
新加的命令

load_multi_format
输入多个文件名合并解析成一个配置文件

2015.9.7 NEW FEATURES
2015年9月7日新特性

new command
新加的命令

compare_gen
比较并将结果输出到一个json文件中

see more in compare_gen.js
用法详见js源码

## Usage
```shell
node compare_gen.js
```

```shell
node compare2dts.js [-simple] your1st.d.ts your2nd.d.ts [your_issues_solvedlist_config.json]
```

You can directly run [test.js](https://github.com/jackyanjiaqi/compare2dts/test.js) which has used a set of test data under [testdata](https://github.com/jackyanjiaqi/compare2dts/testdata) folder to see a console log out
```
node test.js 
```



