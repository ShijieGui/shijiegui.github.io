gdjs.Chap1BCode = {};
gdjs.Chap1BCode.localVariables = [];
gdjs.Chap1BCode.idToCallbackMap = new Map();
gdjs.Chap1BCode.GDBackgroundObjects1= [];
gdjs.Chap1BCode.GDBackgroundObjects2= [];
gdjs.Chap1BCode.GDPriestObjects1= [];
gdjs.Chap1BCode.GDPriestObjects2= [];
gdjs.Chap1BCode.GDravenObjects1= [];
gdjs.Chap1BCode.GDravenObjects2= [];
gdjs.Chap1BCode.GDchat_9595frameObjects1= [];
gdjs.Chap1BCode.GDchat_9595frameObjects2= [];
gdjs.Chap1BCode.GDcoverObjects1= [];
gdjs.Chap1BCode.GDcoverObjects2= [];
gdjs.Chap1BCode.GDText1Objects1= [];
gdjs.Chap1BCode.GDText1Objects2= [];
gdjs.Chap1BCode.GDbuttonObjects1= [];
gdjs.Chap1BCode.GDbuttonObjects2= [];
gdjs.Chap1BCode.GDEndObjects1= [];
gdjs.Chap1BCode.GDEndObjects2= [];
gdjs.Chap1BCode.GDStart_9595AgainObjects1= [];
gdjs.Chap1BCode.GDStart_9595AgainObjects2= [];


