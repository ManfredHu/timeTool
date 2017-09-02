# TimeTool
时间工具模块，因为太多的操作需要操作时间部分，比如缓存的读取等等。
这里只是做了日期的基本获取和判断等等。

# API

```
TimeTool.getTime() //1504342639813
TimeTool.getDate() //2
TimeTool.getDay() //7
TimeTool.getMonth() //9
TimeTool.getFullYear() //2017
TimeTool.getHours() //16
TimeTool.getMinutes() //57
TimeTool.getSecords() //19
TimeTool.getDateFormat() //20170902
TimeTool.getDateFormat({character: '-'}) //2017-09-02
TimeTool.getDateFormat({character: '/'}) //2017/09/02
TimeTool.getTimeFormat() //165719
TimeTool.getTimeFormat({character: '-'}) //16-57-19
TimeTool.getTimeFormat({character: '/'}) //16/57/19
TimeTool.getDateAndTimeFormat() //20170902 165719
TimeTool.getDateAndTimeFormat({dateCharacter: '-',timeCharacter: ':'}) //2017-09-02 16:57:19
TimeTool.getDateAndTimeFormat({dateCharacter: '/',timeCharacter:':',dateTimeSplit'-'}) //2017/09/02-16:57:19

```

# 后续
添加更多的时间操作方法，有需求的可以在issue提。

# License
MIT. Copyright (c) 2016 ManfredHu.
