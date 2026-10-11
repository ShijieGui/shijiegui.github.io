gdjs.hall_32o2Code = {};
gdjs.hall_32o2Code.localVariables = [];
gdjs.hall_32o2Code.idToCallbackMap = new Map();
gdjs.hall_32o2Code.GDDawnObjects1= [];
gdjs.hall_32o2Code.GDDawnObjects2= [];
gdjs.hall_32o2Code.GDcharacterObjects1= [];
gdjs.hall_32o2Code.GDcharacterObjects2= [];
gdjs.hall_32o2Code.GDFloorObjects1= [];
gdjs.hall_32o2Code.GDFloorObjects2= [];
gdjs.hall_32o2Code.GDDoorObjects1= [];
gdjs.hall_32o2Code.GDDoorObjects2= [];
gdjs.hall_32o2Code.GDLightObjects1= [];
gdjs.hall_32o2Code.GDLightObjects2= [];


gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_32o2Code.GDcharacterObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.hall_32o2Code.GDFloorObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_32o2Code.GDcharacterObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.hall_32o2Code.GDFloorObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_32o2Code.GDcharacterObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.hall_32o2Code.GDDoorObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDLightObjects1Objects = Hashtable.newFrom({"Light": gdjs.hall_32o2Code.GDLightObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.hall_32o2Code.GDcharacterObjects1});
gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDDawnObjects1Objects = Hashtable.newFrom({"Dawn": gdjs.hall_32o2Code.GDDawnObjects1});
gdjs.hall_32o2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.hall_32o2Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_32o2Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects, "PlatformerObject", gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDFloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hall_32o2Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.hall_32o2Code.GDcharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.hall_32o2Code.GDcharacterObjects1[k] = gdjs.hall_32o2Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.hall_32o2Code.GDcharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.hall_32o2Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.hall_32o2Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.hall_32o2Code.GDcharacterObjects1[i].getBehavior("Animation").setAnimationName("still");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.hall_32o2Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_32o2Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects, "PlatformerObject", gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDFloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hall_32o2Code.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.hall_32o2Code.GDcharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.hall_32o2Code.GDcharacterObjects1[k] = gdjs.hall_32o2Code.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.hall_32o2Code.GDcharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.hall_32o2Code.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.hall_32o2Code.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.hall_32o2Code.GDcharacterObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.hall_32o2Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_32o2Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects, gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 0", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.hall_32o2Code.GDLightObjects1);
{for(var i = 0, len = gdjs.hall_32o2Code.GDLightObjects1.length ;i < len;++i) {
    gdjs.hall_32o2Code.GDLightObjects1[i].getBehavior("FlashOpacity").Flash("Tween", 5, 125, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.hall_32o2Code.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.hall_32o2Code.GDcharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hall_32o2Code.GDLightObjects1.length;i<l;++i) {
    if ( gdjs.hall_32o2Code.GDLightObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.hall_32o2Code.GDLightObjects1[k] = gdjs.hall_32o2Code.GDLightObjects1[i];
        ++k;
    }
}
gdjs.hall_32o2Code.GDLightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDLightObjects1Objects, gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDcharacterObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.hall_32o2Code.GDLightObjects1 */
{for(var i = 0, len = gdjs.hall_32o2Code.GDLightObjects1.length ;i < len;++i) {
    gdjs.hall_32o2Code.GDLightObjects1[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 2, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dawn"), gdjs.hall_32o2Code.GDDawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.hall_32o2Code.mapOfGDgdjs_9546hall_959532o2Code_9546GDDawnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14088644);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14089284);
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

gdjs.hall_32o2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.hall_32o2Code.GDDawnObjects1.length = 0;
gdjs.hall_32o2Code.GDDawnObjects2.length = 0;
gdjs.hall_32o2Code.GDcharacterObjects1.length = 0;
gdjs.hall_32o2Code.GDcharacterObjects2.length = 0;
gdjs.hall_32o2Code.GDFloorObjects1.length = 0;
gdjs.hall_32o2Code.GDFloorObjects2.length = 0;
gdjs.hall_32o2Code.GDDoorObjects1.length = 0;
gdjs.hall_32o2Code.GDDoorObjects2.length = 0;
gdjs.hall_32o2Code.GDLightObjects1.length = 0;
gdjs.hall_32o2Code.GDLightObjects2.length = 0;

gdjs.hall_32o2Code.eventsList0(runtimeScene);
gdjs.hall_32o2Code.GDDawnObjects1.length = 0;
gdjs.hall_32o2Code.GDDawnObjects2.length = 0;
gdjs.hall_32o2Code.GDcharacterObjects1.length = 0;
gdjs.hall_32o2Code.GDcharacterObjects2.length = 0;
gdjs.hall_32o2Code.GDFloorObjects1.length = 0;
gdjs.hall_32o2Code.GDFloorObjects2.length = 0;
gdjs.hall_32o2Code.GDDoorObjects1.length = 0;
gdjs.hall_32o2Code.GDDoorObjects2.length = 0;
gdjs.hall_32o2Code.GDLightObjects1.length = 0;
gdjs.hall_32o2Code.GDLightObjects2.length = 0;


return;

}

gdjs['hall_32o2Code'] = gdjs.hall_32o2Code;
