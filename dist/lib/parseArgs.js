export function parseArgs(argv) {
    const name = argv[2];
    const type = argv.includes('--type') ? argv[argv.indexOf('--type') + 1] : 'monolith';
    if (!name) {
        console.error('❌ Please provide a project name.');
        process.exit(1);
    }
    return { name, type };
}
//# sourceMappingURL=parseArgs.js.map