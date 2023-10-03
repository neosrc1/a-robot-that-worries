import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.id = "main"
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xdddddd } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
var childCubeGeo = [];
var childCubeMat = [];
var childCube = [];
var xVal = -1
var yVal = -1
var zVal = -1
let clock = new THREE.Clock();
let delta = 0;
let interval = 1 / 60;

camera.position.z = 225;
let i = 50
let mod = 0.10

function animate() {
	requestAnimationFrame( animate );

	

	delta += clock.getDelta();

   if (delta  > interval) {
	if (i >= 0) camera.position.z = -(mod * (Math.pow(i/2, 2))) + 7
	i--
	mod -= i/2 * 0.00005
	cube.rotation.x += 0.012;
	cube.rotation.y += 0.010;
       renderer.render( scene, camera );

       delta = delta % interval;
   }
}

animate();
