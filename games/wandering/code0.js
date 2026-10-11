gdjs.BeginCode = {};
gdjs.BeginCode.localVariables = [];
gdjs.BeginCode.idToCallbackMap = new Map();
gdjs.BeginCode.GDFallingObjects1= [];
gdjs.BeginCode.GDFallingObjects2= [];
gdjs.BeginCode.GDButtonObjects1= [];
gdjs.BeginCode.GDButtonObjects2= [];
gdjs.BeginCode.GDTitleObjects1= [];
gdjs.BeginCode.GDTitleObjects2= [];


gdjs.BeginCode.asyncCallback13674668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BeginCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chapter 0", false);
}
gdjs.BeginCode.localVariables.length = 0;
}
gdjs.BeginCode.idToCallbackMap.set(13674668, gdjs.BeginCode.asyncCallback13674668);
gdjs.BeginCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BeginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.BeginCode.asyncCallback13674668(runtimeScene, asyncObjectsList)), 13674668, asyncObjectsList);
}
}

}


};gdjs.BeginCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13672740);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.BeginCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BeginCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.BeginCode.GDButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.BeginCode.GDButtonObjects1[k] = gdjs.BeginCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.BeginCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BeginCode.GDButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.BeginCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.BeginCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.BeginCode.GDButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Off", 0, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs.BeginCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.BeginCode.GDTitleObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Off", 0, "linear", 2, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.BeginCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BeginCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.BeginCode.GDButtonObjects1[i].getBehavior("Tween").hasFinished("Off") ) {
        isConditionTrue_0 = true;
        gdjs.BeginCode.GDButtonObjects1[k] = gdjs.BeginCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.BeginCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Falling"), gdjs.BeginCode.GDFallingObjects1);
{for(var i = 0, len = gdjs.BeginCode.GDFallingObjects1.length ;i < len;++i) {
    gdjs.BeginCode.GDFallingObjects1[i].getBehavior("Tween").addObjectPositionTween2("FALL", 836, 1062, "linear", 1, false);
}
}

{ //Subevents
gdjs.BeginCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BeginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BeginCode.GDFallingObjects1.length = 0;
gdjs.BeginCode.GDFallingObjects2.length = 0;
gdjs.BeginCode.GDButtonObjects1.length = 0;
gdjs.BeginCode.GDButtonObjects2.length = 0;
gdjs.BeginCode.GDTitleObjects1.length = 0;
gdjs.BeginCode.GDTitleObjects2.length = 0;

gdjs.BeginCode.eventsList1(runtimeScene);
gdjs.BeginCode.GDFallingObjects1.length = 0;
gdjs.BeginCode.GDFallingObjects2.length = 0;
gdjs.BeginCode.GDButtonObjects1.length = 0;
gdjs.BeginCode.GDButtonObjects2.length = 0;
gdjs.BeginCode.GDTitleObjects1.length = 0;
gdjs.BeginCode.GDTitleObjects2.length = 0;


return;

}

gdjs['BeginCode'] = gdjs.BeginCode;
