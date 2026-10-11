gdjs.Chap5ACode = {};
gdjs.Chap5ACode.localVariables = [];
gdjs.Chap5ACode.idToCallbackMap = new Map();
gdjs.Chap5ACode.GDBackgroundObjects1= [];
gdjs.Chap5ACode.GDBackgroundObjects2= [];
gdjs.Chap5ACode.GDFloorObjects1= [];
gdjs.Chap5ACode.GDFloorObjects2= [];
gdjs.Chap5ACode.GDKingObjects1= [];
gdjs.Chap5ACode.GDKingObjects2= [];
gdjs.Chap5ACode.GDravenObjects1= [];
gdjs.Chap5ACode.GDravenObjects2= [];
gdjs.Chap5ACode.GDRight_9595ArrowObjects1= [];
gdjs.Chap5ACode.GDRight_9595ArrowObjects2= [];
gdjs.Chap5ACode.GDLeft_9595ArrowObjects1= [];
gdjs.Chap5ACode.GDLeft_9595ArrowObjects2= [];
gdjs.Chap5ACode.GDcoverObjects1= [];
gdjs.Chap5ACode.GDcoverObjects2= [];
gdjs.Chap5ACode.GDChat_9595frameObjects1= [];
gdjs.Chap5ACode.GDChat_9595frameObjects2= [];
gdjs.Chap5ACode.GDText1Objects1= [];
gdjs.Chap5ACode.GDText1Objects2= [];
gdjs.Chap5ACode.GDbuttonObjects1= [];
gdjs.Chap5ACode.GDbuttonObjects2= [];
gdjs.Chap5ACode.GDClickObjects1= [];
gdjs.Chap5ACode.GDClickObjects2= [];


gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDKingObjects1Objects = Hashtable.newFrom({"King": gdjs.Chap5ACode.GDKingObjects1});
gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Chap5ACode.GDbuttonObjects1});
gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDravenObjects1Objects = Hashtable.newFrom({"raven": gdjs.Chap5ACode.GDravenObjects1});
gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.Chap5ACode.GDLeft_9595ArrowObjects1});
gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDRight_95959595ArrowObjects1Objects = Hashtable.newFrom({"Right_Arrow": gdjs.Chap5ACode.GDRight_9595ArrowObjects1});
gdjs.Chap5ACode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Click"), gdjs.Chap5ACode.GDClickObjects1);
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Chap5ACode.GDKingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap5ACode.GDRight_9595ArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5ACode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5ACode.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDbuttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDKingObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDKingObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDRight_9595ArrowObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDClickObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDClickObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Chap5ACode.GDKingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDKingObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5ACode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDChat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDText1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDbuttonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5ACode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDcoverObjects1[k] = gdjs.Chap5ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDcoverObjects1[k] = gdjs.Chap5ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDChat_9595frameObjects1[k] = gdjs.Chap5ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDChat_9595frameObjects1[k] = gdjs.Chap5ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDText1Objects1[k] = gdjs.Chap5ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDText1Objects1[k] = gdjs.Chap5ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDbuttonObjects1[k] = gdjs.Chap5ACode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDbuttonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDbuttonObjects1[k] = gdjs.Chap5ACode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDbuttonObjects1.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap5ACode.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap5ACode.GDText1Objects1 */
/* Reuse gdjs.Chap5ACode.GDbuttonObjects1 */
/* Reuse gdjs.Chap5ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5ACode.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5ACode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5ACode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDcoverObjects1[k] = gdjs.Chap5ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDcoverObjects1[k] = gdjs.Chap5ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDChat_9595frameObjects1[k] = gdjs.Chap5ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDChat_9595frameObjects1[k] = gdjs.Chap5ACode.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDText1Objects1[k] = gdjs.Chap5ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDText1Objects1[k] = gdjs.Chap5ACode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDbuttonObjects1[k] = gdjs.Chap5ACode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDbuttonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDbuttonObjects1[k] = gdjs.Chap5ACode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDbuttonObjects1.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap5ACode.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap5ACode.GDText1Objects1 */
/* Reuse gdjs.Chap5ACode.GDbuttonObjects1 */
/* Reuse gdjs.Chap5ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5ACode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5ACode.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Click"), gdjs.Chap5ACode.GDClickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5ACode.GDText1Objects1);
/* Reuse gdjs.Chap5ACode.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5ACode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDbuttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5ACode.GDClickObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDClickObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("raven"), gdjs.Chap5ACode.GDravenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDravenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Chap5ACode.GDKingObjects1);
{for(var i = 0, len = gdjs.Chap5ACode.GDKingObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDKingObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5ACode.GDKingObjects1[i].getBehavior("Opacity").getOpacity() - (3));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Chap5ACode.GDKingObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5ACode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDKingObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDKingObjects1[i].getBehavior("Opacity").getOpacity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDKingObjects1[k] = gdjs.Chap5ACode.GDKingObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDKingObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDcoverObjects1.length;i<l;++i) {
    if ( !(gdjs.Chap5ACode.GDcoverObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDcoverObjects1[k] = gdjs.Chap5ACode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDcoverObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap5ACode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap5ACode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Chap5ACode.GDKingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5ACode.GDKingObjects1.length;i<l;++i) {
    if ( gdjs.Chap5ACode.GDKingObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5ACode.GDKingObjects1[k] = gdjs.Chap5ACode.GDKingObjects1[i];
        ++k;
    }
}
gdjs.Chap5ACode.GDKingObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap5ACode.GDRight_9595ArrowObjects1);
{for(var i = 0, len = gdjs.Chap5ACode.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap5ACode.GDRight_9595ArrowObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.Chap5ACode.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap4", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap5ACode.GDRight_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5ACode.mapOfGDgdjs_9546Chap5ACode_9546GDRight_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap1B", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Chap5ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap5ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap5ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap5ACode.GDFloorObjects1.length = 0;
gdjs.Chap5ACode.GDFloorObjects2.length = 0;
gdjs.Chap5ACode.GDKingObjects1.length = 0;
gdjs.Chap5ACode.GDKingObjects2.length = 0;
gdjs.Chap5ACode.GDravenObjects1.length = 0;
gdjs.Chap5ACode.GDravenObjects2.length = 0;
gdjs.Chap5ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap5ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap5ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap5ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap5ACode.GDcoverObjects1.length = 0;
gdjs.Chap5ACode.GDcoverObjects2.length = 0;
gdjs.Chap5ACode.GDChat_9595frameObjects1.length = 0;
gdjs.Chap5ACode.GDChat_9595frameObjects2.length = 0;
gdjs.Chap5ACode.GDText1Objects1.length = 0;
gdjs.Chap5ACode.GDText1Objects2.length = 0;
gdjs.Chap5ACode.GDbuttonObjects1.length = 0;
gdjs.Chap5ACode.GDbuttonObjects2.length = 0;
gdjs.Chap5ACode.GDClickObjects1.length = 0;
gdjs.Chap5ACode.GDClickObjects2.length = 0;

gdjs.Chap5ACode.eventsList0(runtimeScene);
gdjs.Chap5ACode.GDBackgroundObjects1.length = 0;
gdjs.Chap5ACode.GDBackgroundObjects2.length = 0;
gdjs.Chap5ACode.GDFloorObjects1.length = 0;
gdjs.Chap5ACode.GDFloorObjects2.length = 0;
gdjs.Chap5ACode.GDKingObjects1.length = 0;
gdjs.Chap5ACode.GDKingObjects2.length = 0;
gdjs.Chap5ACode.GDravenObjects1.length = 0;
gdjs.Chap5ACode.GDravenObjects2.length = 0;
gdjs.Chap5ACode.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap5ACode.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap5ACode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap5ACode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap5ACode.GDcoverObjects1.length = 0;
gdjs.Chap5ACode.GDcoverObjects2.length = 0;
gdjs.Chap5ACode.GDChat_9595frameObjects1.length = 0;
gdjs.Chap5ACode.GDChat_9595frameObjects2.length = 0;
gdjs.Chap5ACode.GDText1Objects1.length = 0;
gdjs.Chap5ACode.GDText1Objects2.length = 0;
gdjs.Chap5ACode.GDbuttonObjects1.length = 0;
gdjs.Chap5ACode.GDbuttonObjects2.length = 0;
gdjs.Chap5ACode.GDClickObjects1.length = 0;
gdjs.Chap5ACode.GDClickObjects2.length = 0;


return;

}

gdjs['Chap5ACode'] = gdjs.Chap5ACode;
