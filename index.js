var scene;
var camera;
var width = window.innerWidth; //宽度
var height = window.innerHeight; //高度
var k = width / height; //窗口宽高比
var s = 200;
var renderer
var controls 
var r = 200 //半径200

function initScene() {
  //场景对象
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x101010);
  // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
  var axisHelper = new THREE.AxesHelper(250);
  scene.add(axisHelper);
}

function initCamera() {
  //创建相机对象
  //  camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000); //正交相机
  camera = new THREE.PerspectiveCamera(45, k, 0.1, 10000); //透视相机
  camera.position.set(100, 0, 200); //设置相机位置
  camera.lookAt(scene.position);
}

function initControls() {}

function createGeometry1(width,height,rotateY,xyz) {
  //   var geometry = new THREE.SphereGeometry(10, 4, 4); //球体
  // var geometry = new THREE.BoxGeometry(10, 10, 10);
  //   geometry.scale(10,10,-10)
  var geometry = new THREE.PlaneGeometry(width, height); //矩形平面
  // var geometry = new THREE.SphereGeometry(60, 25, 25); //球体
  // var geometry = new THREE.CylinderGeometry(60, 60, 25,25); //圆柱
  //
  // 材质对象1
  var textureLoader = new THREE.TextureLoader();
  // 加载法线贴图
   textureLoader.load("./assets/image/left.png",function(texture) {
      // var textureNormal = textureLoader.load('./R.jpeg');
  var material = new THREE.MeshBasicMaterial({
    map: texture, // 普通颜色纹理贴图
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  //设置中心坐标
  mesh.position.set(...xyz)
  //设置偏移
  mesh.rotateY(rotateY) //10度
  
  // mesh.geometry.scale(10, 10, -10);
  scene.add(mesh); //网格模型添加到场景中 
  });
  
}

function createGeometry2() {
  var geometry = new THREE.PlaneGeometry(640, 480); //矩形平面
  // 材质对象1
  var textureLoader = new THREE.TextureLoader();
  // 加载法线贴图
  var texture = textureLoader.load("./assets/image/right.png");
  var material = new THREE.MeshBasicMaterial({
    map: texture, // 普通颜色纹理贴图
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  //设置中心坐标
  mesh.position.set(230,0,0)
  //设置偏移
  mesh.rotateY(-Math.PI/18) //-10度
  scene.add(mesh); //网格模型添加到场景中 
}

function createGeometry3() {
  var geometry = new THREE.PlaneGeometry(640, 480); //矩形平面
  // 材质对象1
  var textureLoader = new THREE.TextureLoader();
  // 加载法线贴图
  var texture = textureLoader.load("./assets/image/right.png");
  var material = new THREE.MeshBasicMaterial({
    map: texture, // 普通颜色纹理贴图
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  //设置中心坐标
  mesh.position.set(400,0,60)
  //设置偏移
  mesh.rotateY(-Math.PI/6) //-30
  scene.add(mesh); //网格模型添加到场景中 
}

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
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
document.body.appendChild(renderer.domElement);
//执行渲染操作
renderer.render(scene, camera);
}

function render() {
  renderer.render(scene, camera); //执行渲染操作
  requestAnimationFrame(render); //请求再次执行渲染函数render
}

function initControls() {
  controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
}

initScene();
initCamera();
initLight();
initRender()
initControls()
render();
// controls.addEventListener('change', render);//监听鼠标、键盘事件