gdjs.Chap1BCode.mapOfGDgdjs_9546Chap1BCode_9546GDPriestObjects1Objects = Hashtable.newFrom({"Priest": gdjs.Chap1BCode.GDPriestObjects1});
gdjs.Chap1BCode.mapOfGDgdjs_9546Chap1BCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Chap1BCode.GDbuttonObjects1});
gdjs.Chap1BCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.Chap1BCode.GDEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Again"), gdjs.Chap1BCode.GDStart_9595AgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1BCode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1BCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1BCode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1BCode.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap1BCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDchat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDchat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDbuttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDStart_9595AgainObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDStart_9595AgainObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDEndObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Priest"), gdjs.Chap1BCode.GDPriestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1BCode.mapOfGDgdjs_9546Chap1BCode_9546GDPriestObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1BCode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1BCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1BCode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1BCode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap1BCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDchat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDText1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDbuttonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1BCode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1BCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1BCode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1BCode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDcoverObjects1[k] = gdjs.Chap1BCode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDcoverObjects1[k] = gdjs.Chap1BCode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDchat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDchat_9595frameObjects1[k] = gdjs.Chap1BCode.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDchat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDchat_9595frameObjects1[k] = gdjs.Chap1BCode.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDText1Objects1[k] = gdjs.Chap1BCode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDText1Objects1[k] = gdjs.Chap1BCode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDbuttonObjects1[k] = gdjs.Chap1BCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDbuttonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDbuttonObjects1[k] = gdjs.Chap1BCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDbuttonObjects1.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap1BCode.GDText1Objects1 */
/* Reuse gdjs.Chap1BCode.GDbuttonObjects1 */
/* Reuse gdjs.Chap1BCode.GDchat_9595frameObjects1 */
/* Reuse gdjs.Chap1BCode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap1BCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1BCode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDchat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1BCode.GDchat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1BCode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1BCode.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1BCode.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1BCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1BCode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1BCode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDcoverObjects1[k] = gdjs.Chap1BCode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDcoverObjects1[k] = gdjs.Chap1BCode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDchat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDchat_9595frameObjects1[k] = gdjs.Chap1BCode.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDchat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDchat_9595frameObjects1[k] = gdjs.Chap1BCode.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDText1Objects1[k] = gdjs.Chap1BCode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDText1Objects1[k] = gdjs.Chap1BCode.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDbuttonObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDbuttonObjects1[k] = gdjs.Chap1BCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDbuttonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDbuttonObjects1[k] = gdjs.Chap1BCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDbuttonObjects1.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap1BCode.GDText1Objects1 */
/* Reuse gdjs.Chap1BCode.GDbuttonObjects1 */
/* Reuse gdjs.Chap1BCode.GDchat_9595frameObjects1 */
/* Reuse gdjs.Chap1BCode.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap1BCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDchat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDbuttonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1BCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1BCode.mapOfGDgdjs_9546Chap1BCode_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.Chap1BCode.GDEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("Priest"), gdjs.Chap1BCode.GDPriestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Again"), gdjs.Chap1BCode.GDStart_9595AgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1BCode.GDText1Objects1);
/* Reuse gdjs.Chap1BCode.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1BCode.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1BCode.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap1BCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDchat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDbuttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDPriestObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDPriestObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDEndObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1BCode.GDStart_9595AgainObjects1.length ;i < len;++i) {
    gdjs.Chap1BCode.GDStart_9595AgainObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Again"), gdjs.Chap1BCode.GDStart_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1BCode.GDStart_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.Chap1BCode.GDStart_9595AgainObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Chap1BCode.GDStart_9595AgainObjects1[k] = gdjs.Chap1BCode.GDStart_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.Chap1BCode.GDStart_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap0", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Chap1BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap1BCode.GDBackgroundObjects1.length = 0;
gdjs.Chap1BCode.GDBackgroundObjects2.length = 0;
gdjs.Chap1BCode.GDPriestObjects1.length = 0;
gdjs.Chap1BCode.GDPriestObjects2.length = 0;
gdjs.Chap1BCode.GDravenObjects1.length = 0;
gdjs.Chap1BCode.GDravenObjects2.length = 0;
gdjs.Chap1BCode.GDchat_9595frameObjects1.length = 0;
gdjs.Chap1BCode.GDchat_9595frameObjects2.length = 0;
gdjs.Chap1BCode.GDcoverObjects1.length = 0;
gdjs.Chap1BCode.GDcoverObjects2.length = 0;
gdjs.Chap1BCode.GDText1Objects1.length = 0;
gdjs.Chap1BCode.GDText1Objects2.length = 0;
gdjs.Chap1BCode.GDbuttonObjects1.length = 0;
gdjs.Chap1BCode.GDbuttonObjects2.length = 0;
gdjs.Chap1BCode.GDEndObjects1.length = 0;
gdjs.Chap1BCode.GDEndObjects2.length = 0;
gdjs.Chap1BCode.GDStart_9595AgainObjects1.length = 0;
gdjs.Chap1BCode.GDStart_9595AgainObjects2.length = 0;

gdjs.Chap1BCode.eventsList0(runtimeScene);
gdjs.Chap1BCode.GDBackgroundObjects1.length = 0;
gdjs.Chap1BCode.GDBackgroundObjects2.length = 0;
gdjs.Chap1BCode.GDPriestObjects1.length = 0;
gdjs.Chap1BCode.GDPriestObjects2.length = 0;
gdjs.Chap1BCode.GDravenObjects1.length = 0;
gdjs.Chap1BCode.GDravenObjects2.length = 0;
gdjs.Chap1BCode.GDchat_9595frameObjects1.length = 0;
gdjs.Chap1BCode.GDchat_9595frameObjects2.length = 0;
gdjs.Chap1BCode.GDcoverObjects1.length = 0;
gdjs.Chap1BCode.GDcoverObjects2.length = 0;
gdjs.Chap1BCode.GDText1Objects1.length = 0;
gdjs.Chap1BCode.GDText1Objects2.length = 0;
gdjs.Chap1BCode.GDbuttonObjects1.length = 0;
gdjs.Chap1BCode.GDbuttonObjects2.length = 0;
gdjs.Chap1BCode.GDEndObjects1.length = 0;
gdjs.Chap1BCode.GDEndObjects2.length = 0;
gdjs.Chap1BCode.GDStart_9595AgainObjects1.length = 0;
gdjs.Chap1BCode.GDStart_9595AgainObjects2.length = 0;


return;

}

gdjs['Chap1BCode'] = gdjs.Chap1BCode;
