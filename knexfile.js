module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: '127.0.0.1',
            port: 3333,
            user: 'root',
            password: 'password',

            database: 'birdbase',
            charset: 'utf8',

        }

    }

};
