const contentGenerator = require('./utils/contentGenerator.js');

/* seo內容文件 */
const monitorCode = contentGenerator('../contents/monitor.html');
const headerContent = contentGenerator('../contents/header.html');
const mainContent = contentGenerator('../contents/main.html');
const footerContent = contentGenerator('../contents/footer.html');

/* 正式路徑 */
const mainPage = 'https://udn.com/newmedia/2020/12-years-education/';
const pathRoot = process.env.NODE_ENV === 'production' ? 'https://udn.com/newmedia/2020/12-years-education/data/' : './';

/* 測試路徑 */
// const mainPage = 'https://nmdap.udn.com.tw/newmedia/2020/12-years-education/';
// const pathRoot = process.env.NODE_ENV === 'production' ? 'https://nmdap.udn.com.tw/newmedia/2020/12-years-education/data/' : './';

module.exports = {
  publicPath: pathRoot,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '最不快樂的世代 10個關鍵數字看懂台灣教育 | 專題 | 聯合報',
      description: '台灣教育經過一次又一次的教改，變得更好了嗎？從數據看到：學生成績好，但怕失敗、沒自信、不快樂；家長對教育充滿不信任......10張圖表，帶你看懂台灣教育現況。',
      keywords: '108課綱,12年國教,教育預算,教改,少子化,PISA',
      author: '洪欣慈、張心慈、楊若榆',
      datePublished: '2020-07-09T07:00:00+08:00',
      dateModified: '2020-07-09T07:00:00+08:00',
      MONITOR: monitorCode,
      CONTENT: headerContent + mainContent + footerContent,
      pageUrl: pathRoot,
      mainPage,
      theme: '#ffffff'
    },
  }
}