/**
 * Functions here are for integrating GDevelop and brython
 * @memberof gdjs.evtTools
 * @class python
 * @static
 * @private
 */
gdjs.evtTools.python = {}
gdjs.evtTools.python.sharedData = {};
gdjs.evtTools.python.eval = function(runtimeScene, src){
	gdjs.evtTools.python.sharedData.runtimeScene = runtimeScene
	if(__BRYTHON__ === undefined){
		console.error("Something went wrong while loading the python interpreter")
	}
	let patched_src = "from browser import window\nruntimeScene = window.gdjs.evtTools.python.sharedData.runtimeScene\n"+src
	new Function(__BRYTHON__.python_to_js(patched_src,"__main__"))()
}
gdjs.evtTools.python.createFunction = function(functionName, src, arguments) {
	if(__BRYTHON__ === undefined){
		console.error("Something went wrong while loading the python interpreter")
	}
	let args = ""
	for (let arg of argumentsArray){
		args += ", "+arg
	}
	const regex = false ? /^/gm : /^(?!\s*$)/gm;
	let indented_src = src.replace(regex, ' '.repeat(4));
	let patched_src = "from browser import window\ndef "+functionName+"(runtimeScene"+args+"):\n    runtimeScene = \n"+indented_src+"\nwindow.gdjs.evtTools.python.sharedData["+functionName+"] = "+functionName
	new Function(__BRYTHON__.python_to_js(patched_src,"__main__"))()
}
gdjs.evtTools.python.execFunction = function(runtimeScene, functionName, arguments){
	var argumentsArray = [].push(runtimeScene)
	argumentsArray.push(JSON.parse(arguments))
	gdjs.evtTools.python.sharedData[functionName].apply(null, argumentsArray)
}