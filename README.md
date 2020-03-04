# BARBER SHOP 
## *A web application developed by __el_g__  web solutions*
# 📖 Documentation
### Cloning and Installation
```sh
$ git clone https://github.com/lgarcia82/barbershop.git
$ cd barbershop
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
