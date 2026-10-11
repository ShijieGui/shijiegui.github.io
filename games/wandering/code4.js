gdjs.chapter_322Code = {};
gdjs.chapter_322Code.localVariables = [];
gdjs.chapter_322Code.idToCallbackMap = new Map();
gdjs.chapter_322Code.GDbackgroundObjects1= [];
gdjs.chapter_322Code.GDbackgroundObjects2= [];
gdjs.chapter_322Code.GDbackgroundObjects3= [];
gdjs.chapter_322Code.GDfisherObjects1= [];
gdjs.chapter_322Code.GDfisherObjects2= [];
gdjs.chapter_322Code.GDfisherObjects3= [];
gdjs.chapter_322Code.GDcharacterObjects1= [];
gdjs.chapter_322Code.GDcharacterObjects2= [];
gdjs.chapter_322Code.GDcharacterObjects3= [];
gdjs.chapter_322Code.GDfloorObjects1= [];
gdjs.chapter_322Code.GDfloorObjects2= [];
gdjs.chapter_322Code.GDfloorObjects3= [];
gdjs.chapter_322Code.GDDoor1Objects1= [];
gdjs.chapter_322Code.GDDoor1Objects2= [];
gdjs.chapter_322Code.GDDoor1Objects3= [];
gdjs.chapter_322Code.GDDoor2Objects1= [];
gdjs.chapter_322Code.GDDoor2Objects2= [];
gdjs.chapter_322Code.GDDoor2Objects3= [];
gdjs.chapter_322Code.GDDoor3Objects1= [];
gdjs.chapter_322Code.GDDoor3Objects2= [];
gdjs.chapter_322Code.GDDoor3Objects3= [];
gdjs.chapter_322Code.GDDoor4Objects1= [];
gdjs.chapter_322Code.GDDoor4Objects2= [];
gdjs.chapter_322Code.GDDoor4Objects3= [];
gdjs.chapter_322Code.GDDoor5Objects1= [];
gdjs.chapter_322Code.GDDoor5Objects2= [];
gdjs.chapter_322Code.GDDoor5Objects3= [];
gdjs.chapter_322Code.GDFishObjects1= [];
gdjs.chapter_322Code.GDFishObjects2= [];
gdjs.chapter_322Code.GDFishObjects3= [];
gdjs.chapter_322Code.GDStarObjects1= [];
gdjs.chapter_322Code.GDStarObjects2= [];
gdjs.chapter_322Code.GDStarObjects3= [];
gdjs.chapter_322Code.GDFisher_95952Objects1= [];
gdjs.chapter_322Code.GDFisher_95952Objects2= [];
gdjs.chapter_322Code.GDFisher_95952Objects3= [];
gdjs.chapter_322Code.GDbuttonObjects1= [];
gdjs.chapter_322Code.GDbuttonObjects2= [];
gdjs.chapter_322Code.GDbuttonObjects3= [];
gdjs.chapter_322Code.GDbutton2Objects1= [];
gdjs.chapter_322Code.GDbutton2Objects2= [];
gdjs.chapter_322Code.GDbutton2Objects3= [];


gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_322Code.GDcharacterObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.chapter_322Code.GDfloorObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_322Code.GDcharacterObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.chapter_322Code.GDfloorObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_322Code.GDcharacterObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDDoor2Objects1Objects = Hashtable.newFrom({"Door2": gdjs.chapter_322Code.GDDoor2Objects1});
gdjs.chapter_322Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322Code.GDcharacterObjects1[k] = gdjs.chapter_322Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.chapter_322Code.GDcharacterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Door3"), gdjs.chapter_322Code.GDDoor3Objects1);
/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].putAroundObject((gdjs.chapter_322Code.GDDoor3Objects1.length !== 0 ? gdjs.chapter_322Code.GDDoor3Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.1, false);
}
}
}

}


};gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_322Code.GDcharacterObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDDoor4Objects1Objects = Hashtable.newFrom({"Door4": gdjs.chapter_322Code.GDDoor4Objects1});
gdjs.chapter_322Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322Code.GDcharacterObjects1[k] = gdjs.chapter_322Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.chapter_322Code.GDcharacterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Door5"), gdjs.chapter_322Code.GDDoor5Objects1);
/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].putAroundObject((gdjs.chapter_322Code.GDDoor5Objects1.length !== 0 ? gdjs.chapter_322Code.GDDoor5Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.1, false);
}
}
}

}


};gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_322Code.GDcharacterObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfisherObjects1Objects = Hashtable.newFrom({"fisher": gdjs.chapter_322Code.GDfisherObjects1});
gdjs.chapter_322Code.asyncCallback13940028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_322Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fisher_2"), gdjs.chapter_322Code.GDFisher_95952Objects3);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.chapter_322Code.GDbuttonObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("fisher"), gdjs.chapter_322Code.GDfisherObjects3);

