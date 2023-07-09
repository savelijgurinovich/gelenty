<?php
if (!defined('ABSPATH')) exit;
// autoload_real.php @generated by Composer
class ComposerAutoloaderInit89ffb6dda1a3a0c25f08e8a1dbb18a8f
{
 private static $loader;
 public static function loadClassLoader($class)
 {
 if ('Composer\Autoload\ClassLoader' === $class) {
 require __DIR__ . '/ClassLoader.php';
 }
 }
 public static function getLoader()
 {
 if (null !== self::$loader) {
 return self::$loader;
 }
 require __DIR__ . '/platform_check.php';
 spl_autoload_register(array('ComposerAutoloaderInit89ffb6dda1a3a0c25f08e8a1dbb18a8f', 'loadClassLoader'), true, true);
 self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
 spl_autoload_unregister(array('ComposerAutoloaderInit89ffb6dda1a3a0c25f08e8a1dbb18a8f', 'loadClassLoader'));
 require __DIR__ . '/autoload_static.php';
 call_user_func(\Composer\Autoload\ComposerStaticInit89ffb6dda1a3a0c25f08e8a1dbb18a8f::getInitializer($loader));
 $loader->register(true);
 $includeFiles = \Composer\Autoload\ComposerStaticInit89ffb6dda1a3a0c25f08e8a1dbb18a8f::$files;
 foreach ($includeFiles as $fileIdentifier => $file) {
 composerRequire89ffb6dda1a3a0c25f08e8a1dbb18a8f($fileIdentifier, $file);
 }
 return $loader;
 }
}
function composerRequire89ffb6dda1a3a0c25f08e8a1dbb18a8f($fileIdentifier, $file)
{
 if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
 $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;
 require $file;
 }
}