import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script2 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script3 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape.withCollisions = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(11, 10, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 2.509999990463257, 3.5)
})
messageBubble.addComponentOrReplace(transform3)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(4, 2, 8),
  rotation: new Quaternion(2.015433864244187e-8, -0.7071069478988647, -6.317173451009239e-9, -0.7071067094802856),
  scale: new Vector3(1, 1, 1)
})
scoreboard.addComponentOrReplace(transform4)

const woodenDoor = new Entity('woodenDoor')
engine.addEntity(woodenDoor)
woodenDoor.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenDoor.addComponentOrReplace(transform5)

const largeOrnamentedStoneRail = new Entity('largeOrnamentedStoneRail')
engine.addEntity(largeOrnamentedStoneRail)
largeOrnamentedStoneRail.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/FenceStoneLarge_01/FenceStoneLarge_01.glb")
gltfShape2.withCollisions = true
gltfShape2.visible = true
largeOrnamentedStoneRail.addComponentOrReplace(gltfShape2)

const largeOrnamentedStoneRail2 = new Entity('largeOrnamentedStoneRail2')
engine.addEntity(largeOrnamentedStoneRail2)
largeOrnamentedStoneRail2.setParent(_scene)
largeOrnamentedStoneRail2.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(0.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail2.addComponentOrReplace(transform7)

const largeOrnamentedStoneRail3 = new Entity('largeOrnamentedStoneRail3')
engine.addEntity(largeOrnamentedStoneRail3)
largeOrnamentedStoneRail3.setParent(_scene)
largeOrnamentedStoneRail3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail3.addComponentOrReplace(transform8)

const largeOrnamentedStoneRail4 = new Entity('largeOrnamentedStoneRail4')
engine.addEntity(largeOrnamentedStoneRail4)
largeOrnamentedStoneRail4.setParent(_scene)
largeOrnamentedStoneRail4.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(0.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail4.addComponentOrReplace(transform9)

const largeOrnamentedStoneRail5 = new Entity('largeOrnamentedStoneRail5')
engine.addEntity(largeOrnamentedStoneRail5)
largeOrnamentedStoneRail5.setParent(_scene)
largeOrnamentedStoneRail5.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(15.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail5.addComponentOrReplace(transform10)

const largeOrnamentedStoneRail6 = new Entity('largeOrnamentedStoneRail6')
engine.addEntity(largeOrnamentedStoneRail6)
largeOrnamentedStoneRail6.setParent(_scene)
largeOrnamentedStoneRail6.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(10.5, 0, 0.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail6.addComponentOrReplace(transform11)

const largeOrnamentedStoneRail7 = new Entity('largeOrnamentedStoneRail7')
engine.addEntity(largeOrnamentedStoneRail7)
largeOrnamentedStoneRail7.setParent(_scene)
largeOrnamentedStoneRail7.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(15.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail7.addComponentOrReplace(transform12)

const largeOrnamentedStoneRail8 = new Entity('largeOrnamentedStoneRail8')
engine.addEntity(largeOrnamentedStoneRail8)
largeOrnamentedStoneRail8.setParent(_scene)
largeOrnamentedStoneRail8.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(15.5, 0, 0.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail8.addComponentOrReplace(transform13)

const largeOrnamentedStoneRail9 = new Entity('largeOrnamentedStoneRail9')
engine.addEntity(largeOrnamentedStoneRail9)
largeOrnamentedStoneRail9.setParent(_scene)
largeOrnamentedStoneRail9.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(5.5, 0, 0.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail9.addComponentOrReplace(transform14)

const largeOrnamentedStoneRail10 = new Entity('largeOrnamentedStoneRail10')
engine.addEntity(largeOrnamentedStoneRail10)
largeOrnamentedStoneRail10.setParent(_scene)
largeOrnamentedStoneRail10.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(5.5, 0, 15.5),
  rotation: new Quaternion(-1.4727224211056591e-15, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail10.addComponentOrReplace(transform15)

const largeOrnamentedStoneRail11 = new Entity('largeOrnamentedStoneRail11')
engine.addEntity(largeOrnamentedStoneRail11)
largeOrnamentedStoneRail11.setParent(_scene)
largeOrnamentedStoneRail11.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(10.5, 0, 15.5),
  rotation: new Quaternion(1.8542415189002834e-14, -0.7071069478988647, 8.429373110629967e-8, 0.7071065902709961),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail11.addComponentOrReplace(transform16)

const ancientStonePagodaLantern = new Entity('ancientStonePagodaLantern')
engine.addEntity(ancientStonePagodaLantern)
ancientStonePagodaLantern.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(7.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ancientStonePagodaLantern.addComponentOrReplace(transform17)
const gltfShape3 = new GLTFShape("models/ChineseFountain_01/ChineseFountain_01.glb")
gltfShape3.withCollisions = true
gltfShape3.visible = true
ancientStonePagodaLantern.addComponentOrReplace(gltfShape3)

const temple = new Entity('temple')
engine.addEntity(temple)
temple.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
temple.addComponentOrReplace(transform18)
const gltfShape4 = new GLTFShape("models/ChineseHouse_01/ChineseHouse_01.glb")
gltfShape4.withCollisions = true
gltfShape4.visible = true
temple.addComponentOrReplace(gltfShape4)

const imperialGuardianLionStatue = new Entity('imperialGuardianLionStatue')
engine.addEntity(imperialGuardianLionStatue)
imperialGuardianLionStatue.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(11.5, 0, 8),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
imperialGuardianLionStatue.addComponentOrReplace(transform19)
const gltfShape5 = new GLTFShape("models/ChineseStatueLion_01/ChineseStatueLion_01.glb")
gltfShape5.withCollisions = true
gltfShape5.visible = true
imperialGuardianLionStatue.addComponentOrReplace(gltfShape5)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(messageBubble, {"text":"mukasa.","fontSize":20}, createChannel(channelId, messageBubble, channelBus))
script2.spawn(scoreboard, {"initialVal":0,"threshold":100,"enabled":true,"onThreshold":[{"entityName":"messageBubble","actionId":"changeText","values":{"newText":"mukasa WINS!"}}]}, createChannel(channelId, scoreboard, channelBus))
script3.spawn(woodenDoor, {"onClick":[{"entityName":"woodenDoor","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"messageBubble","actionId":"changeText","values":{"newText":"destiny awaits..."}}],"onClose":[{"entityName":"messageBubble","actionId":"changeText","values":{"newText":"choose your fate..."}}]}, createChannel(channelId, woodenDoor, channelBus))