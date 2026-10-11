gdjs.chapter_322AaCode = {};
gdjs.chapter_322AaCode.localVariables = [];
gdjs.chapter_322AaCode.idToCallbackMap = new Map();
gdjs.chapter_322AaCode.GDbackgroundObjects1= [];
gdjs.chapter_322AaCode.GDbackgroundObjects2= [];
gdjs.chapter_322AaCode.GD_9520449_9531665Objects1= [];
gdjs.chapter_322AaCode.GD_9520449_9531665Objects2= [];
gdjs.chapter_322AaCode.GDnoteObjects1= [];
gdjs.chapter_322AaCode.GDnoteObjects2= [];
gdjs.chapter_322AaCode.GDpaper_9595noteObjects1= [];
gdjs.chapter_322AaCode.GDpaper_9595noteObjects2= [];
gdjs.chapter_322AaCode.GD_9540657_9524149Objects1= [];
gdjs.chapter_322AaCode.GD_9540657_9524149Objects2= [];
gdjs.chapter_322AaCode.GDbackObjects1= [];
gdjs.chapter_322AaCode.GDbackObjects2= [];
gdjs.chapter_322AaCode.GDback2Objects1= [];
gdjs.chapter_322AaCode.GDback2Objects2= [];


gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GD_95959520449_95959531665Objects1Objects = Hashtable.newFrom({"信箱": gdjs.chapter_322AaCode.GD_9520449_9531665Objects1});
gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GDnoteObjects1Objects = Hashtable.newFrom({"note": gdjs.chapter_322AaCode.GDnoteObjects1});
gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.chapter_322AaCode.GDbackObjects1});
gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs.chapter_322AaCode.GDback2Objects1});
gdjs.chapter_322AaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.chapter_322AaCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs.chapter_322AaCode.GDback2Objects1);
gdjs.copyArray(runtimeScene.getObjects("note"), gdjs.chapter_322AaCode.GDnoteObjects1);
gdjs.copyArray(runtimeScene.getObjects("paper_note"), gdjs.chapter_322AaCode.GDpaper_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_322AaCode.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_322AaCode.GDnoteObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDnoteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDpaper_9595noteObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDpaper_9595noteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GD_9540657_9524149Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDbackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDback2Objects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDback2Objects1[i].hide();
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

gdjs.copyArray(runtimeScene.getObjects("信箱"), gdjs.chapter_322AaCode.GD_9520449_9531665Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GD_95959520449_95959531665Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.chapter_322AaCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("note"), gdjs.chapter_322AaCode.GDnoteObjects1);
/* Reuse gdjs.chapter_322AaCode.GD_9520449_9531665Objects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "8e81a76047768995a44adc02f218ad61645e571cda9259403c7bc4558762a326_MetalV2_Run_13.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDbackgroundObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDnoteObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDnoteObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GD_9520449_9531665Objects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GD_9520449_9531665Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("note"), gdjs.chapter_322AaCode.GDnoteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GDnoteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.chapter_322AaCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("paper_note"), gdjs.chapter_322AaCode.GDpaper_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_322AaCode.GD_9540657_9524149Objects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "82379__gynation__paper-flip-3.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GD_9540657_9524149Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDpaper_9595noteObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDpaper_9595noteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDbackObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.chapter_322AaCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322AaCode.GDbackObjects1 */
gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs.chapter_322AaCode.GDback2Objects1);
gdjs.copyArray(runtimeScene.getObjects("paper_note"), gdjs.chapter_322AaCode.GDpaper_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("黑幕"), gdjs.chapter_322AaCode.GD_9540657_9524149Objects1);
{for(var i = 0, len = gdjs.chapter_322AaCode.GDpaper_9595noteObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDpaper_9595noteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GD_9540657_9524149Objects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GD_9540657_9524149Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDbackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322AaCode.GDback2Objects1.length ;i < len;++i) {
    gdjs.chapter_322AaCode.GDback2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs.chapter_322AaCode.GDback2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322AaCode.mapOfGDgdjs_9546chapter_9595322AaCode_9546GDback2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "chapter 2A");
}
}

}


};

gdjs.chapter_322AaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_322AaCode.GDbackgroundObjects1.length = 0;
gdjs.chapter_322AaCode.GDbackgroundObjects2.length = 0;
gdjs.chapter_322AaCode.GD_9520449_9531665Objects1.length = 0;
gdjs.chapter_322AaCode.GD_9520449_9531665Objects2.length = 0;
gdjs.chapter_322AaCode.GDnoteObjects1.length = 0;
gdjs.chapter_322AaCode.GDnoteObjects2.length = 0;
gdjs.chapter_322AaCode.GDpaper_9595noteObjects1.length = 0;
gdjs.chapter_322AaCode.GDpaper_9595noteObjects2.length = 0;
gdjs.chapter_322AaCode.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_322AaCode.GD_9540657_9524149Objects2.length = 0;
gdjs.chapter_322AaCode.GDbackObjects1.length = 0;
gdjs.chapter_322AaCode.GDbackObjects2.length = 0;
gdjs.chapter_322AaCode.GDback2Objects1.length = 0;
gdjs.chapter_322AaCode.GDback2Objects2.length = 0;

gdjs.chapter_322AaCode.eventsList0(runtimeScene);
gdjs.chapter_322AaCode.GDbackgroundObjects1.length = 0;
gdjs.chapter_322AaCode.GDbackgroundObjects2.length = 0;
gdjs.chapter_322AaCode.GD_9520449_9531665Objects1.length = 0;
gdjs.chapter_322AaCode.GD_9520449_9531665Objects2.length = 0;
gdjs.chapter_322AaCode.GDnoteObjects1.length = 0;
gdjs.chapter_322AaCode.GDnoteObjects2.length = 0;
gdjs.chapter_322AaCode.GDpaper_9595noteObjects1.length = 0;
gdjs.chapter_322AaCode.GDpaper_9595noteObjects2.length = 0;
gdjs.chapter_322AaCode.GD_9540657_9524149Objects1.length = 0;
gdjs.chapter_322AaCode.GD_9540657_9524149Objects2.length = 0;
gdjs.chapter_322AaCode.GDbackObjects1.length = 0;
gdjs.chapter_322AaCode.GDbackObjects2.length = 0;
gdjs.chapter_322AaCode.GDback2Objects1.length = 0;
gdjs.chapter_322AaCode.GDback2Objects2.length = 0;


return;

}

gdjs['chapter_322AaCode'] = gdjs.chapter_322AaCode;
