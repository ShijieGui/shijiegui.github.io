gdjs.chapter_320Code = {};
gdjs.chapter_320Code.localVariables = [];
gdjs.chapter_320Code.idToCallbackMap = new Map();
gdjs.chapter_320Code.GDbackgroundObjects1= [];
gdjs.chapter_320Code.GDbackgroundObjects2= [];
gdjs.chapter_320Code.GDskyObjects1= [];
gdjs.chapter_320Code.GDskyObjects2= [];
gdjs.chapter_320Code.GDoceanObjects1= [];
gdjs.chapter_320Code.GDoceanObjects2= [];
gdjs.chapter_320Code.GDforestObjects1= [];
gdjs.chapter_320Code.GDforestObjects2= [];
gdjs.chapter_320Code.GDsky_95951Objects1= [];
gdjs.chapter_320Code.GDsky_95951Objects2= [];
gdjs.chapter_320Code.GDocean_95951Objects1= [];
gdjs.chapter_320Code.GDocean_95951Objects2= [];
gdjs.chapter_320Code.GDforest_95951Objects1= [];
gdjs.chapter_320Code.GDforest_95951Objects2= [];
gdjs.chapter_320Code.GDcharacterObjects1= [];
gdjs.chapter_320Code.GDcharacterObjects2= [];
gdjs.chapter_320Code.GDBlackObjects1= [];
gdjs.chapter_320Code.GDBlackObjects2= [];


gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDskyObjects1Objects = Hashtable.newFrom({"sky": gdjs.chapter_320Code.GDskyObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDskyObjects1Objects = Hashtable.newFrom({"sky": gdjs.chapter_320Code.GDskyObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDoceanObjects1Objects = Hashtable.newFrom({"ocean": gdjs.chapter_320Code.GDoceanObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDoceanObjects1Objects = Hashtable.newFrom({"ocean": gdjs.chapter_320Code.GDoceanObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDforestObjects1Objects = Hashtable.newFrom({"forest": gdjs.chapter_320Code.GDforestObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDforestObjects1Objects = Hashtable.newFrom({"forest": gdjs.chapter_320Code.GDforestObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDskyObjects1Objects = Hashtable.newFrom({"sky": gdjs.chapter_320Code.GDskyObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDoceanObjects1Objects = Hashtable.newFrom({"ocean": gdjs.chapter_320Code.GDoceanObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDforestObjects1Objects = Hashtable.newFrom({"forest": gdjs.chapter_320Code.GDforestObjects1});
gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.chapter_320Code.GDbackgroundObjects1});
gdjs.chapter_320Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.chapter_320Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("forest_1"), gdjs.chapter_320Code.GDforest_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("ocean_1"), gdjs.chapter_320Code.GDocean_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("sky_1"), gdjs.chapter_320Code.GDsky_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDsky_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDsky_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_320Code.GDocean_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDocean_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_320Code.GDforest_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDforest_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_320Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fade Out", 0, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sky"), gdjs.chapter_320Code.GDskyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDskyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13694788);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sky_1"), gdjs.chapter_320Code.GDsky_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDsky_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDsky_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "WaterV1_Walk_06.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sky"), gdjs.chapter_320Code.GDskyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDskyObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sky_1"), gdjs.chapter_320Code.GDsky_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDsky_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDsky_95951Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ocean"), gdjs.chapter_320Code.GDoceanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDoceanObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13696284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ocean_1"), gdjs.chapter_320Code.GDocean_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDocean_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDocean_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "WaterV2_Walk_01.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ocean"), gdjs.chapter_320Code.GDoceanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDoceanObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ocean_1"), gdjs.chapter_320Code.GDocean_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDocean_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDocean_95951Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forest"), gdjs.chapter_320Code.GDforestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDforestObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13503076);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("forest_1"), gdjs.chapter_320Code.GDforest_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDforest_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDforest_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "WaterV1_Walk_06.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forest"), gdjs.chapter_320Code.GDforestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDforestObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("forest_1"), gdjs.chapter_320Code.GDforest_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDforest_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDforest_95951Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sky"), gdjs.chapter_320Code.GDskyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDskyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13700908);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sky_1"), gdjs.chapter_320Code.GDsky_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDsky_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDsky_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "WaterV1_Walk_06.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ocean"), gdjs.chapter_320Code.GDoceanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDoceanObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13701844);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ocean_1"), gdjs.chapter_320Code.GDocean_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDocean_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDocean_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "WaterV2_Walk_01.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forest"), gdjs.chapter_320Code.GDforestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDforestObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13703188);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("forest_1"), gdjs.chapter_320Code.GDforest_95951Objects1);
{for(var i = 0, len = gdjs.chapter_320Code.GDforest_95951Objects1.length ;i < len;++i) {
    gdjs.chapter_320Code.GDforest_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "WaterV1_Walk_06.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.chapter_320Code.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_320Code.mapOfGDgdjs_9546chapter_9595320Code_9546GDbackgroundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13704996);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13518620);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


};

gdjs.chapter_320Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_320Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_320Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_320Code.GDskyObjects1.length = 0;
gdjs.chapter_320Code.GDskyObjects2.length = 0;
gdjs.chapter_320Code.GDoceanObjects1.length = 0;
gdjs.chapter_320Code.GDoceanObjects2.length = 0;
gdjs.chapter_320Code.GDforestObjects1.length = 0;
gdjs.chapter_320Code.GDforestObjects2.length = 0;
gdjs.chapter_320Code.GDsky_95951Objects1.length = 0;
gdjs.chapter_320Code.GDsky_95951Objects2.length = 0;
gdjs.chapter_320Code.GDocean_95951Objects1.length = 0;
gdjs.chapter_320Code.GDocean_95951Objects2.length = 0;
gdjs.chapter_320Code.GDforest_95951Objects1.length = 0;
gdjs.chapter_320Code.GDforest_95951Objects2.length = 0;
gdjs.chapter_320Code.GDcharacterObjects1.length = 0;
gdjs.chapter_320Code.GDcharacterObjects2.length = 0;
gdjs.chapter_320Code.GDBlackObjects1.length = 0;
gdjs.chapter_320Code.GDBlackObjects2.length = 0;

gdjs.chapter_320Code.eventsList0(runtimeScene);
gdjs.chapter_320Code.GDbackgroundObjects1.length = 0;
gdjs.chapter_320Code.GDbackgroundObjects2.length = 0;
gdjs.chapter_320Code.GDskyObjects1.length = 0;
gdjs.chapter_320Code.GDskyObjects2.length = 0;
gdjs.chapter_320Code.GDoceanObjects1.length = 0;
gdjs.chapter_320Code.GDoceanObjects2.length = 0;
gdjs.chapter_320Code.GDforestObjects1.length = 0;
gdjs.chapter_320Code.GDforestObjects2.length = 0;
gdjs.chapter_320Code.GDsky_95951Objects1.length = 0;
gdjs.chapter_320Code.GDsky_95951Objects2.length = 0;
gdjs.chapter_320Code.GDocean_95951Objects1.length = 0;
gdjs.chapter_320Code.GDocean_95951Objects2.length = 0;
gdjs.chapter_320Code.GDforest_95951Objects1.length = 0;
gdjs.chapter_320Code.GDforest_95951Objects2.length = 0;
gdjs.chapter_320Code.GDcharacterObjects1.length = 0;
gdjs.chapter_320Code.GDcharacterObjects2.length = 0;
gdjs.chapter_320Code.GDBlackObjects1.length = 0;
gdjs.chapter_320Code.GDBlackObjects2.length = 0;


return;

}

gdjs['chapter_320Code'] = gdjs.chapter_320Code;
