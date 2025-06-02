#!/usr/bin/env node
import { parseArgs } from '../lib/parseArgs.js';
import { generateProject } from '../lib/generator.js';
const options = parseArgs(process.argv);
generateProject(options);
//# sourceMappingURL=index.js.map