gdjs._22823_213812Code = {};
gdjs._22823_213812Code.localVariables = [];
gdjs._22823_213812Code.idToCallbackMap = new Map();
gdjs._22823_213812Code.GDflameObjects1= [];
gdjs._22823_213812Code.GDflameObjects2= [];
gdjs._22823_213812Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._22823_213812Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._22823_213812Code.GD_9520840_9523478_9531119_9525346_9530011Objects1= [];
gdjs._22823_213812Code.GD_9520840_9523478_9531119_9525346_9530011Objects2= [];
gdjs._22823_213812Code.GDboxObjects1= [];
gdjs._22823_213812Code.GDboxObjects2= [];
gdjs._22823_213812Code.GD_9536793_952669401Objects1= [];
gdjs._22823_213812Code.GD_9536793_952669401Objects2= [];
gdjs._22823_213812Code.GD_9536793_952669402Objects1= [];
gdjs._22823_213812Code.GD_9536793_952669402Objects2= [];
gdjs._22823_213812Code.GD_9536793_952669403Objects1= [];
gdjs._22823_213812Code.GD_9536793_952669403Objects2= [];
gdjs._22823_213812Code.GD_9536793_952669404Objects1= [];
gdjs._22823_213812Code.GD_9536793_952669404Objects2= [];
gdjs._22823_213812Code.GD_9536793_952669405Objects1= [];
gdjs._22823_213812Code.GD_9536793_952669405Objects2= [];
gdjs._22823_213812Code.GDwomen2Objects1= [];
gdjs._22823_213812Code.GDwomen2Objects2= [];
gdjs._22823_213812Code.GDwomen3Objects1= [];
gdjs._22823_213812Code.GDwomen3Objects2= [];
gdjs._22823_213812Code.GDwomen4Objects1= [];
gdjs._22823_213812Code.GDwomen4Objects2= [];
gdjs._22823_213812Code.GD_9528857_9529123_9522721_9528809Objects1= [];
gdjs._22823_213812Code.GD_9528857_9529123_9522721_9528809Objects2= [];
gdjs._22823_213812Code.GD_9522721_9528809Objects1= [];
gdjs._22823_213812Code.GD_9522721_9528809Objects2= [];
gdjs._22823_213812Code.GDbackObjects1= [];
gdjs._22823_213812Code.GDbackObjects2= [];
gdjs._22823_213812Code.GD_9522721_9528809_9521488_9538754Objects1= [];
gdjs._22823_213812Code.GD_9522721_9528809_9521488_9538754Objects2= [];
gdjs._22823_213812Code.GD_9522353Objects1= [];
gdjs._22823_213812Code.GD_9522353Objects2= [];
gdjs._22823_213812Code.GD_9526893_9529289Objects1= [];
gdjs._22823_213812Code.GD_9526893_9529289Objects2= [];
gdjs._22823_213812Code.GDleaveObjects1= [];
gdjs._22823_213812Code.GDleaveObjects2= [];
gdjs._22823_213812Code.GD_9534880_9523383Objects1= [];
gdjs._22823_213812Code.GD_9534880_9523383Objects2= [];


gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._22823_213812Code.GDbackObjects1});
gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._22823_213812Code.GDbackObjects1});
gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._22823_213812Code.GDbackObjects1});
gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GD_95959526893_95959529289Objects1Objects = Hashtable.newFrom({"植物": gdjs._22823_213812Code.GD_9526893_9529289Objects1});
gdjs._22823_213812Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("flame"), gdjs._22823_213812Code.GDflameObjects1);
gdjs.copyArray(runtimeScene.getObjects("leave"), gdjs._22823_213812Code.GDleaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("women3"), gdjs._22823_213812Code.GDwomen3Objects1);
gdjs.copyArray(runtimeScene.getObjects("women4"), gdjs._22823_213812Code.GDwomen4Objects1);
{for(var i = 0, len = gdjs._22823_213812Code.GDflameObjects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDflameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22823_213812Code.GDwomen3Objects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDwomen3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22823_213812Code.GDwomen3Objects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDwomen3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22823_213812Code.GDwomen4Objects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDwomen4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22823_213812Code.GDleaveObjects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDleaveObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._22823_213812Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._22823_213812Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._22823_213812Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDbackObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._22823_213812Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GDbackObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._22823_213812Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._22823_213812Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDbackObjects1[i].getBehavior("Animation").setAnimationName("0");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._22823_213812Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18071300);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "厨房场景2");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("植物"), gdjs._22823_213812Code.GD_9526893_9529289Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_213812Code.mapOfGDgdjs_9546_959522823_9595213812Code_9546GD_95959526893_95959529289Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18072300);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leave"), gdjs._22823_213812Code.GDleaveObjects1);
{for(var i = 0, len = gdjs._22823_213812Code.GDleaveObjects1.length ;i < len;++i) {
    gdjs._22823_213812Code.GDleaveObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._22823_213812Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22823_213812Code.GDflameObjects1.length = 0;
gdjs._22823_213812Code.GDflameObjects2.length = 0;
gdjs._22823_213812Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._22823_213812Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._22823_213812Code.GD_9520840_9523478_9531119_9525346_9530011Objects1.length = 0;
gdjs._22823_213812Code.GD_9520840_9523478_9531119_9525346_9530011Objects2.length = 0;
gdjs._22823_213812Code.GDboxObjects1.length = 0;
gdjs._22823_213812Code.GDboxObjects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669401Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669401Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669402Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669402Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669403Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669403Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669404Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669404Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669405Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669405Objects2.length = 0;
gdjs._22823_213812Code.GDwomen2Objects1.length = 0;
gdjs._22823_213812Code.GDwomen2Objects2.length = 0;
gdjs._22823_213812Code.GDwomen3Objects1.length = 0;
gdjs._22823_213812Code.GDwomen3Objects2.length = 0;
gdjs._22823_213812Code.GDwomen4Objects1.length = 0;
gdjs._22823_213812Code.GDwomen4Objects2.length = 0;
gdjs._22823_213812Code.GD_9528857_9529123_9522721_9528809Objects1.length = 0;
gdjs._22823_213812Code.GD_9528857_9529123_9522721_9528809Objects2.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809Objects1.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809Objects2.length = 0;
gdjs._22823_213812Code.GDbackObjects1.length = 0;
gdjs._22823_213812Code.GDbackObjects2.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809_9521488_9538754Objects1.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809_9521488_9538754Objects2.length = 0;
gdjs._22823_213812Code.GD_9522353Objects1.length = 0;
gdjs._22823_213812Code.GD_9522353Objects2.length = 0;
gdjs._22823_213812Code.GD_9526893_9529289Objects1.length = 0;
gdjs._22823_213812Code.GD_9526893_9529289Objects2.length = 0;
gdjs._22823_213812Code.GDleaveObjects1.length = 0;
gdjs._22823_213812Code.GDleaveObjects2.length = 0;
gdjs._22823_213812Code.GD_9534880_9523383Objects1.length = 0;
gdjs._22823_213812Code.GD_9534880_9523383Objects2.length = 0;

gdjs._22823_213812Code.eventsList0(runtimeScene);
gdjs._22823_213812Code.GDflameObjects1.length = 0;
gdjs._22823_213812Code.GDflameObjects2.length = 0;
gdjs._22823_213812Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._22823_213812Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._22823_213812Code.GD_9520840_9523478_9531119_9525346_9530011Objects1.length = 0;
gdjs._22823_213812Code.GD_9520840_9523478_9531119_9525346_9530011Objects2.length = 0;
gdjs._22823_213812Code.GDboxObjects1.length = 0;
gdjs._22823_213812Code.GDboxObjects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669401Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669401Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669402Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669402Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669403Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669403Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669404Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669404Objects2.length = 0;
gdjs._22823_213812Code.GD_9536793_952669405Objects1.length = 0;
gdjs._22823_213812Code.GD_9536793_952669405Objects2.length = 0;
gdjs._22823_213812Code.GDwomen2Objects1.length = 0;
gdjs._22823_213812Code.GDwomen2Objects2.length = 0;
gdjs._22823_213812Code.GDwomen3Objects1.length = 0;
gdjs._22823_213812Code.GDwomen3Objects2.length = 0;
gdjs._22823_213812Code.GDwomen4Objects1.length = 0;
gdjs._22823_213812Code.GDwomen4Objects2.length = 0;
gdjs._22823_213812Code.GD_9528857_9529123_9522721_9528809Objects1.length = 0;
gdjs._22823_213812Code.GD_9528857_9529123_9522721_9528809Objects2.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809Objects1.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809Objects2.length = 0;
gdjs._22823_213812Code.GDbackObjects1.length = 0;
gdjs._22823_213812Code.GDbackObjects2.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809_9521488_9538754Objects1.length = 0;
gdjs._22823_213812Code.GD_9522721_9528809_9521488_9538754Objects2.length = 0;
gdjs._22823_213812Code.GD_9522353Objects1.length = 0;
gdjs._22823_213812Code.GD_9522353Objects2.length = 0;
gdjs._22823_213812Code.GD_9526893_9529289Objects1.length = 0;
gdjs._22823_213812Code.GD_9526893_9529289Objects2.length = 0;
gdjs._22823_213812Code.GDleaveObjects1.length = 0;
gdjs._22823_213812Code.GDleaveObjects2.length = 0;
gdjs._22823_213812Code.GD_9534880_9523383Objects1.length = 0;
gdjs._22823_213812Code.GD_9534880_9523383Objects2.length = 0;


return;

}

gdjs['_22823_213812Code'] = gdjs._22823_213812Code;
