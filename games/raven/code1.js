gdjs.Chap1Code = {};
gdjs.Chap1Code.localVariables = [];
gdjs.Chap1Code.idToCallbackMap = new Map();
gdjs.Chap1Code.GDBackgroundObjects1= [];
gdjs.Chap1Code.GDBackgroundObjects2= [];
gdjs.Chap1Code.GDPriestObjects1= [];
gdjs.Chap1Code.GDPriestObjects2= [];
gdjs.Chap1Code.GDravenObjects1= [];
gdjs.Chap1Code.GDravenObjects2= [];
gdjs.Chap1Code.GDLeft_9595ArrowObjects1= [];
gdjs.Chap1Code.GDLeft_9595ArrowObjects2= [];
gdjs.Chap1Code.GDchat_9595frameObjects1= [];
gdjs.Chap1Code.GDchat_9595frameObjects2= [];
gdjs.Chap1Code.GDcoverObjects1= [];
gdjs.Chap1Code.GDcoverObjects2= [];
gdjs.Chap1Code.GDText1Objects1= [];
gdjs.Chap1Code.GDText1Objects2= [];
gdjs.Chap1Code.GDText2Objects1= [];
gdjs.Chap1Code.GDText2Objects2= [];
gdjs.Chap1Code.GDbuttonObjects1= [];
gdjs.Chap1Code.GDbuttonObjects2= [];
gdjs.Chap1Code.GDNewTextObjects1= [];
gdjs.Chap1Code.GDNewTextObjects2= [];


gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDPriestObjects1Objects = Hashtable.newFrom({"Priest": gdjs.Chap1Code.GDPriestObjects1});
gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDText1Objects1Objects = Hashtable.newFrom({"Text1": gdjs.Chap1Code.GDText1Objects1});
gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Chap1Code.GDbuttonObjects1});
gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.Chap1Code.GDLeft_9595ArrowObjects1});
gdjs.Chap1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap1Code.GDText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1Code.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1Code.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1Code.GDcoverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDchat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDcoverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDchat_9595frameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDbuttonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Priest"), gdjs.Chap1Code.GDPriestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDPriestObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Chap1Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1Code.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1Code.GDcoverObjects1);
{for(var i = 0, len = gdjs.Chap1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDcoverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDchat_9595frameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDNewTextObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1Code.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1Code.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDcoverObjects1[k] = gdjs.Chap1Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDcoverObjects1[k] = gdjs.Chap1Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDchat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDchat_9595frameObjects1[k] = gdjs.Chap1Code.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDchat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDchat_9595frameObjects1[k] = gdjs.Chap1Code.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDText1Objects1[k] = gdjs.Chap1Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDText1Objects1[k] = gdjs.Chap1Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap1Code.GDText1Objects1 */
/* Reuse gdjs.Chap1Code.GDchat_9595frameObjects1 */
/* Reuse gdjs.Chap1Code.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDchat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1Code.GDchat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap1Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("chat_frame"), gdjs.Chap1Code.GDchat_9595frameObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.Chap1Code.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDcoverObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDcoverObjects1[k] = gdjs.Chap1Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDcoverObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDcoverObjects1[k] = gdjs.Chap1Code.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDchat_9595frameObjects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDchat_9595frameObjects1[k] = gdjs.Chap1Code.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDchat_9595frameObjects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDchat_9595frameObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDchat_9595frameObjects1[k] = gdjs.Chap1Code.GDchat_9595frameObjects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDchat_9595frameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDText1Objects1[k] = gdjs.Chap1Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap1Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap1Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap1Code.GDText1Objects1[k] = gdjs.Chap1Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap1Code.GDText1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap1Code.GDText1Objects1 */
/* Reuse gdjs.Chap1Code.GDchat_9595frameObjects1 */
/* Reuse gdjs.Chap1Code.GDcoverObjects1 */
{for(var i = 0, len = gdjs.Chap1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDchat_9595frameObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDchat_9595frameObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Chap1Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap1Code.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDText1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap1Code.GDText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1Code.GDbuttonObjects1);
{for(var i = 0, len = gdjs.Chap1Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDText2Objects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.Chap1Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Chap1Code.GDbuttonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Chap1Code.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maze 01", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.Chap1Code.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap1Code.mapOfGDgdjs_9546Chap1Code_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
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

gdjs.Chap1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap1Code.GDBackgroundObjects1.length = 0;
gdjs.Chap1Code.GDBackgroundObjects2.length = 0;
gdjs.Chap1Code.GDPriestObjects1.length = 0;
gdjs.Chap1Code.GDPriestObjects2.length = 0;
gdjs.Chap1Code.GDravenObjects1.length = 0;
gdjs.Chap1Code.GDravenObjects2.length = 0;
gdjs.Chap1Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap1Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap1Code.GDchat_9595frameObjects1.length = 0;
gdjs.Chap1Code.GDchat_9595frameObjects2.length = 0;
gdjs.Chap1Code.GDcoverObjects1.length = 0;
gdjs.Chap1Code.GDcoverObjects2.length = 0;
gdjs.Chap1Code.GDText1Objects1.length = 0;
gdjs.Chap1Code.GDText1Objects2.length = 0;
gdjs.Chap1Code.GDText2Objects1.length = 0;
gdjs.Chap1Code.GDText2Objects2.length = 0;
gdjs.Chap1Code.GDbuttonObjects1.length = 0;
gdjs.Chap1Code.GDbuttonObjects2.length = 0;
gdjs.Chap1Code.GDNewTextObjects1.length = 0;
gdjs.Chap1Code.GDNewTextObjects2.length = 0;

gdjs.Chap1Code.eventsList0(runtimeScene);
gdjs.Chap1Code.GDBackgroundObjects1.length = 0;
gdjs.Chap1Code.GDBackgroundObjects2.length = 0;
gdjs.Chap1Code.GDPriestObjects1.length = 0;
gdjs.Chap1Code.GDPriestObjects2.length = 0;
gdjs.Chap1Code.GDravenObjects1.length = 0;
gdjs.Chap1Code.GDravenObjects2.length = 0;
gdjs.Chap1Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap1Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap1Code.GDchat_9595frameObjects1.length = 0;
gdjs.Chap1Code.GDchat_9595frameObjects2.length = 0;
gdjs.Chap1Code.GDcoverObjects1.length = 0;
gdjs.Chap1Code.GDcoverObjects2.length = 0;
gdjs.Chap1Code.GDText1Objects1.length = 0;
gdjs.Chap1Code.GDText1Objects2.length = 0;
gdjs.Chap1Code.GDText2Objects1.length = 0;
gdjs.Chap1Code.GDText2Objects2.length = 0;
gdjs.Chap1Code.GDbuttonObjects1.length = 0;
gdjs.Chap1Code.GDbuttonObjects2.length = 0;
gdjs.Chap1Code.GDNewTextObjects1.length = 0;
gdjs.Chap1Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['Chap1Code'] = gdjs.Chap1Code;
