import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//the important part is the camera and we needed to set this up
//Creating the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#808080");
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1); //for creating a cube or shape
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  flatShading: true,
  wireframe: true,
  wireframeLinewidth: 10,
});
const cube = new THREE.Mesh(geometry, material); //is an object that takes geometry
scene.add(cube);

camera.position.z = 5;

//now for rendering part
//animation loop
function animate() {
  cube.rotation.x += 0.008;
  cube.rotation.y += 0.008;
  controls.update(); // Update controls
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
