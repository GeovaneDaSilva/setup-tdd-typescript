## Índice 

* [Título e Imagem de capa](#Título-e-Imagem-de-capa)
* [Badges](#badges)
* [Índice](#índice)
* [Description of the project](#description-of-the-project)
* [Extensions vscode](#extensions-vscode)
* [Jest tests](#jest-tests)
* [Snippets](#snippets)
* [Git Aliases](#git-aliases)
* [Pessoas Contribuidoras](#pessoas-contribuidoras)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)
* [Licença](#licença)
* [Conclusão](#conclusão)


## Description of the project 
```
TDD with Clean architecture NodeJs
```


## Jest Tests
```
Execut tests unit and CI

jest-ci.config.js  = ` npm run test:ci ` .test
jest-unit.config.js  = ` npm run test:unit ` .spec

```

## Snippets 
```
CTRL + SHIFT + P > Configure User Snippets

{
  "Jest Test": {
    "prefix": ["jestTest"],
    "body": [
      "describe('', () => {",
      "  it('', () => {",
      "",
      "  })",
      "})",
      ""
    ],
    "description": "A describe block for Jest"
  }
}

```

## Git Aliases 

```
Configure with Vs Code => git config --global core.editor code
Configure with Nano => git config --global core.editor nano

Copy and Paste

[user]
	email = geovaneartedesign@gmail.com
	name = Geovane Da Silva
[push]
	followTags = true
[core]
	editor = code --wait
[alias]

s = !git status -s

c = !git add --all && git commit -m

b = !git branch -- git branch

amend = !git add . && git commit --amend --no-edit

l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'

```

## Extensions vscode
```
Execut command in IDE CTRL Shift + p

{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    },
    "workbench.iconTheme": "vscode-icons",
    "window.zoomLevel": 1,
    "workbench.colorTheme": "Dracula",
    "editor.fontLigatures": true,
    "editor.fontSize": 14,
    "editor.minimap.enabled": false,
    "editor.renderWhitespace": "boundary",
    "editor.tabSize": 2,
    "explorer.autoReveal": false,
    "terminal.integrated.fontSize": 16,
    "explorer.confirmDelete": false,
    "eslint.alwaysShowStatus": true,
    "vsicons.dontShowNewVersionMessage": true,
    "security.workspace.trust.untrustedFiles": "open",
    "explorer.compactFolders": false,
    
}


```

## Título e Imagem de capa
``` 
{ json: json}

```