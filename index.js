function index(tp) {
    var fs = require('fs'); // load fs
    route = tp.file.path().replace(tp.file.title + '.md',''); // take relative path and replace in this path the name of the file.md
    originalpath = tp.file.path(true).replace(tp.file.title + '.md','');
    var files = fs.readdirSync(route); // read all files in the route
    let res = "";
    files.forEach(file => {
        if (file != "desktop.ini"){
            if (file != tp.file.title + '.md'){
                if (file.includes(".md")){
                    res = res + "📝 [["+originalpath+file+"|"+file.replace('.md','')+"]]\n";
                }
            }
        }
    });
    files.forEach(file => {
        if (file != "desktop.ini"){
            if (file != tp.file.title + '.md'){
                if (!file.includes(".md")){
                    res = res + "📁 [["+originalpath+file+"/"+file+"|"+file+"]]\n"; 
                }
            }
        }
    });
    // return "Hello World [[2021-11-09]]"
    return res
}

module.exports = index