gdjs.Chap2Code = {};
gdjs.Chap2Code.localVariables = [];
gdjs.Chap2Code.idToCallbackMap = new Map();
gdjs.Chap2Code.GDBackgroundObjects1= [];
gdjs.Chap2Code.GDBackgroundObjects2= [];
gdjs.Chap2Code.GDNPCObjects1= [];
gdjs.Chap2Code.GDNPCObjects2= [];
gdjs.Chap2Code.GDFloorObjects1= [];
gdjs.Chap2Code.GDFloorObjects2= [];
gdjs.Chap2Code.GDravenObjects1= [];
gdjs.Chap2Code.GDravenObjects2= [];
gdjs.Chap2Code.GDRight_9595ArrowObjects1= [];
gdjs.Chap2Code.GDRight_9595ArrowObjects2= [];
gdjs.Chap2Code.GDLeft_9595ArrowObjects1= [];
gdjs.Chap2Code.GDLeft_9595ArrowObjects2= [];
gdjs.Chap2Code.GDText1Objects1= [];
gdjs.Chap2Code.GDText1Objects2= [];
gdjs.Chap2Code.GDText2Objects1= [];
gdjs.Chap2Code.GDText2Objects2= [];
gdjs.Chap2Code.GDText3Objects1= [];
gdjs.Chap2Code.GDText3Objects2= [];
gdjs.Chap2Code.GDText4Objects1= [];
gdjs.Chap2Code.GDText4Objects2= [];
gdjs.Chap2Code.GDText5Objects1= [];
gdjs.Chap2Code.GDText5Objects2= [];
gdjs.Chap2Code.GDText6Objects1= [];
gdjs.Chap2Code.GDText6Objects2= [];
gdjs.Chap2Code.GDNPC1Objects1= [];
gdjs.Chap2Code.GDNPC1Objects2= [];
gdjs.Chap2Code.GDNPC2Objects1= [];
gdjs.Chap2Code.GDNPC2Objects2= [];
gdjs.Chap2Code.GDNPC3Objects1= [];
gdjs.Chap2Code.GDNPC3Objects2= [];
gdjs.Chap2Code.GDNPC4Objects1= [];
gdjs.Chap2Code.GDNPC4Objects2= [];
gdjs.Chap2Code.GDNPC5Objects1= [];
gdjs.Chap2Code.GDNPC5Objects2= [];
gdjs.Chap2Code.GDNPC6Objects1= [];
gdjs.Chap2Code.GDNPC6Objects2= [];


gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC1Objects1Objects = Hashtable.newFrom({"NPC1": gdjs.Chap2Code.GDNPC1Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDText1Objects1Objects = Hashtable.newFrom({"Text1": gdjs.Chap2Code.GDText1Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC2Objects1Objects = Hashtable.newFrom({"NPC2": gdjs.Chap2Code.GDNPC2Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC3Objects1Objects = Hashtable.newFrom({"NPC3": gdjs.Chap2Code.GDNPC3Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC4Objects1Objects = Hashtable.newFrom({"NPC4": gdjs.Chap2Code.GDNPC4Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC5Objects1Objects = Hashtable.newFrom({"NPC5": gdjs.Chap2Code.GDNPC5Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDText5Objects1Objects = Hashtable.newFrom({"Text5": gdjs.Chap2Code.GDText5Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC6Objects1Objects = Hashtable.newFrom({"NPC6": gdjs.Chap2Code.GDNPC6Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDText6Objects1Objects = Hashtable.newFrom({"Text6": gdjs.Chap2Code.GDText6Objects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDBackgroundObjects1Objects = Hashtable.newFrom({"Background": gdjs.Chap2Code.GDBackgroundObjects1});
gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDRight_95959595ArrowObjects1Objects = Hashtable.newFrom({"Right_Arrow": gdjs.Chap2Code.GDRight_9595ArrowObjects1});
gdjs.Chap2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap2Code.GDRight_9595ArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap2Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap2Code.GDText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap2Code.GDText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text4"), gdjs.Chap2Code.GDText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text5"), gdjs.Chap2Code.GDText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text6"), gdjs.Chap2Code.GDText6Objects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "554158__zhr__music-box.mp3", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText4Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText4Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDRight_9595ArrowObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.Chap2Code.GDNPC1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap2Code.GDText1Objects1);
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Animation").setAnimationName("0");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap2Code.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText1Objects1[k] = gdjs.Chap2Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText1Objects1[k] = gdjs.Chap2Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText1Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText1Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap2Code.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText1Objects1[k] = gdjs.Chap2Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText1Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText1Objects1[k] = gdjs.Chap2Code.GDText1Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText1Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText1Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap2Code.GDText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDText1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText1Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.Chap2Code.GDNPC2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.Chap2Code.GDText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap2Code.GDText2Objects1);
{for(var i = 0, len = gdjs.Chap2Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText1Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText1Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap2Code.GDText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText2Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText2Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText2Objects1[k] = gdjs.Chap2Code.GDText2Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText2Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText2Objects1[k] = gdjs.Chap2Code.GDText2Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText2Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText2Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap2Code.GDText2Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap2Code.GDText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText2Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText2Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText2Objects1[k] = gdjs.Chap2Code.GDText2Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText2Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText2Objects1[k] = gdjs.Chap2Code.GDText2Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText2Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC3"), gdjs.Chap2Code.GDNPC3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text2"), gdjs.Chap2Code.GDText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap2Code.GDText3Objects1);
{for(var i = 0, len = gdjs.Chap2Code.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText2Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap2Code.GDText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText3Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText3Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText3Objects1[k] = gdjs.Chap2Code.GDText3Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText3Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText3Objects1[k] = gdjs.Chap2Code.GDText3Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText3Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText3Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap2Code.GDText3Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap2Code.GDText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText3Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText3Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText3Objects1[k] = gdjs.Chap2Code.GDText3Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText3Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText3Objects1[k] = gdjs.Chap2Code.GDText3Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText3Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC4"), gdjs.Chap2Code.GDNPC4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text3"), gdjs.Chap2Code.GDText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text4"), gdjs.Chap2Code.GDText4Objects1);
{for(var i = 0, len = gdjs.Chap2Code.GDText4Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText3Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText3Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text4"), gdjs.Chap2Code.GDText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText4Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText4Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText4Objects1[k] = gdjs.Chap2Code.GDText4Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText4Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText4Objects1[k] = gdjs.Chap2Code.GDText4Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText4Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText4Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText4Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText4Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap2Code.GDText4Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text4"), gdjs.Chap2Code.GDText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText4Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText4Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText4Objects1[k] = gdjs.Chap2Code.GDText4Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText4Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText4Objects1[k] = gdjs.Chap2Code.GDText4Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText4Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText4Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText4Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText4Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC5"), gdjs.Chap2Code.GDNPC5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text4"), gdjs.Chap2Code.GDText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text5"), gdjs.Chap2Code.GDText5Objects1);
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Animation").setAnimationName("0");
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText4Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText4Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text5"), gdjs.Chap2Code.GDText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText5Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText5Objects1[k] = gdjs.Chap2Code.GDText5Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText5Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText5Objects1[k] = gdjs.Chap2Code.GDText5Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText5Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText5Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text5"), gdjs.Chap2Code.GDText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText5Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText5Objects1[k] = gdjs.Chap2Code.GDText5Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText5Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText5Objects1[k] = gdjs.Chap2Code.GDText5Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText5Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText5Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text5"), gdjs.Chap2Code.GDText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDText5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText5Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC6"), gdjs.Chap2Code.GDNPC6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDNPC6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text5"), gdjs.Chap2Code.GDText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text6"), gdjs.Chap2Code.GDText6Objects1);
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Animation").setAnimationName("0");
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDText5Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText5Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text6"), gdjs.Chap2Code.GDText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText6Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Opacity").getOpacity() > 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText6Objects1[k] = gdjs.Chap2Code.GDText6Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText6Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText6Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText6Objects1[k] = gdjs.Chap2Code.GDText6Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText6Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText6Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text6"), gdjs.Chap2Code.GDText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText6Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText6Objects1[k] = gdjs.Chap2Code.GDText6Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText6Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText6Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText6Objects1[k] = gdjs.Chap2Code.GDText6Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText6Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText6Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Opacity").getOpacity() + (10));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text6"), gdjs.Chap2Code.GDText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Chap2Code.GDText6Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Chap2Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text6"), gdjs.Chap2Code.GDText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Chap2Code.GDText6Objects1.length;i<l;++i) {
    if ( gdjs.Chap2Code.GDText6Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Chap2Code.GDText6Objects1[k] = gdjs.Chap2Code.GDText6Objects1[i];
        ++k;
    }
}
gdjs.Chap2Code.GDText6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDBackgroundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap2Code.GDRight_9595ArrowObjects1);
/* Reuse gdjs.Chap2Code.GDText6Objects1 */
{for(var i = 0, len = gdjs.Chap2Code.GDText6Objects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDText6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Chap2Code.GDRight_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.Chap2Code.GDRight_9595ArrowObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_Arrow"), gdjs.Chap2Code.GDRight_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Chap2Code.mapOfGDgdjs_9546Chap2Code_9546GDRight_95959595ArrowObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chap3", false);
}
}

}


};

gdjs.Chap2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chap2Code.GDBackgroundObjects1.length = 0;
gdjs.Chap2Code.GDBackgroundObjects2.length = 0;
gdjs.Chap2Code.GDNPCObjects1.length = 0;
gdjs.Chap2Code.GDNPCObjects2.length = 0;
gdjs.Chap2Code.GDFloorObjects1.length = 0;
gdjs.Chap2Code.GDFloorObjects2.length = 0;
gdjs.Chap2Code.GDravenObjects1.length = 0;
gdjs.Chap2Code.GDravenObjects2.length = 0;
gdjs.Chap2Code.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap2Code.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap2Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap2Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap2Code.GDText1Objects1.length = 0;
gdjs.Chap2Code.GDText1Objects2.length = 0;
gdjs.Chap2Code.GDText2Objects1.length = 0;
gdjs.Chap2Code.GDText2Objects2.length = 0;
gdjs.Chap2Code.GDText3Objects1.length = 0;
gdjs.Chap2Code.GDText3Objects2.length = 0;
gdjs.Chap2Code.GDText4Objects1.length = 0;
gdjs.Chap2Code.GDText4Objects2.length = 0;
gdjs.Chap2Code.GDText5Objects1.length = 0;
gdjs.Chap2Code.GDText5Objects2.length = 0;
gdjs.Chap2Code.GDText6Objects1.length = 0;
gdjs.Chap2Code.GDText6Objects2.length = 0;
gdjs.Chap2Code.GDNPC1Objects1.length = 0;
gdjs.Chap2Code.GDNPC1Objects2.length = 0;
gdjs.Chap2Code.GDNPC2Objects1.length = 0;
gdjs.Chap2Code.GDNPC2Objects2.length = 0;
gdjs.Chap2Code.GDNPC3Objects1.length = 0;
gdjs.Chap2Code.GDNPC3Objects2.length = 0;
gdjs.Chap2Code.GDNPC4Objects1.length = 0;
gdjs.Chap2Code.GDNPC4Objects2.length = 0;
gdjs.Chap2Code.GDNPC5Objects1.length = 0;
gdjs.Chap2Code.GDNPC5Objects2.length = 0;
gdjs.Chap2Code.GDNPC6Objects1.length = 0;
gdjs.Chap2Code.GDNPC6Objects2.length = 0;

gdjs.Chap2Code.eventsList0(runtimeScene);
gdjs.Chap2Code.GDBackgroundObjects1.length = 0;
gdjs.Chap2Code.GDBackgroundObjects2.length = 0;
gdjs.Chap2Code.GDNPCObjects1.length = 0;
gdjs.Chap2Code.GDNPCObjects2.length = 0;
gdjs.Chap2Code.GDFloorObjects1.length = 0;
gdjs.Chap2Code.GDFloorObjects2.length = 0;
gdjs.Chap2Code.GDravenObjects1.length = 0;
gdjs.Chap2Code.GDravenObjects2.length = 0;
gdjs.Chap2Code.GDRight_9595ArrowObjects1.length = 0;
gdjs.Chap2Code.GDRight_9595ArrowObjects2.length = 0;
gdjs.Chap2Code.GDLeft_9595ArrowObjects1.length = 0;
gdjs.Chap2Code.GDLeft_9595ArrowObjects2.length = 0;
gdjs.Chap2Code.GDText1Objects1.length = 0;
gdjs.Chap2Code.GDText1Objects2.length = 0;
gdjs.Chap2Code.GDText2Objects1.length = 0;
gdjs.Chap2Code.GDText2Objects2.length = 0;
gdjs.Chap2Code.GDText3Objects1.length = 0;
gdjs.Chap2Code.GDText3Objects2.length = 0;
gdjs.Chap2Code.GDText4Objects1.length = 0;
gdjs.Chap2Code.GDText4Objects2.length = 0;
gdjs.Chap2Code.GDText5Objects1.length = 0;
gdjs.Chap2Code.GDText5Objects2.length = 0;
gdjs.Chap2Code.GDText6Objects1.length = 0;
gdjs.Chap2Code.GDText6Objects2.length = 0;
gdjs.Chap2Code.GDNPC1Objects1.length = 0;
gdjs.Chap2Code.GDNPC1Objects2.length = 0;
gdjs.Chap2Code.GDNPC2Objects1.length = 0;
gdjs.Chap2Code.GDNPC2Objects2.length = 0;
gdjs.Chap2Code.GDNPC3Objects1.length = 0;
gdjs.Chap2Code.GDNPC3Objects2.length = 0;
gdjs.Chap2Code.GDNPC4Objects1.length = 0;
gdjs.Chap2Code.GDNPC4Objects2.length = 0;
gdjs.Chap2Code.GDNPC5Objects1.length = 0;
gdjs.Chap2Code.GDNPC5Objects2.length = 0;
gdjs.Chap2Code.GDNPC6Objects1.length = 0;
gdjs.Chap2Code.GDNPC6Objects2.length = 0;


return;

}

gdjs['Chap2Code'] = gdjs.Chap2Code;
