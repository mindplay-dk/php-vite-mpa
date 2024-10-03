<?php

use mindplay\vite\Manifest;

require dirname(__DIR__) . '/vendor/autoload.php';

if ($_SERVER['REQUEST_URI'] !== '/') {
    return false; // let `php -S` serve static files
}

$vite = new Manifest(
    manifest_path: dirname(__DIR__) . '/public/dist/.vite/manifest.json',
    base_path: '/dist/',
    dev: getenv('APP_ENV') !== 'production'
);

$tags = $vite->createTags("index.tsx");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vite App</title>
    <link rel="icon" href="<?= $vite->getURL("php.svg") ?>" />
    <?= $tags->preload ?>
    <?= $tags->css ?>
</head>
<body>
    <div id="app"></div>
    <?= $tags->js ?>
</body>
</html>
