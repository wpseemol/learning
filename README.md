# Learning TypeScript

First install typescript on you mission.
using this commend `npm i typescript -g`
-g means global typescript install like install node.
usual i am using pnpm os `pnpm install typescript -g`commend for me.

### Check is Install TypeScript install on your mission.

-   To check run the commend.
    ```bash
    tsc -v
    tsc --version
    ```
    as result show TypeScript version show on terminal.

### Run First File or Compile ts file to js

-   First if you want to run ts file. You should Create file. file name mast be end with .ts, .tsx.
-   Then run the comment to compile ts file to js file.

    ```bash
    tsc file_name.ts
    ```

### Now set up our TypeScript environment.

-   TypeScript environment you need to first install node or npm or any package manager.
-   Now need create tsconfig.json file.
-   You can create tsconfig use npm yarn and pnpm run those comments here.

    ```bash
    npm init -y
    npm install typescript --save-dev
    npx tsc --init

    pnpm init -y
    pnpm add typescript -D
    pnpm exec tsc --init

    yarn init -y
    yarn add typescript -D
    yarn tsc --init
    ```

-   Other way without initialize npm project.
-   Run the code.
    ```bash
    tsc --init
    ```

### TypeScript Compiler Wash mode Run

    ```bash
        tsc --watch
    ```
