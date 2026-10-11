gdjs.hall_3203Code = {};
gdjs.hall_3203Code.localVariables = [];
gdjs.hall_3203Code.idToCallbackMap = new Map();
gdjs.hall_3203Code.GDMorningObjects1= [];
gdjs.hall_3203Code.GDMorningObjects2= [];
gdjs.hall_3203Code.GDcharacterObjects1= [];
gdjs.hall_3203Code.GDcharacterObjects2= [];
gdjs.hall_3203Code.GDFloorObjects1= [];
gdjs.hall_3203Code.GDFloorObjects2= [];
gdjs.hall_3203Code.GDDoorObjects1= [];
gdjs.hall_3203Code.GDDoorObjects2= [];
gdjs.hall_3203Code.GDLightObjects1= [];
gdjs.hall_3203Code.GDLightObjects2= [];


gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_3203Code.GDcharacterObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.hall_3203Code.GDFloorObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_3203Code.GDcharacterObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.hall_3203Code.GDFloorObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_3203Code.GDcharacterObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.hall_3203Code.GDDoorObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDLightObjects1Objects = Hashtable.newFrom({"Light": gdjs.hall_3203Code.GDLightObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_3203Code.GDcharacterObjects1});
gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDMorningObjects1Objects = Hashtable.newFrom({"Morning": gdjs.hall_3203Code.GDMorningObjects1});
gdjs.hall_3203Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.hall_3203Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_3203Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects, "PlatformerObject", gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDFloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hall_3203Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.hall_3203Code.GDcharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.hall_3203Code.GDcharacterObjects1[k] = gdjs.hall_3203Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.hall_3203Code.GDcharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.hall_3203Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.hall_3203Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.hall_3203Code.GDcharacterObjects1[i].getBehavior("Animation").setAnimationName("still");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.hall_3203Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_3203Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects, "PlatformerObject", gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDFloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hall_3203Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.hall_3203Code.GDcharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.hall_3203Code.GDcharacterObjects1[k] = gdjs.hall_3203Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.hall_3203Code.GDcharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.hall_3203Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.hall_3203Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.hall_3203Code.GDcharacterObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.hall_3203Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_3203Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects, gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "music box", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.hall_3203Code.GDLightObjects1);
{for(var i = 0, len = gdjs.hall_3203Code.GDLightObjects1.length ;i < len;++i) {
    gdjs.hall_3203Code.GDLightObjects1[i].getBehavior("FlashOpacity").Flash("Tween", 5, 125, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.hall_3203Code.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_3203Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hall_3203Code.GDLightObjects1.length;i<l;++i) {
    if ( gdjs.hall_3203Code.GDLightObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.hall_3203Code.GDLightObjects1[k] = gdjs.hall_3203Code.GDLightObjects1[i];
        ++k;
    }
}
gdjs.hall_3203Code.GDLightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDLightObjects1Objects, gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDcharacterObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.hall_3203Code.GDLightObjects1 */
{for(var i = 0, len = gdjs.hall_3203Code.GDLightObjects1.length ;i < len;++i) {
    gdjs.hall_3203Code.GDLightObjects1[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 2, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Morning"), gdjs.hall_3203Code.GDMorningObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.hall_3203Code.mapOfGDgdjs_9546hall_95953203Code_9546GDMorningObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14305932);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14306572);
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

gdjs.hall_3203Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.hall_3203Code.GDMorningObjects1.length = 0;
gdjs.hall_3203Code.GDMorningObjects2.length = 0;
gdjs.hall_3203Code.GDcharacterObjects1.length = 0;
gdjs.hall_3203Code.GDcharacterObjects2.length = 0;
gdjs.hall_3203Code.GDFloorObjects1.length = 0;
gdjs.hall_3203Code.GDFloorObjects2.length = 0;
gdjs.hall_3203Code.GDDoorObjects1.length = 0;
gdjs.hall_3203Code.GDDoorObjects2.length = 0;
gdjs.hall_3203Code.GDLightObjects1.length = 0;
gdjs.hall_3203Code.GDLightObjects2.length = 0;

gdjs.hall_3203Code.eventsList0(runtimeScene);
gdjs.hall_3203Code.GDMorningObjects1.length = 0;
gdjs.hall_3203Code.GDMorningObjects2.length = 0;
gdjs.hall_3203Code.GDcharacterObjects1.length = 0;
gdjs.hall_3203Code.GDcharacterObjects2.length = 0;
gdjs.hall_3203Code.GDFloorObjects1.length = 0;
gdjs.hall_3203Code.GDFloorObjects2.length = 0;
gdjs.hall_3203Code.GDDoorObjects1.length = 0;
gdjs.hall_3203Code.GDDoorObjects2.length = 0;
gdjs.hall_3203Code.GDLightObjects1.length = 0;
gdjs.hall_3203Code.GDLightObjects2.length = 0;


return;

}

gdjs['hall_3203Code'] = gdjs.hall_3203Code;
