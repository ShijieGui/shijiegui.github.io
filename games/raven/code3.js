gdjs.Chap1ACode = {};
gdjs.Chap1ACode.localVariables = [];
gdjs.Chap1ACode.idToCallbackMap = new Map();
gdjs.Chap1ACode.GDBackgroundObjects1= [];
gdjs.Chap1ACode.GDBackgroundObjects2= [];
gdjs.Chap1ACode.GDRight_9595ArrowObjects1= [];
gdjs.Chap1ACode.GDRight_9595ArrowObjects2= [];
gdjs.Chap1ACode.GDLeft_9595ArrowObjects1= [];
gdjs.Chap1ACode.GDLeft_9595ArrowObjects2= [];
gdjs.Chap1ACode.GDPriestObjects1= [];
gdjs.Chap1ACode.GDPriestObjects2= [];
gdjs.Chap1ACode.GDravenObjects1= [];
gdjs.Chap1ACode.GDravenObjects2= [];
gdjs.Chap1ACode.GDchat_9595frameObjects1= [];
gdjs.Chap1ACode.GDchat_9595frameObjects2= [];
gdjs.Chap1ACode.GDcoverObjects1= [];
gdjs.Chap1ACode.GDcoverObjects2= [];
gdjs.Chap1ACode.GDText3Objects1= [];
gdjs.Chap1ACode.GDText3Objects2= [];


gdjs.Chap1ACode.mapOfGDgdjs_9546Chap1ACode_9546GDText3Objects1Objects = Hashtable.newFrom({"Text3": gdjs.Chap1ACode.GDText3Objects1});
gdjs.Chap1ACode.mapOfGDgdjs_9546Chap1ACode_9546GDRight_95959595ArrowObjects1Objects = Hashtable.newFrom({"Right_Arrow": gdjs.Chap1ACode.GDRight_9595ArrowObjects1});
gdjs.Chap1ACode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap1ACode.GDRight_9595ArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap1ACode.GDText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1ACode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1ACode.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap1ACode.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDText3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1ACode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDchat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDRight_9595ArrowObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap1ACode.GDText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1ACode.mapOfGDgdjs_9546Chap1ACode_9546GDText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap1ACode.GDRight_9595ArrowObjects1);
/* Reuse gdjs.Chap1ACode.GDText3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1ACode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap1ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1ACode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDchat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1ACode.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap1ACode.GDRight_9595ArrowObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap1ACode.GDRight_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1ACode.mapOfGDgdjs_9546Chap1ACode_9546GDRight_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Chap1ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap1ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap1ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap1ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap1ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap1ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap1ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap1ACode.GDPriestObjects1.length = 0;
gdjs.Chap1ACode.GDPriestObjects2.length = 0;
gdjs.Chap1ACode.GDravenObjects1.length = 0;
gdjs.Chap1ACode.GDravenObjects2.length = 0;
gdjs.Chap1ACode.GDchat_9595frameObjects1.length = 0;
gdjs.Chap1ACode.GDchat_9595frameObjects2.length = 0;
gdjs.Chap1ACode.GDcoverObjects1.length = 0;
gdjs.Chap1ACode.GDcoverObjects2.length = 0;
gdjs.Chap1ACode.GDText3Objects1.length = 0;
gdjs.Chap1ACode.GDText3Objects2.length = 0;

gdjs.Chap1ACode.eventsList0(runtimeScene);
gdjs.Chap1ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap1ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap1ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap1ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap1ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap1ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap1ACode.GDPriestObjects1.length = 0;
gdjs.Chap1ACode.GDPriestObjects2.length = 0;
gdjs.Chap1ACode.GDravenObjects1.length = 0;
gdjs.Chap1ACode.GDravenObjects2.length = 0;
gdjs.Chap1ACode.GDchat_9595frameObjects1.length = 0;
gdjs.Chap1ACode.GDchat_9595frameObjects2.length = 0;
gdjs.Chap1ACode.GDcoverObjects1.length = 0;
gdjs.Chap1ACode.GDcoverObjects2.length = 0;
gdjs.Chap1ACode.GDText3Objects1.length = 0;
gdjs.Chap1ACode.GDText3Objects2.length = 0;


return;

}

gdjs['Chap1ACode'] = gdjs.Chap1ACode;
