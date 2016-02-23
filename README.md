[![npm version](https://badge.fury.io/js/custom-bootstrap-sass.svg)](https://badge.fury.io/js/custom-bootstrap-sass)
#automate custom bootstrap sass builds
### this module builds a file named '_bootstrap-custom.scss' as a sibling of '_bootstrap.scss' as the docs recommend
[https://github.com/twbs/bootstrap-sass#configuration](https://github.com/twbs/bootstrap-sass#configuration)
##### dependencies:
######bootstrap-sass
`$ npm install boostrap-sass`

or

`$ bower install bootstrap-sass`

##### install:
`$ npm install custom-bootstrap-sass --save`


#### implement with gulp, grunt, or your own node script:
`var custombs = require('custombootstrapsass');`

`var pathToBootstrapSassDir = 'bower_componets/bootstrap-sass';`

`var config = [ 'glyphicons', 'grid', 'tables'];`

`custombs([config(array)], [pathToBootstrapSassDir(string)])`;

##### config:
[config] - an array of bootstrap components to __*exclude*__ from your build

[pathToBootstrapSassDir] - path to your bootstrap-sass directory. if you installed bootstrap-sass with bower, and are running custom-bootstrap-sass next to .bowerrc or /bower_components/ then this argument is optional, custom-bootstrap-sass will find the folder for you
