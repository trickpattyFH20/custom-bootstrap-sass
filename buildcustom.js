var fs = require('fs'),
    clc = require('cli-color');
    
function customBsSass(config, bootstrapDir){
    
    var config = config || [];
    try{
        var basepath,
            defaultpath;
        try {
            // Query the entry
            defaultpath = 'bower_components/bootstrap-sass/assets/stylesheets/';
            stats = fs.lstatSync(defaultpath);
            if (!stats.isDirectory()) {
                defaultpath = false;
            }
        }
        catch (e) {
            defaultpath = false;
        }
        
        if(bootstrapDir){
            if(fs.lstatSync(bootstrapDir).isDirectory()){
                basepath = bootstrapDir+'/assets/stylesheets/';
            }
        }else if(defaultpath){
            basepath = defaultpath;
        }else if(fs.lstatSync('.bowerrc').isFile()){
            var bowerrc = JSON.parse(fs.readFileSync('.bowerrc'));
            if(bowerrc.directory){
                if(fs.lstatSync(bowerrc.directory).isDirectory()){
                    thispath = bowerrc.directory+'/bootstrap-sass/assets/stylesheets/';
                    try {
                        // Query the entry
                    
                        stats = fs.lstatSync(thispath);
                        if (!stats.isDirectory()) {
                            thispath = false;
                        }
                    }
                    catch (e) {
                        thispath = false;
                        throw 'error 0'
                    }
                    basepath = thispath;
                }
            }else{
                throw 'error 1'
            }
        }else{
            throw 'error 2'
        }
    }
    catch(err){
        console.log(clc.red('error finding a bower installation of bootstrap-sass'))
        console.log(clc.red('custom bootstrap sass not built :\( \n'))
        return;
    }

    var sassfile = '_bootstrap.scss';

    console.log('\n')
    console.log(clc.underline.magenta('building custom bootstrap-sass...'))

    try {
        stats = fs.lstatSync(basepath + '_bootstrap-custom.scss');
        if (stats.isFile()) {
            console.log(clc.yellow('removing previous custom bootstrap sass build...'))
            fs.unlink( basepath + '_bootstrap-custom.scss')
        }
    }
    catch (e) {
        console.log('new build')
    }

    fs.readFileSync(basepath + sassfile).toString().split('\n').forEach(function (line) { 
        var newline = line.toString() + "\n";
        for(var i=0,len=config.length;i<len;i++){
            if(line.indexOf(config[i])!== -1){
                newline = '//' + newline;
            }
        }
        fs.appendFileSync(basepath + "_bootstrap-custom.scss", newline);
    });

    console.log(clc.green('success! \n'))
}
module.exports = customBsSass;
