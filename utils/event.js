function addKeyDownEvent() {
  // 获取canvas元素
  var canvas = renderer.domElement;

  // 监听空格键
  window.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      // 将canvas元素转换为数据URL
      var dataURL = canvas.toDataURL();
      console.log("dataurl", dataURL);
      // 创建一个a元素来下载截图
      var link = document.createElement("a");
      link.href = dataURL;
      link.download = "screenshot.png";
      link.click();
    }
  });
}
