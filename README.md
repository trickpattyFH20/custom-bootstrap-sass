#automate custom bootstrap sass builds
### this module builds a file named '_bootstrap-custom.scss' as a sibling of '_bootstrap.scss' as the docs recommend
[https://github.com/twbs/bootstrap-sass#configuration](https://github.com/twbs/bootstrap-sass#configuration)
### use with gulp / grunt:

#### install
`$ npm install custom-bootstrap-sass --save`

#### include
`var custombs = require('custombootstrapsass')`;

#### config
the config argument is an array of bootstrap components to __*exclude*__ from your build

`var config = [ 'glyphicons', 'grid', 'tables']`;

`custombs(config, pathToBootstrapSassDir)`;

[pathToBootstrapSassDir] is __*optional for bower users*__. if undefined, custombootstrapsass will find the directory using your bower settings
