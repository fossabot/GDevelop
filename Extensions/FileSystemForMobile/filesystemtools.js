/**
 * @memberof gdjs
 * @class fileSystem
 * @static
 * @private
 */

gdjs.fileSystemMobile = {};

/**
 * Save a string into a file.
 * @param {string} text The string to be saved
 * @param {string} savePath Path to the file
 * @param {gdjs.Variable} resultVar The variable where to store the result of the operation
 */
gdjs.fileSystemMobile.saveStringToFile = function(text, savePath, resultVar) {
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    console.log('file system open: ' + fs.name);
    fs.root.getFile(savePath, { create: true, exclusive: false }, function (fileEntry) {
      fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function() {
          resultVar.setString("ok")
        };
        fileWriter.onerror = function (e) {
          resultVar.setString("error")
        };
        
        dataObj = new Blob([text], { type: 'text/plain' });
        fileWriter.write(dataObj);
    });
    }, onErrorCreateFile);
  }, onErrorLoadFs);
}

/**
 * Load a string from a file into a scene variable.
 * @param {gdjs.Variable} resultVar Variable where to store the content
 * @param {string} loadPath Path to the file
 */
gdjs.fileSystemMobile.loadStringFromFile = function(resultVar, loadPath) {
  gdjs.fileSystem.saveStringToFile = function(text, savePath) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
      console.log('file system open: ' + fs.name);
      fs.root.getFile(loadPath, { create: true, exclusive: false }, function (fileEntry) {
        fileEntry.file(function (file) {
          let reader = new FileReader();
          reader.onloadend = function() {
            resultVar.setString(this.result);
          };
          reader.readAsText(file);
      }, onErrorReadFile);
      }, onErrorCreateFile);
    }, onErrorLoadFs);
  }
};
