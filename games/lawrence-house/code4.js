gdjs.chapter_322ACode = {};
gdjs.chapter_322ACode.localVariables = [];
gdjs.chapter_322ACode.idToCallbackMap = new Map();
gdjs.chapter_322ACode.GDbackgroundObjects1= [];
gdjs.chapter_322ACode.GDbackgroundObjects2= [];
gdjs.chapter_322ACode.GDdoorObjects1= [];
gdjs.chapter_322ACode.GDdoorObjects2= [];
gdjs.chapter_322ACode.GDmailboxObjects1= [];
gdjs.chapter_322ACode.GDmailboxObjects2= [];
gdjs.chapter_322ACode.GDbackObjects1= [];
gdjs.chapter_322ACode.GDbackObjects2= [];


gdjs.chapter_322ACode.mapOfGDgdjs_9546chapter_9595322ACode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.chapter_322ACode.GDdoorObjects1});
gdjs.chapter_322ACode.mapOfGDgdjs_9546chapter_9595322ACode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.chapter_322ACode.GDdoorObjects1});
gdjs.chapter_322ACode.mapOfGDgdjs_9546chapter_9595322ACode_9546GDmailboxObjects1Objects = Hashtable.newFrom({"mailbox": gdjs.chapter_322ACode.GDmailboxObjects1});
gdjs.chapter_322ACode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.chapter_322ACode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322ACode.mapOfGDgdjs_9546chapter_9595322ACode_9546GDdoorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "635985__j_soundeffects__door-lock-on-1979-mercury-zephyr-sedan.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.chapter_322ACode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322ACode.mapOfGDgdjs_9546chapter_9595322ACode_9546GDdoorObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mailbox"), gdjs.chapter_322ACode.GDmailboxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322ACode.mapOfGDgdjs_9546chapter_9595322ACode_9546GDmailboxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 2Aa", false);
}
}

}


};

gdjs.chapter_322ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_322ACode.GDbackgroundObjects1.length = 0;
gdjs.chapter_322ACode.GDbackgroundObjects2.length = 0;
gdjs.chapter_322ACode.GDdoorObjects1.length = 0;
gdjs.chapter_322ACode.GDdoorObjects2.length = 0;
gdjs.chapter_322ACode.GDmailboxObjects1.length = 0;
gdjs.chapter_322ACode.GDmailboxObjects2.length = 0;
gdjs.chapter_322ACode.GDbackObjects1.length = 0;
gdjs.chapter_322ACode.GDbackObjects2.length = 0;

gdjs.chapter_322ACode.eventsList0(runtimeScene);
gdjs.chapter_322ACode.GDbackgroundObjects1.length = 0;
gdjs.chapter_322ACode.GDbackgroundObjects2.length = 0;
gdjs.chapter_322ACode.GDdoorObjects1.length = 0;
gdjs.chapter_322ACode.GDdoorObjects2.length = 0;
gdjs.chapter_322ACode.GDmailboxObjects1.length = 0;
gdjs.chapter_322ACode.GDmailboxObjects2.length = 0;
gdjs.chapter_322ACode.GDbackObjects1.length = 0;
gdjs.chapter_322ACode.GDbackObjects2.length = 0;


return;

}

gdjs['chapter_322ACode'] = gdjs.chapter_322ACode;
