# MOONBIX BOT (THIS BOT IS DEPRECATED)

## Table Of Contents

- [MOONBIX BOT](#moonbix-bot)
  - [Table Of Contents](#table-of-contents)
  - [Moonbix Airdrop](#moonbix-airdrop)
  - [Join My Telegram Channel](#join-my-telegram-channel)
  - [Prerequisite](#prerequisite)
  - [BOT FEATURE](#bot-feature)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux \& MAC OS](#linux--mac-os)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [Setup Accounts](#setup-accounts)
  - [Session Troubleshoot](#session-troubleshoot)
  - [Query Troubleshoot](#query-troubleshoot)
  - [Note](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## Moonbix Airdrop

**AIRDROP** : Binance MoonBix (OFFICIAL BY BINANCE)

➡️ Register : https://t.me/Binance_Moonbix_bot/start?startApp=ref_5703822759&startapp=ref_5703822759&utm_medium=web_share_copy

- Daily Check In
- Complete Task
- Play Game
  
📌 Use 1.1.1.1 (Cloudflare DNS) if you can't open the game

📌 I don't know if i can make bot for this or not because it using official binance website which is already secured.

## Join My Telegram Channel
```
                                                          
                      ...                                 
                     .;:.                                 
                    .;ol,.                                
                   .;ooc:'                                
            ..    .;ooccc:'.    ..                        
          .',....'cdxlccccc;.....,'.                      
         .;;..'';clolccccccc:,''..;;.                     
        ':c'..':cccccccccccccc;...'c:.                    
       ':cc,.'ccccccccccccccccc:..;cc:'                   
    ...:cc;.':cccccccccccccccccc:..:cc:...                
   .;';cc;.':;;:cccccccccccccc:;;;'.;cc,,;.               
  .cc':c:.',.....;cccccccccc;.....,..:c:'c:               
  ,x:'cc;.,'     .':cccccc:'.     ',.;cc':x'              
  lO,'cc;.;,       .;cccc:.       ,;.;cc';0l              
 .o0;.;c;.,:'......',''''''......':,.;c;.:0l.             
 .lxl,.;,..;c::::;:,.    .,:;::::c;..,;.,oxl.             
 .lkxOl..  ..'..;::'..''..'::;..'..  ..c0xkl.             
  .cKMx.        .;c:;:cc:;:c:.        .xMKc.              
    ;KX:         ;o::l:;cc;o:.        ;KK;                
     :KK:.       ,d,cd,'ol'o:       .:0K:                 
      ;0NOl:;:loo;. ... .. .;ldlc::lkN0:                  
       .lONNNKOx0Xd,;;'.,:,lKKkk0XNN0o.                   
         .','.. .lX0doooodOXd.  .','.                     
                 .,okkddxkd;.                             
                    'oxxd;.                               
   ........................................                              
   .OWo  xNd lox  xxl Ald   xoc dakkkkkxsx.              
   .OWo  o0W cXW  dM0 MMN   lNK laddKMNkso.               
   .kMKoxsNN oWX  dW0 MMMWO lWK    axM0   .                
   .OMWXNaMX dM0  kM0 MMKxNXKW0    axMk   .                 
   .OMk  dWK oWX XWdx Mxx  XMMO    akMx   .                 
   'OWo  dM0 'kNNXNNd DMD   OWk    aoWd   .                 
   ........................................

```           
                                              
                                              

Anyway i create new telegram channel just for sharing bot or airdrop, join here
[**https://t.me/skeldrophunt**](https://t.me/skeldrophunt).

## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)
- MOONBIX Account , Create [Here](https://t.me/Binance_Moonbix_bot/start?startApp=ref_5703822759&startapp=ref_5703822759&utm_medium=web_share_copy) join and claim join reward

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Play Game
- Auto Complete Missions
- Auto Daily Check IN

## Setup & Configure BOT

### Linux & MAC OS

1. clone project repo
   ```
   git clone https://github.com/Widiskel/moonbix-bot
   ```
   and cd to project dir
   ```
   cd moonbix-bot
   ```
2. Run
   ```
   npm install
   ```
3. Run
   ```
   npm i telegram@2.22.2
   ```
4. Run
   ```
   mkdir -p accounts
   ```
5. Run
   ```
   cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp.js config/proxy_list.js
   ```
6. (If You Use Telegram Sessions) To configure the app, run
   ```
   nano config/config.js
   ```
   and add your telegram app id and hash there.
7. (If You Use Proxy) To configure the app, run
   ```
   nano config/proxy_list.js
   ```
   and add your proxy listh there.
8. to start the app run
   ```
   npm run start
   ```

### Windows

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/Widiskel/moonbix-bot
   ```
   and cd to project dir
   ```
   cd moonbix-bot
   ```
3. Run
   ```
   npm instal
   ```
4. Run
   ```
   npm i telegram@2.22.2
   ```
5. Navigate to `moonbix-bot` directory.
6. Make new folder named `accounts`.
7. Navigate to `config` folder and rename `config_tmp.js` to `config.js` also `proxy_list_tmp.js` to `proxy_list.js`.
8. Now Open and configure `config.js` and `proxy_list.js` (if you use proxy).
9. Now back to the `moonbix-bot` folder
10. To start the app open your `Command Prompt` or `Power Shell` again and run
    ```
    npm run start
    ```
11. If Any error happen contains config or proxy, Copy `config` folder to `app` folder
12. Finally run with
    ```
    node app/index.js
    ```

## Update Bot

To update bot follow this step :

1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
3. start the bot.

## Setup Accounts

1. Run bot `npm run start`
2. Choose option `1` to create account
3. Choose account type `Query` or `Sessions`
4. `Session` Type
   1. Enter Account Name
   2. Enter your phone number starting with countrycode ex : `+628xxxxxxxx`
   3. You will be asked for verification code and password (if any)
   4. Start The bot Again after account creation complete
5. `Query` Type
   1. Enter Account Name
   2. Enter Telegram Query (you can get query by opening bot app on browser > inspect element > storage / application > session storage > telegram init params > copy tg web app data value)
   3. Start The bot Again after account creation complete
6. after bot started choose option 3 start bot

## Session Troubleshoot

If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions.

Example Case

- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`.

## Query Troubleshoot

if your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification.

## Note

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the `accounts` folder to this bot. Also for the telegram APP ID and Hash you can use it from another bot. If you want to use Telegram Query, get your query manually.

if you got error `Invalid ConstructorId` try to run this `npm i telegram@2.22.2`

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks. To get original unencrypted code just DM me on my social media original (index.js and src folder) are Obfuscated during build

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x1f0ea6e0b3590e1ab6c12ea0a24d3d0d9bf7707d`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
