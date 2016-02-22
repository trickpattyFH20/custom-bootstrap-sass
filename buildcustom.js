var fs = require('fs'),
    clc = require('cli-color');
    
function customBsSass(config, bootstrapDir){
    var config = config || [];
    var basepath = bootstrapDir || 'bower_components/bootstrap-sass/assets/stylesheets/';

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