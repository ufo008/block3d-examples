// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];

// main tab
(() => {
  var loadMesh, loadJson;

// create_custom_preloader block
  function create_custom_preloader(options) {
    function $(className) {
      var styles = document.styleSheets;
      for (var i = 0; i < styles.length; i++) {
        /**
        * workaround for "DOMException: Failed to read the 'cssRules' property
        * from 'CSSStyleSheet': Cannot access rules"
        */
        try { var cssRules = styles[i].cssRules; }
        catch (e) { continue; }

        for (var j = 0; j < cssRules.length; j++) {
          var cssRule = cssRules[j];
          if (cssRule.selectorText == className)
            return cssRule.style;
        }
      }
    }

    const bgElem = $('.preloader-background'),
      logoElem = $('.preloader-logo'),
      barElem = $('.preloader-bar'),
      borderElem = $('.preloader-bar');

    if(options.hasOwnProperty('background')) bgElem.background = options.background;
    if(options.hasOwnProperty('logoImage')) logoElem.background = "center / contain no-repeat url(" + options.logoImage + ")";
    if(options.hasOwnProperty('barBackground')) barElem.background = options.barBackground;
    if(options.hasOwnProperty('barBorder')) borderElem.border = options.barBorder;
    if(options.hasOwnProperty('barHeight')) borderElem.height = options.barHeight;

    appInstance.preloader = new BABYLON.Preloader(appInstance.canvas);
    appInstance.preloader.start();
  }

// create_fullscreen_UI block
  function create_fullscreen_UI(name, json) {
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(name, true, appInstance.scene, BABYLON.Texture.NEAREST_NEAREST);
    advancedTexture.parseContent(JSON.parse(json));
    advancedTexture.rootContainer.scaleX = window.devicePixelRatio;
    advancedTexture.rootContainer.scaleY = window.devicePixelRatio;
    return advancedTexture;
  }

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



  create_custom_preloader({background: 'radial-gradient(rgb(29 62 47), rgb(24 35 32))', logoImage: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUyMDkxMTQ3MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU5NjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODIzLjYgNDE5LjVjLTIuNiAwLTUuMS0xLTcuMS0yLjlMNTMyLjkgMTMzYy0xMS41LTExLjUtMzAuMy0xMS41LTQxLjkgMEwyMDcuNSA0MTYuNWMtMy45IDMuOS0xMC4yIDMuOS0xNC4xIDAtMy45LTMuOS0zLjktMTAuMiAwLTE0LjFMNDc3IDExOC45YzE5LjMtMTkuMyA1MC44LTE5LjMgNzAuMSAwbDI4My42IDI4My42YzMuOSAzLjkgMy45IDEwLjIgMCAxNC4xLTIgMS45LTQuNSAyLjktNy4xIDIuOXoiIGZpbGw9IiNFQjg2NkIiIHAtaWQ9IjU5NjYiPjwvcGF0aD48cGF0aCBkPSJNMTU0LjYgMjYwLjNoNzE0LjdjMTcuMiAwIDMxLjEgMTMuOSAzMS4xIDMxLjF2NTA5YzAgMTcuMi0xMy45IDMxLjEtMzEuMSAzMS4xSDE1NC42Yy0xNy4yIDAtMzEuMS0xMy45LTMxLjEtMzEuMXYtNTA5YzAuMS0xNy4yIDE0LTMxLjEgMzEuMS0zMS4xeiIgZmlsbD0iI0ZCRDFBQSIgcC1pZD0iNTk2NyI+PC9wYXRoPjxwYXRoIGQ9Ik05MDAuNCAyOTEuNHY1MDljMCAxNy4yLTEzLjkgMzEuMS0zMS4xIDMxLjFoLTYzYzE3LjIgMCAzMS4xLTEzLjkgMzEuMS0zMS4xdi01MDljMC0xNy4yLTEzLjktMzEuMS0zMS4xLTMxLjFoNjNjMTcuMiAwIDMxLjEgMTMuOSAzMS4xIDMxLjF6IiBmaWxsPSIjRjdCRDgxIiBwLWlkPSI1OTY4Ij48L3BhdGg+PHBhdGggZD0iTTE4NS43IDMyMi41aDY1Mi42djQ0Ni45SDE4NS43VjMyMi41eiIgZmlsbD0iIzQxNDY0OSIgcC1pZD0iNTk2OSI+PC9wYXRoPjxwYXRoIGQ9Ik0xODUuNyAzMjIuNWg2NTIuNnY0NDYuOUgxODUuN1YzMjIuNXoiIGZpbGw9IiNCRDlFRTIiIHAtaWQ9IjU5NzAiPjwvcGF0aD48cGF0aCBkPSJNMjc5LjYgNzAzLjloOTcuMmMxNi4xIDAgMjkuMSAxMyAyOS4xIDI5LjF2MzYuNEgyNTAuNVY3MzNjMC0xNi4xIDEzLTI5LjEgMjkuMS0yOS4xeiIgZmlsbD0iIzUwRTZDQyIgcC1pZD0iNTk3MSI+PC9wYXRoPjxwYXRoIGQ9Ik03NzUuMyAzMjIuNWg2M3Y0NDYuOWgtNjN6IiBmaWxsPSIjOTc4Q0RCIiBwLWlkPSI1OTcyIj48L3BhdGg+PHBhdGggZD0iTTQwNS45IDczMi45djM2LjRoLTUwLjF2LTM2LjRjMC0xNi0xMy0yOS4xLTI5LjEtMjkuMWg1MC4xYzE2LjEgMC4xIDI5LjEgMTMuMSAyOS4xIDI5LjF6IiBmaWxsPSIjNDVEQUJEIiBwLWlkPSI1OTczIj48L3BhdGg+PHBhdGggZD0iTTkwMC42IDgzMS41SDEyMy40Yy0xNy4zIDAtMzEuNC0xNC4yLTMxLjQtMzEuNCAwLTE3LjMgMTQuMi0zMS40IDMxLjQtMzEuNGg3NzcuMWMxNy4zIDAgMzEuNCAxNC4yIDMxLjQgMzEuNCAwLjEgMTcuMi0xNC4xIDMxLjQtMzEuMyAzMS40eiIgZmlsbD0iI0VCODY2QiIgcC1pZD0iNTk3NCI+PC9wYXRoPjxwYXRoIGQ9Ik0zNzggNjM2LjVoLTMxLjV2LTEwNEgzMjVsMS45LTI1LjhIMzc4djEyOS44eiIgZmlsbD0iIzhBRENGRiIgcC1pZD0iNTk3NSI+PC9wYXRoPjxwYXRoIGQ9Ik00NzYuMyA2MTAuOEg1Mzl2MjQuMWgtOTAuNXYtNzMuMWw2Mi4xLTYuMy0wLjctMjQuN2gtNTkuNHYtMjQuMUg1MzlsMS45IDcwLjgtNjQuNSA2LjV2MjYuOGgtMC4xeiIgZmlsbD0iI0ZERjE3RiIgcC1pZD0iNTk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik02OTkgNjM2LjVoLTg5LjZ2LTI2aDU5Ljl2LTI4LjRINjE4di0yNmg1MS40di0yMy42aC01OC44di0yNkg2OTl2MTMweiIgZmlsbD0iI0ZGQjhDQiIgcC1pZD0iNTk3NyI+PC9wYXRoPjxwYXRoIGQ9Ik01MDIuNDI0Njc2IDE2NC41MTY2MzFhMjcuOSAyNy45IDAgMSAwIDE5LjA2NjQyLTUyLjQ0MTUwNyAyNy45IDI3LjkgMCAxIDAtMTkuMDY2NDIgNTIuNDQxNTA3WiIgZmlsbD0iIzg4OUNBOSIgcC1pZD0iNTk3OCI+PC9wYXRoPjxwYXRoIGQ9Ik05MzIgODAwYzAgOC43LTMuNSAxNi41LTkuMiAyMi4ycy0xMy42IDkuMi0yMi4yIDkuMkg4MzdjOC42IDAgMTYuNS0zLjUgMjIuMi05LjJzOS4yLTEzLjYgOS4yLTIyLjJjMC0xNy4zLTE0LjEtMzEuNC0zMS40LTMxLjRoNjMuNWMxNy4zIDAgMzEuNSAxNC4yIDMxLjUgMzEuNHoiIGZpbGw9IiNEQTY3NDkiIHAtaWQ9IjU5NzkiPjwvcGF0aD48cGF0aCBkPSJNNTQwIDEzOC4zYzAgMTUuNC0xMi41IDI3LjktMjggMjcuOS0zLjcgMC03LjMtMC43LTEwLjUtMi4xIDEwLjItNC4yIDE3LjQtMTQuMiAxNy40LTI1LjlzLTcuMi0yMS43LTE3LjQtMjUuOWMzLjItMS4zIDYuOC0yLjEgMTAuNS0yLjEgMTUuNCAwLjEgMjggMTIuNiAyOCAyOC4xeiIgZmlsbD0iIzczODU5RSIgcC1pZD0iNTk4MCI+PC9wYXRoPjwvc3ZnPg==', barBackground: 'linear-gradient(90deg, #e16531, #eb866b)'});
  scene_assets_manager(false, ()=> {
    loadMesh = appInstance.assetsManager.addMeshTask('load', '', 'assets/scene/', 'classroom.babylon');
    loadJson = appInstance.assetsManager.addBinaryFileTask('load', 'assets/json/cross.json');}, ()=> {
      appInstance.preloader && appInstance.preloader.update(appInstance._glob.preloaderPercentage);}, ()=> {
    create_fullscreen_UI('cross', String.fromCharCode.apply(null, new Uint8Array(loadJson.data)));
    appInstance.env.updateOptions({createGround: false, createSkybox: false});
      appInstance.scene.getNodeByName('ground').checkCollisions = true;
      appInstance.scene.getNodeByName('ground').receiveShadows = true;
      appInstance.scene.getNodeByName('ground').isPickable = true;
    appInstance.scene.getNodeByName('collisions').getChildMeshes().forEach((element, index) => {

        element.checkCollisions = true;
        element.isPickable = true;
    });
    appInstance.scene.meshes.forEach((element, index) => {

        element.outlineColor = BABYLON.Color3.FromInts(50, 20, 20);
        element.outlineWidth = 0.025;
        element.renderOutline = true;
    });
    tab_initSetup();
    tab_decal();}, ()=> {
      appInstance.preloader && appInstance.preloader.finish();});
})();


/**
 * initSetup tab
 * @param {*} tab_arg
 */
function tab_initSetup(tab_arg) {
  var light, shadow, fpvCamera;



  light = new BABYLON.DirectionalLight('directionallight', new BABYLON.Vector3(-0.774, -0.626, -0.092), appInstance.scene);
  light.position = new BABYLON.Vector3(39.864, 25.73, 0);
  light.intensity = 3;
  shadow = new BABYLON.ShadowGenerator(1024, light);
    shadow.useBlurExponentialShadowMap = true;
    shadow.blurKernel = 6;
    shadow.blurScale = 1;
  appInstance.scene.getNodeByName('collisions').getChildMeshes().forEach((element, index) => {

      shadow.addShadowCaster(element);
  });
    shadow.addShadowCaster(appInstance.scene.getNodeByName('top'));
  // 场景

  appInstance.scene.clearColor = BABYLON.Color4.FromInts(170, 204, 250, 1);
  appInstance.scene.collisionsEnabled = true;
  appInstance.scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
  // 相机

  fpvCamera = new BABYLON.UniversalCamera('fpvCamera', new BABYLON.Vector3(0, 9, 9), appInstance.scene);
  appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
  appInstance.camera = fpvCamera;
  appInstance.scene.activeCamera = fpvCamera;
  fpvCamera.attachControl(appInstance.canvas, true);
  fpvCamera.target = new BABYLON.Vector3(0, 9, -9);
  fpvCamera.applyGravity = true;
  fpvCamera.checkCollisions = true;
  fpvCamera.ellipsoid = new BABYLON.Vector3(2, 4.5, 2);
  fpvCamera.minZ = 0.5;
  // 移动和转向速度

  fpvCamera.speed = 1;
  fpvCamera.angularSensibility = 6000;
  // 控制触摸设备转向和移动速度

  fpvCamera.touchAngularSensibility = 4000;
  fpvCamera.touchMoveSensibility = 250;
  // WASD方向控制

  fpvCamera.keysUp = [87];
  fpvCamera.keysDown = [83];
  fpvCamera.keysLeft = [65];
  fpvCamera.keysRight = [68];
}


/**
 * decal tab
 * @param {*} tab_arg
 */
function tab_decal(tab_arg) {
  var TARGET_MESH, DECAL_TEXTURE, decals, lastDecal, DECAL, textures, decalMat, decalTex, ray;

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

function arrayGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}

// ray_intersects_mesh block
  function ray_intersects_mesh(ray, mesh, doCb) {
    if(!ray || !mesh) return;

    let pickingInfo;
    if(Array.isArray(mesh)) {
      pickingInfo = ray.intersectsMeshes(mesh, true)[0];
    } else {
      pickingInfo = ray.intersectsMesh(mesh, true);
    }
    if (pickingInfo && pickingInfo.hit) {
      appInstance._glob.pickedMesh = pickingInfo.pickedMesh;
      appInstance._glob.pickedPoint = pickingInfo.pickedPoint;
      appInstance._glob.pickedNormal = pickingInfo.getNormal();
      doCb();
    }
  }

const Detector = {
    checkWebGL: function () {
      try {
        const e = document.createElement("canvas");
        return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
      } catch (e) {
        return !1
      }
    },
    checkWebGL2: function () {
      try {
        const e = document.createElement("canvas");
        return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"))
      } catch (e) {
        return !1
      }
    },
    checkWorkers: function () {
      return !!window.Worker
    },
    checkFileAPI: function () {
      return window.File && window.FileReader && window.FileList && window.Blob
    },
    genWebGLErrorMessage: function () {
      const e = document.createElement("div");
      return e.innerHTML = window.WebGLRenderingContext ? "显卡不支持WebGL.<br/>" : "浏览器不支持WebGL"
    },
    showWebGLErrorMessage: function (e) {
      (e = e || document.body).appendChild(Detector.genWebGLErrorMessage());
      const t = document.getElementById("v3d_preloader_container");
      t && (t.style.visibility = "hidden")
    },
    checkIOS: function () {
      return (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream
    },
    checkAndroid: function () {
      return !!navigator.userAgent.match(/Android/i)
    },
    checkSafari: function () {
      return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    },
    checkFloatTex: function (e, t) {
      const n = e.getContext();
      return !(!e.capabilities.isWebGL2 || !n.getExtension("EXT_color_buffer_float") || t && !n.getExtension("OES_texture_float_linear")) || !(e.capabilities.isWebGL2 || !n.getExtension("OES_texture_float") || t && !n.getExtension("OES_texture_float_linear"))
    },
    checkHalfFloatTex: function (e, t) {
      const n = e.getContext();
      return !(!e.capabilities.isWebGL2 || !n.getExtension("EXT_color_buffer_float")) || !(e.capabilities.isWebGL2 || !n.getExtension("OES_texture_half_float") || t && !n.getExtension("OES_texture_half_float_linear"))
    },
    checkHalfFloatReadPixels: function (e) {
      const t = e.getContext(),
        n = e.capabilities;
      return !/Firefox/.test(navigator.userAgent) && !!(t.getExtension("EXT_color_buffer_half_float") || n.isWebGL2 && t.getExtension("EXT_color_buffer_float"))
    },
    checkFloatReadPixels: function (e) {
      const t = e.getContext();
      return !!(e.capabilities.isWebGL2 || t.getExtension("OES_texture_float") || t.getExtension("WEBGL_color_buffer_float"))
    },
    checkDepthTex: function (e) {
      const t = e.getContext();
      return !(!e.capabilities.isWebGL2 && !t.getExtension("WEBGL_depth_texture"))
    },
    getGPUVendor: function (e) {
      const t = e ? e.getContext() : document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl"),
        n = t.getExtension("WEBGL_debug_renderer_info");
      return null != n ? t.getParameter(n.UNMASKED_VENDOR_WEBGL) : ""
    },
    getGPUModel: function (e) {
      const t = e ? e.getContext() : document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl"),
        n = t.getExtension("WEBGL_debug_renderer_info");
      return null != n ? t.getParameter(n.UNMASKED_RENDERER_WEBGL) : ""
    },
    checkWebXR: function (e, t, n) {
      "xr" in navigator && navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported(e).then((function (e) {
        e ? t() : n()
      })).catch(n) : n()
    },
    checkNativeWebXR: function () {
      return !1
    },
    checkCardboard: function () {
      return !1
    },
    checkSwiftShader: function (e) {
      return "Google SwiftShader" == this.getGPUModel(e)
    },
    checkWebAudio: function () {
      return void 0 !== (window.AudioContext || window.webkitAudioContext)
    },
    isSafariWithMultisamplingBug: function () {
      if (!this.checkSafari()) return !1;
      const e = navigator.userAgent;
      return e.match("Version/15.4") || e.match("Version/15.5") || e.match(/CPU (OS|iPhone OS) (15_4|15_5) like Mac OS X/)
    }
  }
  // feature_available block
  function feature_available(feature) {
    var userAgent = window.navigator.userAgent;
    var platform = window.navigator.platform;
    switch (feature) {
      case 'LINUX':
          return /Linux/.test(platform);
      case 'WINDOWS':
          return ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(platform) !== -1;
      case 'MACOS':
          return (['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(platform) !== -1 && !Detector.checkIOS());
      case 'IOS':
          return Detector.checkIOS();
      case 'ANDROID':
          return /Android/i.test(userAgent);
      case 'MOBILE':
          return (/Android|webOS|BlackBerry/i.test(userAgent) || Detector.checkIOS());

      case 'CHROME':
          // Chromium based
          return (!!window.chrome && !/Edge/.test(navigator.userAgent));
      case 'FIREFOX':
          return /Firefox/.test(navigator.userAgent);
      case 'IE':
          return /Trident/.test(navigator.userAgent);
      case 'EDGE':
          return /Edge/.test(navigator.userAgent);
      case 'SAFARI':
          return (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent));

      case 'TOUCH':
          return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
      case 'RETINA':
          return window.devicePixelRatio >= 2;
      case 'WEBAUDIO':
          return Detector.checkWebAudio();
      case 'WEBGL2':
          var canvas = document.createElement('canvas');
          var gl = canvas.getContext('webgl2')
          return !!gl;
      case 'DO_NOT_TRACK':
          if (navigator.doNotTrack == '1' || window.doNotTrack == '1')
              return true;
          else
              return false;
      default:
          return false;
      }
  }

// pointer_event block
  function pointer_event(eventType, ignorBackface, hitCb) {
    const { scene } = appInstance;
    const camera = scene.activeCamera;

    /* 忽略网格背面 */
    function ignorBackfacePredicate(p0, p1, p2, ray) {
      var p0p1 = p0.subtract(p1);
      var p2p1 = p2.subtract(p1);
      var normal = BABYLON.Vector3.Cross(p0p1, p2p1);
      return BABYLON.Vector3.Dot(ray.direction, normal) < 0;
    }

    scene.onPointerObservable.add(()=>{
      const pickingInfo = scene.pick(scene.pointerX, scene.pointerY, undefined, false, camera, ignorBackface ? ignorBackfacePredicate : undefined);
      if (pickingInfo && pickingInfo.hit) {
        appInstance._glob.pickedMesh = pickingInfo.pickedMesh;
        appInstance._glob.pickedPoint = pickingInfo.pickedPoint;
        appInstance._glob.pickedNormal = pickingInfo.getNormal();
        hitCb();
      }
    }, eventType)
  }

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function mesh_create_decal(name, mesh, texture, options) {
    if(!mesh) return;

    const decalMat = new BABYLON.StandardMaterial(name, appInstance.scene);
    decalMat.diffuseTexture = new BABYLON.Texture(texture, appInstance.scene);
    decalMat.diffuseTexture.hasAlpha = true;
    decalMat.zOffset = -2;
    const decalMesh = BABYLON.MeshBuilder.CreateDecal(name, mesh, options);
    decalMesh.material = decalMat;
    return decalMesh;
  }

// Describe this function...
function createDecal(TARGET_MESH, DECAL_TEXTURE) {

  if (decals.length > 0) {

      lastDecal = decals.shift();
      appInstance.scene.removeMesh(lastDecal, false);
      appInstance.scene.removeMaterial(lastDecal.material);}

    DECAL = mesh_create_decal('decal', TARGET_MESH, DECAL_TEXTURE, {position: picking_info('POINT','XYZ','null').add(picking_info('NORMAL','null','XYZ').scale(-0.2)), normal: picking_info('NORMAL','null','XYZ'), size: new BABYLON.Vector3(4, 4, 4), angle: mathRandomInt(0, 359)});
    decalMat = DECAL.material;
    decalTex = decalMat.diffuseTexture;
      decalMat.emissiveTexture = decalTex;
      decalMat.specularColor = BABYLON.Color3.FromInts(0, 0, 0);
      decalMat.zOffset = -100;
      DECAL.isPickable = false;
  decals.push(DECAL);
}



  // 创建贴花

  decals = [];
  textures = ['assets/texture/dog.png', 'assets/texture/cat.png', 'assets/texture/flower.png', 'assets/texture/smile.png'];
  // 按T键创建贴花

  appInstance.scene.onKeyboardObservable.add((eventData) => {
    if (eventData.type == BABYLON.KeyboardEventTypes.KEYDOWN && (false ? true : !eventData.event.repeat )) {
      appInstance._glob.keyInput = {key: eventData.event.key, keyCode: eventData.event.keyCode};

  if (appInstance._glob.keyInput.key == 't' || appInstance._glob.keyInput.key == 'T') {

      ray = appInstance.scene.activeCamera.getForwardRay(18);
      ray_intersects_mesh(ray, appInstance.scene.meshes, ()=> {  createDecal(picking_info('MESH','null','null'), arrayGetRandomItem(textures, false));
    });}

    }
  });
if (feature_available('TOUCH')) {

    pointer_event(BABYLON.PointerEventTypes.POINTERDOUBLETAP, true, ()=> {
    if (picking_info('MESH','null','null')) {

        ray = appInstance.scene.activeCamera.getForwardRay(18);
        ray_intersects_mesh(ray, appInstance.scene.meshes, ()=> {  createDecal(picking_info('MESH','null','null'), arrayGetRandomItem(textures, false));
      });}
  });}

  appInstance.scene.onKeyboardObservable.add((eventData) => {
    if (eventData.type == BABYLON.KeyboardEventTypes.KEYDOWN && (false ? true : !eventData.event.repeat )) {
      appInstance._glob.keyInput = {key: eventData.event.key, keyCode: eventData.event.keyCode};

  if (appInstance._glob.keyInput.key == 'Enter') {
    appInstance.engine.enterPointerlock();}

    }
  });
}

