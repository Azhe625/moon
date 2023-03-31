var moon;
var moonRotation = 0;

function addMoon() {
  var geometry = new THREE.SphereGeometry(50, 100, 100);
  console.log("load贴图");
  var texture = new THREE.TextureLoader().load("/assets/jpg/8k_moon.jpeg");
  var material = new THREE.MeshBasicMaterial({ map: texture });
  moon = new THREE.Mesh(geometry, material);
  scene.add(moon);
}

function addSky() {
  var skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
  var skyTexture = new THREE.TextureLoader().load(
    "/assets/jpg/8k_stars_milky_way.jpeg"
  );
  var skyMaterial = new THREE.MeshBasicMaterial({
    map: skyTexture,
    side: THREE.BackSide,
  });
  var sky = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(sky);
}

function addStars() {
  var starsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  var starsMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (var i = 0; i < 500; i++) {
    var star = new THREE.Mesh(starsGeometry, starsMaterial);
    star.position.set(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
    scene.add(star);
  }
}
