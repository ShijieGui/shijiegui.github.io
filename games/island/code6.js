gdjs._26632_36947Code = {};
gdjs._26632_36947Code.localVariables = [];
gdjs._26632_36947Code.idToCallbackMap = new Map();
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects3= [];
gdjs._26632_36947Code.GD_9526632_9536947Objects1= [];
gdjs._26632_36947Code.GD_9526632_9536947Objects2= [];
gdjs._26632_36947Code.GD_9526632_9536947Objects3= [];
gdjs._26632_36947Code.GD_9527700_9538754Objects1= [];
gdjs._26632_36947Code.GD_9527700_9538754Objects2= [];
gdjs._26632_36947Code.GD_9527700_9538754Objects3= [];
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1= [];
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects2= [];
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects3= [];
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1= [];
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects2= [];
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects3= [];
gdjs._26632_36947Code.GD_9540657_9524149Objects1= [];
gdjs._26632_36947Code.GD_9540657_9524149Objects2= [];
gdjs._26632_36947Code.GD_9540657_9524149Objects3= [];
gdjs._26632_36947Code.GDNewTextObjects1= [];
gdjs._26632_36947Code.GDNewTextObjects2= [];
gdjs._26632_36947Code.GDNewTextObjects3= [];
gdjs._26632_36947Code.GDfigureObjects1= [];
gdjs._26632_36947Code.GDfigureObjects2= [];
gdjs._26632_36947Code.GDfigureObjects3= [];


gdjs._26632_36947Code.mapOfGDgdjs_9546_959526632_959536947Code_9546GDfigureObjects1Objects = Hashtable.newFrom({"figure": gdjs._26632_36947Code.GDfigureObjects1});
gdjs._26632_36947Code.asyncCallback17635332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26632_36947Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "林中小径", false);
}
gdjs._26632_36947Code.localVariables.length = 0;
}
gdjs._26632_36947Code.idToCallbackMap.set(17635332, gdjs._26632_36947Code.asyncCallback17635332);
gdjs._26632_36947Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._26632_36947Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._26632_36947Code.asyncCallback17635332(runtimeScene, asyncObjectsList)), 17635332, asyncObjectsList);
}
}

}


};gdjs._26632_36947Code.asyncCallback17635260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26632_36947Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._26632_36947Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._26632_36947Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._26632_36947Code.GDNewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}

