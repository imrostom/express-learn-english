module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '12345678',
            database: 'learn-english'
        }
    },

    staging: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '12345678',
            database: 'learn-english'
        }
    },

    production: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '12345678',
            database: 'learn-english'
        }
    }
};
