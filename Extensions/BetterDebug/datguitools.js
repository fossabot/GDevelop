/**
 * This is an example of some functions that can be used through events.
 * They could live on any object but it's usual to store them in an object
 * with the extension name in `gdjs.evtTools`.
 *
 * Functions are being passed the arguments that were declared in the extension.
 *
 * @memberof gdjs.evtTools
 * @class BetterDebugExtension
 * @static
 * @private
 */
let oof = gdjs.Variable({});

gdjs.evtTools.BetterDebugExtension = {};
gdjs.evtTools.BetterDebugExtension.representation = [];
gdjs.evtTools.BetterDebugExtension.representation.findFolder = function(folderName){
  for (let o of this){
    if (o.type === "folder"){
      if (o.name === folderName){
        return o
      }
    }
  }
};
gdjs.evtTools.BetterDebugExtension.representation.findFolderIndex = function(folderName){
  for (let i in this){
    if (this[i].type === "folder"){
      if (this[i].name === folderName){
        return i
      }
    }
  }
};
gdjs.evtTools.BetterDebugExtension.representation.findVar = function(varName){
  for (let o of this){
    if (o.type === "num" || o.type === "str"){
      if (o.name === varName){
        return o
      }
    }
  }
};
gdjs.evtTools.BetterDebugExtension.folders = {};

gdjs.evtTools.BetterDebugExtension.activate = function () {
  gdjs.evtTools.BetterDebugExtension.gui = dat.GUI();
  for (let o of gdjs.evtTools.BetterDebugExtension.representation){
    if (o.type === "folder"){
      for (let o of gdjs.evtTools.BetterDebugExtension.representation){
        if (o.type === "str"){

        } else if (o.type === "num"){

        }
      }
    } else if (o.type === "str"){

    } else if (o.type === "num"){

    }
  }
};

gdjs.evtTools.BetterDebugExtension.addFolder=function(folderName){
  gdjs.evtTools.BetterDebugExtension.representation.push({name:folderName, type: "folder", content: []})
};

gdjs.evtTools.BetterDebugExtension.addStrVariable=function(variableName, folder = false){
  if(folder instanceof String){
    try{
      gdjs.evtTools.BetterDebugExtension.representation
          [gdjs.evtTools.BetterDebugExtension.representation.findFolderIndex(folder)]
          ["content"]
          .push(
              {name:variableName, type: "str", content: runtimeScene.getVariables().get(variableName)}
          )
    }catch (e) {
      console.log("Undefined Folder: "+folder)
    }
  }
  gdjs.evtTools.BetterDebugExtension.representation.push({name:variableName, type: "str", content: runtimeScene.getVariables().get(variableName)})
};

gdjs.evtTools.BetterDebugExtension.addNumberVariable=function(variableName, folder = false){
  if(folder instanceof String){
    try{
      gdjs.evtTools.BetterDebugExtension.representation
          [gdjs.evtTools.BetterDebugExtension.representation.findFolderIndex(folder)]
          ["content"]
          .push(
              {name:variableName, type: "num", content: runtimeScene.getVariables().get(variableName)}
          )
    }catch (e) {
      console.log("Undefined Folder: "+folder)
    }
  }
  gdjs.evtTools.BetterDebugExtension.representation.push({name:variableName, type: "num", content: runtimeScene.getVariables().get(variableName)})
};
