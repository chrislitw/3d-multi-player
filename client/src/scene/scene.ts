import * as THREE from 'three'

export const createScene = () => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
  camera.position.set(112, 100, 400)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xa0a0a0)
  scene.fog = new THREE.Fog(0xa0a0a0, 700, 1800)

  const light = new THREE.HemisphereLight(0xffffff, 0x444444)
  light.position.set(0, 200, 0)
  scene.add(light)

  const dirLight = new THREE.DirectionalLight(0xffffff)
  dirLight.position.set(0, 200, 100)
  dirLight.castShadow = true
  dirLight.shadow.camera.top = 180
  dirLight.shadow.camera.bottom = -100
  dirLight.shadow.camera.left = -120
  dirLight.shadow.camera.right = 120
  scene.add(dirLight)

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(4000, 4000),
    new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
  )
  mesh.rotation.x = -Math.PI / 2
  mesh.receiveShadow = true
  scene.add(mesh)

  const grid = new THREE.GridHelper(4000, 60, 0x000000, 0x000000)
  grid.material.opacity = 0.2
  grid.material.transparent = true
  scene.add(grid)

  const canvas = document.querySelector('#three') as HTMLCanvasElement

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const box = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30))
  box.position.y = 10
  box.rotation.y = Math.PI / 3
  box.castShadow = true
  box.receiveShadow = false
  scene.add(box)

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()
}
