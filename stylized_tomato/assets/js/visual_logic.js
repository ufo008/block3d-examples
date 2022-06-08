// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];

// main tab
(()=>{
  var i;

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



  scene_assets_manager(true, ()=> {
    appInstance.assetsManager.addMeshTask('load', '', 'assets/scene/', 'scene.gltf');}, ()=> {}, ()=> {
    appInstance.env.updateOptions({skyboxColor: BABYLON.Color3.FromHexString('#E6680C'), groundColor: BABYLON.Color3.FromHexString('#E6680C')});var i_list = appInstance.scene.getNodeByName('__root__').getChildMeshes();
  for (var i_index in i_list) {
    i = i_list[i_index];

        i.outlineColor = BABYLON.Color3.FromInts(0, 0, 0);
        i.outlineWidth = 0.01;
        i.renderOutline = true;}
}, ()=> {});
})();

