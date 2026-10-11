gdjs._20840_23478_31119Code = {};
gdjs._20840_23478_31119Code.localVariables = [];
gdjs._20840_23478_31119Code.idToCallbackMap = new Map();
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects3= [];
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects1= [];
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects2= [];
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects3= [];
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects1= [];
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects2= [];
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects3= [];
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects1= [];
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects2= [];
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects3= [];
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects1= [];
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects2= [];
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects3= [];
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects1= [];
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects2= [];
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects3= [];
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects1= [];
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects2= [];
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects3= [];
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1= [];
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects2= [];
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects3= [];
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects1= [];
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects2= [];
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects3= [];
gdjs._20840_23478_31119Code.GDbackObjects1= [];
gdjs._20840_23478_31119Code.GDbackObjects2= [];
gdjs._20840_23478_31119Code.GDbackObjects3= [];


gdjs._20840_23478_31119Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("火柴"), gdjs._20840_23478_31119Code.GD_9528779_9526612Objects2);
{for(var i = 0, len = gdjs._20840_23478_31119Code.GD_9528779_9526612Objects2.length ;i < len;++i) {
    gdjs._20840_23478_31119Code.GD_9528779_9526612Objects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("teacup_道具"), gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1);
{for(var i = 0, len = gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1.length ;i < len;++i) {
    gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1[i].hide(false);
}
}
}

}


};gdjs._20840_23478_31119Code.mapOfGDgdjs_9546_959520840_959523478_959531119Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._20840_23478_31119Code.GDbackObjects1});
gdjs._20840_23478_31119Code.mapOfGDgdjs_9546_959520840_959523478_959531119Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._20840_23478_31119Code.GDbackObjects1});
gdjs._20840_23478_31119Code.mapOfGDgdjs_9546_959520840_959523478_959531119Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._20840_23478_31119Code.GDbackObjects1});
gdjs._20840_23478_31119Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._20840_23478_31119Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("火柴"), gdjs._20840_23478_31119Code.GD_9528779_9526612Objects1);
{for(var i = 0, len = gdjs._20840_23478_31119Code.GD_9528779_9526612Objects1.length ;i < len;++i) {
    gdjs._20840_23478_31119Code.GD_9528779_9526612Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("teacup_道具"), gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1);
{for(var i = 0, len = gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1.length ;i < len;++i) {
    gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._20840_23478_31119Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20840_23478_31119Code.mapOfGDgdjs_9546_959520840_959523478_959531119Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._20840_23478_31119Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._20840_23478_31119Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._20840_23478_31119Code.GDbackObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._20840_23478_31119Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20840_23478_31119Code.mapOfGDgdjs_9546_959520840_959523478_959531119Code_9546GDbackObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._20840_23478_31119Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._20840_23478_31119Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._20840_23478_31119Code.GDbackObjects1[i].getBehavior("Animation").setAnimationName("0");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._20840_23478_31119Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20840_23478_31119Code.mapOfGDgdjs_9546_959520840_959523478_959531119Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18248948);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._20840_23478_31119Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects3.length = 0;
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1.length = 0;
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects2.length = 0;
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects3.length = 0;
gdjs._20840_23478_31119Code.GDbackObjects1.length = 0;
gdjs._20840_23478_31119Code.GDbackObjects2.length = 0;
gdjs._20840_23478_31119Code.GDbackObjects3.length = 0;

gdjs._20840_23478_31119Code.eventsList1(runtimeScene);
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9532972_9526223_9523618Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9520840_9523478_9531119Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669401Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669402Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669403Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669404Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9536793_952669405Objects3.length = 0;
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects1.length = 0;
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects2.length = 0;
gdjs._20840_23478_31119Code.GDteacup_9595_9536947_9520855Objects3.length = 0;
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects1.length = 0;
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects2.length = 0;
gdjs._20840_23478_31119Code.GD_9528779_9526612Objects3.length = 0;
gdjs._20840_23478_31119Code.GDbackObjects1.length = 0;
gdjs._20840_23478_31119Code.GDbackObjects2.length = 0;
gdjs._20840_23478_31119Code.GDbackObjects3.length = 0;


return;

}

gdjs['_20840_23478_31119Code'] = gdjs._20840_23478_31119Code;
