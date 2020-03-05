![image](client/src/images/iconfinder_app_type_hairdresser_512px_GREY_339932.png)
# BARBER SHOP 
## *A web application developed by __el_g__  web solutions*
- Lee Garcia
- Jake Garcia

# 📖 Documentation
### Cloning and Installation
#### Back-end
```sh
$ git clone https://github.com/lgarcia82/barbershop.git
$ cd project-barbershop
$ npm install
```
#### Front-end
```sh
$ cd client
$ npm install
```

## New Branch Naming Conventions
### New Branch Prefix 1
| Prefix | Ext | Definition
| --- | --- | --- |
|`wip` | work in progress | should be branched from master branches
| `feat` | feature | should be branched from wip branches
| `bug` | bug | bug fix or experiment
| `junk` | junk | branch intended to be thrown away

### New Branch Prefix 2
| Prefix | Ext | Definition
| --- | --- | --- |
| `fe` | front-end | changes or additions pertaining to application's UI
| `be` | back-end | changes or additions pertaining to applications API
| `misc` | miscellanous | changes or additions pertaining to all other components of application

#### ***new branch creation example***
*(ex. 1)*
```sh
$ git checkout -b wip-fe-[your-new-webpage]
```
*(ex. 2)*
```sh
$ git checkout -b feat-be-[your-new-endpoints]
```
### git Commit Message Formatting:
| Type | Message |
| --- | --- |
| New feature | `feature: my description of my new feature` |
| Refactor / Cleanup | `refactor: my description of changes made` |
| Bug fix | `fix: my description of the problem and resolution` |
| Required changes | `chore: my description of the required updates or features` |

### Quick `git` Review
| Command | Description |
| --- | --- |
| `git status` | Review local uncommitted changes on current branch. |
| `git add .` | Add all local uncommitted changes to the staging area. |
| `git commit -m "description"` | Commit all staged changes to the current branch with a `"description"`. |
| `git branch` | Display all branches. |
| `git checkout branch-name` | Switch to `branch-name` branch. |
| `git checkout -b name-of-new-branch` | Create a new branch from the current checked-out branch named `name-of-new-branch`. |
| `git pull origin master` | Pull any changes from the `master` branch. Replace `master` with any branch name. |
| `git push origin branch-name` | Push local committed changes to `branch-name` branch. |
