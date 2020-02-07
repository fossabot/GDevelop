/**
 * Discord Rich Presence extension
 * @fileoverview
 * @license MIT
 * @author Arthur Pacaud (arthuro555)
 */

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
      'DiscordRichPresence',
      _('Discord Rich Presence'),
      _('An extension to use discord rich presence through discord RPC'),
      'Arthur Pacaud (arthuro555)',
      'MIT'
    );

    extension
      .addAction(
        'ConnectToDiscordApp',
        _('Connect to the discord App'),
        _(
          'Initializes the connection to the Discord App. This requires a registered Discord App ClientID.'
        ),
        _('Connect to Discord with ClientID _PARAM0_ (scopes = _PARAM1_, transport = _PARAM3_, error Variable = _PARAM3_)'),
        _('Discord Rich Presence'),
        'JsPlatform/Extensions/yarn24.png',
        'JsPlatform/Extensions/yarn32.png'
      )
      .addParameter('string', _('Client ID'), '', false)
      .addParameter('scenevar', _('Scopes'), '', true)
      .addParameter('string', _('Transport (ipc or websocket)'), '', true)
      .addParameter('scenevar', _('Error Variable'), '', true)
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/DiscordRichPresence/discordtools.js')
      .addIncludeFile('Extensions/DiscordRichPresence/discordRPC.js')
      .setFunctionName('gdjs.evtTools.discordRP.connectToDiscord');

    return extension;
  },
  runExtensionSanityTests: function(gd, extension) {
    return [];
  },
};
