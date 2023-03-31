function addMesh(vector) {
  let geometry = new THREE.SphereGeometry(10, 20, 20);
  let material = new THREE.MeshLambertMaterial({
    color: "#02B0A9",
  });
  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(100, 10, 10);
  scene.add(mesh);
  return mesh;
}

var mesh = addMesh();

setInterval(() => {
  let meshPosition = new THREE.Vector3();
  mesh.getWorldPosition(meshPosition);

  let position = new THREE.Vector3();
  position.copy(meshPosition).project(camera);
  position.setZ(0);
  let length = position.length();
  console.log("screen center length", length);
}, 50);

// function

// setInterval(() => {

// },50)
