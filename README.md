# compare2dts
A tool used to compare 2 .d.ts files find differences under egret module including classes interfaces enums ignoring others.
generate a template .json(gen.json) which is used for editing to make a list of problems solved as a config next time to compare.
2015.9.7 NEW FEATURES
new command
compare_gen
see more in compare_gen.js
## Usage
```shell
node compare_gen.js
```

```shell
node compare2dts.js [-simple] your1st.d.ts your2nd.d.ts [your_fixed_config.json]
```

You can directly run [test.js](https://github.com/jackyanjiaqi/compare2dts/test.js) which has used a set of test data under [testdata](https://github.com/jackyanjiaqi/compare2dts/testdata) folder to see a console log out
```
node test.js 
```



