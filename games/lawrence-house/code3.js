gdjs.chapter_322Code = {};
gdjs.chapter_322Code.localVariables = [];
gdjs.chapter_322Code.idToCallbackMap = new Map();
gdjs.chapter_322Code.GDbackgroundObjects1= [];
gdjs.chapter_322Code.GDbackgroundObjects2= [];
gdjs.chapter_322Code.GDwindowObjects1= [];
gdjs.chapter_322Code.GDwindowObjects2= [];
gdjs.chapter_322Code.GDdoorObjects1= [];
gdjs.chapter_322Code.GDdoorObjects2= [];
gdjs.chapter_322Code.GD_9540657_9524149Objects1= [];
gdjs.chapter_322Code.GD_9540657_9524149Objects2= [];


gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.chapter_322Code.GDdoorObjects1});
gdjs.chapter_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_322Code.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_322Code.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GD_9540657_9524149Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GD_9540657_9524149Objects1[i].getBehavior("Opacity").setOpacity(0);
}
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


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.chapter_322Code.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDdoorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_322Code.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_322Code.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GD_9540657_9524149Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GD_9540657_9524149Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade in", 255, "linear", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_322Code.GD_9540657_9524149Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322Code.GD_9540657_9524149Objects1.length;i<l;++i) {
    if ( gdjs.chapter_322Code.GD_9540657_9524149Objects1[i].getBehavior("Tween").hasFinished("fade in") ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322Code.GD_9540657_9524149Objects1[k] = gdjs.chapter_322Code.GD_9540657_9524149Objects1[i];
        ++k;
    }
}
gdjs.chapter_322Code.GD_9540657_9524149Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 2A", false);
}
}

}


};

gdjs.chapter_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_322Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_322Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_322Code.GDwindowObjects1.length = 0;
gdjs.chapter_322Code.GDwindowObjects2.length = 0;
gdjs.chapter_322Code.GDdoorObjects1.length = 0;
gdjs.chapter_322Code.GDdoorObjects2.length = 0;
gdjs.chapter_322Code.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_322Code.GD_9540657_9524149Objects2.length = 0;

gdjs.chapter_322Code.eventsList0(runtimeScene);
gdjs.chapter_322Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_322Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_322Code.GDwindowObjects1.length = 0;
gdjs.chapter_322Code.GDwindowObjects2.length = 0;
gdjs.chapter_322Code.GDdoorObjects1.length = 0;
gdjs.chapter_322Code.GDdoorObjects2.length = 0;
gdjs.chapter_322Code.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_322Code.GD_9540657_9524149Objects2.length = 0;


return;

}

gdjs['chapter_322Code'] = gdjs.chapter_322Code;
