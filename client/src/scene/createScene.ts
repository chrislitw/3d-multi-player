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
const createScene = async (canvas: HTMLCanvasElement) => {
  // const engine = new Engine(canvas)
  const engine = new WebGPUEngine(canvas)
  await engine.initAsync()
  const scene = new Scene(engine)

  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  new HemisphericLight('light', Vector3.Up(), scene)

  const box = MeshBuilder.CreateBox('box', { size: 2 }, scene)
  const m1 = new StandardMaterial('box-material', scene)
  m1.diffuseColor = Color3.Green()
  box.material = m1

  const plane = MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, scene)
  const m2 = new StandardMaterial('box-material', scene)
  m2.diffuseColor = Color3.Blue()
  plane.material = m2

  engine.runRenderLoop(() => {
    scene.render()
  })
}

export { createScene }
