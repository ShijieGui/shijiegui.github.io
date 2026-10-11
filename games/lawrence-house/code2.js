gdjs.chapter_321BCode = {};
gdjs.chapter_321BCode.localVariables = [];
gdjs.chapter_321BCode.idToCallbackMap = new Map();
gdjs.chapter_321BCode.GDbackgroundObjects1= [];
gdjs.chapter_321BCode.GDbackgroundObjects2= [];
gdjs.chapter_321BCode.GDlightObjects1= [];
gdjs.chapter_321BCode.GDlightObjects2= [];
gdjs.chapter_321BCode.GD_9540657_9524149Objects1= [];
gdjs.chapter_321BCode.GD_9540657_9524149Objects2= [];


gdjs.chapter_321BCode.mapOfGDgdjs_9546chapter_9595321BCode_9546GDlightObjects1Objects = Hashtable.newFrom({"light": gdjs.chapter_321BCode.GDlightObjects1});
gdjs.chapter_321BCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.chapter_321BCode.GDlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_321BCode.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_321BCode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_321BCode.GD_9540657_9524149Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade out", 0, "linear", 4, true);
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Light_Power_On.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.chapter_321BCode.GDlightObjects1.length ;i < len;++i) {
    gdjs.chapter_321BCode.GDlightObjects1[i].getBehavior("Flash").Flash(2, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.chapter_321BCode.GDlightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_321BCode.GDlightObjects1.length;i<l;++i) {
    if ( !(gdjs.chapter_321BCode.GDlightObjects1[i].getBehavior("Flash").IsFlashing(null)) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_321BCode.GDlightObjects1[k] = gdjs.chapter_321BCode.GDlightObjects1[i];
        ++k;
    }
}
gdjs.chapter_321BCode.GDlightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_321BCode.mapOfGDgdjs_9546chapter_9595321BCode_9546GDlightObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 2", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}
}

}


};

gdjs.chapter_321BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_321BCode.GDbackgroundObjects1.length = 0;
gdjs.chapter_321BCode.GDbackgroundObjects2.length = 0;
gdjs.chapter_321BCode.GDlightObjects1.length = 0;
gdjs.chapter_321BCode.GDlightObjects2.length = 0;
gdjs.chapter_321BCode.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_321BCode.GD_9540657_9524149Objects2.length = 0;

gdjs.chapter_321BCode.eventsList0(runtimeScene);
gdjs.chapter_321BCode.GDbackgroundObjects1.length = 0;
gdjs.chapter_321BCode.GDbackgroundObjects2.length = 0;
gdjs.chapter_321BCode.GDlightObjects1.length = 0;
gdjs.chapter_321BCode.GDlightObjects2.length = 0;
gdjs.chapter_321BCode.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_321BCode.GD_9540657_9524149Objects2.length = 0;


return;

}

gdjs['chapter_321BCode'] = gdjs.chapter_321BCode;
