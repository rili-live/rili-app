// NOTE: Only the utility filenames listed here will be available from the final build in `/lib`
// This allows tree-shaking

const utilities = [
    // Constants
    'constants/index',

    // Utilities
    'calculate-pages',
    'localization',
    'promiser',
    'scroll-to',
    'print-logs',
];

module.exports = utilities;
