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
    extension
      .setExtensionInformation(
        'FileSystemForMobile',
        _('Filesystem For Mobile'),
        _('Access the filesystem of Mobile devices.'),
        'Arthur Pacaud',
        'Open source (MIT License)'
      )
      .setExtensionHelpPath('/all-features/filesystem');

    extension
      .addAction(
        'SaveStringToFile',
        _('Save a text into a file'),
        _(
          "Save a text into a file."
        ),
        _('Save _PARAM0_ into file _PARAM1_'),
        _('Filesystem/Android, IOS'),
        'JsPlatform/Extensions/filesystem_save_file24.png',
        'JsPlatform/Extensions/filesystem_save_file32.png'
      )
      .addParameter('string', _('String (text)'), '', false)
      .addParameter('string', _('Save path'), '', false)
      .addParameter(
        'scenevar',
        _(
          "(Optional) Variable to store the result. 'ok': task was successful, 'error': an error occured."
        ),
        '',
        true
      )
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/FileSystem/filesystemtools.js')
      .setFunctionName('gdjs.fileSystemMobile.saveStringToFile');

    extension
      .addAction(
        'LoadStringFromFile',
        _('Load a text from a file'),
        _(
          'Load a text from a file.'
        ),
        _('Load text from _PARAM1_ into scene variable _PARAM0_'),
        _('Filesystem/Android, IOS'),
        'JsPlatform/Extensions/filesystem_load_file24.png',
        'JsPlatform/Extensions/filesystem_load_file32.png'
      )
      .addParameter('scenevar', _('Scene variable'), '', false)
      .addParameter('string', _('Load path'), '', false)
      .addParameter(
        'scenevar',
        _(
          "(Optional) Variable to store the result. 'ok': task was successful, 'error': an error occured."
        ),
        '',
        true
      )
      .getCodeExtraInformation()
      .setIncludeFile('Extensions/FileSystem/filesystemtools.js')
      .setFunctionName('gdjs.fileSystem.loadStringFromFile');

    return extension;
  },
  runExtensionSanityTests: function(gd, extension) {
    return [];
  },
};
