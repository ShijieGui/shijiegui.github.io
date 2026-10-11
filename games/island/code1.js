gdjs._24207_31456Code = {};
gdjs._24207_31456Code.localVariables = [];
gdjs._24207_31456Code.idToCallbackMap = new Map();
gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._24207_31456Code.GD_9520449_9523553Objects1= [];
gdjs._24207_31456Code.GD_9520449_9523553Objects2= [];
gdjs._24207_31456Code.GD_9520449Objects1= [];
gdjs._24207_31456Code.GD_9520449Objects2= [];
gdjs._24207_31456Code.GD_9533337_9531080Objects1= [];
gdjs._24207_31456Code.GD_9533337_9531080Objects2= [];
gdjs._24207_31456Code.GDhave_9595funObjects1= [];
gdjs._24207_31456Code.GDhave_9595funObjects2= [];


gdjs._24207_31456Code.mapOfGDgdjs_9546_959524207_959531456Code_9546GD_95959520449_95959523553Objects1Objects = Hashtable.newFrom({"信封": gdjs._24207_31456Code.GD_9520449_9523553Objects1});
gdjs._24207_31456Code.asyncCallback17312708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._24207_31456Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("信"), gdjs._24207_31456Code.GD_9520449Objects2);
gdjs.copyArray(runtimeScene.getObjects("船票"), gdjs._24207_31456Code.GD_9533337_9531080Objects2);
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449Objects2.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9533337_9531080Objects2.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9533337_9531080Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449Objects2.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449Objects2[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9533337_9531080Objects2.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9533337_9531080Objects2[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}
gdjs._24207_31456Code.localVariables.length = 0;
}
gdjs._24207_31456Code.idToCallbackMap.set(17312708, gdjs._24207_31456Code.asyncCallback17312708);
gdjs._24207_31456Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._24207_31456Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._24207_31456Code.asyncCallback17312708(runtimeScene, asyncObjectsList)), 17312708, asyncObjectsList);
}
}

}


};gdjs._24207_31456Code.mapOfGDgdjs_9546_959524207_959531456Code_9546GDhave_95959595funObjects1Objects = Hashtable.newFrom({"have_fun": gdjs._24207_31456Code.GDhave_9595funObjects1});
gdjs._24207_31456Code.asyncCallback17315380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._24207_31456Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "第一章", false);
}
gdjs._24207_31456Code.localVariables.length = 0;
}
gdjs._24207_31456Code.idToCallbackMap.set(17315380, gdjs._24207_31456Code.asyncCallback17315380);
gdjs._24207_31456Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._24207_31456Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(9), (runtimeScene) => (gdjs._24207_31456Code.asyncCallback17315380(runtimeScene, asyncObjectsList)), 17315380, asyncObjectsList);
}
}

}


};gdjs._24207_31456Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("have_fun"), gdjs._24207_31456Code.GDhave_9595funObjects1);
gdjs.copyArray(runtimeScene.getObjects("信"), gdjs._24207_31456Code.GD_9520449Objects1);
gdjs.copyArray(runtimeScene.getObjects("船票"), gdjs._24207_31456Code.GD_9533337_9531080Objects1);
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9533337_9531080Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9533337_9531080Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GDhave_9595funObjects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GDhave_9595funObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9533337_9531080Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9533337_9531080Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("信封"), gdjs._24207_31456Code.GD_9520449_9523553Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._24207_31456Code.mapOfGDgdjs_9546_959524207_959531456Code_9546GD_95959520449_95959523553Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs._24207_31456Code.GD_9520449_9523553Objects1 */
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449_9523553Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449_9523553Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs._24207_31456Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("信"), gdjs._24207_31456Code.GD_9520449Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24207_31456Code.GD_9520449Objects1.length;i<l;++i) {
    if ( gdjs._24207_31456Code.GD_9520449Objects1[i].getBehavior("Tween").hasFinished("fade") ) {
        isConditionTrue_0 = true;
        gdjs._24207_31456Code.GD_9520449Objects1[k] = gdjs._24207_31456Code.GD_9520449Objects1[i];
        ++k;
    }
}
gdjs._24207_31456Code.GD_9520449Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("have_fun"), gdjs._24207_31456Code.GDhave_9595funObjects1);
{for(var i = 0, len = gdjs._24207_31456Code.GDhave_9595funObjects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GDhave_9595funObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("have_fun"), gdjs._24207_31456Code.GDhave_9595funObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._24207_31456Code.mapOfGDgdjs_9546_959524207_959531456Code_9546GDhave_95959595funObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs._24207_31456Code.GDhave_9595funObjects1 */
gdjs.copyArray(runtimeScene.getObjects("信"), gdjs._24207_31456Code.GD_9520449Objects1);
gdjs.copyArray(runtimeScene.getObjects("信封"), gdjs._24207_31456Code.GD_9520449_9523553Objects1);
gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects1);
gdjs.copyArray(runtimeScene.getObjects("船票"), gdjs._24207_31456Code.GD_9533337_9531080Objects1);
{for(var i = 0, len = gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449_9523553Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449_9523553Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9533337_9531080Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9533337_9531080Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GDhave_9595funObjects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GDhave_9595funObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._24207_31456Code.GD_9520449Objects1.length ;i < len;++i) {
    gdjs._24207_31456Code.GD_9520449Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "C:\\Users\\user\\Downloads\\走进第一章.wav", false, 100, 1);
}

{ //Subevents
gdjs._24207_31456Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._24207_31456Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._24207_31456Code.GD_9520449_9523553Objects1.length = 0;
gdjs._24207_31456Code.GD_9520449_9523553Objects2.length = 0;
gdjs._24207_31456Code.GD_9520449Objects1.length = 0;
gdjs._24207_31456Code.GD_9520449Objects2.length = 0;
gdjs._24207_31456Code.GD_9533337_9531080Objects1.length = 0;
gdjs._24207_31456Code.GD_9533337_9531080Objects2.length = 0;
gdjs._24207_31456Code.GDhave_9595funObjects1.length = 0;
gdjs._24207_31456Code.GDhave_9595funObjects2.length = 0;

gdjs._24207_31456Code.eventsList2(runtimeScene);
gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._24207_31456Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._24207_31456Code.GD_9520449_9523553Objects1.length = 0;
gdjs._24207_31456Code.GD_9520449_9523553Objects2.length = 0;
gdjs._24207_31456Code.GD_9520449Objects1.length = 0;
gdjs._24207_31456Code.GD_9520449Objects2.length = 0;
gdjs._24207_31456Code.GD_9533337_9531080Objects1.length = 0;
gdjs._24207_31456Code.GD_9533337_9531080Objects2.length = 0;
gdjs._24207_31456Code.GDhave_9595funObjects1.length = 0;
gdjs._24207_31456Code.GDhave_9595funObjects2.length = 0;


return;

}

gdjs['_24207_31456Code'] = gdjs._24207_31456Code;
