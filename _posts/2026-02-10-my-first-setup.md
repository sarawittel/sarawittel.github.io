---
layout: post
title: "My first setup"
date: 2026-02-10
categories: macos
excerpt: "What is my first setup when I have to configure a new laptop"
tags: [macos, blog, vscode, homebrew]
---

Every time I get a new laptop, I follow the same ritual.
Before installing random apps or writing a single line of code, I take some time to set things up properly.
Over the years, this initial configuration has saved me hours of frustration and helped me stay productive from day one.

In this article, I’ll walk you through the first things I always configure when setting up a laptop from scratch.

## Install Homebrew

Homebrew is the package manager I use to install and manage tools on macOS (and Linux).

Open the terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

When it finishes, follow the on-screen instructions to add Homebrew to your PATH.

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Verify installation

```bash
brew --version
```

## Homebrew

I keep my Homebrew setup intentionally small.  
At the moment, I only install what I really use on every machine.

```bash
brew install gh
```

## Docker

I use Docker primarily to avoid version conflicts.

By isolating each project’s dependencies, I can switch between different stacks without constantly installing, upgrading, or breaking tools on my local machine. This keeps my environment predictable and my setup lightweight.

You can download Docker Desktop from the official website:  
https://www.docker.com/products/docker-desktop/

## Visual Studio Code

These are the core settings I apply to Visual Studio Code on every new machine.
They focus on consistency, formatting, and a clean editing experience.

```json
{
  "workbench.colorTheme": "Sapphire",
  "terminal.integrated.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "terminal.integrated.fontFamily": "Meslo LG M DZ for Powerline,monospace",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "github.copilot.nextEditSuggestions.enabled": true,
  "chat.mcp.gallery.enabled": true,
  "gitlens.ai.model": "vscode",
  "gitlens.ai.vscode.model": "copilot:gpt-4.1",
  "workbench.productIconTheme": "fluent-icons",
  "workbench.iconTheme": "material-icon-theme",
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false
}
```

### Extensions

I keep my extension list intentionally short.  
Most functionality comes from editor settings rather than plugins.

Extensions I always install:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Fluent Icons](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons)
- [Github Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [json](https://marketplace.visualstudio.com/items?itemName=ZainChen.json)
- [Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdown preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [SAP CDS Language Support](https://marketplace.visualstudio.com/items?itemName=SAPSE.vscode-cds)
- [Sapphire Theme](https://marketplace.visualstudio.com/items?itemName=Tyriar.theme-sapphire)
- [Search node_modules](https://marketplace.visualstudio.com/items?itemName=jasonnutter.search-node-modules)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- [Dev container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

I revisit this list regularly and remove anything that no longer provides clear value.
A smaller, well-understood toolset scales better over time.

### Docker in Visual Studio Code

The most important extension is `Dev container` from there you can use `command + shift + P` and look for `Dev container: Rebuild and reopen in container`.
Here you have my `devontainer.json` config file

```json
{
  "name": "SAP Dev Container",
  "build": {
    "dockerfile": "Dockerfile"
  },
  "workspaceFolder": "/workspace",
  "mounts": ["source=${localWorkspaceFolder},target=/workspace,type=bind"],
  "customizations": {
    "vscode": {
      "settings": {
        "terminal.integrated.defaultProfile.linux": "bash"
      },
      "extensions": ["ms-azuretools.vscode-docker"]
    }
  },
  "postCreateCommand": "node -v && npm -v && cf --version && btp --version"
}
```

And the [Dockerfile](https://github.com/sarawittel/cap-development).

## Zsh

I use Zsh as my default shell and keep the configuration focused on clarity and speed rather than heavy customization.

```bash
brew install zsh
```

Open the `.zshrc` file to change the theme

```bash
open ~/.zshrc
```

And change the theme, I use this one:

```bash
ZSH_THEME="cloud"
```

You can check all themes [here](https://github.com/ohmyzsh/ohmyzsh/wiki/themes).
