function addMoon() {
  var geometry = new THREE.SphereGeometry(50, 100, 100);
  console.log("load贴图");
  var texture = new THREE.TextureLoader().load("/assets/jpg/8k_moon.jpeg");
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var moon = new THREE.Mesh(geometry, material);
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
