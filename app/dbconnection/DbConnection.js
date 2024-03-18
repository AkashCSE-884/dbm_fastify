const { Pool } = require('pg');

class DbConnection {
    constructor() {
        if (DbConnection.instance) {
            return DbConnection.instance;
        }
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'plan_',
            password: '1',
            port: 5432,
        });
        DbConnection.instance = this;
    }

    async query(sql, params) {
        const client = await this.pool.connect();
        try {
            const result = await client.query(sql, params);
            return result;
        } finally {
            client.release();
        }
    }
    async callStoredFunction(procedureName, params) {
        const client = await this.pool.connect();
        try {
            const result = await client.query(`SELECT ${procedureName}($1)`, [JSON.stringify(params)]);
            // return result;
            return JSON.stringify(result.rows[0]);
        } finally {
            client.release();
        }
    }
}

module.exports = DbConnection;