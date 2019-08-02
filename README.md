# digital-design-demo
A demo repository

---

### Setting up SSH

Run this command in Terminal to create an ssh key

`ssh-keygen -t rsa`

The this one which copies your ssh key to your clipboard

`pbcopy < ~/.ssh/id_rsa.pub`

Go to [Github](https://github.com/settings/keys) and add your key

---

### Basic Git Commands

Clone a repo (make a copy)

`git clone [path to repo]`

Create a new branch named "my_branch" and switch to using it (Make a personal version) 

`git checkout -b <my_branch>`

Add you branch to the remote repo so it's available in the ☁️ (Add your version to the ☁️)

`git push origin <my_branch>`

Gather all your changes to the project

`git add .`

Commit your changes to your branch (Save your version)

`git commit -m "some message about whats changed"`

---

### Helpful tools

A  few helpful tools...

[Getting started with Git](https://rogerdudler.github.io/git-guide/)

[Git Kraken - A no nonsesne Git GUI](https://www.gitkraken.com/)

[Bit Bucket - A service for private and free repos](https://bitbucket.org/)
