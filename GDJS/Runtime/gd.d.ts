import {Hashtable} from './libs/jshashtable'
declare class gdjs{
    objectsTypes: Hashtable;
    behaviorsTypes: Hashtable;
    evtTools: {};
    callbacksRuntimeSceneLoaded: [];
    callbacksRuntimeSceneUnloaded: [];
    callbacksObjectDeletedFromScene: [];
    rgbToHex(r:number, g:number, b:number):string;
    rgbToHexNumber(r:number, g:number, b:number):number;
    random(max:number):number;
    randomInRange(min:number, max:number):number;
    randomFloat(max:number):number;
    randomFloatInRange(min:number, max:number):number;
    randomWithStep(min:number, max:number, step:number):number;
    toRad(angleInDegrees:number):number;
    toDegrees(angleInRadians:number):number;
    registerObjects();
    registerBehaviors();
    registerGlobalCallbacks();
    getObjectConstructor(name:string):object;
    getBehaviorConstructor(name:string):object;
    staticArray(owner:object):[];
    staticArray2(owner:object):[];
    staticObject(owner:object):object;
    objectsListsToArray(objectList:object):object;
}