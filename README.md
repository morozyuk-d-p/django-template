# Django project template
## Used technologies
- Python (main back-end language)
    - Pipenv (package manager for handling back-end dependencies)
    - PyDecouple (handling secrets and local environment variables)
- Django (back-end framework)
    - Django Ninja (REST API implementation)
- NPM (handling front-end dependencies)
    - Webpack (assembling required assets and libraries to bundles)
## System requirements
- Linux-based OS
- Python 3.9
- Node.js v16 LTS
## How to use
- Initialize Python environment:
```sh
# create venv
pipenv shell

# install dependencies
pipenv install
```
- Initialize Node.js environment:
```sh
# install dependencies (include development ones)
npm install --save-dev
```
- customize your repo:
    - use ```npm init``` to customize ```package.json```
    - handle your dependencies with Pipenv and NPM
    - edit README.md, LICENSE, etc.
    - generate your own secret key for Django using ```./scripts/privkeygen``` (you should use it in root folder of project!)
- You're ready to work!
## Credits
- Main developer of project: [Morozyuk Daniil](https://github.com/morozyuk-d-p)
