gdjs.Chap5Code = {};
gdjs.Chap5Code.localVariables = [];
gdjs.Chap5Code.idToCallbackMap = new Map();
gdjs.Chap5Code.GDBackgroundObjects1= [];
gdjs.Chap5Code.GDBackgroundObjects2= [];
gdjs.Chap5Code.GDFloorObjects1= [];
gdjs.Chap5Code.GDFloorObjects2= [];
gdjs.Chap5Code.GDKingObjects1= [];
gdjs.Chap5Code.GDKingObjects2= [];
gdjs.Chap5Code.GDravenObjects1= [];
gdjs.Chap5Code.GDravenObjects2= [];
gdjs.Chap5Code.GDLeft_9595ArrowObjects1= [];
gdjs.Chap5Code.GDLeft_9595ArrowObjects2= [];
gdjs.Chap5Code.GDcoverObjects1= [];
gdjs.Chap5Code.GDcoverObjects2= [];
gdjs.Chap5Code.GDChat_9595frameObjects1= [];
gdjs.Chap5Code.GDChat_9595frameObjects2= [];
gdjs.Chap5Code.GDText1Objects1= [];
gdjs.Chap5Code.GDText1Objects2= [];
gdjs.Chap5Code.GDText2Objects1= [];
gdjs.Chap5Code.GDText2Objects2= [];
gdjs.Chap5Code.GDbuttonObjects1= [];
gdjs.Chap5Code.GDbuttonObjects2= [];


gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDKingObjects1Objects = Hashtable.newFrom({"King": gdjs.Chap5Code.GDKingObjects1});
gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDText1Objects1Objects = Hashtable.newFrom({"Text1": gdjs.Chap5Code.GDText1Objects1});
gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Chap5Code.GDbuttonObjects1});
gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.Chap5Code.GDLeft_9595ArrowObjects1});
gdjs.Chap5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap5Code.GDText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5Code.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5Code.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDbuttonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.Chap5Code.GDKingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDKingObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5Code.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDChat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5Code.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDcoverObjects1[k] = gdjs.Chap5Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDcoverObjects1[k] = gdjs.Chap5Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDChat_9595frameObjects1[k] = gdjs.Chap5Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDChat_9595frameObjects1[k] = gdjs.Chap5Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDText1Objects1[k] = gdjs.Chap5Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDText1Objects1[k] = gdjs.Chap5Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap5Code.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap5Code.GDText1Objects1 */
/* Reuse gdjs.Chap5Code.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap5Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap5Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap5Code.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDcoverObjects1[k] = gdjs.Chap5Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDcoverObjects1[k] = gdjs.Chap5Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDChat_9595frameObjects1[k] = gdjs.Chap5Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDChat_9595frameObjects1[k] = gdjs.Chap5Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDText1Objects1[k] = gdjs.Chap5Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap5Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap5Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap5Code.GDText1Objects1[k] = gdjs.Chap5Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap5Code.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap5Code.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap5Code.GDText1Objects1 */
/* Reuse gdjs.Chap5Code.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap5Code.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDText1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap5Code.GDText1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap5Code.GDText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5Code.GDbuttonObjects1);
{for(var i = 0, len = gdjs.Chap5Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDbuttonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap5Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap5Code.GDText1Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap5Code.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maze 04", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.Chap5Code.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap5Code.mapOfGDgdjs_9546Chap5Code_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Chap5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap5Code.GDBackgroundObjects1.length = 0;
gdjs.Chap5Code.GDBackgroundObjects2.length = 0;
gdjs.Chap5Code.GDFloorObjects1.length = 0;
gdjs.Chap5Code.GDFloorObjects2.length = 0;
gdjs.Chap5Code.GDKingObjects1.length = 0;
gdjs.Chap5Code.GDKingObjects2.length = 0;
gdjs.Chap5Code.GDravenObjects1.length = 0;
gdjs.Chap5Code.GDravenObjects2.length = 0;
gdjs.Chap5Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap5Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap5Code.GDcoverObjects1.length = 0;
gdjs.Chap5Code.GDcoverObjects2.length = 0;
gdjs.Chap5Code.GDChat_9595frameObjects1.length = 0;
gdjs.Chap5Code.GDChat_9595frameObjects2.length = 0;
gdjs.Chap5Code.GDText1Objects1.length = 0;
gdjs.Chap5Code.GDText1Objects2.length = 0;
gdjs.Chap5Code.GDText2Objects1.length = 0;
gdjs.Chap5Code.GDText2Objects2.length = 0;
gdjs.Chap5Code.GDbuttonObjects1.length = 0;
gdjs.Chap5Code.GDbuttonObjects2.length = 0;

gdjs.Chap5Code.eventsList0(runtimeScene);
gdjs.Chap5Code.GDBackgroundObjects1.length = 0;
gdjs.Chap5Code.GDBackgroundObjects2.length = 0;
gdjs.Chap5Code.GDFloorObjects1.length = 0;
gdjs.Chap5Code.GDFloorObjects2.length = 0;
gdjs.Chap5Code.GDKingObjects1.length = 0;
gdjs.Chap5Code.GDKingObjects2.length = 0;
gdjs.Chap5Code.GDravenObjects1.length = 0;
gdjs.Chap5Code.GDravenObjects2.length = 0;
gdjs.Chap5Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap5Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap5Code.GDcoverObjects1.length = 0;
gdjs.Chap5Code.GDcoverObjects2.length = 0;
gdjs.Chap5Code.GDChat_9595frameObjects1.length = 0;
gdjs.Chap5Code.GDChat_9595frameObjects2.length = 0;
gdjs.Chap5Code.GDText1Objects1.length = 0;
gdjs.Chap5Code.GDText1Objects2.length = 0;
gdjs.Chap5Code.GDText2Objects1.length = 0;
gdjs.Chap5Code.GDText2Objects2.length = 0;
gdjs.Chap5Code.GDbuttonObjects1.length = 0;
gdjs.Chap5Code.GDbuttonObjects2.length = 0;


return;

}

gdjs['Chap5Code'] = gdjs.Chap5Code;
