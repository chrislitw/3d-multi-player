import {
  WebGPUEngine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight
} from '@babylonjs/core'

const createBox = (scene: Scene): typeof box => {
  const box = MeshBuilder.CreateBox('box', { size: 2 }, scene)
  const m1 = new StandardMaterial('box-material', scene)
  m1.diffuseColor = Color3.Green()
  box.material = m1
  return box
}

const createGround = (scene: Scene): typeof ground => {
  const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, scene)
  const m2 = new StandardMaterial('ground-material', scene)
  m2.diffuseColor = Color3.Blue()
  ground.material = m2
  return ground
}
const createScene = async (canvas: HTMLCanvasElement) => {
  // const engine = new Engine(canvas)
  const engine = new WebGPUEngine(canvas)
  await engine.initAsync()
  const scene = new Scene(engine)

  const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  new HemisphericLight('light', Vector3.Up(), scene)

  const box1 = createBox(scene)
  const ground1 = createGround(scene)

  engine.runRenderLoop(() => {
    scene.render()
  })
  window.addEventListener('resize', () => {
    console.log('asdas')

    engine.resize()
  })
}

export { createScene }
