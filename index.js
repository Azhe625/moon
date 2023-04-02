var scene;
var camera;
var width = window.innerWidth; //宽度
var height = window.innerHeight; //高度
var k = width / height; //窗口宽高比
var s = 200;
var renderer;
var controls;
var r = 200; //半径200

function initScene() {
  //场景对象
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x101010);
  // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
  // var axisHelper = new THREE.AxesHelper(250);
  // scene.add(axisHelper);
}

function initCamera() {
  //创建相机对象
  //  camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000); //正交相机
  camera = new THREE.PerspectiveCamera(45, k, 0.1, 10000); //透视相机
  camera.position.set(100, 0, 200); //设置相机位置
  camera.lookAt(scene.position);
}

function initControls() {}

/**
 * 光源设置
 **/
function initLight() {
  // //点光源
  // var point = new THREE.PointLight(0x444444);
  // point.position.set(0, 0, 0); //点光源位置
  // scene.add(point); //光源添加到场景中

  // var point2 = new THREE.PointLight(0xffffff);
  // point2.position.set(-500, 0, 0); //点光源位置
  // scene.add(point2); //点光源添加到场景中

  // var point3 = new THREE.PointLight(0xffffff);
  // point3.position.set(0, 0, 500); //点光源位置
  // scene.add(point3); //点光

  //环境光
  var ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
  // // 平行光
  // var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  // // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
  // directionalLight.position.set(80, 100, 50);
  // // 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
  // directionalLight.target = point2;
  // scene.add(directionalLight);
}

/**
 * 创建渲染器对象
 * */
function initRender() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); //设置渲染区域尺寸
  renderer.setClearColor("#000000", 1); //设置背景颜色
  document.body.appendChild(renderer.domElement);
  //执行渲染操作
  renderer.render(scene, camera);
}

function render() {
  renderer.render(scene, camera); //执行渲染操作

  // 更新月亮的旋转角度
  moonRotation += 0.000001;

  // 根据旋转角度创建新的旋转矩阵
  var moonRotationMatrix = new THREE.Matrix4().makeRotationY(moonRotation);

  // 应用旋转矩阵到月亮上
  moon.applyMatrix4(moonRotationMatrix);

  requestAnimationFrame(render); //请求再次执行渲染函数render
}

function initControls() {
  controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
}

initScene();
initCamera();
initLight();
initRender();
initControls();
addMoon();
addSky();
addStars();
render();
addKeyDownEvent();
// controls.addEventListener('change', render);//监听鼠标、键盘事件
