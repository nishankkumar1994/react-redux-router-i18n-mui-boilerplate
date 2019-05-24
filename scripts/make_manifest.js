var path = require('path'),
    fs = require('fs'),
    async = require('async'),
    crypto = require('crypto'),
    _ = require('lodash'),
    createHash = require('crypto').createHash,
    recursive = require('recursive-readdir'),
    sourceDirectory = "build",
    manifestFile = sourceDirectory + "\\version-manifest.json";


function ignoreFunc(file, stats) {
  var relativePath = path.relative(sourceDirectory, file);
  var whiteList = ["index.html"];

  if (whiteList.indexOf(relativePath) !=-1 ) {
    return false;
  } else if (!relativePath.startsWith("static")) {
    return true;
  }
  return false;
}

function execute() {
    recursive(sourceDirectory, ["**/*.map", ignoreFunc], function(err, files) {
        files = files.sort();
        var hashQueue = prepareFilesHashQueue(files);
        async.parallelLimit(hashQueue, 10, function(err, result) {
            var filesInfo = {};
            for(var index=0; index< result.length; index++) {
                _.extend(filesInfo, result[index]);
            }
            var versionInfo = require("./../app-version.json");
            var json = {
                    version: versionInfo.version,
                    files: filesInfo
            };

            fs.writeFile(manifestFile, JSON.stringify(json, null, 2), function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });
}

function prepareFilesHashQueue(files) {
    var queue = [];
    for (var i in files) {
        var file = files[i];
        queue.push(hashFile.bind(null, file));
    }
    return queue;
}

function hashFile(filename, callback) {
    var hash = crypto.createHash('md5'),
        stream = fs.createReadStream(filename);

    stream.on('data', function(data) {
        hash.update(data, 'utf8');
    });

    stream.on('end', function() {
        var result = hash.digest('hex'),
            filePath = path.relative(sourceDirectory, filename).replace(new RegExp("\\\\", "g"), "/");
        var fileObj = {};
        fileObj[filePath] = result;
        callback(null, fileObj);
    });
}
execute();
