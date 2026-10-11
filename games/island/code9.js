gdjs._29031_30456_26426Code = {};
gdjs._29031_30456_26426Code.localVariables = [];
gdjs._29031_30456_26426Code.idToCallbackMap = new Map();
gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1= [];
gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects2= [];
gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1= [];
gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects2= [];
gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1= [];
gdjs._29031_30456_26426Code.GD_9524515_9533039Objects2= [];
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1= [];
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects2= [];
gdjs._29031_30456_26426Code.GD_9524405_9521046_9528857Objects1= [];
gdjs._29031_30456_26426Code.GD_9524405_9521046_9528857Objects2= [];


gdjs._29031_30456_26426Code.asyncCallback17828196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._29031_30456_26426Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("模糊镜头"), gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects2);

{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects2.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects2[i].getBehavior("Tween").addObjectOpacityTween2("浮现", 255, "linear", 3, false);
}
}
gdjs._29031_30456_26426Code.localVariables.length = 0;
}
gdjs._29031_30456_26426Code.idToCallbackMap.set(17828196, gdjs._29031_30456_26426Code.asyncCallback17828196);
gdjs._29031_30456_26426Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._29031_30456_26426Code.localVariables);
for (const obj of gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1) asyncObjectsList.addObject("模糊镜头", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._29031_30456_26426Code.asyncCallback17828196(runtimeScene, asyncObjectsList)), 17828196, asyncObjectsList);
}
}

}


};gdjs._29031_30456_26426Code.asyncCallback17829988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._29031_30456_26426Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "湖泊与坑", false);
}
gdjs._29031_30456_26426Code.localVariables.length = 0;
}
gdjs._29031_30456_26426Code.idToCallbackMap.set(17829988, gdjs._29031_30456_26426Code.asyncCallback17829988);
gdjs._29031_30456_26426Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._29031_30456_26426Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs._29031_30456_26426Code.asyncCallback17829988(runtimeScene, asyncObjectsList)), 17829988, asyncObjectsList);
}
}

}


};gdjs._29031_30456_26426Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("人与树"), gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1);
gdjs.copyArray(runtimeScene.getObjects("心脏"), gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1);
gdjs.copyArray(runtimeScene.getObjects("模糊镜头"), gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1);
gdjs.copyArray(runtimeScene.getObjects("相机边框"), gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1);
gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1);
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1[i].getBehavior("Tween").addObjectOpacityTween2("浮现", 255, "linear", 3, false);
}
}

{ //Subevents
gdjs._29031_30456_26426Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("模糊镜头"), gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1.length;i<l;++i) {
    if ( gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1[i].getBehavior("Tween").hasFinished("浮现") ) {
        isConditionTrue_0 = true;
        gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1[k] = gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1[i];
        ++k;
    }
}
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("人与树"), gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1);
gdjs.copyArray(runtimeScene.getObjects("心脏"), gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1);
/* Reuse gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1 */
gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1);
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1.length ;i < len;++i) {
    gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1[i].getBehavior("Tween").addObjectOpacityTween2("消失", 0, "linear", 3, false);
}
}

{ //Subevents
gdjs._29031_30456_26426Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._29031_30456_26426Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9524515_9533039Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9524405_9521046_9528857Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9524405_9521046_9528857Objects2.length = 0;

gdjs._29031_30456_26426Code.eventsList2(runtimeScene);
gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9530456_9526426_9536793_9526694Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9520154_9519982_9526641Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9524515_9533039Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9524515_9533039Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9527169_9531946_9538236_9522836Objects2.length = 0;
gdjs._29031_30456_26426Code.GD_9524405_9521046_9528857Objects1.length = 0;
gdjs._29031_30456_26426Code.GD_9524405_9521046_9528857Objects2.length = 0;


return;

}

gdjs['_29031_30456_26426Code'] = gdjs._29031_30456_26426Code;
