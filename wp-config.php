<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'mysql' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X;V]kI^fA0R7(Z0=PC)8u%])e4J.381Q@u^o}w,2zsehBzPB;fxb`bJj(-f*q^/x' );
define( 'SECURE_AUTH_KEY',  'i}.!.@oa[q7/_fm{ZIlON ##[DLl85ce7ffy`m-xLar6q6:]c~^|l-r3oIE`<>M<' );
define( 'LOGGED_IN_KEY',    'va !Wo.AuEc#sSTzp1k_AbWoKJeo&m|F[CUq=lm=|k|i C _37Sx`/^*HH[UJ?>}' );
define( 'NONCE_KEY',        'Br)tA$H* /Srtf{*}O8?6=~ =Q0H@_MZxw *%OYY2KU5-|zFWqf@<[Pydctzy:7r' );
define( 'AUTH_SALT',        'tM1hG1{Lcegt9v}|AXdLNz-.2&=RJr0v7.1#?ik.Vy6R7SLMWV$Lu<Lt1Xfc9agq' );
define( 'SECURE_AUTH_SALT', '.[p=X*tVspB|ZBc+1ON@1 Z*qn{2O(tTB1Faz>UVW@~XFCZ3(9x;PX:IKr}$l;&Y' );
define( 'LOGGED_IN_SALT',   '5j8N66_Y2znEzTz>C!xumkl*0AAfpo[bxl<*+4|/OL&`=O(Y)4Z8KPYU%ln01:Qv' );
define( 'NONCE_SALT',       '&*A@t=ZU!o7@fcM;:7AVG|@0m.M8@C:TM-&i|gb1vq0$<U3Q9j.Ua16?qBA5O(@h' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
