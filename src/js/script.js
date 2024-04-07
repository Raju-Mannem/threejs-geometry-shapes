import * as Three from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
const renderer=new Three.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene=new Three.Scene();
const camera=new Three.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
const orbit=new OrbitControls(camera,renderer.domElement);
const axesHelper=new Three.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0,2,5);
orbit.update();
const boxGeometry=new Three.BoxGeometry();
const boxMaterial=new Three.MeshBasicMaterial({color:0x00FF00});
const box=new Three.Mesh(boxGeometry,boxMaterial);
scene.add(box);
const planeGeometry=new Three.PlaneGeometry(30,30);
const planeMaterial=new Three.MeshBasicMaterial({
    color:0xFFFFFF,
    side:Three.DoubleSide
});
const plane=new Three.Mesh(planeGeometry,planeMaterial);
scene.add(plane);
plane.rotation.x=-0.5*Math.PI;
const gridHelper=new Three.GridHelper(30);
scene.add(gridHelper);
const sphereGeometry=new Three.SphereGeometry(4);
const sphereMaterial=new Three.MeshBasicMaterial({
    color:0x0000FF,
    wireframe:true,})
const sphere=new Three.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);
function animate(time){
    box.rotation.x=time/1000;
    box.rotation.y=time/1000;
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);