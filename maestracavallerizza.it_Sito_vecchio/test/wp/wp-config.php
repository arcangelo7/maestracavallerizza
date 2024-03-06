<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Sql1417164_3' );

/** MySQL database username */
define( 'DB_USER', 'Sql1417164' );

/** MySQL database password */
define( 'DB_PASSWORD', '2623kx40m7' );

/** MySQL hostname */
define( 'DB_HOST', '89.46.111.179' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'q5attrvrbfsbtrc8n5crcq9xipmjnweqjntyobdy45gz3lvvvbobourzarqrz0gw' );
define( 'SECURE_AUTH_KEY',  'mwbzjiknpewhnrhnaraemtmbsnpp6zjcmet779yz0waqmfattwla5rbdiybokr31' );
define( 'LOGGED_IN_KEY',    'tpjuratekldhsmigr3gcd87ozapjfvznfrt0mnig8jdcxjff0xoj13wf3sy59fi7' );
define( 'NONCE_KEY',        'wkab7ybzy7vbzaik994egyzq1krywoyea7nixunwix19dhlkhvqnvhmfxzcvxq7e' );
define( 'AUTH_SALT',        'bukk8klqfyyius9ml6pjwt7g0xhlkbx4dndy9cutisupgeqi2msgvggjgkcaf4di' );
define( 'SECURE_AUTH_SALT', 'bj8opas6tyypd2n7lrtqgfc4lgnbf0ktomxwl5tlq7r9g3uqzwat4iea2ti1u5xd' );
define( 'LOGGED_IN_SALT',   'ahvrpkpi6mxlayxs1vxy9ptr0gntob2kfbfyod00vykuvtsbyhlrhxxt8m5kmcin' );
define( 'NONCE_SALT',       '3dr2kh93bwrfqb0t35a719ifaia0lbzdewtuposta6lj4cmfwx5erucunntw7yii' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpgj_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
