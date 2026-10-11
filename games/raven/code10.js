gdjs.Chap4ACode = {};
gdjs.Chap4ACode.localVariables = [];
gdjs.Chap4ACode.idToCallbackMap = new Map();
gdjs.Chap4ACode.GDBackgroundObjects1= [];
gdjs.Chap4ACode.GDBackgroundObjects2= [];
gdjs.Chap4ACode.GDWitchObjects1= [];
gdjs.Chap4ACode.GDWitchObjects2= [];
gdjs.Chap4ACode.GDFloorObjects1= [];
gdjs.Chap4ACode.GDFloorObjects2= [];
gdjs.Chap4ACode.GDravenObjects1= [];
gdjs.Chap4ACode.GDravenObjects2= [];
gdjs.Chap4ACode.GDRight_9595ArrowObjects1= [];
gdjs.Chap4ACode.GDRight_9595ArrowObjects2= [];
gdjs.Chap4ACode.GDLeft_9595ArrowObjects1= [];
gdjs.Chap4ACode.GDLeft_9595ArrowObjects2= [];
gdjs.Chap4ACode.GDcoverObjects1= [];
gdjs.Chap4ACode.GDcoverObjects2= [];
gdjs.Chap4ACode.GDChat_9595frameObjects1= [];
gdjs.Chap4ACode.GDChat_9595frameObjects2= [];
gdjs.Chap4ACode.GDText1Objects1= [];
gdjs.Chap4ACode.GDText1Objects2= [];


gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDWitchObjects1Objects = Hashtable.newFrom({"Witch": gdjs.Chap4ACode.GDWitchObjects1});
gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDText1Objects1Objects = Hashtable.newFrom({"Text1": gdjs.Chap4ACode.GDText1Objects1});
gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDRight_95959595ArrowObjects1Objects = Hashtable.newFrom({"Right_Arrow": gdjs.Chap4ACode.GDRight_9595ArrowObjects1});
gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.Chap4ACode.GDLeft_9595ArrowObjects1});
gdjs.Chap4ACode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap4ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap4ACode.GDRight_9595ArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap4ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap4ACode.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap4ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDRight_9595ArrowObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Witch"), gdjs.Chap4ACode.GDWitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDWitchObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap4ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap4ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap4ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap4ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDChat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDText1Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap4ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap4ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap4ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDcoverObjects1[k] = gdjs.Chap4ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDcoverObjects1[k] = gdjs.Chap4ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDChat_9595frameObjects1[k] = gdjs.Chap4ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDChat_9595frameObjects1[k] = gdjs.Chap4ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDText1Objects1[k] = gdjs.Chap4ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDText1Objects1[k] = gdjs.Chap4ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap4ACode.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap4ACode.GDText1Objects1 */
/* Reuse gdjs.Chap4ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap4ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap4ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap4ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap4ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap4ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap4ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap4ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDcoverObjects1[k] = gdjs.Chap4ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDcoverObjects1[k] = gdjs.Chap4ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDChat_9595frameObjects1[k] = gdjs.Chap4ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDChat_9595frameObjects1[k] = gdjs.Chap4ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDText1Objects1[k] = gdjs.Chap4ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap4ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap4ACode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap4ACode.GDText1Objects1[k] = gdjs.Chap4ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap4ACode.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap4ACode.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap4ACode.GDText1Objects1 */
/* Reuse gdjs.Chap4ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap4ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap4ACode.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDText1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap4ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap4ACode.GDRight_9595ArrowObjects1);
/* Reuse gdjs.Chap4ACode.GDText1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap4ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap4ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap4ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap4ACode.GDRight_9595ArrowObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap4ACode.GDRight_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDRight_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap5", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.Chap4ACode.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap4ACode.mapOfGDgdjs_9546Chap4ACode_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap3", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Chap4ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap4ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap4ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap4ACode.GDWitchObjects1.length = 0;
gdjs.Chap4ACode.GDWitchObjects2.length = 0;
gdjs.Chap4ACode.GDFloorObjects1.length = 0;
gdjs.Chap4ACode.GDFloorObjects2.length = 0;
gdjs.Chap4ACode.GDravenObjects1.length = 0;
gdjs.Chap4ACode.GDravenObjects2.length = 0;
gdjs.Chap4ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap4ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap4ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap4ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap4ACode.GDcoverObjects1.length = 0;
gdjs.Chap4ACode.GDcoverObjects2.length = 0;
gdjs.Chap4ACode.GDChat_9595frameObjects1.length = 0;
gdjs.Chap4ACode.GDChat_9595frameObjects2.length = 0;
gdjs.Chap4ACode.GDText1Objects1.length = 0;
gdjs.Chap4ACode.GDText1Objects2.length = 0;

gdjs.Chap4ACode.eventsList0(runtimeScene);
gdjs.Chap4ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap4ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap4ACode.GDWitchObjects1.length = 0;
gdjs.Chap4ACode.GDWitchObjects2.length = 0;
gdjs.Chap4ACode.GDFloorObjects1.length = 0;
gdjs.Chap4ACode.GDFloorObjects2.length = 0;
gdjs.Chap4ACode.GDravenObjects1.length = 0;
gdjs.Chap4ACode.GDravenObjects2.length = 0;
gdjs.Chap4ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap4ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap4ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap4ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap4ACode.GDcoverObjects1.length = 0;
gdjs.Chap4ACode.GDcoverObjects2.length = 0;
gdjs.Chap4ACode.GDChat_9595frameObjects1.length = 0;
gdjs.Chap4ACode.GDChat_9595frameObjects2.length = 0;
gdjs.Chap4ACode.GDText1Objects1.length = 0;
gdjs.Chap4ACode.GDText1Objects2.length = 0;


return;

}

gdjs['Chap4ACode'] = gdjs.Chap4ACode;
