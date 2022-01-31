Script which generates index file. Working in [Obsidian.md](https://obsidian.md/)

## Installation

Use the following plugins: [Templater](https://github.com/SilentVoid13/Templater)

Set the default folder for the JS scripts

![Script](Pics/S.PNG)

Copy index.js into this folder

![Files](Pics/F.PNG)

Then under templates create template for index file like

```
<% tp.user.index(tp) %>
```

Then one is able to use command from templater submenu

![Command](Pics/C.PNG)

To insert files and subfolders into current file

