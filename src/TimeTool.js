/*!
 * timeTool v1.0.0 ~ Copyright (c) 2017 Manfred, http://www.manfredhu.com/
 * Released under MIT license
 */
var Time = {
	//获取时间
	getTime: function(date){
		if(typeof date != 'undefined'){
			return new Date(date).getTime();
		}
		return new Date().getTime();
	},
	//获取今天是一个月的几号
	getDate: function(date){
		if(date instanceof Date){
			return date.getDate();
		}
		return new Date().getDate();
	},
	//返回一周的某一天（1-7），对应周一到周日
	getDay: function(date){
		if(date instanceof Date){
			return date.getDay() + 1;
		}
		return new Date().getDay() + 1;
	},
	getMonth: function(date){
		if(date instanceof Date){
			return date.getMonth() + 1;
		}
		return new Date().getMonth() + 1;
	},
	getFullYear: function(date){
		if(date instanceof Date){
			return date.getFullYear();
		}
		return new Date().getFullYear();
	},
	getHours: function(date){
		if(date instanceof Date){
			return date.getHours();
		}
		return new Date().getHours();
	},
	getMinutes: function(date){
		if(date instanceof Date){
			return date.getMinutes();
		}
		return new Date().getMinutes();
	},
	getSecords: function(date){
		if(date instanceof Date){
			return date.getSeconds();
		}
		return new Date().getSeconds();
	},
	/**
	 * 获取标准日期格式
	 * @param  {[type]} obj.character [日期分隔符]
	 * @param  {[type]} obj.date 	  [传入的Date，否则获取当前时间]
	 * @return {[type]}     [description]
	 */
    getDateFormat: function(obj){
    	var date = obj && obj.date || new Date();
    	var dateArr = [];
    	dateArr.push(Time.singleDigitFormat(Time.getFullYear(date)));
    	dateArr.push(Time.singleDigitFormat(Time.getMonth(date)));
    	dateArr.push(Time.singleDigitFormat(Time.getDate(date)));
		return dateArr.join(obj && obj.character || '');
    },
    /**
	 * 获取标准时间格式
	 * @param  {[type]} obj.character [日期分隔符]
	 * @param  {[type]} obj.date 	  [传入的Date，否则获取当前时间]
	 * @return {[type]}     [description]
	 */
    getTimeFormat: function(obj){
    	var date = obj && obj.date || new Date();
    	var dateArr = [];
    	dateArr.push(Time.singleDigitFormat(Time.getHours(date)));
    	dateArr.push(Time.singleDigitFormat(Time.getMinutes(date)));
    	dateArr.push(Time.singleDigitFormat(Time.getSecords(date)));
		return dateArr.join(obj && obj.character || '');
    },
    /**
     * 获取标准日期和时间
     * @param  {[type]} obj [description]
     * @return {[type]}     [description]
     */
    getDateAndTimeFormat: function(obj){
    	var date = obj && obj.date || new Date();
    	var dateCharacter = obj && (obj.dateCharacter || obj.character);
    	var dateTemp = Time.getDateFormat({character: dateCharacter,date: date});
    	var timeCharacter = obj && (obj.timeCharacter || obj.character);
    	var timeTemp = Time.getTimeFormat({character: timeCharacter,date: date});
    	var dateTimeSplit = obj && obj.dateTimeSplit || ' ';
    	return dateTemp + dateTimeSplit + timeTemp;
    },
    //月份、日期补齐0
    singleDigitFormat: function(d){
    	d = d + '';
    	if(d.length == 1){
    		d = '0' + d;
    	}
    	return d;
    }
}
if (typeof exports !== 'undefined') exports.TimeTool = Time;
else window.TimeTool = Time;