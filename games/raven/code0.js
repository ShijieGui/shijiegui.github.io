gdjs.Chap0Code = {};
gdjs.Chap0Code.localVariables = [];
gdjs.Chap0Code.idToCallbackMap = new Map();
gdjs.Chap0Code.GDravenObjects1= [];
gdjs.Chap0Code.GDravenObjects2= [];
gdjs.Chap0Code.GDBackgroundObjects1= [];
gdjs.Chap0Code.GDBackgroundObjects2= [];
gdjs.Chap0Code.GDTitleObjects1= [];
gdjs.Chap0Code.GDTitleObjects2= [];
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Chap0Code.GDSoundObjects1= [];
gdjs.Chap0Code.GDSoundObjects2= [];


gdjs.Chap0Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap1", false);
}
}

}


};

gdjs.Chap0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap0Code.GDravenObjects1.length = 0;
gdjs.Chap0Code.GDravenObjects2.length = 0;
gdjs.Chap0Code.GDBackgroundObjects1.length = 0;
gdjs.Chap0Code.GDBackgroundObjects2.length = 0;
gdjs.Chap0Code.GDTitleObjects1.length = 0;
gdjs.Chap0Code.GDTitleObjects2.length = 0;
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Chap0Code.GDSoundObjects1.length = 0;
gdjs.Chap0Code.GDSoundObjects2.length = 0;

gdjs.Chap0Code.eventsList0(runtimeScene);
gdjs.Chap0Code.GDravenObjects1.length = 0;
gdjs.Chap0Code.GDravenObjects2.length = 0;
gdjs.Chap0Code.GDBackgroundObjects1.length = 0;
gdjs.Chap0Code.GDBackgroundObjects2.length = 0;
gdjs.Chap0Code.GDTitleObjects1.length = 0;
gdjs.Chap0Code.GDTitleObjects2.length = 0;
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Chap0Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Chap0Code.GDSoundObjects1.length = 0;
gdjs.Chap0Code.GDSoundObjects2.length = 0;


return;

}

gdjs['Chap0Code'] = gdjs.Chap0Code;
