gdjs._22320_19979Code = {};
gdjs._22320_19979Code.localVariables = [];
gdjs._22320_19979Code.idToCallbackMap = new Map();
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects3= [];
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects4= [];
gdjs._22320_19979Code.GDmanObjects1= [];
gdjs._22320_19979Code.GDmanObjects2= [];
gdjs._22320_19979Code.GDmanObjects3= [];
gdjs._22320_19979Code.GDmanObjects4= [];
gdjs._22320_19979Code.GD_959501Objects1= [];
gdjs._22320_19979Code.GD_959501Objects2= [];
gdjs._22320_19979Code.GD_959501Objects3= [];
gdjs._22320_19979Code.GD_959501Objects4= [];
gdjs._22320_19979Code.GD_959502Objects1= [];
gdjs._22320_19979Code.GD_959502Objects2= [];
gdjs._22320_19979Code.GD_959502Objects3= [];
gdjs._22320_19979Code.GD_959502Objects4= [];
gdjs._22320_19979Code.GD_959503Objects1= [];
gdjs._22320_19979Code.GD_959503Objects2= [];
gdjs._22320_19979Code.GD_959503Objects3= [];
gdjs._22320_19979Code.GD_959503Objects4= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects3= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects4= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects2= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects3= [];
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects4= [];


gdjs._22320_19979Code.asyncCallback18760764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._22320_19979Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects4);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder2"), gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects4);
gdjs.copyArray(asyncObjectsList.getObjects("_03"), gdjs._22320_19979Code.GD_959503Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("man"), gdjs._22320_19979Code.GDmanObjects4);

gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects4);
{for(var i = 0, len = gdjs._22320_19979Code.GD_959503Objects4.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959503Objects4[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GDmanObjects4.length ;i < len;++i) {
    gdjs._22320_19979Code.GDmanObjects4[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects4.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects4[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects4.length ;i < len;++i) {
    gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects4.length ;i < len;++i) {
    gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects4[i].hide(false);
}
}
gdjs._22320_19979Code.localVariables.length = 0;
}
gdjs._22320_19979Code.idToCallbackMap.set(18760764, gdjs._22320_19979Code.asyncCallback18760764);
gdjs._22320_19979Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._22320_19979Code.localVariables);
for (const obj of gdjs._22320_19979Code.GD_959503Objects3) asyncObjectsList.addObject("_03", obj);
/* Don't save man as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs._22320_19979Code.asyncCallback18760764(runtimeScene, asyncObjectsList)), 18760764, asyncObjectsList);
}
}

}


};gdjs._22320_19979Code.asyncCallback18760028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._22320_19979Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_02"), gdjs._22320_19979Code.GD_959502Objects3);

gdjs.copyArray(runtimeScene.getObjects("_03"), gdjs._22320_19979Code.GD_959503Objects3);
{for(var i = 0, len = gdjs._22320_19979Code.GD_959502Objects3.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959502Objects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_959503Objects3.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959503Objects3[i].hide(false);
}
}

{ //Subevents
gdjs._22320_19979Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._22320_19979Code.localVariables.length = 0;
}
gdjs._22320_19979Code.idToCallbackMap.set(18760028, gdjs._22320_19979Code.asyncCallback18760028);
gdjs._22320_19979Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._22320_19979Code.localVariables);
for (const obj of gdjs._22320_19979Code.GD_959502Objects2) asyncObjectsList.addObject("_02", obj);
/* Don't save man as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs._22320_19979Code.asyncCallback18760028(runtimeScene, asyncObjectsList)), 18760028, asyncObjectsList);
}
}

}


};gdjs._22320_19979Code.asyncCallback18759732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._22320_19979Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_01"), gdjs._22320_19979Code.GD_959501Objects2);

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs._22320_19979Code.GD_959502Objects2);
{for(var i = 0, len = gdjs._22320_19979Code.GD_959501Objects2.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959501Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959502Objects2[i].hide(false);
}
}

{ //Subevents
gdjs._22320_19979Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._22320_19979Code.localVariables.length = 0;
}
gdjs._22320_19979Code.idToCallbackMap.set(18759732, gdjs._22320_19979Code.asyncCallback18759732);
gdjs._22320_19979Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._22320_19979Code.localVariables);
for (const obj of gdjs._22320_19979Code.GD_959501Objects1) asyncObjectsList.addObject("_01", obj);
for (const obj of gdjs._22320_19979Code.GDmanObjects1) asyncObjectsList.addObject("man", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._22320_19979Code.asyncCallback18759732(runtimeScene, asyncObjectsList)), 18759732, asyncObjectsList);
}
}

}


};gdjs._22320_19979Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder2"), gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1);
gdjs.copyArray(runtimeScene.getObjects("_01"), gdjs._22320_19979Code.GD_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs._22320_19979Code.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("_03"), gdjs._22320_19979Code.GD_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs._22320_19979Code.GDmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1);
{for(var i = 0, len = gdjs._22320_19979Code.GDmanObjects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GDmanObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GDmanObjects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GDmanObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_959501Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959501Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959502Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GD_959503Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959503Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("man"), gdjs._22320_19979Code.GDmanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22320_19979Code.GDmanObjects1.length;i<l;++i) {
    if ( gdjs._22320_19979Code.GDmanObjects1[i].getBehavior("Tween").hasFinished("fade") ) {
        isConditionTrue_0 = true;
        gdjs._22320_19979Code.GDmanObjects1[k] = gdjs._22320_19979Code.GDmanObjects1[i];
        ++k;
    }
}
gdjs._22320_19979Code.GDmanObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_01"), gdjs._22320_19979Code.GD_959501Objects1);
{for(var i = 0, len = gdjs._22320_19979Code.GD_959501Objects1.length ;i < len;++i) {
    gdjs._22320_19979Code.GD_959501Objects1[i].hide(false);
}
}

{ //Subevents
gdjs._22320_19979Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "标题", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder2"), gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1.length;i<l;++i) {
    if ( gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1[k] = gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1[i];
        ++k;
    }
}
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credict", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._22320_19979Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects3.length = 0;
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects4.length = 0;
gdjs._22320_19979Code.GDmanObjects1.length = 0;
gdjs._22320_19979Code.GDmanObjects2.length = 0;
gdjs._22320_19979Code.GDmanObjects3.length = 0;
gdjs._22320_19979Code.GDmanObjects4.length = 0;
gdjs._22320_19979Code.GD_959501Objects1.length = 0;
gdjs._22320_19979Code.GD_959501Objects2.length = 0;
gdjs._22320_19979Code.GD_959501Objects3.length = 0;
gdjs._22320_19979Code.GD_959501Objects4.length = 0;
gdjs._22320_19979Code.GD_959502Objects1.length = 0;
gdjs._22320_19979Code.GD_959502Objects2.length = 0;
gdjs._22320_19979Code.GD_959502Objects3.length = 0;
gdjs._22320_19979Code.GD_959502Objects4.length = 0;
gdjs._22320_19979Code.GD_959503Objects1.length = 0;
gdjs._22320_19979Code.GD_959503Objects2.length = 0;
gdjs._22320_19979Code.GD_959503Objects3.length = 0;
gdjs._22320_19979Code.GD_959503Objects4.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects3.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects4.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects2.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects3.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects4.length = 0;

gdjs._22320_19979Code.eventsList3(runtimeScene);
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects3.length = 0;
gdjs._22320_19979Code.GD_9532972_9526223_9523618Objects4.length = 0;
gdjs._22320_19979Code.GDmanObjects1.length = 0;
gdjs._22320_19979Code.GDmanObjects2.length = 0;
gdjs._22320_19979Code.GDmanObjects3.length = 0;
gdjs._22320_19979Code.GDmanObjects4.length = 0;
gdjs._22320_19979Code.GD_959501Objects1.length = 0;
gdjs._22320_19979Code.GD_959501Objects2.length = 0;
gdjs._22320_19979Code.GD_959501Objects3.length = 0;
gdjs._22320_19979Code.GD_959501Objects4.length = 0;
gdjs._22320_19979Code.GD_959502Objects1.length = 0;
gdjs._22320_19979Code.GD_959502Objects2.length = 0;
gdjs._22320_19979Code.GD_959502Objects3.length = 0;
gdjs._22320_19979Code.GD_959502Objects4.length = 0;
gdjs._22320_19979Code.GD_959503Objects1.length = 0;
gdjs._22320_19979Code.GD_959503Objects2.length = 0;
gdjs._22320_19979Code.GD_959503Objects3.length = 0;
gdjs._22320_19979Code.GD_959503Objects4.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects3.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorderObjects4.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects1.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects2.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects3.length = 0;
gdjs._22320_19979Code.GDTransparentButtonWithWhiteYellowBorder2Objects4.length = 0;


return;

}

gdjs['_22320_19979Code'] = gdjs._22320_19979Code;
