# How to contribute to the project

## The flow

### 1. Setup the project according to [README.md](/README.md)

### 2. [You take an issue](https://github.com/prometheonsystems/bedrock-client2/projects/1?fullscreen=true)

Assign it to yourself (note, it's not any issue - only these that are in the github project called "Development", i.e. verified issues - feel free to take any of these)

### 3. You create your branch along with PR

When you start doing something, create a branch & PR for it from `master` branch.

Have a look for this cli helper: [`git-pr`](https://github.com/JerryGreen/git-pr). By simply doing `git-pr foo` in terminal, it will create a branch, create a blank commit with a message, and will open a github link to create a PR. Quite useful. You should do all of that, whether you're using the cli or not.

> Hint: by doing just `git-pr` - it opens existing PR of branch you're in.

### 4. You code, make commits, push it to your branch

Please, regularly make `git pull origin master` to have your branch stay up to date.

### 5. We discuss it, fix it, until it's merged

In Pull Request, please, note the issues you are fixing, in the description. Make descriptions something like this:

```txt
A lot of core functionality

Closes #11
```

Notice the `Closes #11`

You'll get this:

<p align="center">
  <img src="https://user-images.githubusercontent.com/13215662/57336429-4bcb3e00-713f-11e9-8231-8ff795658585.png" width="384">
</p>

Because of this mark, Github will automatically close related issue(s) when the PR is merged. You may specify several issues per PR in such a way.
