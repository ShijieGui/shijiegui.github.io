gdjs.music_32boxCode = {};
gdjs.music_32boxCode.localVariables = [];
gdjs.music_32boxCode.idToCallbackMap = new Map();
gdjs.music_32boxCode.GDLightObjects1= [];
gdjs.music_32boxCode.GDLightObjects2= [];
gdjs.music_32boxCode.GDLightObjects3= [];
gdjs.music_32boxCode.GDLightObjects4= [];
gdjs.music_32boxCode.GDLightObjects5= [];
gdjs.music_32boxCode.GDLight2Objects1= [];
gdjs.music_32boxCode.GDLight2Objects2= [];
gdjs.music_32boxCode.GDLight2Objects3= [];
gdjs.music_32boxCode.GDLight2Objects4= [];
gdjs.music_32boxCode.GDLight2Objects5= [];
gdjs.music_32boxCode.GDLight3Objects1= [];
gdjs.music_32boxCode.GDLight3Objects2= [];
gdjs.music_32boxCode.GDLight3Objects3= [];
gdjs.music_32boxCode.GDLight3Objects4= [];
gdjs.music_32boxCode.GDLight3Objects5= [];
gdjs.music_32boxCode.GDtableObjects1= [];
gdjs.music_32boxCode.GDtableObjects2= [];
gdjs.music_32boxCode.GDtableObjects3= [];
gdjs.music_32boxCode.GDtableObjects4= [];
gdjs.music_32boxCode.GDtableObjects5= [];
gdjs.music_32boxCode.GDmusic_9595boxObjects1= [];
gdjs.music_32boxCode.GDmusic_9595boxObjects2= [];
gdjs.music_32boxCode.GDmusic_9595boxObjects3= [];
gdjs.music_32boxCode.GDmusic_9595boxObjects4= [];
gdjs.music_32boxCode.GDmusic_9595boxObjects5= [];
gdjs.music_32boxCode.GDLight4Objects1= [];
gdjs.music_32boxCode.GDLight4Objects2= [];
gdjs.music_32boxCode.GDLight4Objects3= [];
gdjs.music_32boxCode.GDLight4Objects4= [];
gdjs.music_32boxCode.GDLight4Objects5= [];


gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDLightObjects1Objects = Hashtable.newFrom({"Light": gdjs.music_32boxCode.GDLightObjects1});
gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDtableObjects1Objects = Hashtable.newFrom({"table": gdjs.music_32boxCode.GDtableObjects1});
gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDLight2Objects1Objects = Hashtable.newFrom({"Light2": gdjs.music_32boxCode.GDLight2Objects1});
gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDtableObjects1Objects = Hashtable.newFrom({"table": gdjs.music_32boxCode.GDtableObjects1});
gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDLight3Objects1Objects = Hashtable.newFrom({"Light3": gdjs.music_32boxCode.GDLight3Objects1});
gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDtableObjects1Objects = Hashtable.newFrom({"table": gdjs.music_32boxCode.GDtableObjects1});
gdjs.music_32boxCode.asyncCallback14355244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "END", false);
}
gdjs.music_32boxCode.localVariables.length = 0;
}
gdjs.music_32boxCode.idToCallbackMap.set(14355244, gdjs.music_32boxCode.asyncCallback14355244);
gdjs.music_32boxCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.music_32boxCode.asyncCallback14355244(runtimeScene, asyncObjectsList)), 14355244, asyncObjectsList);
}
}

}


};gdjs.music_32boxCode.asyncCallback14354772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("music_box"), gdjs.music_32boxCode.GDmusic_9595boxObjects4);
{for(var i = 0, len = gdjs.music_32boxCode.GDmusic_9595boxObjects4.length ;i < len;++i) {
    gdjs.music_32boxCode.GDmusic_9595boxObjects4[i].getBehavior("Tween").addObjectOpacityTween2("on", 255, "linear", 2, false);
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Nostalgic Piano.aac", 1, true, 100, 1);
}

{ //Subevents
gdjs.music_32boxCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.music_32boxCode.localVariables.length = 0;
}
gdjs.music_32boxCode.idToCallbackMap.set(14354772, gdjs.music_32boxCode.asyncCallback14354772);
gdjs.music_32boxCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.music_32boxCode.asyncCallback14354772(runtimeScene, asyncObjectsList)), 14354772, asyncObjectsList);
}
}

}


};gdjs.music_32boxCode.asyncCallback14354252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Light4"), gdjs.music_32boxCode.GDLight4Objects3);

