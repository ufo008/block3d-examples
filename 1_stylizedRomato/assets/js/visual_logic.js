// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];

// main tab
(()=>{
  var mesh;

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



  scene_assets_manager(false, ()=> {
    mesh = appInstance.assetsManager.addMeshTask('loadMesh', '', 'assets/scene/', 'scene.glb');}, ()=> {}, ()=> {
      tab_pane();
    appInstance.scene.getNodeByName('__root__').getChildMeshes().forEach((element, index) => {

        element.outlineColor = BABYLON.Color3.FromHexString('#230e00');
        element.outlineWidth = 0.0075;
        element.renderOutline = true;
    });}, ()=> {});
})();


/**
 * pane tab
 * @param {any} tab_arg
 */
function tab_pane(tab_arg) {
  // create_tweak_pane
  function create_tweak_pane(title) {
    // 删除已经创建的Pane实例
    if(appInstance._glob.gui) {
      appInstance._glob.gui.dispose();
      const elem = document.getElementById('gui-container');
      elem.parentElement.removeChild(elem);
    }
    const container = document.createElement('div');
    container.className = 'gui-container';
    container.id = 'gui-container';
    document.getElementById('renderCanvas').parentElement.appendChild(container);

    const pane = new Tweakpane.Pane({container: container, title: title});
    appInstance._glob.gui = pane;
  }

// pane_add_color block
  function pane_add_color(folder, label, color, doCb) {
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    color.substring(0,1) === '#' && (defaultOptions[label] = color);
    const options = {view: 'color'}
    const colorInput = folder ? folder.addInput(defaultOptions, label, options) : appInstance._glob.gui.addInput(defaultOptions, label, options)
    colorInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }

// common function
  function is_object(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
  }

// pane_add_slider block
  function pane_add_slider(folder, label, options, doCb) {
    if(!appInstance._glob.gui) return;
    const defaultOptions = {
      min: 0,
      max: 1,
      value: 0.5,
    }
    is_object(options) && Object.assign(defaultOptions, options);
    const labels = {};
    labels[label] = defaultOptions.value
    const sliderInput = folder ? folder.addInput(labels, label, defaultOptions) : appInstance._glob.gui.addInput(labels, label, defaultOptions)
    sliderInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }



  appInstance.env.updateOptions({skyboxColor: BABYLON.Color3.FromHexString('#ff8b3c'), groundColor: BABYLON.Color3.FromHexString('#ff8b3c')});
  create_tweak_pane('');
  pane_add_color(null, 'background', '#ff8b3c', () => {
    appInstance.env.updateOptions({skyboxColor: BABYLON.Color3.FromHexString(appInstance._glob.tweakPanValue), groundColor: BABYLON.Color3.FromHexString(appInstance._glob.tweakPanValue)});});
  pane_add_slider(null, 'lineWidth', {min: 0, max: 0.05, step: 0.001, value: 0.01}, () => {
    appInstance.scene.getNodeByName('__root__').getChildMeshes().forEach((element, index) => {

        element.outlineWidth = appInstance._glob.tweakPanValue;
    });});
  pane_add_color(null, 'lineColor', '#230e00', () => {
    appInstance.scene.getNodeByName('__root__').getChildMeshes().forEach((element, index) => {

        element.outlineColor = BABYLON.Color3.FromHexString(appInstance._glob.tweakPanValue);
    });});
}