{for(var i = 0, len = gdjs.chapter_322Code.GDfisherObjects3.length ;i < len;++i) {
    gdjs.chapter_322Code.GDfisherObjects3[i].getBehavior("Tween").addObjectOpacityTween2("fade_out", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDfisherObjects3.length ;i < len;++i) {
    gdjs.chapter_322Code.GDfisherObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDFisher_95952Objects3.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFisher_95952Objects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDFisher_95952Objects3.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFisher_95952Objects3[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDbuttonObjects3.length ;i < len;++i) {
    gdjs.chapter_322Code.GDbuttonObjects3[i].hide(false);
}
}
gdjs.chapter_322Code.localVariables.length = 0;
}
gdjs.chapter_322Code.idToCallbackMap.set(13940028, gdjs.chapter_322Code.asyncCallback13940028);
gdjs.chapter_322Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_322Code.localVariables);
/* Don't save fisher as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.chapter_322Code.asyncCallback13940028(runtimeScene, asyncObjectsList)), 13940028, asyncObjectsList);
}
}

}


};gdjs.chapter_322Code.asyncCallback13939372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.chapter_322Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.chapter_322Code.GDStarObjects2);
{for(var i = 0, len = gdjs.chapter_322Code.GDStarObjects2.length ;i < len;++i) {
    gdjs.chapter_322Code.GDStarObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDStarObjects2.length ;i < len;++i) {
    gdjs.chapter_322Code.GDStarObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.1, false);
}
}

{ //Subevents
gdjs.chapter_322Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.chapter_322Code.localVariables.length = 0;
}
gdjs.chapter_322Code.idToCallbackMap.set(13939372, gdjs.chapter_322Code.asyncCallback13939372);
gdjs.chapter_322Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.chapter_322Code.localVariables);
for (const obj of gdjs.chapter_322Code.GDfisherObjects1) asyncObjectsList.addObject("fisher", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.chapter_322Code.asyncCallback13939372(runtimeScene, asyncObjectsList)), 13939372, asyncObjectsList);
}
}

}


};gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.chapter_322Code.GDcharacterObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfisherObjects1Objects = Hashtable.newFrom({"fisher": gdjs.chapter_322Code.GDfisherObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.chapter_322Code.GDbackgroundObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.chapter_322Code.GDbuttonObjects1});
gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.chapter_322Code.GDbutton2Objects1});
gdjs.chapter_322Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.chapter_322Code.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fisher_2"), gdjs.chapter_322Code.GDFisher_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.chapter_322Code.GDStarObjects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.chapter_322Code.GDbuttonObjects1);
{for(var i = 0, len = gdjs.chapter_322Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFishObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDFisher_95952Objects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFisher_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDStarObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDStarObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFishObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDFisher_95952Objects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFisher_95952Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDStarObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDStarObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDbuttonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.chapter_322Code.GDfloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects, "PlatformerObject", gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322Code.GDcharacterObjects1[k] = gdjs.chapter_322Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.chapter_322Code.GDcharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Animation").setAnimationName("still");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.chapter_322Code.GDfloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects, "PlatformerObject", gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322Code.GDcharacterObjects1[k] = gdjs.chapter_322Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.chapter_322Code.GDcharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door2"), gdjs.chapter_322Code.GDDoor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects, gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDDoor2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_out", 0, "linear", 0.1, false);
}
}

{ //Subevents
gdjs.chapter_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door4"), gdjs.chapter_322Code.GDDoor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects, gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDDoor4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.chapter_322Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDcharacterObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_out", 0, "linear", 0.1, false);
}
}

{ //Subevents
gdjs.chapter_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("fisher"), gdjs.chapter_322Code.GDfisherObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects, gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfisherObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.chapter_322Code.GDFishObjects1);
{for(var i = 0, len = gdjs.chapter_322Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFishObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFishObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.1, false);
}
}

{ //Subevents
gdjs.chapter_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.chapter_322Code.GDcharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("fisher"), gdjs.chapter_322Code.GDfisherObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDcharacterObjects1Objects, gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDfisherObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.chapter_322Code.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.chapter_322Code.GDStarObjects1);
{for(var i = 0, len = gdjs.chapter_322Code.GDFishObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDFishObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_out", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.chapter_322Code.GDStarObjects1.length ;i < len;++i) {
    gdjs.chapter_322Code.GDStarObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_out", 0, "linear", 0.1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.chapter_322Code.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDbackgroundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13942276);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13943492);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.chapter_322Code.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 2a", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button2"), gdjs.chapter_322Code.GDbutton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322Code.mapOfGDgdjs_9546chapter_9595322Code_9546GDbutton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 0", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.chapter_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_322Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_322Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_322Code.GDbackgroundObjects3.length = 0;
gdjs.chapter_322Code.GDfisherObjects1.length = 0;
gdjs.chapter_322Code.GDfisherObjects2.length = 0;
gdjs.chapter_322Code.GDfisherObjects3.length = 0;
gdjs.chapter_322Code.GDcharacterObjects1.length = 0;
gdjs.chapter_322Code.GDcharacterObjects2.length = 0;
gdjs.chapter_322Code.GDcharacterObjects3.length = 0;
gdjs.chapter_322Code.GDfloorObjects1.length = 0;
gdjs.chapter_322Code.GDfloorObjects2.length = 0;
gdjs.chapter_322Code.GDfloorObjects3.length = 0;
gdjs.chapter_322Code.GDDoor1Objects1.length = 0;
gdjs.chapter_322Code.GDDoor1Objects2.length = 0;
gdjs.chapter_322Code.GDDoor1Objects3.length = 0;
gdjs.chapter_322Code.GDDoor2Objects1.length = 0;
gdjs.chapter_322Code.GDDoor2Objects2.length = 0;
gdjs.chapter_322Code.GDDoor2Objects3.length = 0;
gdjs.chapter_322Code.GDDoor3Objects1.length = 0;
gdjs.chapter_322Code.GDDoor3Objects2.length = 0;
gdjs.chapter_322Code.GDDoor3Objects3.length = 0;
gdjs.chapter_322Code.GDDoor4Objects1.length = 0;
gdjs.chapter_322Code.GDDoor4Objects2.length = 0;
gdjs.chapter_322Code.GDDoor4Objects3.length = 0;
gdjs.chapter_322Code.GDDoor5Objects1.length = 0;
gdjs.chapter_322Code.GDDoor5Objects2.length = 0;
gdjs.chapter_322Code.GDDoor5Objects3.length = 0;
gdjs.chapter_322Code.GDFishObjects1.length = 0;
gdjs.chapter_322Code.GDFishObjects2.length = 0;
gdjs.chapter_322Code.GDFishObjects3.length = 0;
gdjs.chapter_322Code.GDStarObjects1.length = 0;
gdjs.chapter_322Code.GDStarObjects2.length = 0;
gdjs.chapter_322Code.GDStarObjects3.length = 0;
gdjs.chapter_322Code.GDFisher_95952Objects1.length = 0;
gdjs.chapter_322Code.GDFisher_95952Objects2.length = 0;
gdjs.chapter_322Code.GDFisher_95952Objects3.length = 0;
gdjs.chapter_322Code.GDbuttonObjects1.length = 0;
gdjs.chapter_322Code.GDbuttonObjects2.length = 0;
gdjs.chapter_322Code.GDbuttonObjects3.length = 0;
gdjs.chapter_322Code.GDbutton2Objects1.length = 0;
gdjs.chapter_322Code.GDbutton2Objects2.length = 0;
gdjs.chapter_322Code.GDbutton2Objects3.length = 0;

gdjs.chapter_322Code.eventsList4(runtimeScene);
gdjs.chapter_322Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_322Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_322Code.GDbackgroundObjects3.length = 0;
gdjs.chapter_322Code.GDfisherObjects1.length = 0;
gdjs.chapter_322Code.GDfisherObjects2.length = 0;
gdjs.chapter_322Code.GDfisherObjects3.length = 0;
gdjs.chapter_322Code.GDcharacterObjects1.length = 0;
gdjs.chapter_322Code.GDcharacterObjects2.length = 0;
gdjs.chapter_322Code.GDcharacterObjects3.length = 0;
gdjs.chapter_322Code.GDfloorObjects1.length = 0;
gdjs.chapter_322Code.GDfloorObjects2.length = 0;
gdjs.chapter_322Code.GDfloorObjects3.length = 0;
gdjs.chapter_322Code.GDDoor1Objects1.length = 0;
gdjs.chapter_322Code.GDDoor1Objects2.length = 0;
gdjs.chapter_322Code.GDDoor1Objects3.length = 0;
gdjs.chapter_322Code.GDDoor2Objects1.length = 0;
gdjs.chapter_322Code.GDDoor2Objects2.length = 0;
gdjs.chapter_322Code.GDDoor2Objects3.length = 0;
gdjs.chapter_322Code.GDDoor3Objects1.length = 0;
gdjs.chapter_322Code.GDDoor3Objects2.length = 0;
gdjs.chapter_322Code.GDDoor3Objects3.length = 0;
gdjs.chapter_322Code.GDDoor4Objects1.length = 0;
gdjs.chapter_322Code.GDDoor4Objects2.length = 0;
gdjs.chapter_322Code.GDDoor4Objects3.length = 0;
gdjs.chapter_322Code.GDDoor5Objects1.length = 0;
gdjs.chapter_322Code.GDDoor5Objects2.length = 0;
gdjs.chapter_322Code.GDDoor5Objects3.length = 0;
gdjs.chapter_322Code.GDFishObjects1.length = 0;
gdjs.chapter_322Code.GDFishObjects2.length = 0;
gdjs.chapter_322Code.GDFishObjects3.length = 0;
gdjs.chapter_322Code.GDStarObjects1.length = 0;
gdjs.chapter_322Code.GDStarObjects2.length = 0;
gdjs.chapter_322Code.GDStarObjects3.length = 0;
gdjs.chapter_322Code.GDFisher_95952Objects1.length = 0;
gdjs.chapter_322Code.GDFisher_95952Objects2.length = 0;
gdjs.chapter_322Code.GDFisher_95952Objects3.length = 0;
gdjs.chapter_322Code.GDbuttonObjects1.length = 0;
gdjs.chapter_322Code.GDbuttonObjects2.length = 0;
gdjs.chapter_322Code.GDbuttonObjects3.length = 0;
gdjs.chapter_322Code.GDbutton2Objects1.length = 0;
gdjs.chapter_322Code.GDbutton2Objects2.length = 0;
gdjs.chapter_322Code.GDbutton2Objects3.length = 0;


return;

}

gdjs['chapter_322Code'] = gdjs.chapter_322Code;