{ //Subevents
gdjs._26632_36947Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._26632_36947Code.localVariables.length = 0;
}
gdjs._26632_36947Code.idToCallbackMap.set(17635260, gdjs._26632_36947Code.asyncCallback17635260);
gdjs._26632_36947Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._26632_36947Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._26632_36947Code.asyncCallback17635260(runtimeScene, asyncObjectsList)), 17635260, asyncObjectsList);
}
}

}


};gdjs._26632_36947Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("前景雾"), gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1);
gdjs.copyArray(runtimeScene.getObjects("后景雾"), gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1);
{for(var i = 0, len = gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1[i].getBehavior("Tween").addObjectPositionXTween2("缓慢移动", -(616), "linear", 10, false);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1[i].getBehavior("Tween").addObjectPositionXTween2("缓慢", 152, "linear", 10, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("前景雾"), gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1);
gdjs.copyArray(runtimeScene.getObjects("后景雾"), gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length;i<l;++i) {
    if ( gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1[i].getBehavior("Tween").hasFinished("缓慢移动") ) {
        isConditionTrue_0 = true;
        gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1[k] = gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1[i];
        ++k;
    }
}
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length;i<l;++i) {
    if ( gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1[i].getBehavior("Tween").hasFinished("缓慢") ) {
        isConditionTrue_0 = true;
        gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1[k] = gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1[i];
        ++k;
    }
}
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1 */
/* Reuse gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1 */
{for(var i = 0, len = gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1[i].getBehavior("Tween").addObjectPositionXTween2("缓慢回归", 152, "linear", 10, false);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1[i].getBehavior("Tween").addObjectPositionXTween2("回归", -(616), "linear", 10, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("figure"), gdjs._26632_36947Code.GDfigureObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26632_36947Code.mapOfGDgdjs_9546_959526632_959536947Code_9546GDfigureObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17632868);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._26632_36947Code.GDfigureObjects1 */
gdjs.copyArray(runtimeScene.getObjects("前景雾"), gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1);
gdjs.copyArray(runtimeScene.getObjects("后景雾"), gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1);
gdjs.copyArray(runtimeScene.getObjects("栈道"), gdjs._26632_36947Code.GD_9526632_9536947Objects1);
gdjs.copyArray(runtimeScene.getObjects("水面"), gdjs._26632_36947Code.GD_9527700_9538754Objects1);
gdjs.copyArray(runtimeScene.getObjects("背景层"), gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects1);
{for(var i = 0, len = gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GD_9526632_9536947Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9526632_9536947Objects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GD_9527700_9538754Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9527700_9538754Objects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}
{for(var i = 0, len = gdjs._26632_36947Code.GDfigureObjects1.length ;i < len;++i) {
    gdjs._26632_36947Code.GDfigureObjects1[i].getBehavior("Tween").addObjectOpacityTween2("缓慢消失", 0, "linear", 2, true);
}
}

{ //Subevents
gdjs._26632_36947Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._26632_36947Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects3.length = 0;
gdjs._26632_36947Code.GD_9526632_9536947Objects1.length = 0;
gdjs._26632_36947Code.GD_9526632_9536947Objects2.length = 0;
gdjs._26632_36947Code.GD_9526632_9536947Objects3.length = 0;
gdjs._26632_36947Code.GD_9527700_9538754Objects1.length = 0;
gdjs._26632_36947Code.GD_9527700_9538754Objects2.length = 0;
gdjs._26632_36947Code.GD_9527700_9538754Objects3.length = 0;
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length = 0;
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects2.length = 0;
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects3.length = 0;
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length = 0;
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects2.length = 0;
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects3.length = 0;
gdjs._26632_36947Code.GD_9540657_9524149Objects1.length = 0;
gdjs._26632_36947Code.GD_9540657_9524149Objects2.length = 0;
gdjs._26632_36947Code.GD_9540657_9524149Objects3.length = 0;
gdjs._26632_36947Code.GDNewTextObjects1.length = 0;
gdjs._26632_36947Code.GDNewTextObjects2.length = 0;
gdjs._26632_36947Code.GDNewTextObjects3.length = 0;
gdjs._26632_36947Code.GDfigureObjects1.length = 0;
gdjs._26632_36947Code.GDfigureObjects2.length = 0;
gdjs._26632_36947Code.GDfigureObjects3.length = 0;

gdjs._26632_36947Code.eventsList2(runtimeScene);
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._26632_36947Code.GD_9532972_9526223_9523618Objects3.length = 0;
gdjs._26632_36947Code.GD_9526632_9536947Objects1.length = 0;
gdjs._26632_36947Code.GD_9526632_9536947Objects2.length = 0;
gdjs._26632_36947Code.GD_9526632_9536947Objects3.length = 0;
gdjs._26632_36947Code.GD_9527700_9538754Objects1.length = 0;
gdjs._26632_36947Code.GD_9527700_9538754Objects2.length = 0;
gdjs._26632_36947Code.GD_9527700_9538754Objects3.length = 0;
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects1.length = 0;
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects2.length = 0;
gdjs._26632_36947Code.GD_9521069_9526223_9538654Objects3.length = 0;
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects1.length = 0;
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects2.length = 0;
gdjs._26632_36947Code.GD_9521518_9526223_9538654Objects3.length = 0;
gdjs._26632_36947Code.GD_9540657_9524149Objects1.length = 0;
gdjs._26632_36947Code.GD_9540657_9524149Objects2.length = 0;
gdjs._26632_36947Code.GD_9540657_9524149Objects3.length = 0;
gdjs._26632_36947Code.GDNewTextObjects1.length = 0;
gdjs._26632_36947Code.GDNewTextObjects2.length = 0;
gdjs._26632_36947Code.GDNewTextObjects3.length = 0;
gdjs._26632_36947Code.GDfigureObjects1.length = 0;
gdjs._26632_36947Code.GDfigureObjects2.length = 0;
gdjs._26632_36947Code.GDfigureObjects3.length = 0;


return;

}

gdjs['_26632_36947Code'] = gdjs._26632_36947Code;
