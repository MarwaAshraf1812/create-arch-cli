import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export function generateProject({ name, type }) {
    const targetPath = path.join(process.cwd(), name);
    // Check if directory already exists
    if (fs.existsSync(targetPath)) {
        console.error(`❌ Directory ${name} already exists`);
        process.exit(1);
    }
    fs.mkdirSync(targetPath);
    if (type === 'monolith') {
        copyTemplate('monolith', targetPath);
    }
    else if (type === 'microservice') {
        copyTemplate('microservice', targetPath);
    }
    else {
        console.error(`❌ Unknown project type: ${type}`);
        process.exit(1);
    }
    console.log(`✅ Project ${name} of type ${type} created at ${targetPath}`);
}
function copyTemplate(templateName, targetPath) {
    const templatePath = path.join(__dirname, '../templates', templateName);
    console.log(`📂 Looking for template at: ${templatePath}`); // Debug log
    if (!fs.existsSync(templatePath)) {
        console.error(`❌ Template ${templateName} not found at ${templatePath}`);
        process.exit(1);
    }
    try {
        fs.cpSync(templatePath, targetPath, { recursive: true });
        console.log(`✅ Template ${templateName} copied to ${targetPath}`);
    }
    catch (error) {
        console.error(`❌ Failed to copy template: ${error}`);
        process.exit(1);
    }
}
//# sourceMappingURL=generator.js.map