[![npm version](https://badge.fury.io/js/custom-bootstrap-sass.svg)](https://badge.fury.io/js/custom-bootstrap-sass)
#automate custom bootstrap sass builds
### this module builds a file named '_bootstrap-custom.scss' as a sibling of '_bootstrap.scss' as the docs recommend
[https://github.com/twbs/bootstrap-sass#configuration](https://github.com/twbs/bootstrap-sass#configuration)
#### dependencies:
######bootstrap-sass
`$ npm install boostrap-sass`

or

`$ bower install bootstrap-sass`

#### install:
`$ npm install custom-bootstrap-sass --save`

#### include:
`var custombs = require('custombootstrapsass')`;

#### config:
the config argument is an array of bootstrap components to __*exclude*__ from your build

`var config = [ 'glyphicons', 'grid', 'tables']`;

#### implement with gulp, grunt, or your own node script:
`custombs([config(array)], [pathToBootstrapSassDir(string)])`;

[pathToBootstrapSassDir] is __*optional for bower users*__. if undefined, custombootstrapsass will find the directory using your bower settings
