export default require( 'knex' )( {

    client: 'mysql',
    connection: {

        host: 'localhost',

        user: 'root',
        password: 'password',
        port: 3333,

        database: 'birdbase',
        charset: 'utf8',

    }

} );
