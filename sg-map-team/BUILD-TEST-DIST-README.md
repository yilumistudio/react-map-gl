# Prepare for build
Official build instruction is here: [CONTRIBUTING.md](../CONTRIBUTING.md)  
This document gives us instructions on Linux, Mac and Windows.  
In practice, we use **WSL ubuntu on Windows** to build.  
**WSL ubuntu on Windows** is recommended.  

### WSL ubuntu on Windows
#### Install windows version docker
docker required for running tests.
#### Install WSL and ubuntu
1. On Windows, install WSL. https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview  
2. Install wsl and ubuntu.   
3. `wsl -l` will list all distros
4. Use `wsl --setdefault ubuntu` to set default distro to ubuntu.
5. Don't install vs code linux version. We should use Windows version to remote  
   connect ubuntu wsl.
6. Launch new ubuntu terminal: in windows start menu, type "ubuntu".
7. Some setups is recommended for new ubuntu. Refer to https://github.com/yilumistudio/openmaptiles/blob/buildsgmap/BUILD-SG-MAP.md  
#### Notes
1. don't install linux version docker
2. don't install linux version vs code.
#### Install gh command line tool
```
sudo apt update
sudo apt install gh
```
`gh auth login` will ask for login credential, use token way.
#### Sync repo
```cd ~; 
mkdir -p github/yilumistudio; 
cd github/yilumistudio;
gh repo clone yilumistudio/react-map-gl 
cd react-map-gl
# switch or create dev branch if necessary
```
#### WSL ubuntu, repo setups
Just follow [CONTRIBUTING.md](../CONTRIBUTING.md), **Linux** portion, NOT  
Windows portion.  

#### Use VS code to connect WSL ubuntu
Refer to https://github.com/yilumistudio/openmaptiles/blob/buildsgmap/BUILD-SG-MAP.md   
**Use vs code in wsl ubuntu** section.

# Build
In codespace or windows VS code (connected to WSL ubuntu in this repo), run:
```
yarn install
yarn build
``` 
## Build error
If encounter build errors like `Only named exports may use 'export type'`. Please  
change this line in `node_modules/maplibre-gl/dist/maplibre-gl.d.ts`:  
`export type * from "@maplibre/maplibre-gl-style-spec";` to  
`export * from "@maplibre/maplibre-gl-style-spec";`

These files can be uploaded to hosting server or cdn.  

More commands can be learned from [package.json](../package.json)  

# Test
TODO and issues 
- We changed maplibre-gl to our own version, which is essentially 3.3.*. This is  
  quite different from 2.4.0 which was used in visgl/react-map-gl.
  Need through test to make sure everything works.

# Dist
While offical maplibre dist packages to cdn. We should have our own deploy script  
to deploy to our target server or cdn.
```bash
npm publish --dry-run
npm publish
# to show all versions
npm info @yilumi/react-map-gl versions
# to unpublish a version
npm unpublish @yilumi/react-map-gl@0.1.0 --registry https://verdaccio.yilumi.com
```