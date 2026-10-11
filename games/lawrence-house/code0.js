gdjs.chapter_321Code = {};
gdjs.chapter_321Code.localVariables = [];
gdjs.chapter_321Code.idToCallbackMap = new Map();
gdjs.chapter_321Code.GDbackgroundObjects1= [];
gdjs.chapter_321Code.GDbackgroundObjects2= [];
gdjs.chapter_321Code.GDbackgroundObjects3= [];
gdjs.chapter_321Code.GDbackgroundObjects4= [];
gdjs.chapter_321Code.GDhouseObjects1= [];
gdjs.chapter_321Code.GDhouseObjects2= [];
gdjs.chapter_321Code.GDhouseObjects3= [];
gdjs.chapter_321Code.GDhouseObjects4= [];
gdjs.chapter_321Code.GDtreeObjects1= [];
gdjs.chapter_321Code.GDtreeObjects2= [];
gdjs.chapter_321Code.GDtreeObjects3= [];
gdjs.chapter_321Code.GDtreeObjects4= [];
gdjs.chapter_321Code.GDtree2Objects1= [];
gdjs.chapter_321Code.GDtree2Objects2= [];
gdjs.chapter_321Code.GDtree2Objects3= [];
gdjs.chapter_321Code.GDtree2Objects4= [];
gdjs.chapter_321Code.GDtree3Objects1= [];
gdjs.chapter_321Code.GDtree3Objects2= [];
gdjs.chapter_321Code.GDtree3Objects3= [];
gdjs.chapter_321Code.GDtree3Objects4= [];
gdjs.chapter_321Code.GDtree4Objects1= [];
gdjs.chapter_321Code.GDtree4Objects2= [];
gdjs.chapter_321Code.GDtree4Objects3= [];
gdjs.chapter_321Code.GDtree4Objects4= [];
gdjs.chapter_321Code.GDcharacterObjects1= [];
gdjs.chapter_321Code.GDcharacterObjects2= [];
gdjs.chapter_321Code.GDcharacterObjects3= [];
gdjs.chapter_321Code.GDcharacterObjects4= [];
gdjs.chapter_321Code.GDfogObjects1= [];
gdjs.chapter_321Code.GDfogObjects2= [];
gdjs.chapter_321Code.GDfogObjects3= [];
gdjs.chapter_321Code.GDfogObjects4= [];
gdjs.chapter_321Code.GDfog2Objects1= [];
gdjs.chapter_321Code.GDfog2Objects2= [];
gdjs.chapter_321Code.GDfog2Objects3= [];
gdjs.chapter_321Code.GDfog2Objects4= [];
gdjs.chapter_321Code.GDfog3Objects1= [];
gdjs.chapter_321Code.GDfog3Objects2= [];
gdjs.chapter_321Code.GDfog3Objects3= [];
gdjs.chapter_321Code.GDfog3Objects4= [];
gdjs.chapter_321Code.GDfog4Objects1= [];
gdjs.chapter_321Code.GDfog4Objects2= [];
gdjs.chapter_321Code.GDfog4Objects3= [];
gdjs.chapter_321Code.GDfog4Objects4= [];
gdjs.chapter_321Code.GDblackObjects1= [];
gdjs.chapter_321Code.GDblackObjects2= [];
gdjs.chapter_321Code.GDblackObjects3= [];
gdjs.chapter_321Code.GDblackObjects4= [];
gdjs.chapter_321Code.GDTitleObjects1= [];
gdjs.chapter_321Code.GDTitleObjects2= [];
gdjs.chapter_321Code.GDTitleObjects3= [];
gdjs.chapter_321Code.GDTitleObjects4= [];
gdjs.chapter_321Code.GDgrey_9595backgroundObjects1= [];
gdjs.chapter_321Code.GDgrey_9595backgroundObjects2= [];
gdjs.chapter_321Code.GDgrey_9595backgroundObjects3= [];
gdjs.chapter_321Code.GDgrey_9595backgroundObjects4= [];
gdjs.chapter_321Code.GDPlay_9595buttonObjects1= [];
gdjs.chapter_321Code.GDPlay_9595buttonObjects2= [];
gdjs.chapter_321Code.GDPlay_9595buttonObjects3= [];
gdjs.chapter_321Code.GDPlay_9595buttonObjects4= [];


gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects = Hashtable.newFrom({"Play_button": gdjs.chapter_321Code.GDPlay_9595buttonObjects1});
gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects = Hashtable.newFrom({"Play_button": gdjs.chapter_321Code.GDPlay_9595buttonObjects1});
gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects = Hashtable.newFrom({"Play_button": gdjs.chapter_321Code.GDPlay_9595buttonObjects1});
gdjs.chapter_321Code.asyncCallback11318452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
gdjs.chapter_321Code.localVariables.length = 0;
}
gdjs.chapter_321Code.idToCallbackMap.set(11318452, gdjs.chapter_321Code.asyncCallback11318452);
gdjs.chapter_321Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.chapter_321Code.asyncCallback11318452(runtimeScene, asyncObjectsList)), 11318452, asyncObjectsList);
}
}

}


};gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects = Hashtable.newFrom({"Play_button": gdjs.chapter_321Code.GDPlay_9595buttonObjects1});
gdjs.chapter_321Code.asyncCallback11322700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("fog"), gdjs.chapter_321Code.GDfogObjects4);
{for(var i = 0, len = gdjs.chapter_321Code.GDfogObjects4.length ;i < len;++i) {
    gdjs.chapter_321Code.GDfogObjects4[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, false);
}
}
gdjs.chapter_321Code.localVariables.length = 0;
}
gdjs.chapter_321Code.idToCallbackMap.set(11322700, gdjs.chapter_321Code.asyncCallback11322700);
gdjs.chapter_321Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.chapter_321Code.asyncCallback11322700(runtimeScene, asyncObjectsList)), 11322700, asyncObjectsList);
}
}

}


};gdjs.chapter_321Code.asyncCallback11322332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("fog2"), gdjs.chapter_321Code.GDfog2Objects3);
{for(var i = 0, len = gdjs.chapter_321Code.GDfog2Objects3.length ;i < len;++i) {
    gdjs.chapter_321Code.GDfog2Objects3[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.chapter_321Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.chapter_321Code.localVariables.length = 0;
}
gdjs.chapter_321Code.idToCallbackMap.set(11322332, gdjs.chapter_321Code.asyncCallback11322332);
gdjs.chapter_321Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.chapter_321Code.asyncCallback11322332(runtimeScene, asyncObjectsList)), 11322332, asyncObjectsList);
}
}

}


};gdjs.chapter_321Code.asyncCallback11322012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("fog3"), gdjs.chapter_321Code.GDfog3Objects2);
{for(var i = 0, len = gdjs.chapter_321Code.GDfog3Objects2.length ;i < len;++i) {
    gdjs.chapter_321Code.GDfog3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.chapter_321Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.chapter_321Code.localVariables.length = 0;
}
gdjs.chapter_321Code.idToCallbackMap.set(11322012, gdjs.chapter_321Code.asyncCallback11322012);
gdjs.chapter_321Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.chapter_321Code.asyncCallback11322012(runtimeScene, asyncObjectsList)), 11322012, asyncObjectsList);
}
}

}


};gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_321Code.GDcharacterObjects1});
gdjs.chapter_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.chapter_321Code.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321Code.GDPlay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.chapter_321Code.GDPlay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.chapter_321Code.GDPlay_9595buttonObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.chapter_321Code.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321Code.GDPlay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.chapter_321Code.GDPlay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.chapter_321Code.GDPlay_9595buttonObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.chapter_321Code.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_321Code.GDPlay_9595buttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.chapter_321Code.GDTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("grey_background"), gdjs.chapter_321Code.GDgrey_9595backgroundObjects1);
{for(var i = 0, len = gdjs.chapter_321Code.GDgrey_9595backgroundObjects1.length ;i < len;++i) {
    gdjs.chapter_321Code.GDgrey_9595backgroundObjects1[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, true);
}
}
{for(var i = 0, len = gdjs.chapter_321Code.GDPlay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.chapter_321Code.GDPlay_9595buttonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, true);
}
}
{for(var i = 0, len = gdjs.chapter_321Code.GDTitleObjects1.length ;i < len;++i) {
    gdjs.chapter_321Code.GDTitleObjects1[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, true);
}
}

