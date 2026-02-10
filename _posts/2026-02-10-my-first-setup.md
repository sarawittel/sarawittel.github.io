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
