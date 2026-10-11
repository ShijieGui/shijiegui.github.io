gdjs.chapter_322aCode = {};
gdjs.chapter_322aCode.localVariables = [];
gdjs.chapter_322aCode.idToCallbackMap = new Map();
gdjs.chapter_322aCode.GDbackgroundObjects1= [];
gdjs.chapter_322aCode.GDbackgroundObjects2= [];
gdjs.chapter_322aCode.GDhookObjects1= [];
gdjs.chapter_322aCode.GDhookObjects2= [];
gdjs.chapter_322aCode.GDboxObjects1= [];
gdjs.chapter_322aCode.GDboxObjects2= [];
gdjs.chapter_322aCode.GDbox_9595closeObjects1= [];
gdjs.chapter_322aCode.GDbox_9595closeObjects2= [];
gdjs.chapter_322aCode.GDstarObjects1= [];
gdjs.chapter_322aCode.GDstarObjects2= [];
gdjs.chapter_322aCode.GDstar2Objects1= [];
gdjs.chapter_322aCode.GDstar2Objects2= [];
gdjs.chapter_322aCode.GD_959501Objects1= [];
gdjs.chapter_322aCode.GD_959501Objects2= [];
gdjs.chapter_322aCode.GD_959502Objects1= [];
gdjs.chapter_322aCode.GD_959502Objects2= [];
gdjs.chapter_322aCode.GD_959503Objects1= [];
gdjs.chapter_322aCode.GD_959503Objects2= [];
gdjs.chapter_322aCode.GD_959504Objects1= [];
gdjs.chapter_322aCode.GD_959504Objects2= [];
gdjs.chapter_322aCode.GD_959505Objects1= [];
gdjs.chapter_322aCode.GD_959505Objects2= [];
gdjs.chapter_322aCode.GDaObjects1= [];
gdjs.chapter_322aCode.GDaObjects2= [];
gdjs.chapter_322aCode.GDbObjects1= [];
gdjs.chapter_322aCode.GDbObjects2= [];
gdjs.chapter_322aCode.GDcObjects1= [];
gdjs.chapter_322aCode.GDcObjects2= [];
gdjs.chapter_322aCode.GDdObjects1= [];
gdjs.chapter_322aCode.GDdObjects2= [];
gdjs.chapter_322aCode.GDeObjects1= [];
gdjs.chapter_322aCode.GDeObjects2= [];
gdjs.chapter_322aCode.GDbuttonObjects1= [];
gdjs.chapter_322aCode.GDbuttonObjects2= [];


gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.chapter_322aCode.GDbackgroundObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDaObjects1Objects = Hashtable.newFrom({"a": gdjs.chapter_322aCode.GDaObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959501Objects1Objects = Hashtable.newFrom({"_01": gdjs.chapter_322aCode.GD_959501Objects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDbObjects1Objects = Hashtable.newFrom({"b": gdjs.chapter_322aCode.GDbObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959502Objects1Objects = Hashtable.newFrom({"_02": gdjs.chapter_322aCode.GD_959502Objects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDcObjects1Objects = Hashtable.newFrom({"c": gdjs.chapter_322aCode.GDcObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959503Objects1Objects = Hashtable.newFrom({"_03": gdjs.chapter_322aCode.GD_959503Objects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDdObjects1Objects = Hashtable.newFrom({"d": gdjs.chapter_322aCode.GDdObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959504Objects1Objects = Hashtable.newFrom({"_04": gdjs.chapter_322aCode.GD_959504Objects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDeObjects1Objects = Hashtable.newFrom({"e": gdjs.chapter_322aCode.GDeObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959505Objects1Objects = Hashtable.newFrom({"_05": gdjs.chapter_322aCode.GD_959505Objects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.chapter_322aCode.GDstarObjects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDstar2Objects1Objects = Hashtable.newFrom({"star2": gdjs.chapter_322aCode.GDstar2Objects1});
gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.chapter_322aCode.GDbuttonObjects1});
gdjs.chapter_322aCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("box_close"), gdjs.chapter_322aCode.GDbox_9595closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.chapter_322aCode.GDstarObjects1);
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDbox_9595closeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbox_9595closeObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDbox_9595closeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbox_9595closeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14005220);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.chapter_322aCode.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDbackgroundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14006188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_01"), gdjs.chapter_322aCode.GD_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("a"), gdjs.chapter_322aCode.GDaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDaObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDaObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDaObjects1[k] = gdjs.chapter_322aCode.GDaObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDaObjects1Objects, gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959501Objects1Objects, 10, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDaObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDaObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDaObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDaObjects1[k] = gdjs.chapter_322aCode.GDaObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDaObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322aCode.GD_959501Objects1 */
/* Reuse gdjs.chapter_322aCode.GDaObjects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDaObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDaObjects1[i].putAroundObject((gdjs.chapter_322aCode.GD_959501Objects1.length !== 0 ? gdjs.chapter_322aCode.GD_959501Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDaObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDaObjects1[i].activateBehavior("可拖动", false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDaObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDaObjects1[i].returnVariable(gdjs.chapter_322aCode.GDaObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.chapter_322aCode.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("b"), gdjs.chapter_322aCode.GDbObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDbObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDbObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDbObjects1[k] = gdjs.chapter_322aCode.GDbObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDbObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDbObjects1Objects, gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959502Objects1Objects, 10, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDbObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDbObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDbObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDbObjects1[k] = gdjs.chapter_322aCode.GDbObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDbObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322aCode.GD_959502Objects1 */
/* Reuse gdjs.chapter_322aCode.GDbObjects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDbObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbObjects1[i].putAroundObject((gdjs.chapter_322aCode.GD_959502Objects1.length !== 0 ? gdjs.chapter_322aCode.GD_959502Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDbObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbObjects1[i].activateBehavior("可拖动", false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDbObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbObjects1[i].returnVariable(gdjs.chapter_322aCode.GDbObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_03"), gdjs.chapter_322aCode.GD_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("c"), gdjs.chapter_322aCode.GDcObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDcObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDcObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDcObjects1[k] = gdjs.chapter_322aCode.GDcObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDcObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDcObjects1Objects, gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959503Objects1Objects, 10, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDcObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDcObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDcObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDcObjects1[k] = gdjs.chapter_322aCode.GDcObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDcObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322aCode.GD_959503Objects1 */
/* Reuse gdjs.chapter_322aCode.GDcObjects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDcObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDcObjects1[i].putAroundObject((gdjs.chapter_322aCode.GD_959503Objects1.length !== 0 ? gdjs.chapter_322aCode.GD_959503Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDcObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDcObjects1[i].activateBehavior("可拖动", false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDcObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDcObjects1[i].returnVariable(gdjs.chapter_322aCode.GDcObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_04"), gdjs.chapter_322aCode.GD_959504Objects1);
gdjs.copyArray(runtimeScene.getObjects("d"), gdjs.chapter_322aCode.GDdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDdObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDdObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDdObjects1[k] = gdjs.chapter_322aCode.GDdObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDdObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDdObjects1Objects, gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959504Objects1Objects, 10, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDdObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDdObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDdObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDdObjects1[k] = gdjs.chapter_322aCode.GDdObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDdObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322aCode.GD_959504Objects1 */
/* Reuse gdjs.chapter_322aCode.GDdObjects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDdObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDdObjects1[i].putAroundObject((gdjs.chapter_322aCode.GD_959504Objects1.length !== 0 ? gdjs.chapter_322aCode.GD_959504Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDdObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDdObjects1[i].activateBehavior("可拖动", false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDdObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDdObjects1[i].returnVariable(gdjs.chapter_322aCode.GDdObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_05"), gdjs.chapter_322aCode.GD_959505Objects1);
gdjs.copyArray(runtimeScene.getObjects("e"), gdjs.chapter_322aCode.GDeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDeObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDeObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDeObjects1[k] = gdjs.chapter_322aCode.GDeObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDeObjects1Objects, gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GD_9595959505Objects1Objects, 10, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDeObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDeObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDeObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDeObjects1[k] = gdjs.chapter_322aCode.GDeObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDeObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322aCode.GD_959505Objects1 */
/* Reuse gdjs.chapter_322aCode.GDeObjects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDeObjects1[i].putAroundObject((gdjs.chapter_322aCode.GD_959505Objects1.length !== 0 ? gdjs.chapter_322aCode.GD_959505Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDeObjects1[i].activateBehavior("可拖动", false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDeObjects1[i].returnVariable(gdjs.chapter_322aCode.GDeObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("a"), gdjs.chapter_322aCode.GDaObjects1);
gdjs.copyArray(runtimeScene.getObjects("b"), gdjs.chapter_322aCode.GDbObjects1);
gdjs.copyArray(runtimeScene.getObjects("c"), gdjs.chapter_322aCode.GDcObjects1);
gdjs.copyArray(runtimeScene.getObjects("d"), gdjs.chapter_322aCode.GDdObjects1);
gdjs.copyArray(runtimeScene.getObjects("e"), gdjs.chapter_322aCode.GDeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDaObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDaObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDaObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDaObjects1[k] = gdjs.chapter_322aCode.GDaObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDbObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDbObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDbObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDbObjects1[k] = gdjs.chapter_322aCode.GDbObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDbObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDcObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDcObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDcObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDcObjects1[k] = gdjs.chapter_322aCode.GDcObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDcObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDdObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDdObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDdObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDdObjects1[k] = gdjs.chapter_322aCode.GDdObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDdObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDeObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDeObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDeObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDeObjects1[k] = gdjs.chapter_322aCode.GDeObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDeObjects1.length = k;
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("box"), gdjs.chapter_322aCode.GDboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("box_close"), gdjs.chapter_322aCode.GDbox_9595closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.chapter_322aCode.GDstarObjects1);
{for(var i = 0, len = gdjs.chapter_322aCode.GDbox_9595closeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbox_9595closeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDbox_9595closeObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDbox_9595closeObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDboxObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDboxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade_in", 255, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.chapter_322aCode.GDstarObjects1);
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.chapter_322aCode.GDstar2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDstarObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDstarObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDstarObjects1[k] = gdjs.chapter_322aCode.GDstarObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDstarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDstarObjects1Objects, gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDstar2Objects1Objects, 30, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDstarObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDstarObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDstarObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDstarObjects1[k] = gdjs.chapter_322aCode.GDstarObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDstarObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.chapter_322aCode.GDstarObjects1 */
/* Reuse gdjs.chapter_322aCode.GDstar2Objects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].putAroundObject((gdjs.chapter_322aCode.GDstar2Objects1.length !== 0 ? gdjs.chapter_322aCode.GDstar2Objects1[0] : null), 0, 0);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].activateBehavior("可拖动", false);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].returnVariable(gdjs.chapter_322aCode.GDstarObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.chapter_322aCode.GDstarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chapter_322aCode.GDstarObjects1.length;i<l;++i) {
    if ( gdjs.chapter_322aCode.GDstarObjects1[i].getVariableBoolean(gdjs.chapter_322aCode.GDstarObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.chapter_322aCode.GDstarObjects1[k] = gdjs.chapter_322aCode.GDstarObjects1[i];
        ++k;
    }
}
gdjs.chapter_322aCode.GDstarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.chapter_322aCode.GDhookObjects1);
/* Reuse gdjs.chapter_322aCode.GDstarObjects1 */
{for(var i = 0, len = gdjs.chapter_322aCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDstarObjects1[i].getBehavior("Tween").addObjectPositionTween2("fade_in", (gdjs.chapter_322aCode.GDstarObjects1[i].getPointX("")), -1000, "linear", 3, true);
}
}
{for(var i = 0, len = gdjs.chapter_322aCode.GDhookObjects1.length ;i < len;++i) {
    gdjs.chapter_322aCode.GDhookObjects1[i].getBehavior("Tween").addObjectPositionTween2("fade_in", (( gdjs.chapter_322aCode.GDstarObjects1.length === 0 ) ? 0 :gdjs.chapter_322aCode.GDstarObjects1[0].getPointX("")), -1000, "linear", 2.5, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.chapter_322aCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chapter_322aCode.mapOfGDgdjs_9546chapter_9595322aCode_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "hall o2", false);
}
}

}


};

gdjs.chapter_322aCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chapter_322aCode.GDbackgroundObjects1.length = 0;
gdjs.chapter_322aCode.GDbackgroundObjects2.length = 0;
gdjs.chapter_322aCode.GDhookObjects1.length = 0;
gdjs.chapter_322aCode.GDhookObjects2.length = 0;
gdjs.chapter_322aCode.GDboxObjects1.length = 0;
gdjs.chapter_322aCode.GDboxObjects2.length = 0;
gdjs.chapter_322aCode.GDbox_9595closeObjects1.length = 0;
gdjs.chapter_322aCode.GDbox_9595closeObjects2.length = 0;
gdjs.chapter_322aCode.GDstarObjects1.length = 0;
gdjs.chapter_322aCode.GDstarObjects2.length = 0;
gdjs.chapter_322aCode.GDstar2Objects1.length = 0;
gdjs.chapter_322aCode.GDstar2Objects2.length = 0;
gdjs.chapter_322aCode.GD_959501Objects1.length = 0;
gdjs.chapter_322aCode.GD_959501Objects2.length = 0;
gdjs.chapter_322aCode.GD_959502Objects1.length = 0;
gdjs.chapter_322aCode.GD_959502Objects2.length = 0;
gdjs.chapter_322aCode.GD_959503Objects1.length = 0;
gdjs.chapter_322aCode.GD_959503Objects2.length = 0;
gdjs.chapter_322aCode.GD_959504Objects1.length = 0;
gdjs.chapter_322aCode.GD_959504Objects2.length = 0;
gdjs.chapter_322aCode.GD_959505Objects1.length = 0;
gdjs.chapter_322aCode.GD_959505Objects2.length = 0;
gdjs.chapter_322aCode.GDaObjects1.length = 0;
gdjs.chapter_322aCode.GDaObjects2.length = 0;
gdjs.chapter_322aCode.GDbObjects1.length = 0;
gdjs.chapter_322aCode.GDbObjects2.length = 0;
gdjs.chapter_322aCode.GDcObjects1.length = 0;
gdjs.chapter_322aCode.GDcObjects2.length = 0;
gdjs.chapter_322aCode.GDdObjects1.length = 0;
gdjs.chapter_322aCode.GDdObjects2.length = 0;
gdjs.chapter_322aCode.GDeObjects1.length = 0;
gdjs.chapter_322aCode.GDeObjects2.length = 0;
gdjs.chapter_322aCode.GDbuttonObjects1.length = 0;
gdjs.chapter_322aCode.GDbuttonObjects2.length = 0;

gdjs.chapter_322aCode.eventsList0(runtimeScene);
gdjs.chapter_322aCode.GDbackgroundObjects1.length = 0;
gdjs.chapter_322aCode.GDbackgroundObjects2.length = 0;
gdjs.chapter_322aCode.GDhookObjects1.length = 0;
gdjs.chapter_322aCode.GDhookObjects2.length = 0;
gdjs.chapter_322aCode.GDboxObjects1.length = 0;
gdjs.chapter_322aCode.GDboxObjects2.length = 0;
gdjs.chapter_322aCode.GDbox_9595closeObjects1.length = 0;
gdjs.chapter_322aCode.GDbox_9595closeObjects2.length = 0;
gdjs.chapter_322aCode.GDstarObjects1.length = 0;
gdjs.chapter_322aCode.GDstarObjects2.length = 0;
gdjs.chapter_322aCode.GDstar2Objects1.length = 0;
gdjs.chapter_322aCode.GDstar2Objects2.length = 0;
gdjs.chapter_322aCode.GD_959501Objects1.length = 0;
gdjs.chapter_322aCode.GD_959501Objects2.length = 0;
gdjs.chapter_322aCode.GD_959502Objects1.length = 0;
gdjs.chapter_322aCode.GD_959502Objects2.length = 0;
gdjs.chapter_322aCode.GD_959503Objects1.length = 0;
gdjs.chapter_322aCode.GD_959503Objects2.length = 0;
gdjs.chapter_322aCode.GD_959504Objects1.length = 0;
gdjs.chapter_322aCode.GD_959504Objects2.length = 0;
gdjs.chapter_322aCode.GD_959505Objects1.length = 0;
gdjs.chapter_322aCode.GD_959505Objects2.length = 0;
gdjs.chapter_322aCode.GDaObjects1.length = 0;
gdjs.chapter_322aCode.GDaObjects2.length = 0;
gdjs.chapter_322aCode.GDbObjects1.length = 0;
gdjs.chapter_322aCode.GDbObjects2.length = 0;
gdjs.chapter_322aCode.GDcObjects1.length = 0;
gdjs.chapter_322aCode.GDcObjects2.length = 0;
gdjs.chapter_322aCode.GDdObjects1.length = 0;
gdjs.chapter_322aCode.GDdObjects2.length = 0;
gdjs.chapter_322aCode.GDeObjects1.length = 0;
gdjs.chapter_322aCode.GDeObjects2.length = 0;
gdjs.chapter_322aCode.GDbuttonObjects1.length = 0;
gdjs.chapter_322aCode.GDbuttonObjects2.length = 0;


return;

}

gdjs['chapter_322aCode'] = gdjs.chapter_322aCode;
