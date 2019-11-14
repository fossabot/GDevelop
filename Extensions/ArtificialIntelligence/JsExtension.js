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
console.warn("EXTENSION LOAD");
module.exports = {
  createExtension: function(_, gd) {
    const extension = new gd.PlatformExtension();
    extension.setExtensionInformation(
      'AI',
      _('AI (Neuro-Evolution)'),
      _('An extension to make little AIs using neuronal networks and Neuro-Evolution'),
      'Arthur Pacaud',
      'MIT'
    );

    // Declare conditions, actions or expressions:
    extension
      .addAction(
        'NewNN',
        _('New Neuronal Network'),
        _(
          'This is an action to create a Neuronal Network. Use the name to access it later.'
        ),
        _('Create AI with Name _PARAM0_ , _PARAM1_ Inputs and _PARAM2_ Outputs.'),
        _('AI'),
        'res/conditions/ai24.png',
        'res/conditions/ai.png'
      )
      .addParameter('string', _('AI Name'), '', false)
      .addParameter('expression', _('Input Number'), '', false)
      .addParameter('expression', _('Output Number'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/ArtificialIntelligence/aitools.js')
      .addIncludeFile('Extensions/ArtificialIntelligence/neataptic.js')
      .setFunctionName('gdjs.evtTools.aiExtension.createNeuronalNetwork');

    extension
      .addAction(
          'NewNEAT',
          _('New NEAT AI'),
          _(
              'This is an action to create an AI with NEAT. Use the name to access it later.'
          ),
          _('Create a NEAT AI with Name _PARAM0_ , _PARAM1_ Inputs and _PARAM2_ Outputs.'),
          _('AI'),
          'res/conditions/ai24.png',
          'res/conditions/ai.png'
      )
      .addParameter('string', _('NEAT AI Name'), '', false)
      .addParameter('expression', _('Input Number'), '', false)
      .addParameter('expression', _('Output Number'), '', false)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/ArtificialIntelligence/aitools.js')
      .addIncludeFile('Extensions/ArtificialIntelligence/neataptic.js')
      .setFunctionName('gdjs.evtTools.aiExtension.createNEAT');

  extension
    .addAction(
        'TrainNN',
        _('Train A Neuronal Network'),
        _(
            'Give a neuronal network some values on which it can train using Neuro-Evolution.'
        ),
        _('Train a Neuronal Network with the values set _PARAM0_ and options _PARAM1_'),
        _('AI'),
        'res/conditions/ai24.png',
        'res/conditions/ai.png'
    )
        .addParameter('string', _('NEAT AI Name'), '', false)
        .addParameter('expression', _('Input Number'), '', false)
        .addParameter('expression', _('Output Number'), '', false)
        .getCodeExtraInformation()
        .setIncludeFile('Extensions/ArtificialIntelligence/aitools.js')
        .addIncludeFile('Extensions/ArtificialIntelligence/neataptic.js')
        .setFunctionName('gdjs.evtTools.aiExtension.createNEAT');
  },
};
