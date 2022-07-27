// 此文件自动生成，请勿修改
console.log('Block3D-一款支持可视化编程的Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];

// main tab
(()=>{
  // scene_assets_manager block
  function scene_assets_manager(useDefaultPreloader, loadAssetsCb, onProgressCb, onFinishCb, onReadyCb) {
    appInstance.assetsManager = new BABYLON.AssetsManager(appInstance.scene);
    useDefaultPreloader && (appInstance.assetsManager.useDefaultLoadingScreen = true) || (appInstance.assetsManager.useDefaultLoadingScreen = false);
    loadAssetsCb ();
    appInstance.assetsManager.load();

    appInstance.assetsManager.onProgress = (remainingCount, totalCount) => {
      const percentage = ((totalCount - remainingCount) / totalCount * 100).toFixed();
      appInstance._glob.preloaderPercentage = percentage;
      onProgressCb();
    }

    appInstance.assetsManager.onFinish = (tasks) => {
      onFinishCb();
    }

    appInstance.scene.onReadyObservable.add(() => {
      onReadyCb();
    })
  }



  appInstance.scene.defaultCursor = 'none';
    tab_setupReticle();
    tab_setupEnv();
  scene_assets_manager(false, ()=> {
    appInstance.assetsManager.addMeshTask('loadMesh', '', 'assets/scene/', 'showroom.babylon');}, ()=> {}, ()=> {
    // 物体可点击

      appInstance.scene.getNodeByName('ground').isPickable = true;
    appInstance.scene.getNodeByName('objects').getChildMeshes().forEach((element, index) => {

        element.isPickable = true;
    });}, ()=> {});
    tab_onCameraMove();
})();


/**
 * setupReticle tab
 * @param {any} tab_arg
 */
function tab_setupReticle(tab_arg) {
  var reticle;

// mesh_create_set_shapes block
  function mesh_create_set_shapes(name, type, options) {
    const mesh = BABYLON.MeshBuilder[type](name, options, appInstance.scene);
    mesh.material = appInstance.defautlMaterial;
    return mesh;
  }



  // 光标

  reticle = mesh_create_set_shapes('reticle', 'CreateDisc', {radius: 0.05, tessellation: 24});
  reticle.position = new BABYLON.Vector3(-1, 0.2, 0);
    reticle.visibility = 0.5;
    reticle.isPickable = false;
  reticle.setDirection(new BABYLON.Vector3(0, 0, 1));
    reticle.material.albedoColor = BABYLON.Color3.FromInts(255, 0, 0);
    reticle.material.sideOrientation = 0;
    reticle.material.emissiveColor = BABYLON.Color3.FromInts(255, 0, 0);
}


/**
 * setupEnv tab
 * @param {any} tab_arg
 */
function tab_setupEnv(tab_arg) {
  var camera, light;



  // 环境

  appInstance.env && appInstance.env.dispose()
  appInstance.env = appInstance.scene.createDefaultEnvironment({environmentTexture: 'assets/texture/environmentSpecular.env', skyboxTexture: 'assets/texture/backgroundSkybox.dds', createGround: false, skyboxSize: 20, skyboxColor: BABYLON.Color3.FromHexString('#8edaff')})
  // 相机

  camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 0.8, 0), appInstance.scene);
  appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
  appInstance.camera = camera;
  appInstance.scene.activeCamera = camera;
  camera.attachControl(appInstance.canvas, true);
  camera.target = new BABYLON.Vector3(-2, 0.8, 0);
  camera.minZ = 0.1;
  camera.fov = BABYLON.Tools.ToRadians(60);
  // 灯光

  light = new BABYLON.HemisphericLight('hemisphericlight', new BABYLON.Vector3(0, -1, 0), appInstance.scene);
  light.intensity = 0.5;

  // some comments here...

}


/**
 * onCameraMove tab
 * @param {any} tab_arg
 */
function tab_onCameraMove(tab_arg) {
  var point, reticlePosition, normal, reticleTarget, cameraPosition, cameraTarget;

// picking_info block
function picking_info(option, point_option, normal_option){
    if(!appInstance._glob.pickedMesh) return
    switch(option){
        case 'MESH':
            return appInstance._glob.pickedMesh;
        case 'POINT':
          switch(point_option){
            case 'X':
              return appInstance._glob.pickedPoint.x;
            case 'Y':
              return appInstance._glob.pickedPoint.y;
            case 'Z':
              return appInstance._glob.pickedPoint.z;
            case 'XYZ':
              return appInstance._glob.pickedPoint
          }
          break;
        case 'NORMAL':
          switch(normal_option){
            case 'X':
              return appInstance._glob.pickedNormal.x;
            case 'Y':
              return appInstance._glob.pickedNormal.y;
            case 'Z':
              return appInstance._glob.pickedNormal.z;
            case 'XYZ':
              return appInstance._glob.pickedNormal
          }
          break;
    }
}

// Describe this function...
function moveReticle() {

    reticlePosition = picking_info('POINT','XYZ','null').add(picking_info('NORMAL','null','XYZ').scale(0.05));
    reticleTarget = picking_info('POINT','XYZ','null').add(picking_info('NORMAL','null','XYZ'));
    appInstance.scene.getNodeByName('reticle').position = reticlePosition;
    appInstance.scene.getNodeByName('reticle').lookAt(reticleTarget);}



  // 双击退回

}


/**
 * debug tab
 * @param {any} tab_arg
 */
function tab_debug(tab_arg) {
  var debugMod;



  appInstance.scene.onKeyboardObservable.add((eventData) => {
    if (eventData.type == BABYLON.KeyboardEventTypes.KEYDOWN && (false ? true : !eventData.event.repeat )) {
      appInstance._glob.keyInput = {key: eventData.event.key, keyCode: eventData.event.keyCode};
        if (appInstance._glob.keyInput.key == 'F9') {

      debugMod = !debugMod;if (debugMod) {

        appInstance.scene.defaultCursor = 'default';
          appInstance.scene.getNodeByName('top').isVisible = false;
        appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
        appInstance.camera = appInstance.scene.getNodeByName('defaultCamera');
        appInstance.scene.activeCamera = appInstance.scene.getNodeByName('defaultCamera');
        appInstance.scene.getNodeByName('defaultCamera').attachControl(appInstance.canvas, true);} else {

          appInstance.scene.getNodeByName('top').isVisible = true;
        appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
        appInstance.camera = appInstance.scene.getNodeByName('camera');
        appInstance.scene.activeCamera = appInstance.scene.getNodeByName('camera');
        appInstance.scene.getNodeByName('camera').attachControl(appInstance.canvas, true);}
  }

    }
  });
}

