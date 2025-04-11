const { getClient } = require('../db/connection');

const extractTriggers = async (client) => {
  try {
    const triggerQuery = `
      SELECT 
        trig.tgname AS trigger_name,
        n.nspname AS schema_name,
        c.relname AS table_name,
        pg_get_triggerdef(trig.oid) AS trigger_definition,
        p.proname AS function_name,
        pg_get_functiondef(p.oid) AS function_definition
      FROM pg_trigger trig
      JOIN pg_class c ON trig.tgrelid = c.oid
      JOIN pg_namespace n ON c.relnamespace = n.oid
      JOIN pg_proc p ON trig.tgfoid = p.oid
      WHERE NOT trig.tgisinternal
    `;

    const result = await client.query(triggerQuery);
    return result.rows;
  } catch (error) {
    console.error('Error extracting triggers:', error);
    throw error;
  }
};

module.exports = {
  extractTriggers
};