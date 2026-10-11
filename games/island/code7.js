gdjs._26519_20013_23567_24452Code = {};
gdjs._26519_20013_23567_24452Code.localVariables = [];
gdjs._26519_20013_23567_24452Code.idToCallbackMap = new Map();
gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1= [];
gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects2= [];
gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1= [];
gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects2= [];
gdjs._26519_20013_23567_24452Code.GD_9540657_9524149Objects1= [];
gdjs._26519_20013_23567_24452Code.GD_9540657_9524149Objects2= [];
gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1= [];
gdjs._26519_20013_23567_24452Code.GDnewspaperObjects2= [];
gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1= [];
gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects2= [];
gdjs._26519_20013_23567_24452Code.GDfigureObjects1= [];
gdjs._26519_20013_23567_24452Code.GDfigureObjects2= [];
gdjs._26519_20013_23567_24452Code.GDbackObjects1= [];
gdjs._26519_20013_23567_24452Code.GDbackObjects2= [];


gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDnewspaperObjects1Objects = Hashtable.newFrom({"newspaper": gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1});
gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._26519_20013_23567_24452Code.GDbackObjects1});
gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._26519_20013_23567_24452Code.GDbackObjects1});
gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._26519_20013_23567_24452Code.GDbackObjects1});
gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDfigureObjects1Objects = Hashtable.newFrom({"figure": gdjs._26519_20013_23567_24452Code.GDfigureObjects1});
gdjs._26519_20013_23567_24452Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("newspaper"), gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1);
gdjs.copyArray(runtimeScene.getObjects("树木和灌木"), gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1);
gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1);
gdjs.copyArray(runtimeScene.getObjects("雾气2"), gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1);
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1[i].getBehavior("Tween").addObjectOpacityTween2("逐渐出现", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1[i].getBehavior("Tween").addObjectOpacityTween2("逐渐出现", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1[i].getBehavior("Tween").addObjectOpacityTween2("逐渐出现", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1[i].getBehavior("Tween").addObjectOpacityTween2("逐渐出现", 255, "linear", 2, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._26519_20013_23567_24452Code.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("报纸"), gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1);
gdjs.copyArray(runtimeScene.getObjects("雾气2"), gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1);
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1[i].getBehavior("Tween").addObjectPositionXTween2("缓慢移动", -(1000), "linear", 80, false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("newspaper"), gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDnewspaperObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17684972);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._26519_20013_23567_24452Code.GDbackObjects1);
/* Reuse gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1 */
gdjs.copyArray(runtimeScene.getObjects("报纸"), gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1);
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢出现", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢出现", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._26519_20013_23567_24452Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17687180);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._26519_20013_23567_24452Code.GDbackObjects1 */
gdjs.copyArray(runtimeScene.getObjects("newspaper"), gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1);
gdjs.copyArray(runtimeScene.getObjects("报纸"), gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1);
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._26519_20013_23567_24452Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._26519_20013_23567_24452Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._26519_20013_23567_24452Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDbackObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._26519_20013_23567_24452Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._26519_20013_23567_24452Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._26519_20013_23567_24452Code.GDbackObjects1[i].getBehavior("Animation").setAnimationName("0");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("figure"), gdjs._26519_20013_23567_24452Code.GDfigureObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26519_20013_23567_24452Code.mapOfGDgdjs_9546_959526519_959520013_959523567_959524452Code_9546GDfigureObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17689636);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "湖泊", false);
}
}

}


};

gdjs._26519_20013_23567_24452Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9540657_9524149Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9540657_9524149Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1.length = 0;
gdjs._26519_20013_23567_24452Code.GDnewspaperObjects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GDfigureObjects1.length = 0;
gdjs._26519_20013_23567_24452Code.GDfigureObjects2.length = 0;
gdjs._26519_20013_23567_24452Code.GDbackObjects1.length = 0;
gdjs._26519_20013_23567_24452Code.GDbackObjects2.length = 0;

gdjs._26519_20013_23567_24452Code.eventsList0(runtimeScene);
gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9526641_9526408_9521644_9528748_9526408Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9538654_95276682Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9540657_9524149Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9540657_9524149Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GDnewspaperObjects1.length = 0;
gdjs._26519_20013_23567_24452Code.GDnewspaperObjects2.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects1.length = 0;
gdjs._26519_20013_23567_24452Code.GD_9525253_9532440Objects2.length = 0;
gdjs._26519_20013_23567_24452Code.GDfigureObjects1.length = 0;
gdjs._26519_20013_23567_24452Code.GDfigureObjects2.length = 0;
gdjs._26519_20013_23567_24452Code.GDbackObjects1.length = 0;
gdjs._26519_20013_23567_24452Code.GDbackObjects2.length = 0;


return;

}

gdjs['_26519_20013_23567_24452Code'] = gdjs._26519_20013_23567_24452Code;
