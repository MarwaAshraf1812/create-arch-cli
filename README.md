# Create Arch CLI

A powerful CLI tool for generating pre-configured project architectures with best practices and comprehensive documentation.

## 🚀 Features

- **Multiple Architecture Types**: Generate monolith or microservice-based projects
- **Best Practices**: Templates follow industry standards and proven patterns
- **Comprehensive Documentation**: Each generated project includes detailed architecture guides
- **TypeScript Support**: Full TypeScript configuration out of the box
- **Docker Ready**: Containerization setup included
- **Development Ready**: Complete development environment configuration

## 📦 Installation

### Global Installation
```bash
npm install -g create-arch-cli
```

### Local Development
```bash
git clone <repository-url>
cd create-arch-cli
npm install
npm run build
npm link
```

## 🛠️ Usage

### Basic Usage
```bash
create-arch <project-name> --type <architecture-type>
```

### Examples
```bash
# Create a monolithic application
create-arch my-app --type monolith

# Create a microservices application
create-arch my-services --type microservice
```

### Available Architecture Types

| Type | Description | Best For |
|------|-------------|----------|
| `monolith` | Single deployable application | Small-medium teams, rapid prototyping |
| `microservice` | Distributed services architecture | Large teams, complex domains |

## 🏗️ Architecture Templates

### Monolith Template
- **Structure**: Modular monolith with clear separation of concerns
- **Includes**: Express.js setup, authentication module, database configuration
- **Best For**: New projects, small teams (2-10 developers)
- **Benefits**: Simple deployment, easy debugging, ACID transactions

### Microservice Template
- **Structure**: Independent services with Docker orchestration
- **Includes**: Auth service, User service, Docker Compose setup
- **Best For**: Large teams (15+ developers), complex business domains
- **Benefits**: Independent scaling, technology diversity, fault isolation

## 📁 Generated Project Structure

### Monolith
```
my-app/
├── src/
│   ├── core/
│   │   ├── db.ts
│   │   └── server.ts
│   ├── modules/
│   │   └── auth/
│   │       ├── auth.controller.ts
│   │       ├── auth.route.ts
│   │       └── auth.service.ts
│   └── index.ts
├── package.json
└── README.md
```

### Microservice
```
my-services/
├── auth/
│   ├── src/index.ts
│   ├── package.json
│   └── Dockerfile
├── user/
│   ├── src/index.ts
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- TypeScript knowledge

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd create-arch-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link for local development
npm link

# Test the CLI
create-arch test-project --type monolith
```

### Project Structure
```
src/
├── bin/
│   └── index.ts          # CLI entry point
├── lib/
│   ├── generator.ts      # Project generation logic
│   └── parseArgs.ts      # Command line argument parsing
└── templates/
    ├── monolith/         # Monolith template files
    └── microservice/     # Microservice template files
```

### Adding New Templates

1. **Create Template Directory**:
   ```bash
   mkdir src/templates/new-architecture
   ```

2. **Add Template Files**:
   ```bash
   # Add your template files
   touch src/templates/new-architecture/README.md
   # ... other template files
   ```

3. **Update Generator**:
   ```typescript
   // In src/lib/generator.ts
   } else if (type === 'new-architecture') {
       copyTemplate('new-architecture', targetPath);
   ```

4. **Test**:
   ```bash
   npm run build
   create-arch test --type new-architecture
   ```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Manual testing
npm run build
create-arch test-monolith --type monolith
create-arch test-microservice --type microservice
