<?php
error_reporting(0);
/**
 * The base configuration for WordPress
 *
 * @package WordPress
 */

// ** Database settings ** //
define( 'DB_NAME', 'ro_uvt_ri' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST', 'localhost' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

define( 'AUTH_KEY',         'u+QRNC9wchC1ib_,nD4O!7?#uLZY|.!<J)W 4iu(n~F%02y#2}31Gk2dfeV!znwZ' );
define( 'SECURE_AUTH_KEY',  'bj2stWP2#D9nRkx/j^zS][veNXhe`w+oy#thkn,mb~hp]< .5FZ&tH<jk./4]]?l' );
define( 'LOGGED_IN_KEY',    'w{b8tt{3oQ_p_s&t0_k4a],c)1zM{Lz#$6noX<qVPs7u~!Wb,o29c0SaxnMzwBFl' );
define( 'NONCE_KEY',        '6Mf,mm?g7qS_UUm~PjJ:r|C`RM:h6/K7O3&;XkN2u1C/tV<G;(5wIc9?QO_R~6OX' );
define( 'AUTH_SALT',        'M=(55IU5C|UmuAloQT{(1p!{69^k%q{Qt{5t4Pzj TT+eEM3oLO.0gE}&PEkN7F,' );
define( 'SECURE_AUTH_SALT', 'R]8<xeD*-^PK#JwY<sAcHe;K@ek+j9jVRL4V^=Nr?Xx09Uf+?#sR3e8JPJc._U* ' );
define( 'LOGGED_IN_SALT',   'bxrK/P-W~(_;oD~mDACT@TybGO|NB!oi_D/W,A/AK/|JYs4aU&Q@mx8fq%5:I?aO' );
define( 'NONCE_SALT',       '2w0x-$.lKu|OrBfLgJCm`T8@=mPe9:c,8ni.Rp4|f:T/P*e?>4`.IAt!_08.!F[y' );

$table_prefix = 'wp_';

define( 'WP_DEBUG', false );

define( 'WP_HOME', 'http://ro.uvt.ri.test' );
define( 'WP_SITEURL', 'http://ro.uvt.ri.test' );

/* That's all, stop editing! Happy publishing. */

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}
require_once ABSPATH . 'wp-settings.php';