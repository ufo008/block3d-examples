// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
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



  scene_assets_manager(false, ()=> {
    appInstance.assetsManager.addMeshTask('load', '', 'assets/scene/', 'scene.gltf');}, ()=> {}, ()=> {
      tab_init();
      tab_pane();
    appInstance.scene.getNodeByName('__root__').scaling = new BABYLON.Vector3(-1, 1, 1);}, ()=> {});
})();


/**
 * init tab
 * @param {any} tab_arg
 */
function tab_init(tab_arg) {
  var camera;



  camera = appInstance.scene.activeCamera;
  camera.radius = 40;
  camera.targetScreenOffset = new BABYLON.Vector2(0, -5);
  appInstance.env.updateOptions({createGround: false, createSkybox: false});
}


/**
 * pane tab
 * @param {any} tab_arg
 */
function tab_pane(tab_arg) {
  var mat;

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

// pane_add_button block
  function pane_add_button(folder, title, doCb) {
    if(!appInstance._glob.gui) return;
    const options = { title: title }
    const btn = folder ? folder.addButton(options) : appInstance._glob.gui.addButton(options)
    btn.on('click', () => {
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

// pane_add_checkbox block
  function pane_add_checkbox(folder, label, checked, doCb) {
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    defaultOptions[label] = checked;
    const checkboxInput = folder ? folder.addInput(defaultOptions, label) : appInstance._glob.gui.addInput(defaultOptions, label)
    checkboxInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }



  mat = appInstance.scene.getNodeByName('building').material;
  create_tweak_pane('参数');
  pane_add_color(null, ' 背景', '#110022', () => {
    appInstance.scene.clearColor = BABYLON.Color4.FromHexString(appInstance._glob.tweakPanValue);});
  pane_add_button(null, '渲染线框', () => {
    appInstance.scene.getNodeByName('__root__').getChildMeshes().forEach((element, index) => {

      element.enableEdgesRendering(0.99999);
    });});
  pane_add_color(null, '线框颜色', '#0000ff', () => {
    appInstance.scene.getNodeByName('__root__').getChildMeshes().forEach((element, index) => {

        element.edgesColor = BABYLON.Color4.FromHexString(appInstance._glob.tweakPanValue);
    });});
  pane_add_slider(null, '线宽', {min: 0, max: 5, step: 0.01, value: 1}, () => {
    appInstance.scene.getNodeByName('__root__').getChildMeshes().forEach((element, index) => {

        element.edgesWidth = appInstance._glob.tweakPanValue;
    });});
  pane_add_color(null, '材质颜色', '#ffffff', () => {
      mat.albedoColor = BABYLON.Color3.FromHexString(appInstance._glob.tweakPanValue);});
  pane_add_checkbox(null, '材质透明', false, () => {  if (appInstance._glob.tweakPanValue) {

        mat.transparencyMode = 2;} else {

        mat.transparencyMode = 0;}
});
  pane_add_slider(null, '材质透明度', {min: 0, max: 1, step: 0.01, value: 1}, () => {
      mat.alpha = appInstance._glob.tweakPanValue;});
}

