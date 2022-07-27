// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];

// main tab
(() => {
  var loadMesh, loadAnnotation;

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



  create_custom_preloader({logoImage: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwNjM5MzEzOTc5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyNzAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyMjgiIHdpZHRoPSI3OS4zNzUiIGhlaWdodD0iNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NzMuMDU4NDYyIDI0Mi41NDAzMDhIMzk3LjA5NTM4NWE0Ny41OTYzMDggNDcuNTk2MzA4IDAgMCAxLTQzLjkwNC02Ni4wMzgxNTRsNTguMjEwNDYxLTEzOC43MTI2MTZBNDcuNjE2IDQ3LjYxNiAwIDAgMSA0NTUuMzE1NjkyIDguNTk1NjkyaDM1OS41MjI0NjJhNDcuNjA2MTU0IDQ3LjYwNjE1NCAwIDAgMSA0My45MTM4NDYgMjkuMTkzODQ2bDU4LjIwMDYxNSAxMzguNzEyNjE2YTQ3LjYxNiA0Ny42MTYgMCAwIDEtNDMuOTA0IDY2LjAzODE1NHoiIGZpbGw9IiNGNTlEMDAiIHAtaWQ9IjQyMjkiPjwvcGF0aD48cGF0aCBkPSJNOTE2Ljk1MjYxNSAxNzYuNTAyMTU0TDg1OC43NDIxNTQgMzcuNzg5NTM4QTQ3LjYxNiA0Ny42MTYgMCAwIDAgODE0LjgzODE1NCA4LjU5NTY5Mkg2MzUuMDc2OTIzdjIzMy45NDQ2MTZoMjM3Ljk4MTUzOWE0Ny42MDYxNTQgNDcuNjA2MTU0IDAgMCAwIDQzLjg5NDE1My02Ni4wMzgxNTR6IiBmaWxsPSIjRTg3RTA0IiBwLWlkPSI0MjMwIj48L3BhdGg+PHBhdGggZD0iTTI3NC42ODggMjQyLjU0MDMwOEgxMzkuODQ0OTIzYTQ3LjYwNjE1NCA0Ny42MDYxNTQgMCAwIDEtNDcuNjA2MTU0LTQ3LjYxNlY4Ni4xMjQzMDhhNDcuNjA2MTU0IDQ3LjYwNjE1NCAwIDAgMSA0Ny42MDYxNTQtNDcuNjA2MTU0aDEzNC44MzMyMzFhNDcuNjA2MTU0IDQ3LjYwNjE1NCAwIDAgMSA0Ny42MDYxNTQgNDcuNjE2djEwOC43OTAxNTRhNDcuNjA2MTU0IDQ3LjYwNjE1NCAwIDAgMS00Ny41OTYzMDggNDcuNjA2MTU0eiIgZmlsbD0iIzgwODI4NSIgcC1pZD0iNDIzMSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTMwLjMwODkyMyAxMDIwLjMxNzUzOEgxMzkuODQ0OTIzQzY1LjQ0NzM4NSAxMDIwLjMxNzUzOCA0LjkyMzA3NyA5NTkuODAzMDc3IDQuOTIzMDc3IDg4NS4zOTU2OTJWMjgyLjI0OTg0NmMwLTc0LjM5NzUzOCA2MC41MjQzMDgtMTM0LjkyMTg0NiAxMzQuOTIxODQ2LTEzNC45MjE4NDZoOTkwLjQ2NGM3NC4zOTc1MzggMCAxMzQuOTIxODQ2IDYwLjUyNDMwOCAxMzQuOTIxODQ2IDEzNC45MjE4NDZ2NjAzLjE2NTUzOWMwIDc0LjM4NzY5Mi02MC41MjQzMDggMTM0LjkxMi0xMzQuOTIxODQ2IDEzNC45MTJ6IiBmaWxsPSIjRjJDNTAwIiBwLWlkPSI0MjMyIj48L3BhdGg+PHBhdGggZD0iTTExMzAuMzA4OTIzIDE0Ny4zMTgxNTRINjM1LjA3NjkyM3Y4NzMuMDA5MjMxaDQ5NS4yMzJjNzQuMzk3NTM4IDAgMTM0LjkyMTg0Ni02MC41MzQxNTQgMTM0LjkyMTg0Ni0xMzQuOTIxODQ3di02MDMuMTc1Mzg0YzAtNzQuMzg3NjkyLTYwLjUyNDMwOC0xMzQuOTEyLTEzNC45MjE4NDYtMTM0LjkxMnoiIGZpbGw9IiNGNTlEMDAiIHAtaWQ9IjQyMzMiPjwvcGF0aD48cGF0aCBkPSJNNjM1LjA3NjkyMyA5MTkuNTYxODQ2Yy0xODUuMTM3MjMxIDAtMzM1Ljc0NC0xNTAuNjE2NjE1LTMzNS43NDQtMzM1Ljc0NCAwLTE4NS4xMjczODUgMTUwLjYxNjYxNS0zMzUuNzM0MTU0IDMzNS43NDQtMzM1LjczNDE1NCAxODUuMTI3Mzg1IDAgMzM1Ljc0NCAxNTAuNjA2NzY5IDMzNS43NDQgMzM1LjczNDE1NFM4MjAuMjA0MzA4IDkxOS41NjE4NDYgNjM1LjA3NjkyMyA5MTkuNTYxODQ2eiIgZmlsbD0iI0Y1OUQwMCIgcC1pZD0iNDIzNCI+PC9wYXRoPjxwYXRoIGQ9Ik02MzUuMDc2OTIzIDI0OC4wNzM4NDZ2NjcxLjQ4OGMxODUuMTI3Mzg1IDAgMzM1Ljc0NC0xNTAuNjE2NjE1IDMzNS43NDQtMzM1Ljc0NCAwLTE4NS4xMjczODUtMTUwLjYxNjYxNS0zMzUuNzQ0LTMzNS43NDQtMzM1Ljc0NHoiIGZpbGw9IiNFODdFMDQiIHAtaWQ9IjQyMzUiPjwvcGF0aD48cGF0aCBkPSJNNjM1LjA3NjkyMyA3NDYuOTc4NDYyYy04OS45NzQxNTQgMC0xNjMuMTYwNjE1LTczLjE4NjQ2Mi0xNjMuMTYwNjE1LTE2My4xNTA3NyAwLTg5Ljk3NDE1NCA3My4xOTYzMDgtMTYzLjE3MDQ2MiAxNjMuMTYwNjE1LTE2My4xNzA0NjFzMTYzLjE2MDYxNSA3My4xOTYzMDggMTYzLjE2MDYxNSAxNjMuMTYwNjE1YzAgODkuOTc0MTU0LTczLjE4NjQ2MiAxNjMuMTYwNjE1LTE2My4xNjA2MTUgMTYzLjE2MDYxNnoiIGZpbGw9IiM4MDgyODUiIHAtaWQ9IjQyMzYiPjwvcGF0aD48cGF0aCBkPSJNNjM1LjA3NjkyMyA0MjAuNjU3MjMxdjMyNi4zMjEyMzFjODkuOTc0MTU0IDAgMTYzLjE2MDYxNS03My4xOTYzMDggMTYzLjE2MDYxNS0xNjMuMTYwNjE2UzcyNS4wNTEwNzcgNDIwLjY1NzIzMSA2MzUuMDc2OTIzIDQyMC42NTcyMzF6IiBmaWxsPSIjNkQ2RTcxIiBwLWlkPSI0MjM3Ij48L3BhdGg+PC9zdmc+', barBackground: 'linear-gradient(90deg, #f59d00, #f2c500);', background: 'radial-gradient(rgb(128 130 133), rgb(109 110 113));'});
  scene_assets_manager(false, ()=> {
    loadMesh = appInstance.assetsManager.addMeshTask('load', '', 'assets/scene/', 'canon.babylon');
    loadAnnotation = appInstance.assetsManager.addBinaryFileTask('loadAnno', 'assets/json/annotation.json');}, ()=> {
      appInstance.preloader && appInstance.preloader.update(appInstance._glob.preloaderPercentage);}, ()=> {
    tab_initEnv({annotation: loadAnnotation});
    tab_onClick();}, ()=> {});
})();


/**
 * onClick tab
 * @param {*} tab_arg
 */
function tab_onClick(tab_arg) {
  var TARGET, POSITION, redBall, ball;

// transition_animation block
  function transition_animation(object, key, value, type, duration, fps, easing, doCb) {
    const animate = BABYLON.Animation.CreateAnimation(key, type, fps, easing);
    BABYLON.Animation.TransitionTo(key, value, object, appInstance.scene, fps, animate, duration * 1000, () => {
      setTimeout(()=>{
        if(object.hasOwnProperty('animations')) {
          const index = object.animations.indexOf(animate);
          index !== -1 && object.animations.splice(index, 1);
        }
      }, duration)
      doCb();
    })
  }

// 过渡动画
function transition(TARGET, POSITION) {

    ball.position = TARGET;
      ball.isVisible = true;
    transition_animation(appInstance.scene.activeCamera, 'position', POSITION, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, 1, 60, new BABYLON.SineEase(), () => {});
    transition_animation(appInstance.scene.activeCamera, 'target', TARGET, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, 1, 60, new BABYLON.SineEase(), () => {
        ball.isVisible = false;});}

// mesh_create_set_shapes block
  function mesh_create_set_shapes(name, type, options) {
    const mesh = BABYLON.MeshBuilder[type](name, options, appInstance.scene);
    mesh.material = appInstance.defautlMaterial;
    return mesh;
  }

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



    appInstance.scene.getNodeByName('canon').isPickable = true;
  // 小球

  redBall = new BABYLON.StandardMaterial('redBall', appInstance.scene);
    redBall.emissiveColor = BABYLON.Color3.FromInts(255, 0, 0);
    redBall.disableLighting = true;
  ball = mesh_create_set_shapes('ball', 'CreateSphere', {diameter: 0.1, segments: 8});
    ball.visibility = 0.5;
    ball.isPickable = false;
    ball.isVisible = false;
    ball.material = redBall;
  // 单击注视

  pointer_event(BABYLON.PointerEventTypes.POINTERPICK, true, ()=> {
  if (picking_info('MESH','null','null') == appInstance.scene.getNodeByName('canon')) {
    transition(picking_info('POINT','XYZ','null'), picking_info('POINT','XYZ','null').add(picking_info('NORMAL','null','XYZ').scale(2)));
  }
});
  // 双击恢复

  pointer_event(BABYLON.PointerEventTypes.POINTERDOUBLETAP, true, ()=> {
  if (picking_info('MESH','null','null') == appInstance.scene.getNodeByName('canon')) {
    transition(new BABYLON.Vector3(0, 1, 0), new BABYLON.Vector3(0, 1, -6));
  }
});
}


/**
 * initEnv tab
 * @param {*} tab_arg
 */
function tab_initEnv(tab_arg) {
  var loadAnnotation, annotationContainer, detail, light, line;

// create_fullscreen_UI block
  function create_fullscreen_UI(name, json) {
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(name, true, appInstance.scene, BABYLON.Texture.NEAREST_NEAREST);
    advancedTexture.parseContent(JSON.parse(json));
    advancedTexture.rootContainer.scaleX = window.devicePixelRatio;
    advancedTexture.rootContainer.scaleY = window.devicePixelRatio;
    return advancedTexture;
  }

// check_point_behind_mesh block
  function check_point_behind_mesh(point, mesh) {
    if (!point || point.getClassName() !== 'Vector3' || !mesh || mesh.getClassName() !== 'Mesh') return;

    const dir = appInstance.scene.activeCamera.position.subtract(point).normalize();
    const ray = new BABYLON.Ray(point, dir, 10);
    const info = ray.intersectsMesh(mesh);
    if (info.hit) {
      return true
    } else {
      return false
    }
  }

// used for autorotate_camera block
  appInstance._glob.autoRotationBehavior = new BABYLON.AutoRotationBehavior();

  // autorotate_camera block
  function autorotate_camera(enabled, speed, waitTime, spinupTime) {
    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };

    if(enabled) {
      appInstance._glob.autoRotationBehavior.idleRotationSpeed = speed;
      appInstance._glob.autoRotationBehavior.idleRotationWaitTime = waitTime * 1000;
      appInstance._glob.autoRotationBehavior.idleRotationSpinupTime = spinupTime * 1000;
      appInstance._glob.autoRotationBehavior.attach(camera);
    } else {
      appInstance._glob.autoRotationBehavior.detach();
    }

  }

// mesh_create_set_shapes block
  function mesh_create_set_shapes(name, type, options) {
    const mesh = BABYLON.MeshBuilder[type](name, options, appInstance.scene);
    mesh.material = appInstance.defautlMaterial;
    return mesh;
  }



  // 注释

  loadAnnotation = tab_arg['annotation'];
  annotationContainer = create_fullscreen_UI('ui', String.fromCharCode.apply(null, new Uint8Array(loadAnnotation.data)));
  detail = annotationContainer.getControlByName('detail');
  appInstance.scene.onBeforeRenderObservable.add(()=>{

    detail.moveToVector3(new BABYLON.Vector3(1, 2.2, 0), appInstance.scene);
  if (check_point_behind_mesh(new BABYLON.Vector3(1, 2.2, 0), appInstance.scene.getNodeByName('canon'))) {

        detail.alpha = 0.5;} else {

        detail.alpha = 1;}

  })
  // 环境

  appInstance.env.updateOptions({skyboxSize: 20, skyboxColor: BABYLON.Color3.FromHexString('#e0eaec'), groundColor: BABYLON.Color3.FromHexString('#e0eaec')});
  appInstance.env.ground.position = new BABYLON.Vector3(0, -0.01, 0);
  // 相机

  appInstance.scene.activeCamera.position = new BABYLON.Vector3(0, 1, -6);
  appInstance.scene.activeCamera.target = new BABYLON.Vector3(0, 1, 0);
  appInstance.scene.activeCamera.lowerRadiusLimit = 0.5;
  appInstance.scene.activeCamera.upperRadiusLimit = 12;
  appInstance.scene.activeCamera.wheelPrecision = 24;
  appInstance.scene.activeCamera.minZ = 0.1;
  autorotate_camera(true, 0.08, 2, 2);
  // 灯光

  light = new BABYLON.DirectionalLight('directionallight', new BABYLON.Vector3(-0.069, -0.523, 0.849), appInstance.scene);
  light.position = new BABYLON.Vector3(0.065, 3.295, -3.232);
  light.intensity = 2;
  // 线条

  line = mesh_create_set_shapes('line', 'CreateLines', {points: [new BABYLON.Vector3(0, 1.8, 0), new BABYLON.Vector3(0, 2, 0), new BABYLON.Vector3(1, 2.2, 0)], colors: [BABYLON.Color4.FromInts(255, 0, 0, 255), BABYLON.Color4.FromInts(255, 0, 0, 255), BABYLON.Color4.FromInts(255, 0, 0, 255)]});
}

