# AlwaysMe-Design-Vue3

### ð Desc

-   ð¥ This project is in the development stage and should not be used in the production environment.

    ð» æ­¤é¡¹ç®æ­£å¤äºå¼åæµè¯é¶æ®µï¼åå¿å¨çäº§ç¯å¢ä¸­ä½¿ç¨ã

### ð« Start

-   **çæ¬ï¼** Vue >= 3.2.0

     **æ³¨æï¼** ç±äº Vue3 ä¸åæ¯æ IE æµè§å¨ç¯å¢ï¼AlwaysMe ä¹ä¸åæ¯æ IE æµè§å¨ç¯å¢ã

### ð¦ï¸ Install

-   **æ¨èä½¿ç¨ npm æ yarn çæ¹å¼è¿è¡åç®¡ç**

    `npm install @alwaysme/design`

    `yarn add @alwaysme/design`

### ð§âð» Use

-   `/src/main.js` æä»¶ä¸­å¨å±å¼å¥ `AlwaysMe` ç»ä»¶åº

    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'

    import AlwaysMe from '@alwaysme/design'
    import '@alwaysme/design/style.css'
    createApp(App).use(AlwaysMe).mount('#app')
    ```

-   å¦ææ¯ TypeScript é¡¹ç®ï¼éå¨æ¨çé¡¹ç® `.d.ts` æä»¶ä¸­æ·»å ä»¥ä¸åå®¹ï¼ä»¥é¿åæ¥éãæ æ­¤æä»¶å¯èªè¡åå»ºã

    ```typescript
    declare module '@alwaysme/design' {
        export function install(app: App): void
    }
    ```

###  ð Contributors è´¡ç®è
-   <a href="https://github.com/Alwaysmeo" target="_blank"><img src="https://avatars.githubusercontent.com/u/62600916?v=4" height="52"></a>