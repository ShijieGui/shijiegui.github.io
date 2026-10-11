gdjs._28779_26612Code = {};
gdjs._28779_26612Code.localVariables = [];
gdjs._28779_26612Code.idToCallbackMap = new Map();
gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1= [];
gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects2= [];
gdjs._28779_26612Code.GD_9525163Objects1= [];
gdjs._28779_26612Code.GD_9525163Objects2= [];


gdjs._28779_26612Code.mapOfGDgdjs_9546_959528779_959526612Code_9546GD_95959525163Objects1Objects = Hashtable.newFrom({"手": gdjs._28779_26612Code.GD_9525163Objects1});
gdjs._28779_26612Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("手"), gdjs._28779_26612Code.GD_9525163Objects1);
gdjs.copyArray(runtimeScene.getObjects("打开盒子"), gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1);
{for(var i = 0, len = gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1.length ;i < len;++i) {
    gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1[i].play();
}
}
{for(var i = 0, len = gdjs._28779_26612Code.GD_9525163Objects1.length ;i < len;++i) {
    gdjs._28779_26612Code.GD_9525163Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_26612Code.GD_9525163Objects1.length ;i < len;++i) {
    gdjs._28779_26612Code.GD_9525163Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("打开盒子"), gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1.length;i<l;++i) {
    if ( gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1[k] = gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1[i];
        ++k;
    }
}
gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("手"), gdjs._28779_26612Code.GD_9525163Objects1);
{for(var i = 0, len = gdjs._28779_26612Code.GD_9525163Objects1.length ;i < len;++i) {
    gdjs._28779_26612Code.GD_9525163Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_26612Code.GD_9525163Objects1.length ;i < len;++i) {
    gdjs._28779_26612Code.GD_9525163Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade in", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("手"), gdjs._28779_26612Code.GD_9525163Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28779_26612Code.mapOfGDgdjs_9546_959528779_959526612Code_9546GD_95959525163Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs._28779_26612Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1.length = 0;
gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects2.length = 0;
gdjs._28779_26612Code.GD_9525163Objects1.length = 0;
gdjs._28779_26612Code.GD_9525163Objects2.length = 0;

gdjs._28779_26612Code.eventsList0(runtimeScene);
gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects1.length = 0;
gdjs._28779_26612Code.GD_9525171_9524320_9530418_9523376Objects2.length = 0;
gdjs._28779_26612Code.GD_9525163Objects1.length = 0;
gdjs._28779_26612Code.GD_9525163Objects2.length = 0;


return;

}

gdjs['_28779_26612Code'] = gdjs._28779_26612Code;
