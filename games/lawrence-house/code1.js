gdjs.chapter_321ACode = {};
gdjs.chapter_321ACode.localVariables = [];
gdjs.chapter_321ACode.idToCallbackMap = new Map();
gdjs.chapter_321ACode.GDbackgroundObjects1= [];
gdjs.chapter_321ACode.GDbackgroundObjects2= [];
gdjs.chapter_321ACode.GDhandObjects1= [];
gdjs.chapter_321ACode.GDhandObjects2= [];
gdjs.chapter_321ACode.GDboardObjects1= [];
gdjs.chapter_321ACode.GDboardObjects2= [];
gdjs.chapter_321ACode.GDboard_959503Objects1= [];
gdjs.chapter_321ACode.GDboard_959503Objects2= [];
gdjs.chapter_321ACode.GDboard_959502Objects1= [];
gdjs.chapter_321ACode.GDboard_959502Objects2= [];
gdjs.chapter_321ACode.GDboard_959501Objects1= [];
gdjs.chapter_321ACode.GDboard_959501Objects2= [];
gdjs.chapter_321ACode.GDfloorObjects1= [];
gdjs.chapter_321ACode.GDfloorObjects2= [];
gdjs.chapter_321ACode.GD_9540657_9524149Objects1= [];
gdjs.chapter_321ACode.GD_9540657_9524149Objects2= [];


gdjs.chapter_321ACode.asyncCallback11381596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_321ACode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 1B", false);
}
gdjs.chapter_321ACode.localVariables.length = 0;
}
gdjs.chapter_321ACode.idToCallbackMap.set(11381596, gdjs.chapter_321ACode.asyncCallback11381596);
gdjs.chapter_321ACode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_321ACode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.chapter_321ACode.asyncCallback11381596(runtimeScene, asyncObjectsList)), 11381596, asyncObjectsList);
}
}

}


};gdjs.chapter_321ACode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_321ACode.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_321ACode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GD_9540657_9524149Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_321ACode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GD_9540657_9524149Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("board_03"), gdjs.chapter_321ACode.GDboard_959503Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_321ACode.GDboard_959503Objects1.length;i<l;++i) {
    if ( gdjs.chapter_321ACode.GDboard_959503Objects1[i].getBehavior("可拖动").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_321ACode.GDboard_959503Objects1[k] = gdjs.chapter_321ACode.GDboard_959503Objects1[i];
        ++k;
    }
}
gdjs.chapter_321ACode.GDboard_959503Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("board"), gdjs.chapter_321ACode.GDboardObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.chapter_321ACode.GDfloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("hand"), gdjs.chapter_321ACode.GDhandObjects1);
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_321ACode.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_321ACode.GDhandObjects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GDhandObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.chapter_321ACode.GDboardObjects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GDboardObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.chapter_321ACode.GDfloorObjects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GDfloorObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.chapter_321ACode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GD_9540657_9524149Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_321ACode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_321ACode.GD_9540657_9524149Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade in", 255, "linear", 3, false);
}
}

{ //Subevents
gdjs.chapter_321ACode.eventsList0(runtimeScene);} //End of subevents
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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.chapter_321ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_321ACode.GDbackgroundObjects1.length = 0;
gdjs.chapter_321ACode.GDbackgroundObjects2.length = 0;
gdjs.chapter_321ACode.GDhandObjects1.length = 0;
gdjs.chapter_321ACode.GDhandObjects2.length = 0;
gdjs.chapter_321ACode.GDboardObjects1.length = 0;
gdjs.chapter_321ACode.GDboardObjects2.length = 0;
gdjs.chapter_321ACode.GDboard_959503Objects1.length = 0;
gdjs.chapter_321ACode.GDboard_959503Objects2.length = 0;
gdjs.chapter_321ACode.GDboard_959502Objects1.length = 0;
gdjs.chapter_321ACode.GDboard_959502Objects2.length = 0;
gdjs.chapter_321ACode.GDboard_959501Objects1.length = 0;
gdjs.chapter_321ACode.GDboard_959501Objects2.length = 0;
gdjs.chapter_321ACode.GDfloorObjects1.length = 0;
gdjs.chapter_321ACode.GDfloorObjects2.length = 0;
gdjs.chapter_321ACode.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_321ACode.GD_9540657_9524149Objects2.length = 0;

gdjs.chapter_321ACode.eventsList1(runtimeScene);
gdjs.chapter_321ACode.GDbackgroundObjects1.length = 0;
gdjs.chapter_321ACode.GDbackgroundObjects2.length = 0;
gdjs.chapter_321ACode.GDhandObjects1.length = 0;
gdjs.chapter_321ACode.GDhandObjects2.length = 0;
gdjs.chapter_321ACode.GDboardObjects1.length = 0;
gdjs.chapter_321ACode.GDboardObjects2.length = 0;
gdjs.chapter_321ACode.GDboard_959503Objects1.length = 0;
gdjs.chapter_321ACode.GDboard_959503Objects2.length = 0;
gdjs.chapter_321ACode.GDboard_959502Objects1.length = 0;
gdjs.chapter_321ACode.GDboard_959502Objects2.length = 0;
gdjs.chapter_321ACode.GDboard_959501Objects1.length = 0;
gdjs.chapter_321ACode.GDboard_959501Objects2.length = 0;
gdjs.chapter_321ACode.GDfloorObjects1.length = 0;
gdjs.chapter_321ACode.GDfloorObjects2.length = 0;
gdjs.chapter_321ACode.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_321ACode.GD_9540657_9524149Objects2.length = 0;


return;

}

gdjs['chapter_321ACode'] = gdjs.chapter_321ACode;
