// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];

// main tab
(() => {
  var fpvCamera, loadMesh;

// scene_assets_manager block
  function scene_assets_manager(useDefaultPreloader, loadAssetsCb, onProgressCb, onFinishCb, onReadyCb) {
    appInstance.assetsManager = new BABYLON.AssetsManager(appInstance.scene);
    useDefaultPreloader && (appInstance.assetsManager.useDefaultLoadingScreen = true) || (appInstance.assetsManager.useDefaultLoadingScreen = false);
    loadAssetsCb();
    appInstance.assetsManager.load();

    appInstance.assetsManager.onProgress = (remainingCount, totalCount) => {
      const percentage = ((totalCount - remainingCount) / totalCount * 100).toFixed();
      appInstance._glob.preloaderPercentage = percentage;
      onProgressCb();
    }

    appInstance.assetsManager.onFinish = () => {
      onFinishCb();
    }

    appInstance.scene.onReadyObservable.add(() => {
      onReadyCb();
    })
  }



  appInstance.scene.collisionsEnabled = true;
  appInstance.scene.gravity = new BABYLON.Vector3(0, -9.81 / 60, 0);
  appInstance.env && appInstance.env.dispose();
  appInstance.env = appInstance.scene.createDefaultEnvironment({createGround: false});
  fpvCamera = new BABYLON.UniversalCamera('fpvCamera', new BABYLON.Vector3(0, 2, -7), appInstance.scene);
  tab_fpvCamera(fpvCamera);
  scene_assets_manager(false, ()=> {
    loadMesh = appInstance.assetsManager.addMeshTask('loadAsset', '', './assets/scene/', 'fpv.glb');}, ()=> {}, ()=> {
    loadMesh.loadedMeshes.forEach((element, index) => {

        element.checkCollisions = true;
    });}, ()=> {});
  appInstance.scene.onKeyboardObservable.add((eventData) => {
    if (eventData.type == BABYLON.KeyboardEventTypes.KEYDOWN && (false ? true : !eventData.event.repeat )) {
      appInstance._glob.keyInput = {key: eventData.event.key, keyCode: eventData.event.keyCode};

  if (appInstance._glob.keyInput.key == 'Enter') {

      appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
      appInstance.camera = fpvCamera;
      appInstance.scene.activeCamera = fpvCamera;
      fpvCamera.attachControl(appInstance.canvas, true);appInstance.engine.enterFullscreen(true);} else if (appInstance._glob.keyInput.key == 'Escape') {

      appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
      appInstance.camera = appInstance.scene.getNodeByName('defaultCamera');
      appInstance.scene.activeCamera = appInstance.scene.getNodeByName('defaultCamera');
      appInstance.scene.getNodeByName('defaultCamera').attachControl(appInstance.canvas, true);}

    }
  });
})();


/**
 * fpvCamera tab
 * @param {*} tab_arg
 */
function tab_fpvCamera(tab_arg) {
  var fpvCamera;



  fpvCamera = tab_arg;
  fpvCamera.applyGravity = true;
  fpvCamera.checkCollisions = true;
  fpvCamera.ellipsoid = new BABYLON.Vector3(1, 1.5, 1);
  fpvCamera.minZ = 0.5;
  fpvCamera.speed = 0.4;
  fpvCamera.angularSensibility = 5000;
  fpvCamera.keysUp = [87];
  fpvCamera.keysDown = [83];
  fpvCamera.keysLeft = [65];
  fpvCamera.keysRight = [68];
}