{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects3.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects3[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 2, false);
}
}

{ //Subevents
gdjs.music_32boxCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.music_32boxCode.localVariables.length = 0;
}
gdjs.music_32boxCode.idToCallbackMap.set(14354252, gdjs.music_32boxCode.asyncCallback14354252);
gdjs.music_32boxCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
for (const obj of gdjs.music_32boxCode.GDLight4Objects2) asyncObjectsList.addObject("Light4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.music_32boxCode.asyncCallback14354252(runtimeScene, asyncObjectsList)), 14354252, asyncObjectsList);
}
}

}


};gdjs.music_32boxCode.asyncCallback14353932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Light4"), gdjs.music_32boxCode.GDLight4Objects2);

{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects2.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects2[i].getBehavior("FlashOpacity").Stop(null);
}
}

{ //Subevents
gdjs.music_32boxCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.music_32boxCode.localVariables.length = 0;
}
gdjs.music_32boxCode.idToCallbackMap.set(14353932, gdjs.music_32boxCode.asyncCallback14353932);
gdjs.music_32boxCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.music_32boxCode.localVariables);
for (const obj of gdjs.music_32boxCode.GDLight4Objects1) asyncObjectsList.addObject("Light4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.music_32boxCode.asyncCallback14353932(runtimeScene, asyncObjectsList)), 14353932, asyncObjectsList);
}
}

}


};gdjs.music_32boxCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Light4"), gdjs.music_32boxCode.GDLight4Objects1);
gdjs.copyArray(runtimeScene.getObjects("music_box"), gdjs.music_32boxCode.GDmusic_9595boxObjects1);
{for(var i = 0, len = gdjs.music_32boxCode.GDmusic_9595boxObjects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDmusic_9595boxObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.music_32boxCode.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("table"), gdjs.music_32boxCode.GDtableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.music_32boxCode.GDLightObjects1.length;i<l;++i) {
    if ( gdjs.music_32boxCode.GDLightObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.music_32boxCode.GDLightObjects1[k] = gdjs.music_32boxCode.GDLightObjects1[i];
        ++k;
    }
}
gdjs.music_32boxCode.GDLightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDLightObjects1Objects, gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDtableObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.music_32boxCode.GDLightObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Light4"), gdjs.music_32boxCode.GDLight4Objects1);
{for(var i = 0, len = gdjs.music_32boxCode.GDLightObjects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLightObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].getBehavior("FlashOpacity").Flash("Tween", 0, 225, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light2"), gdjs.music_32boxCode.GDLight2Objects1);
gdjs.copyArray(runtimeScene.getObjects("table"), gdjs.music_32boxCode.GDtableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.music_32boxCode.GDLight2Objects1.length;i<l;++i) {
    if ( gdjs.music_32boxCode.GDLight2Objects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.music_32boxCode.GDLight2Objects1[k] = gdjs.music_32boxCode.GDLight2Objects1[i];
        ++k;
    }
}
gdjs.music_32boxCode.GDLight2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDLight2Objects1Objects, gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDtableObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.music_32boxCode.GDLight2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Light4"), gdjs.music_32boxCode.GDLight4Objects1);
{for(var i = 0, len = gdjs.music_32boxCode.GDLight2Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].getBehavior("FlashOpacity").Flash("Tween", 0, 225, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light3"), gdjs.music_32boxCode.GDLight3Objects1);
gdjs.copyArray(runtimeScene.getObjects("table"), gdjs.music_32boxCode.GDtableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.music_32boxCode.GDLight3Objects1.length;i<l;++i) {
    if ( gdjs.music_32boxCode.GDLight3Objects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.music_32boxCode.GDLight3Objects1[k] = gdjs.music_32boxCode.GDLight3Objects1[i];
        ++k;
    }
}
gdjs.music_32boxCode.GDLight3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDLight3Objects1Objects, gdjs.music_32boxCode.mapOfGDgdjs_9546music_959532boxCode_9546GDtableObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.music_32boxCode.GDLight3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Light4"), gdjs.music_32boxCode.GDLight4Objects1);
{for(var i = 0, len = gdjs.music_32boxCode.GDLight3Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight3Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.music_32boxCode.GDLight4Objects1.length ;i < len;++i) {
    gdjs.music_32boxCode.GDLight4Objects1[i].getBehavior("FlashOpacity").Flash("Tween", 0, 225, null);
}
}

{ //Subevents
gdjs.music_32boxCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14356228);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.music_32boxCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.music_32boxCode.GDLightObjects1.length = 0;
gdjs.music_32boxCode.GDLightObjects2.length = 0;
gdjs.music_32boxCode.GDLightObjects3.length = 0;
gdjs.music_32boxCode.GDLightObjects4.length = 0;
gdjs.music_32boxCode.GDLightObjects5.length = 0;
gdjs.music_32boxCode.GDLight2Objects1.length = 0;
gdjs.music_32boxCode.GDLight2Objects2.length = 0;
gdjs.music_32boxCode.GDLight2Objects3.length = 0;
gdjs.music_32boxCode.GDLight2Objects4.length = 0;
gdjs.music_32boxCode.GDLight2Objects5.length = 0;
gdjs.music_32boxCode.GDLight3Objects1.length = 0;
gdjs.music_32boxCode.GDLight3Objects2.length = 0;
gdjs.music_32boxCode.GDLight3Objects3.length = 0;
gdjs.music_32boxCode.GDLight3Objects4.length = 0;
gdjs.music_32boxCode.GDLight3Objects5.length = 0;
gdjs.music_32boxCode.GDtableObjects1.length = 0;
gdjs.music_32boxCode.GDtableObjects2.length = 0;
gdjs.music_32boxCode.GDtableObjects3.length = 0;
gdjs.music_32boxCode.GDtableObjects4.length = 0;
gdjs.music_32boxCode.GDtableObjects5.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects1.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects2.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects3.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects4.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects5.length = 0;
gdjs.music_32boxCode.GDLight4Objects1.length = 0;
gdjs.music_32boxCode.GDLight4Objects2.length = 0;
gdjs.music_32boxCode.GDLight4Objects3.length = 0;
gdjs.music_32boxCode.GDLight4Objects4.length = 0;
gdjs.music_32boxCode.GDLight4Objects5.length = 0;

gdjs.music_32boxCode.eventsList4(runtimeScene);
gdjs.music_32boxCode.GDLightObjects1.length = 0;
gdjs.music_32boxCode.GDLightObjects2.length = 0;
gdjs.music_32boxCode.GDLightObjects3.length = 0;
gdjs.music_32boxCode.GDLightObjects4.length = 0;
gdjs.music_32boxCode.GDLightObjects5.length = 0;
gdjs.music_32boxCode.GDLight2Objects1.length = 0;
gdjs.music_32boxCode.GDLight2Objects2.length = 0;
gdjs.music_32boxCode.GDLight2Objects3.length = 0;
gdjs.music_32boxCode.GDLight2Objects4.length = 0;
gdjs.music_32boxCode.GDLight2Objects5.length = 0;
gdjs.music_32boxCode.GDLight3Objects1.length = 0;
gdjs.music_32boxCode.GDLight3Objects2.length = 0;
gdjs.music_32boxCode.GDLight3Objects3.length = 0;
gdjs.music_32boxCode.GDLight3Objects4.length = 0;
gdjs.music_32boxCode.GDLight3Objects5.length = 0;
gdjs.music_32boxCode.GDtableObjects1.length = 0;
gdjs.music_32boxCode.GDtableObjects2.length = 0;
gdjs.music_32boxCode.GDtableObjects3.length = 0;
gdjs.music_32boxCode.GDtableObjects4.length = 0;
gdjs.music_32boxCode.GDtableObjects5.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects1.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects2.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects3.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects4.length = 0;
gdjs.music_32boxCode.GDmusic_9595boxObjects5.length = 0;
gdjs.music_32boxCode.GDLight4Objects1.length = 0;
gdjs.music_32boxCode.GDLight4Objects2.length = 0;
gdjs.music_32boxCode.GDLight4Objects3.length = 0;
gdjs.music_32boxCode.GDLight4Objects4.length = 0;
gdjs.music_32boxCode.GDLight4Objects5.length = 0;


return;

}

gdjs['music_32boxCode'] = gdjs.music_32boxCode;
