# PHP-Vite-MPA

Example MPA based on [`mindplay/vite`](https://github.com/mindplay-dk/php-vite).

**How does it work?**

* The `client` folder contains the client-side sources.

* The `public` folder is the public webroot.

* In production mode, Vite publishes compiled sources from `client` into `public/dist`.

* In development mode, Vite runs as a proxy server in front of PHP, enabling HMR.

* The `server` folder contains the `index.php` front-controller.

* In `index.php`, the `mindplay/vite` package is used to parse `manifest.json` and emit tags.

Have a look in `index.php` and `vite.config.ts` for more comments and explanations.

## Install

```bash
nvm use
composer install
```

## Local Development

```bash
composer start
```

⚠️ **NOTE:** Vite displays the wrong URL on startup - you must remove `/dist` from the URL after opening. (if you know how to fix this, please open an issue or PR in the [main repository](https://github.com/mindplay-dk/php-vite/issues).)

## Production Preview

```bash
composer preview
```

## Production Build

```bash
composer build
```
