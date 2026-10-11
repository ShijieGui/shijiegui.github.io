gdjs.ENDCode = {};
gdjs.ENDCode.localVariables = [];
gdjs.ENDCode.idToCallbackMap = new Map();
gdjs.ENDCode.GD_95952Objects1= [];
gdjs.ENDCode.GD_95952Objects2= [];
gdjs.ENDCode.GD_95952Objects3= [];
gdjs.ENDCode.GD_95952Objects4= [];
gdjs.ENDCode.GD_95952Objects5= [];
gdjs.ENDCode.GD_95953Objects1= [];
gdjs.ENDCode.GD_95953Objects2= [];
gdjs.ENDCode.GD_95953Objects3= [];
gdjs.ENDCode.GD_95953Objects4= [];
gdjs.ENDCode.GD_95953Objects5= [];
gdjs.ENDCode.GD_95951Objects1= [];
gdjs.ENDCode.GD_95951Objects2= [];
gdjs.ENDCode.GD_95951Objects3= [];
gdjs.ENDCode.GD_95951Objects4= [];
gdjs.ENDCode.GD_95951Objects5= [];
gdjs.ENDCode.GD_95954Objects1= [];
gdjs.ENDCode.GD_95954Objects2= [];
gdjs.ENDCode.GD_95954Objects3= [];
gdjs.ENDCode.GD_95954Objects4= [];
gdjs.ENDCode.GD_95954Objects5= [];
gdjs.ENDCode.GDNewTextObjects1= [];
gdjs.ENDCode.GDNewTextObjects2= [];
gdjs.ENDCode.GDNewTextObjects3= [];
gdjs.ENDCode.GDNewTextObjects4= [];
gdjs.ENDCode.GDNewTextObjects5= [];
gdjs.ENDCode.GDendObjects1= [];
gdjs.ENDCode.GDendObjects2= [];
gdjs.ENDCode.GDendObjects3= [];
gdjs.ENDCode.GDendObjects4= [];
gdjs.ENDCode.GDendObjects5= [];


gdjs.ENDCode.asyncCallback14410068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("end"), gdjs.ENDCode.GDendObjects5);

