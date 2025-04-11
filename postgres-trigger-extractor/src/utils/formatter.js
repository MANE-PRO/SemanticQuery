function formatTrigger(trigger) {
    return `Trigger Name: ${trigger.trigger_name}
    Event: ${trigger.event}
    Table: ${trigger.table_name}
    Timing: ${trigger.timing}
    Function: ${trigger.trigger_function}
    `;
}

function formatTriggers(triggers) {
    return triggers.map(formatTrigger).join('\n');
}

module.exports = {
    formatTrigger,
    formatTriggers
};