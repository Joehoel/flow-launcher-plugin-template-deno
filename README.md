# Flow Launcher Plugin Template for Deno

This repository contains a template for creating a Flow Launcher plugin using the Deno runtime.

> **Warning**
>
> - Since this compiles to an executable, npm modules are not yet supported. See this thread for more information.
> - All packages should directly be imported from the url and not via an import_map.

To be able to test this easily, you need to create a symlink between this directory and the plugin directory from Flow Launcher. This can be done by searching `Flow Launcher UserData Folder` in the launcher and pressing enter. The plugins are found in the `Plugins` folder.

You can create a symlink by opening command prompt (CMD) in Windows and typing

```CMD
mklink /J [project-root] [flow-launcher-plugin-folder]/[folder-name]
```

An example would look like this:

```CMD
mklink /J C:\Users\Joel\code\flow-plugin C:\Users\Joel\AppData\Roaming\FlowLauncher\Plugins\flow-plugin
```