{ //Subevents
gdjs.chapter_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.chapter_321Code.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDPlay_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "530277__mrthenoronha__horror-theme-loop-2.wav", 1, true, 100, 1);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fog4"), gdjs.chapter_321Code.GDfog4Objects1);
{for(var i = 0, len = gdjs.chapter_321Code.GDfog4Objects1.length ;i < len;++i) {
    gdjs.chapter_321Code.GDfog4Objects1[i].getBehavior("Tween").addObjectOpacityTween2("out", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.chapter_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_321Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_321Code.mapOfGDgdjs_9546chapter_9595321Code_9546GDcharacterObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 1A", false);
}
}

}


};

gdjs.chapter_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_321Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_321Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_321Code.GDbackgroundObjects3.length = 0;
gdjs.chapter_321Code.GDbackgroundObjects4.length = 0;
gdjs.chapter_321Code.GDhouseObjects1.length = 0;
gdjs.chapter_321Code.GDhouseObjects2.length = 0;
gdjs.chapter_321Code.GDhouseObjects3.length = 0;
gdjs.chapter_321Code.GDhouseObjects4.length = 0;
gdjs.chapter_321Code.GDtreeObjects1.length = 0;
gdjs.chapter_321Code.GDtreeObjects2.length = 0;
gdjs.chapter_321Code.GDtreeObjects3.length = 0;
gdjs.chapter_321Code.GDtreeObjects4.length = 0;
gdjs.chapter_321Code.GDtree2Objects1.length = 0;
gdjs.chapter_321Code.GDtree2Objects2.length = 0;
gdjs.chapter_321Code.GDtree2Objects3.length = 0;
gdjs.chapter_321Code.GDtree2Objects4.length = 0;
gdjs.chapter_321Code.GDtree3Objects1.length = 0;
gdjs.chapter_321Code.GDtree3Objects2.length = 0;
gdjs.chapter_321Code.GDtree3Objects3.length = 0;
gdjs.chapter_321Code.GDtree3Objects4.length = 0;
gdjs.chapter_321Code.GDtree4Objects1.length = 0;
gdjs.chapter_321Code.GDtree4Objects2.length = 0;
gdjs.chapter_321Code.GDtree4Objects3.length = 0;
gdjs.chapter_321Code.GDtree4Objects4.length = 0;
gdjs.chapter_321Code.GDcharacterObjects1.length = 0;
gdjs.chapter_321Code.GDcharacterObjects2.length = 0;
gdjs.chapter_321Code.GDcharacterObjects3.length = 0;
gdjs.chapter_321Code.GDcharacterObjects4.length = 0;
gdjs.chapter_321Code.GDfogObjects1.length = 0;
gdjs.chapter_321Code.GDfogObjects2.length = 0;
gdjs.chapter_321Code.GDfogObjects3.length = 0;
gdjs.chapter_321Code.GDfogObjects4.length = 0;
gdjs.chapter_321Code.GDfog2Objects1.length = 0;
gdjs.chapter_321Code.GDfog2Objects2.length = 0;
gdjs.chapter_321Code.GDfog2Objects3.length = 0;
gdjs.chapter_321Code.GDfog2Objects4.length = 0;
gdjs.chapter_321Code.GDfog3Objects1.length = 0;
gdjs.chapter_321Code.GDfog3Objects2.length = 0;
gdjs.chapter_321Code.GDfog3Objects3.length = 0;
gdjs.chapter_321Code.GDfog3Objects4.length = 0;
gdjs.chapter_321Code.GDfog4Objects1.length = 0;
gdjs.chapter_321Code.GDfog4Objects2.length = 0;
gdjs.chapter_321Code.GDfog4Objects3.length = 0;
gdjs.chapter_321Code.GDfog4Objects4.length = 0;
gdjs.chapter_321Code.GDblackObjects1.length = 0;
gdjs.chapter_321Code.GDblackObjects2.length = 0;
gdjs.chapter_321Code.GDblackObjects3.length = 0;
gdjs.chapter_321Code.GDblackObjects4.length = 0;
gdjs.chapter_321Code.GDTitleObjects1.length = 0;
gdjs.chapter_321Code.GDTitleObjects2.length = 0;
gdjs.chapter_321Code.GDTitleObjects3.length = 0;
gdjs.chapter_321Code.GDTitleObjects4.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects1.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects2.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects3.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects4.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects1.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects2.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects3.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects4.length = 0;

