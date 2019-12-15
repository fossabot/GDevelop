/**
 * This is a declaration of an extension for GDevelop 5.
 *
 * ℹ️ Run `node import-GDJS-Runtime.js` (in newIDE/app/scripts) if you make any change
 * to this extension file or to any other *.js file that you reference inside.
 *
 * The file must be named "JsExtension.js", otherwise GDevelop won't load it.
 * ⚠️ If you make a change and the extension is not loaded, open the developer console
 * and search for any errors.
 *
 * More information on https://github.com/4ian/GDevelop/blob/master/newIDE/README-extensions.md
 */
module.exports = {
  createExtension: function(_, gd) {
    const extension = new gd.PlatformExtension();
    extension.setExtensionInformation(
      'PythonInterpreter',
      'Python Interpretation Extension',
      'An extension to evaluate python code inside gdevelop',
      'Arthur Pacaud (arthuro555)',
      'MIT'
    );

    // Declare conditions, actions or expressions:
    extension
      .addAction(
        'EvalPython',
        _('Evaluate python code'),
        _(
          'Directly evaluate python code.'
        ),
        _('Evaluate python code _PARAM0_'),
        _('Python Interpreter'),
        'res/conditions/camera24.png',
        'res/conditions/camera.png'
      )
      .addCodeOnlyParameter('currentScene', '')
      .addParameter('string', _('Python Code'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/PythonInterpreter/pythontools.js')
      .addIncludeFile('Extensions/PythonInterpreter/brython.js')
      .addIncludeFile('Extensions/PythonInterpreter/brython_stdlib.js')
      .setFunctionName('gdjs.evtTools.python.eval');

  extension
      .addAction(
        'AddFunc',
        _('Create a Function from python code'),
        _(
          'Use this to create a function with arguments in python.'
        ),
        _('Create a python function out of _PARAM1_ with _PARAM2_ as arguments'),
        _('Python Interpreter'),
        'res/conditions/camera24.png',
        'res/conditions/camera.png'
      )
      .addParameter('string', _('Python Code'), '', false)
      .addParameter('string', _('Argument list as strings in a JSON list'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/PythonInterpreter/pythontools.js')
      .addIncludeFile('Extensions/PythonInterpreter/brython.js')
      .addIncludeFile('Extensions/PythonInterpreter/brython_stdlib.js')
      .setFunctionName('gdjs.evtTools.python.createFunction');

  extension
      .addAction(
        'ExecuteFunction',
        _('Executa a python Function'),
        _(
          'Execute a python function with arguments'
        ),
        _('Execute function _PARAM0_ with arguments _PARAM1_'),
        _('Python Interpreter'),
        'res/conditions/camera24.png',
        'res/conditions/camera.png'
      )
      .addCodeOnlyParameter('currentScene', '')
      .addParameter('string', _('Python Code'), '', false)
      .addParameter('string', _('Arguments as data to pass as a JSON list'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/PythonInterpreter/pythontools.js')
      .addIncludeFile('Extensions/PythonInterpreter/brython.js')
      .addIncludeFile('Extensions/PythonInterpreter/brython_stdlib.js')
      .setFunctionName('gdjs.evtTools.python.execFunction');

    return extension;
  },
  runExtensionSanityTests: function(gd, extension) {
    return [];
  },
};
