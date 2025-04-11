require('dotenv').config();
const { Client } = require('pg');
const { extractTriggers } = require('./extractors/triggerExtractor');

const connectionString = process.env.DATABASE_URL;

const client = new Client({
    connectionString: connectionString,
});

async function main() {
    try {
        await client.connect();
        console.log('Connected to the database');

        const triggers = await extractTriggers(client);
        
        // Print each trigger in a formatted way
        console.log('\n==== PostgreSQL Triggers ====\n');
        
        triggers.forEach(trigger => {
            console.log(`Trigger: ${trigger.trigger_name}`);
            console.log(`On Table: ${trigger.schema_name}.${trigger.table_name}`);
            console.log(`\nTrigger Definition:`);
            console.log(trigger.trigger_definition);
            console.log(`\nFunction Name: ${trigger.function_name}`);
            console.log(`\nFunction Definition:`);
            console.log(trigger.function_definition);
            console.log('\n' + '='.repeat(50) + '\n');
        });
        
    } catch (error) {
        console.error('Error connecting to the database or extracting triggers:', error);
    } finally {
        await client.end();
        console.log('Database connection closed');
    }
}

main();