gdjs.chapter_321Code.eventsList4(runtimeScene);
gdjs.chapter_321Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_321Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_321Code.GDbackgroundObjects3.length = 0;
gdjs.chapter_321Code.GDbackgroundObjects4.length = 0;
gdjs.chapter_321Code.GDhouseObjects1.length = 0;
gdjs.chapter_321Code.GDhouseObjects2.length = 0;
gdjs.chapter_321Code.GDhouseObjects3.length = 0;
gdjs.chapter_321Code.GDhouseObjects4.length = 0;
gdjs.chapter_321Code.GDtreeObjects1.length = 0;
gdjs.chapter_321Code.GDtreeObjects2.length = 0;
gdjs.chapter_321Code.GDtreeObjects3.length = 0;
gdjs.chapter_321Code.GDtreeObjects4.length = 0;
gdjs.chapter_321Code.GDtree2Objects1.length = 0;
gdjs.chapter_321Code.GDtree2Objects2.length = 0;
gdjs.chapter_321Code.GDtree2Objects3.length = 0;
gdjs.chapter_321Code.GDtree2Objects4.length = 0;
gdjs.chapter_321Code.GDtree3Objects1.length = 0;
gdjs.chapter_321Code.GDtree3Objects2.length = 0;
gdjs.chapter_321Code.GDtree3Objects3.length = 0;
gdjs.chapter_321Code.GDtree3Objects4.length = 0;
gdjs.chapter_321Code.GDtree4Objects1.length = 0;
gdjs.chapter_321Code.GDtree4Objects2.length = 0;
gdjs.chapter_321Code.GDtree4Objects3.length = 0;
gdjs.chapter_321Code.GDtree4Objects4.length = 0;
gdjs.chapter_321Code.GDcharacterObjects1.length = 0;
gdjs.chapter_321Code.GDcharacterObjects2.length = 0;
gdjs.chapter_321Code.GDcharacterObjects3.length = 0;
gdjs.chapter_321Code.GDcharacterObjects4.length = 0;
gdjs.chapter_321Code.GDfogObjects1.length = 0;
gdjs.chapter_321Code.GDfogObjects2.length = 0;
gdjs.chapter_321Code.GDfogObjects3.length = 0;
gdjs.chapter_321Code.GDfogObjects4.length = 0;
gdjs.chapter_321Code.GDfog2Objects1.length = 0;
gdjs.chapter_321Code.GDfog2Objects2.length = 0;
gdjs.chapter_321Code.GDfog2Objects3.length = 0;
gdjs.chapter_321Code.GDfog2Objects4.length = 0;
gdjs.chapter_321Code.GDfog3Objects1.length = 0;
gdjs.chapter_321Code.GDfog3Objects2.length = 0;
gdjs.chapter_321Code.GDfog3Objects3.length = 0;
gdjs.chapter_321Code.GDfog3Objects4.length = 0;
gdjs.chapter_321Code.GDfog4Objects1.length = 0;
gdjs.chapter_321Code.GDfog4Objects2.length = 0;
gdjs.chapter_321Code.GDfog4Objects3.length = 0;
gdjs.chapter_321Code.GDfog4Objects4.length = 0;
gdjs.chapter_321Code.GDblackObjects1.length = 0;
gdjs.chapter_321Code.GDblackObjects2.length = 0;
gdjs.chapter_321Code.GDblackObjects3.length = 0;
gdjs.chapter_321Code.GDblackObjects4.length = 0;
gdjs.chapter_321Code.GDTitleObjects1.length = 0;
gdjs.chapter_321Code.GDTitleObjects2.length = 0;
gdjs.chapter_321Code.GDTitleObjects3.length = 0;
gdjs.chapter_321Code.GDTitleObjects4.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects1.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects2.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects3.length = 0;
gdjs.chapter_321Code.GDgrey_9595backgroundObjects4.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects1.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects2.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects3.length = 0;
gdjs.chapter_321Code.GDPlay_9595buttonObjects4.length = 0;


return;

}

gdjs['chapter_321Code'] = gdjs.chapter_321Code;
