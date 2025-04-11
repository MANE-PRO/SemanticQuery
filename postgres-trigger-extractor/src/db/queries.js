const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL;

const client = new Client({
    connectionString: connectionString,
});

client.connect();

const getTriggers = async () => {
    const query = `
        SELECT 
            tgname AS trigger_name,
            pg_get_triggerdef(oid) AS trigger_definition
        FROM 
            pg_trigger
        WHERE 
            NOT tgisinternal;
    `;
    const res = await client.query(query);
    return res.rows;
};

const getTables = async () => {
    const query = `
        SELECT 
            table_name 
        FROM 
            information_schema.tables 
        WHERE 
            table_schema = 'public';
    `;
    const res = await client.query(query);
    return res.rows;
};

module.exports = {
    getTriggers,
    getTables,
};