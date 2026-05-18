<?php
define( 'DB_NAME', 'ro_uvt_ri' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST', '127.0.0.1' );

define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

// Authentication keys (can be anything for local)
define('AUTH_KEY',         'dev');
define('SECURE_AUTH_KEY',  'dev');
define('LOGGED_IN_KEY',    'dev');
define('NONCE_KEY',        'dev');
define('AUTH_SALT',        'dev');
define('SECURE_AUTH_SALT', 'dev');
define('LOGGED_IN_SALT',   'dev');
define('NONCE_SALT',       'dev');

$table_prefix = 'wp_';

define( 'WP_DEBUG', true );

/* That's all, stop editing */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}
require_once ABSPATH . 'wp-settings.php';