{for(var i = 0, len = gdjs.ENDCode.GDendObjects5.length ;i < len;++i) {
    gdjs.ENDCode.GDendObjects5[i].hide(false);
}
}
gdjs.ENDCode.localVariables.length = 0;
}
gdjs.ENDCode.idToCallbackMap.set(14410068, gdjs.ENDCode.asyncCallback14410068);
gdjs.ENDCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ENDCode.localVariables);
/* Don't save end as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.ENDCode.asyncCallback14410068(runtimeScene, asyncObjectsList)), 14410068, asyncObjectsList);
}
}

}


};gdjs.ENDCode.asyncCallback14410852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ENDCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.ENDCode.GDNewTextObjects4);

{for(var i = 0, len = gdjs.ENDCode.GDNewTextObjects4.length ;i < len;++i) {
    gdjs.ENDCode.GDNewTextObjects4[i].hide(false);
}
}

{ //Subevents
gdjs.ENDCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ENDCode.localVariables.length = 0;
}
gdjs.ENDCode.idToCallbackMap.set(14410852, gdjs.ENDCode.asyncCallback14410852);
gdjs.ENDCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ENDCode.localVariables);
/* Don't save NewText as it will be provided by the parent asyncObjectsList. */
/* Don't save end as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.ENDCode.asyncCallback14410852(runtimeScene, asyncObjectsList)), 14410852, asyncObjectsList);
}
}

}


};gdjs.ENDCode.asyncCallback14410508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ENDCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs.ENDCode.GD_95954Objects3);
{for(var i = 0, len = gdjs.ENDCode.GD_95954Objects3.length ;i < len;++i) {
    gdjs.ENDCode.GD_95954Objects3[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 3, false);
}
}

{ //Subevents
gdjs.ENDCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ENDCode.localVariables.length = 0;
}
gdjs.ENDCode.idToCallbackMap.set(14410508, gdjs.ENDCode.asyncCallback14410508);
gdjs.ENDCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ENDCode.localVariables);
/* Don't save NewText as it will be provided by the parent asyncObjectsList. */
/* Don't save end as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.ENDCode.asyncCallback14410508(runtimeScene, asyncObjectsList)), 14410508, asyncObjectsList);
}
}

}


};gdjs.ENDCode.asyncCallback14409996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ENDCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.ENDCode.GD_95952Objects2);
{for(var i = 0, len = gdjs.ENDCode.GD_95952Objects2.length ;i < len;++i) {
    gdjs.ENDCode.GD_95952Objects2[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 3, false);
}
}

{ //Subevents
gdjs.ENDCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ENDCode.localVariables.length = 0;
}
gdjs.ENDCode.idToCallbackMap.set(14409996, gdjs.ENDCode.asyncCallback14409996);
gdjs.ENDCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ENDCode.localVariables);
for (const obj of gdjs.ENDCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.ENDCode.GDendObjects1) asyncObjectsList.addObject("end", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.ENDCode.asyncCallback14409996(runtimeScene, asyncObjectsList)), 14409996, asyncObjectsList);
}
}

}


};gdjs.ENDCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.ENDCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.ENDCode.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.ENDCode.GDendObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Nostalgic Piano.aac", 1, true, 100, 1);
}
{for(var i = 0, len = gdjs.ENDCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.ENDCode.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ENDCode.GDendObjects1.length ;i < len;++i) {
    gdjs.ENDCode.GDendObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ENDCode.GD_95951Objects1.length ;i < len;++i) {
    gdjs.ENDCode.GD_95951Objects1[i].getBehavior("Tween").addObjectOpacityTween2("off", 0, "linear", 4, false);
}
}

{ //Subevents
gdjs.ENDCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ENDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ENDCode.GD_95952Objects1.length = 0;
gdjs.ENDCode.GD_95952Objects2.length = 0;
gdjs.ENDCode.GD_95952Objects3.length = 0;
gdjs.ENDCode.GD_95952Objects4.length = 0;
gdjs.ENDCode.GD_95952Objects5.length = 0;
gdjs.ENDCode.GD_95953Objects1.length = 0;
gdjs.ENDCode.GD_95953Objects2.length = 0;
gdjs.ENDCode.GD_95953Objects3.length = 0;
gdjs.ENDCode.GD_95953Objects4.length = 0;
gdjs.ENDCode.GD_95953Objects5.length = 0;
gdjs.ENDCode.GD_95951Objects1.length = 0;
gdjs.ENDCode.GD_95951Objects2.length = 0;
gdjs.ENDCode.GD_95951Objects3.length = 0;
gdjs.ENDCode.GD_95951Objects4.length = 0;
gdjs.ENDCode.GD_95951Objects5.length = 0;
gdjs.ENDCode.GD_95954Objects1.length = 0;
gdjs.ENDCode.GD_95954Objects2.length = 0;
gdjs.ENDCode.GD_95954Objects3.length = 0;
gdjs.ENDCode.GD_95954Objects4.length = 0;
gdjs.ENDCode.GD_95954Objects5.length = 0;
gdjs.ENDCode.GDNewTextObjects1.length = 0;
gdjs.ENDCode.GDNewTextObjects2.length = 0;
gdjs.ENDCode.GDNewTextObjects3.length = 0;
gdjs.ENDCode.GDNewTextObjects4.length = 0;
gdjs.ENDCode.GDNewTextObjects5.length = 0;
gdjs.ENDCode.GDendObjects1.length = 0;
gdjs.ENDCode.GDendObjects2.length = 0;
gdjs.ENDCode.GDendObjects3.length = 0;
gdjs.ENDCode.GDendObjects4.length = 0;
gdjs.ENDCode.GDendObjects5.length = 0;

gdjs.ENDCode.eventsList4(runtimeScene);
gdjs.ENDCode.GD_95952Objects1.length = 0;
gdjs.ENDCode.GD_95952Objects2.length = 0;
gdjs.ENDCode.GD_95952Objects3.length = 0;
gdjs.ENDCode.GD_95952Objects4.length = 0;
gdjs.ENDCode.GD_95952Objects5.length = 0;
gdjs.ENDCode.GD_95953Objects1.length = 0;
gdjs.ENDCode.GD_95953Objects2.length = 0;
gdjs.ENDCode.GD_95953Objects3.length = 0;
gdjs.ENDCode.GD_95953Objects4.length = 0;
gdjs.ENDCode.GD_95953Objects5.length = 0;
gdjs.ENDCode.GD_95951Objects1.length = 0;
gdjs.ENDCode.GD_95951Objects2.length = 0;
gdjs.ENDCode.GD_95951Objects3.length = 0;
gdjs.ENDCode.GD_95951Objects4.length = 0;
gdjs.ENDCode.GD_95951Objects5.length = 0;
gdjs.ENDCode.GD_95954Objects1.length = 0;
gdjs.ENDCode.GD_95954Objects2.length = 0;
gdjs.ENDCode.GD_95954Objects3.length = 0;
gdjs.ENDCode.GD_95954Objects4.length = 0;
gdjs.ENDCode.GD_95954Objects5.length = 0;
gdjs.ENDCode.GDNewTextObjects1.length = 0;
gdjs.ENDCode.GDNewTextObjects2.length = 0;
gdjs.ENDCode.GDNewTextObjects3.length = 0;
gdjs.ENDCode.GDNewTextObjects4.length = 0;
gdjs.ENDCode.GDNewTextObjects5.length = 0;
gdjs.ENDCode.GDendObjects1.length = 0;
gdjs.ENDCode.GDendObjects2.length = 0;
gdjs.ENDCode.GDendObjects3.length = 0;
gdjs.ENDCode.GDendObjects4.length = 0;
gdjs.ENDCode.GDendObjects5.length = 0;


return;

}

gdjs['ENDCode'] = gdjs.ENDCode;
