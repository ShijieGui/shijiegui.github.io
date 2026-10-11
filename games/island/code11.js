gdjs._29031_30456_264262Code = {};
gdjs._29031_30456_264262Code.localVariables = [];
gdjs._29031_30456_264262Code.idToCallbackMap = new Map();
gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1= [];
gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects2= [];
gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1= [];
gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects2= [];
gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1= [];
gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects2= [];
gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1= [];
gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects2= [];
gdjs._29031_30456_264262Code.GD_9524405_9521046_9528857Objects1= [];
gdjs._29031_30456_264262Code.GD_9524405_9521046_9528857Objects2= [];
gdjs._29031_30456_264262Code.GD_9520498_9524433Objects1= [];
gdjs._29031_30456_264262Code.GD_9520498_9524433Objects2= [];
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1= [];
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2= [];


gdjs._29031_30456_264262Code.asyncCallback17917028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._29031_30456_264262Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("模糊背景层"), gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("白房子"), gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects2);

{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects2.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects2[i].getBehavior("Tween").addObjectOpacityTween2("浮现", 255, "linear", 3, false);
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects2.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}
gdjs._29031_30456_264262Code.localVariables.length = 0;
}
gdjs._29031_30456_264262Code.idToCallbackMap.set(17917028, gdjs._29031_30456_264262Code.asyncCallback17917028);
gdjs._29031_30456_264262Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._29031_30456_264262Code.localVariables);
for (const obj of gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1) asyncObjectsList.addObject("模糊背景层", obj);
for (const obj of gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1) asyncObjectsList.addObject("白房子", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._29031_30456_264262Code.asyncCallback17917028(runtimeScene, asyncObjectsList)), 17917028, asyncObjectsList);
}
}

}


};gdjs._29031_30456_264262Code.mapOfGDgdjs_9546_959529031_959530456_9595264262Code_9546GD_95959520498_95959524433Objects1Objects = Hashtable.newFrom({"倒影": gdjs._29031_30456_264262Code.GD_9520498_9524433Objects1});
gdjs._29031_30456_264262Code.mapOfGDgdjs_9546_959529031_959530456_9595264262Code_9546GD_95959530333_95959525151_95959523376Objects1Objects = Hashtable.newFrom({"白房子": gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1});
gdjs._29031_30456_264262Code.asyncCallback17921004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._29031_30456_264262Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("闪退"), gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2);
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2[i].play();
}
}
gdjs._29031_30456_264262Code.localVariables.length = 0;
}
gdjs._29031_30456_264262Code.idToCallbackMap.set(17921004, gdjs._29031_30456_264262Code.asyncCallback17921004);
gdjs._29031_30456_264262Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._29031_30456_264262Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._29031_30456_264262Code.asyncCallback17921004(runtimeScene, asyncObjectsList)), 17921004, asyncObjectsList);
}
}

}


};gdjs._29031_30456_264262Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("模糊背景层"), gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1);
gdjs.copyArray(runtimeScene.getObjects("清晰背景层"), gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1);
gdjs.copyArray(runtimeScene.getObjects("白房子"), gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1);
gdjs.copyArray(runtimeScene.getObjects("相机边框"), gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1);
gdjs.copyArray(runtimeScene.getObjects("闪退"), gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1);
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1[i].pause();
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1[i].getBehavior("Tween").addObjectOpacityTween2("浮现", 255, "linear", 3, false);
}
}

{ //Subevents
gdjs._29031_30456_264262Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("模糊背景层"), gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1.length;i<l;++i) {
    if ( gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1[i].getBehavior("Tween").hasFinished("浮现") ) {
        isConditionTrue_0 = true;
        gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1[k] = gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1[i];
        ++k;
    }
}
gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1 */
gdjs.copyArray(runtimeScene.getObjects("清晰背景层"), gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1);
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1[i].getBehavior("Tween").addObjectOpacityTween2("消失", 0, "linear", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("倒影"), gdjs._29031_30456_264262Code.GD_9520498_9524433Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._29031_30456_264262Code.mapOfGDgdjs_9546_959529031_959530456_9595264262Code_9546GD_95959520498_95959524433Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17919628);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("白房子"), gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1);
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade in", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("白房子"), gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._29031_30456_264262Code.mapOfGDgdjs_9546_959529031_959530456_9595264262Code_9546GD_95959530333_95959525151_95959523376Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17920932);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1 */
{for(var i = 0, len = gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1.length ;i < len;++i) {
    gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs._29031_30456_264262Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("闪退"), gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1.length;i<l;++i) {
    if ( gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1[k] = gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1[i];
        ++k;
    }
}
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "大厅", false);
}
}

}


};

gdjs._29031_30456_264262Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9524405_9521046_9528857Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9524405_9521046_9528857Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9520498_9524433Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9520498_9524433Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2.length = 0;

gdjs._29031_30456_264262Code.eventsList2(runtimeScene);
gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9527169_9531946_9532972_9526223_9523618Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9528165_9526224_9532972_9526223_9523618Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9530333_9525151_9523376Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9530456_9526426_9536793_9526694Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9524405_9521046_9528857Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9524405_9521046_9528857Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9520498_9524433Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9520498_9524433Objects2.length = 0;
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects1.length = 0;
gdjs._29031_30456_264262Code.GD_9538378_9536864Objects2.length = 0;


return;

}

gdjs['_29031_30456_264262Code'] = gdjs._29031_30456_264262Code;
