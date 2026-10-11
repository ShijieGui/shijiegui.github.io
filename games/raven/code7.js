gdjs.Chap3ACode = {};
gdjs.Chap3ACode.localVariables = [];
gdjs.Chap3ACode.idToCallbackMap = new Map();
gdjs.Chap3ACode.GDBackgroundObjects1= [];
gdjs.Chap3ACode.GDBackgroundObjects2= [];
gdjs.Chap3ACode.GDQueenObjects1= [];
gdjs.Chap3ACode.GDQueenObjects2= [];
gdjs.Chap3ACode.GDFloorObjects1= [];
gdjs.Chap3ACode.GDFloorObjects2= [];
gdjs.Chap3ACode.GDravenObjects1= [];
gdjs.Chap3ACode.GDravenObjects2= [];
gdjs.Chap3ACode.GDRight_9595ArrowObjects1= [];
gdjs.Chap3ACode.GDRight_9595ArrowObjects2= [];
gdjs.Chap3ACode.GDLeft_9595ArrowObjects1= [];
gdjs.Chap3ACode.GDLeft_9595ArrowObjects2= [];
gdjs.Chap3ACode.GDcoverObjects1= [];
gdjs.Chap3ACode.GDcoverObjects2= [];
gdjs.Chap3ACode.GDChat_9595frameObjects1= [];
gdjs.Chap3ACode.GDChat_9595frameObjects2= [];
gdjs.Chap3ACode.GDText1Objects1= [];
gdjs.Chap3ACode.GDText1Objects2= [];


gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDQueenObjects1Objects = Hashtable.newFrom({"Queen": gdjs.Chap3ACode.GDQueenObjects1});
gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDText1Objects1Objects = Hashtable.newFrom({"Text1": gdjs.Chap3ACode.GDText1Objects1});
gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDRight_95959595ArrowObjects1Objects = Hashtable.newFrom({"Right_Arrow": gdjs.Chap3ACode.GDRight_9595ArrowObjects1});
gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.Chap3ACode.GDLeft_9595ArrowObjects1});
gdjs.Chap3ACode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap3ACode.GDRight_9595ArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3ACode.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap3ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDRight_9595ArrowObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Queen"), gdjs.Chap3ACode.GDQueenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDQueenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap3ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDChat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDText1Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDcoverObjects1[k] = gdjs.Chap3ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDcoverObjects1[k] = gdjs.Chap3ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDChat_9595frameObjects1[k] = gdjs.Chap3ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDChat_9595frameObjects1[k] = gdjs.Chap3ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDText1Objects1[k] = gdjs.Chap3ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDText1Objects1[k] = gdjs.Chap3ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap3ACode.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap3ACode.GDText1Objects1 */
/* Reuse gdjs.Chap3ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap3ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDcoverObjects1[k] = gdjs.Chap3ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDcoverObjects1[k] = gdjs.Chap3ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDChat_9595frameObjects1[k] = gdjs.Chap3ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDChat_9595frameObjects1[k] = gdjs.Chap3ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDText1Objects1[k] = gdjs.Chap3ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3ACode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3ACode.GDText1Objects1[k] = gdjs.Chap3ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3ACode.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap3ACode.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap3ACode.GDText1Objects1 */
/* Reuse gdjs.Chap3ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap3ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3ACode.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDText1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap3ACode.GDRight_9595ArrowObjects1);
/* Reuse gdjs.Chap3ACode.GDText1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap3ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap3ACode.GDRight_9595ArrowObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap3ACode.GDRight_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDRight_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap4", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.Chap3ACode.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3ACode.mapOfGDgdjs_9546Chap3ACode_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
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

gdjs.Chap3ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap3ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap3ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap3ACode.GDQueenObjects1.length = 0;
gdjs.Chap3ACode.GDQueenObjects2.length = 0;
gdjs.Chap3ACode.GDFloorObjects1.length = 0;
gdjs.Chap3ACode.GDFloorObjects2.length = 0;
gdjs.Chap3ACode.GDravenObjects1.length = 0;
gdjs.Chap3ACode.GDravenObjects2.length = 0;
gdjs.Chap3ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap3ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap3ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap3ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap3ACode.GDcoverObjects1.length = 0;
gdjs.Chap3ACode.GDcoverObjects2.length = 0;
gdjs.Chap3ACode.GDChat_9595frameObjects1.length = 0;
gdjs.Chap3ACode.GDChat_9595frameObjects2.length = 0;
gdjs.Chap3ACode.GDText1Objects1.length = 0;
gdjs.Chap3ACode.GDText1Objects2.length = 0;

gdjs.Chap3ACode.eventsList0(runtimeScene);
gdjs.Chap3ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap3ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap3ACode.GDQueenObjects1.length = 0;
gdjs.Chap3ACode.GDQueenObjects2.length = 0;
gdjs.Chap3ACode.GDFloorObjects1.length = 0;
gdjs.Chap3ACode.GDFloorObjects2.length = 0;
gdjs.Chap3ACode.GDravenObjects1.length = 0;
gdjs.Chap3ACode.GDravenObjects2.length = 0;
gdjs.Chap3ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap3ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap3ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap3ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap3ACode.GDcoverObjects1.length = 0;
gdjs.Chap3ACode.GDcoverObjects2.length = 0;
gdjs.Chap3ACode.GDChat_9595frameObjects1.length = 0;
gdjs.Chap3ACode.GDChat_9595frameObjects2.length = 0;
gdjs.Chap3ACode.GDText1Objects1.length = 0;
gdjs.Chap3ACode.GDText1Objects2.length = 0;


return;

}

gdjs['Chap3ACode'] = gdjs.Chap3ACode;
