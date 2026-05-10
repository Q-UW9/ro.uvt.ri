<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ro_uvt_ri' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'u_yH!&YN]v}F!IlZD6#*W(@3)]iR;6x9gAM>7R-Yh97PmHr.PVSmnJupj?y.L`E@' );
define( 'SECURE_AUTH_KEY',  '9sD:1H>6-w}3%dX-[0H%T*tvf rlY.C&W>S;!`7t=ub*~;hb:5g46D-Ghiq=KM3g' );
define( 'LOGGED_IN_KEY',    '1(DgQMVG-A]z+1u?_5|*jc;&R^6yEL[.-#@)AZE=oXgP{t&fQjG17ZV2pm[)1yHH' );
define( 'NONCE_KEY',        'AdSO:OB^&r@PIql}.ptzv-x{f1LKQU-o52[r2l[N>TT ;&D#eagF&F5&a(e ({h)' );
define( 'AUTH_SALT',        'JA|O[*lQm(Sa|[q+.E@Q:2N`*/Gab72.q)#Y>d6;hs?^qu}<+[_{RP[4UpZ.FHa,' );
define( 'SECURE_AUTH_SALT', 'l2GG?CWoX~g+{)f0RknK~Iess:C`jX5*UY`JcZ`WTaDItrp&n#*;<|W 41|AD?E7' );
define( 'LOGGED_IN_SALT',   'nZJaAMM.BR=Nwzu/n{@ja%{3v6y/QYZQP98by$5MNzoT(WK$ie8G0l1$9o?aV$2{' );
define( 'NONCE_SALT',       'fYi9=)p_e<rQke!TiIKtcNJNzjN&GfS#4{>|#N#^A65GMz ;+[ym{8ea)>_{FxRM' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
