gdjs._26631_39064Code = {};
gdjs._26631_39064Code.localVariables = [];
gdjs._26631_39064Code.idToCallbackMap = new Map();
gdjs._26631_39064Code.GD_9532972_9526223_9523618Objects1= [];
gdjs._26631_39064Code.GD_9532972_9526223_9523618Objects2= [];
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs._26631_39064Code.GDNewTextObjects1= [];
gdjs._26631_39064Code.GDNewTextObjects2= [];


gdjs._26631_39064Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "序章", false);
}
}

}


};

gdjs._26631_39064Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26631_39064Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._26631_39064Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs._26631_39064Code.GDNewTextObjects1.length = 0;
gdjs._26631_39064Code.GDNewTextObjects2.length = 0;

gdjs._26631_39064Code.eventsList0(runtimeScene);
gdjs._26631_39064Code.GD_9532972_9526223_9523618Objects1.length = 0;
gdjs._26631_39064Code.GD_9532972_9526223_9523618Objects2.length = 0;
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs._26631_39064Code.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs._26631_39064Code.GDNewTextObjects1.length = 0;
gdjs._26631_39064Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['_26631_39064Code'] = gdjs._26631_39064Code;
