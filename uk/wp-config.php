<?php

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tk_uk');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'obn[R|}&++6iW~N%N{|]rlPx8?>.k9@~-V-^{uL*Od@|*n8n}}-++3|-h?FvfMWO');
define('SECURE_AUTH_KEY',  '^{T ~QX=2LtU[#j(@jIvrj@2@v%y <#$u>LCr-Bf_.2+P,!&4aTDy-!ev2:vlIaU');
define('LOGGED_IN_KEY',    'yAA8m+;`K[sbsUxVS4SYh-o|e!`vA80X|Og$I(<U~W-L;YXJ> Sr4M.c!mZTWyOJ');
define('NONCE_KEY',        'zM]3v3tbv6]Nn%4xUPK|Rn0!]f@>V.& )cxM-wM`fi|xZ7sJctYuVenmX+FR64[7');
define('AUTH_SALT',        '-!p0`nUz[!ROO&)45y|S^4Lf+>-0#l_m:s=Fd:l,C+3do0wjbf4t2mNIHyvy$:}0');
define('SECURE_AUTH_SALT', '!REfpT4K:mZ+`i-KV^-vq1O}EQ%J@[WkgX6+0?yFC{7g/#c|9;W|;TjHf|iz-7+J');
define('LOGGED_IN_SALT',   '+5jgbokE-~Zs}MB+.~:)0FA#[}mSD:Bh{b_3f$&)eo288dS2MYe2}(lpY|.;dn0c');
define('NONCE_SALT',       '~>jCEZ@SpH2V>+BET+s[gGh^n8j+-Eu,PYem3>(]/F1TTO2_N+;R-4Z|gK(w~jeo');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'tk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
