gdjs.Chap3Code = {};
gdjs.Chap3Code.localVariables = [];
gdjs.Chap3Code.idToCallbackMap = new Map();
gdjs.Chap3Code.GDBackgroundObjects1= [];
gdjs.Chap3Code.GDBackgroundObjects2= [];
gdjs.Chap3Code.GDQueenObjects1= [];
gdjs.Chap3Code.GDQueenObjects2= [];
gdjs.Chap3Code.GDFloorObjects1= [];
gdjs.Chap3Code.GDFloorObjects2= [];
gdjs.Chap3Code.GDravenObjects1= [];
gdjs.Chap3Code.GDravenObjects2= [];
gdjs.Chap3Code.GDLeft_9595ArrowObjects1= [];
gdjs.Chap3Code.GDLeft_9595ArrowObjects2= [];
gdjs.Chap3Code.GDcoverObjects1= [];
gdjs.Chap3Code.GDcoverObjects2= [];
gdjs.Chap3Code.GDChat_9595frameObjects1= [];
gdjs.Chap3Code.GDChat_9595frameObjects2= [];
gdjs.Chap3Code.GDText1Objects1= [];
gdjs.Chap3Code.GDText1Objects2= [];
gdjs.Chap3Code.GDbuttonObjects1= [];
gdjs.Chap3Code.GDbuttonObjects2= [];


gdjs.Chap3Code.mapOfGDgdjs_9546Chap3Code_9546GDQueenObjects1Objects = Hashtable.newFrom({"Queen": gdjs.Chap3Code.GDQueenObjects1});
gdjs.Chap3Code.mapOfGDgdjs_9546Chap3Code_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Chap3Code.GDbuttonObjects1});
gdjs.Chap3Code.mapOfGDgdjs_9546Chap3Code_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.Chap3Code.GDLeft_9595ArrowObjects1});
gdjs.Chap3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap3Code.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3Code.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDChat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDbuttonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Queen"), gdjs.Chap3Code.GDQueenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3Code.mapOfGDgdjs_9546Chap3Code_9546GDQueenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap3Code.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3Code.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDChat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDText1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDbuttonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap3Code.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3Code.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDcoverObjects1[k] = gdjs.Chap3Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDcoverObjects1[k] = gdjs.Chap3Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDChat_9595frameObjects1[k] = gdjs.Chap3Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDChat_9595frameObjects1[k] = gdjs.Chap3Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDText1Objects1[k] = gdjs.Chap3Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDText1Objects1[k] = gdjs.Chap3Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDbuttonObjects1[k] = gdjs.Chap3Code.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDbuttonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDbuttonObjects1[k] = gdjs.Chap3Code.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDbuttonObjects1.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap3Code.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap3Code.GDText1Objects1 */
/* Reuse gdjs.Chap3Code.GDbuttonObjects1 */
/* Reuse gdjs.Chap3Code.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap3Code.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chat_frame"), gdjs.Chap3Code.GDChat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap3Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap3Code.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap3Code.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDcoverObjects1[k] = gdjs.Chap3Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDcoverObjects1[k] = gdjs.Chap3Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDChat_9595frameObjects1[k] = gdjs.Chap3Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDChat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDChat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDChat_9595frameObjects1[k] = gdjs.Chap3Code.GDChat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDChat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDText1Objects1[k] = gdjs.Chap3Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDText1Objects1[k] = gdjs.Chap3Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDbuttonObjects1[k] = gdjs.Chap3Code.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap3Code.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap3Code.GDbuttonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap3Code.GDbuttonObjects1[k] = gdjs.Chap3Code.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap3Code.GDbuttonObjects1.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap3Code.GDChat_9595frameObjects1 */
/* Reuse gdjs.Chap3Code.GDText1Objects1 */
/* Reuse gdjs.Chap3Code.GDbuttonObjects1 */
/* Reuse gdjs.Chap3Code.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDChat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDChat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap3Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap3Code.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap3Code.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3Code.mapOfGDgdjs_9546Chap3Code_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maze 02", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.Chap3Code.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap3Code.mapOfGDgdjs_9546Chap3Code_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
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

gdjs.Chap3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap3Code.GDBackgroundObjects1.length = 0;
gdjs.Chap3Code.GDBackgroundObjects2.length = 0;
gdjs.Chap3Code.GDQueenObjects1.length = 0;
gdjs.Chap3Code.GDQueenObjects2.length = 0;
gdjs.Chap3Code.GDFloorObjects1.length = 0;
gdjs.Chap3Code.GDFloorObjects2.length = 0;
gdjs.Chap3Code.GDravenObjects1.length = 0;
gdjs.Chap3Code.GDravenObjects2.length = 0;
gdjs.Chap3Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap3Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap3Code.GDcoverObjects1.length = 0;
gdjs.Chap3Code.GDcoverObjects2.length = 0;
gdjs.Chap3Code.GDChat_9595frameObjects1.length = 0;
gdjs.Chap3Code.GDChat_9595frameObjects2.length = 0;
gdjs.Chap3Code.GDText1Objects1.length = 0;
gdjs.Chap3Code.GDText1Objects2.length = 0;
gdjs.Chap3Code.GDbuttonObjects1.length = 0;
gdjs.Chap3Code.GDbuttonObjects2.length = 0;

gdjs.Chap3Code.eventsList0(runtimeScene);
gdjs.Chap3Code.GDBackgroundObjects1.length = 0;
gdjs.Chap3Code.GDBackgroundObjects2.length = 0;
gdjs.Chap3Code.GDQueenObjects1.length = 0;
gdjs.Chap3Code.GDQueenObjects2.length = 0;
gdjs.Chap3Code.GDFloorObjects1.length = 0;
gdjs.Chap3Code.GDFloorObjects2.length = 0;
gdjs.Chap3Code.GDravenObjects1.length = 0;
gdjs.Chap3Code.GDravenObjects2.length = 0;
gdjs.Chap3Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap3Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap3Code.GDcoverObjects1.length = 0;
gdjs.Chap3Code.GDcoverObjects2.length = 0;
gdjs.Chap3Code.GDChat_9595frameObjects1.length = 0;
gdjs.Chap3Code.GDChat_9595frameObjects2.length = 0;
gdjs.Chap3Code.GDText1Objects1.length = 0;
gdjs.Chap3Code.GDText1Objects2.length = 0;
gdjs.Chap3Code.GDbuttonObjects1.length = 0;
gdjs.Chap3Code.GDbuttonObjects2.length = 0;


return;

}

gdjs['Chap3Code'] = gdjs.Chap3Code;
