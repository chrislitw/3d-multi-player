import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Mesh,
  BoxGeometry,
  PlaneGeometry,
  MeshPhongMaterial,
  GridHelper,
  HemisphereLight,
  DirectionalLight,
  Color,
  Fog
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class ThreeScene {
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene

  constructor(canvas: HTMLCanvasElement) {
    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
    this.camera.position.set(112, 100, 400)

    this.renderer = new WebGLRenderer({ canvas, antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.scene = new Scene()
    this.scene.background = new Color(0xa0a0a0)
    this.scene.fog = new Fog(0xa0a0a0, 700, 1800)

    this._init()
  }
  _init() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.target.set(0, 1, 0)

    const light = new HemisphereLight(0xffffff, 0x444444)
    light.position.set(0, 200, 0)
    this.scene.add(light)

    const dirLight = new DirectionalLight(0xffffff)
    dirLight.position.set(0, 200, 100)
    dirLight.castShadow = true
    dirLight.shadow.camera.top = 180
    dirLight.shadow.camera.bottom = -100
    dirLight.shadow.camera.left = -120
    dirLight.shadow.camera.right = 120
    this.scene.add(dirLight)

    // ground
    const mesh = new Mesh(
      new PlaneGeometry(4000, 4000),
      new MeshPhongMaterial({ color: 0x999999, depthWrite: false })
    )
    mesh.rotation.x = -Math.PI / 2
    mesh.receiveShadow = true
    this.scene.add(mesh)

    // grid
    const grid = new GridHelper(4000, 60, 0x000000, 0x000000)
    grid.material.opacity = 0.2
    grid.material.transparent = true
    this.scene.add(grid)

    const box = new Mesh(new BoxGeometry(30, 30, 30))
    box.position.y = 10
    box.position.x = 200
    box.rotation.y = Math.PI / 3
    box.castShadow = true
    box.receiveShadow = false
    this.scene.add(box)

    const animate = () => {
      requestAnimationFrame(animate)
      this.renderer.render(this.scene, this.camera)
    }

    animate()
  }
}
