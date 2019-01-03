// function getHtmlSize(){
//     //  假设设计稿大小
//  var sesigNidth = 750;
//  // 假设设计稿根元素的大小 200
//   var designFontSize = 200;
//  //  获取当前屏幕的宽度
//   var windowWidth = document.documentElement.offsetWidth;
//  //  计算当前屏幕的根元素大小
//  var nowFontSize = windowWidth / (sesigNidth / designFontSize);
 
//  document.documentElement.style.fontSize = nowFontSize + "px";

// }
// getHtmlSize();
// window.addEventListener('resize',getHtmlSize);


// 把rem改变根元素的字体大小的代码放到文件 需要的地方引入即可
setNowFontSize();

function setNowFontSize() {
    // 根元素计算公式
    // 已知默认根元素大小100px  已知标准屏幕是375px   
    // 当前屏幕根元素的字体大小 =  已知默认根元素大小100px 已知标准屏幕是375px       当前屏幕大小
    // 当前屏幕 / 标准屏幕 ==   当前根元素字体 / 标准根元素字体
    // 750 / 375 ==   x / 100
    // 750 / 375 * 100 == x
    // 当前字体 =  当前屏幕 / 标准屏幕 * 标准屏幕根元素大小
    var StandardWidth = 375;
    var StandardFontSize = 100;
    var maxFontSize = 200;
    var nowWidth = document.documentElement.offsetWidth;
    var nowFontSize = nowWidth / StandardWidth * StandardFontSize;
    console.log(nowWidth);
    console.log(nowFontSize);
    // 做最大限制可以在JS判断字体大小 超过200 默认为200
    if(nowFontSize > maxFontSize){
        nowFontSize = maxFontSize;
    }
    // 把计算好的nowFontSize设置给当前屏幕的根元素 注意要带px单位
    document.documentElement.style.fontSize = nowFontSize + 'px';
}
window.addEventListener('resize', setNowFontSize);
