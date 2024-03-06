<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * Il file base di configurazione di WordPress.
 *
 * Questo file viene utilizzato, durante l’installazione, dallo script
 * di creazione di wp-config.php. Non è necessario utilizzarlo solo via web
 * puoi copiare questo file in «wp-config.php» e riempire i valori corretti.
 *
 * Questo file definisce le seguenti configurazioni:
 *
 * * Impostazioni del database
 * * Chiavi segrete
 * * Prefisso della tabella
 * * ABSPATH
 *
 * * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Impostazioni database - È possibile ottenere queste informazioni dal proprio fornitore di hosting ** //
/** Il nome del database di WordPress */
define( 'DB_NAME', 'Sql1679360_1' );

/** Nome utente del database */
define( 'DB_USER', 'Sql1679360' );

/** Password del database */
define( 'DB_PASSWORD', 'Simomorello22$@' );

/** Hostname del database */
define( 'DB_HOST', '89.46.111.120' );

/** Charset del Database da utilizzare nella creazione delle tabelle. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Il tipo di collazione del database. Da non modificare se non si ha idea di cosa sia. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chiavi univoche di autenticazione e di sicurezza.
 *
 * Modificarle con frasi univoche differenti!
 * È possibile generare tali chiavi utilizzando {@link https://api.wordpress.org/secret-key/1.1/salt/ servizio di chiavi-segrete di WordPress.org}
 *
 * È possibile cambiare queste chiavi in qualsiasi momento, per invalidare tutti i cookie esistenti.
 * Ciò forzerà tutti gli utenti a effettuare nuovamente l'accesso.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1wL2$4k.GG3MHT_(kN#pt?FdCnL&H{gA!mVkzUVZqZ+0uU>.JWR| B @USh=8ga(' );
define( 'SECURE_AUTH_KEY',  'n!Xf259YDv85W@#:gq&-SX|YFTlK[*s!<^D:MrEEokiXa*=f]s XZ6)UvWqD-Pp+' );
define( 'LOGGED_IN_KEY',    ')E.1d[)&qp]jM~1gD77%K`xjv*M/TxlboHyO}x[IS8#8lfb[nyyR(YFweJR>23eX' );
define( 'NONCE_KEY',        'WA6I.<ZCI$#*wzs}7oy]I9R7O%U)%T]YlG$L{jaxU&/9w9D(E-.Z!nph,zG1oDhQ' );
define( 'AUTH_SALT',        'Z:*?AzU#r= `OiGF2@[U&$9 B?nbclRHe+bqY)V#VK-pG_u}{o8b}y<{Ehv$vE5q' );
define( 'SECURE_AUTH_SALT', 'dOhkV<P>DhY$|/;CYq=b{$Vg?P+MUaxALEGi`UhbI)w/_j)jNhU0>3QnAwb@2YQ}' );
define( 'LOGGED_IN_SALT',   'Eey04y1T51J!=yFd~cEM${/p`Fx6~t.oeg^2oj[c-?>^Zu|{CGcC,a>[xPnr_0Qo' );
define( 'NONCE_SALT',       '6j)($IF M&b.od^+3l${ROv;|l1,Y<38<~2-#bM&/Bml V&=|GW<aDL;BS!4hHR;' );

/**#@-*/

/**
 * Prefisso tabella del database WordPress.
 *
 * È possibile avere installazioni multiple su di un unico database
 * fornendo a ciascuna installazione un prefisso univoco. Solo numeri, lettere e trattini bassi!
 */
$table_prefix = 'sp_';

/**
 * Per gli sviluppatori: modalità di debug di WordPress.
 *
 * Modificare questa voce a TRUE per abilitare la visualizzazione degli avvisi durante lo sviluppo
 * È fortemente raccomandato agli svilupaptori di temi e plugin di utilizare
 * WP_DEBUG all’interno dei loro ambienti di sviluppo.
 *
 * Per informazioni sulle altre costanti che possono essere utilizzate per il debug,
 * leggi la documentazione
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Aggiungere qualsiasi valore personalizzato tra questa riga e la riga "Finito, interrompere le modifiche". */



/* Finito, interrompere le modifiche! Buona pubblicazione. */

/** Path assoluto alla directory di WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Imposta le variabili di WordPress ed include i file. */
require_once ABSPATH . 'wp-settings.php';
