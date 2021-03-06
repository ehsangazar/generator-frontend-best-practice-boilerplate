const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the pioneering ${chalk.red('generator-nextjs-typescript')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'folderName',
        message: 'What would you like to name the folder?',
        default: 'BoilerPlate-NextJS-TypeScript'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(this.props.folderName)
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath(this.props.folderName+'/.gitignore')
    );
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath(this.props.folderName)
    );
  }
};
