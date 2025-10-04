# Code Compiler

Web-based multi-language code compiler with input handling support.

## Features
- Monaco Editor with syntax highlighting
- Supports Python, Java, C, C++
- Interactive input handling for scanf, input(), Scanner
- Real-time compilation and execution
- Dockerized deployment with EC2 backend

## Prerequisites
```bash
Node.js, Python 3, Java JDK, GCC
```

## Quick Start
```bash
# Clone and setup
git clone https://github.com/damodara2006/PDP-Compiler.git
cd Code-compiler

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Run backend (Terminal 1)
cd backend && npm run dev

# Run frontend (Terminal 2)  
cd frontend && npm run dev
```

## Usage
1. Select language from dropdown (Java/Python/C/C++)
2. Write code in Monaco Editor
3. Add input in textarea for interactive programs
4. Click "Get Output" to compile and run

## Example Programs

**Python with input:**
```python
name = input("Name: ")
print(f"Hello {name}")
```

**C with scanf:**
```c
#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    printf("Number: %d", n);
}
```

## Deployment
- **Frontend**: Can be deployed on any static hosting service
- **Backend**: Deployed on AWS EC2 for secure code compilation

## Docker Usage
```bash
# Build and run backend
cd backend
docker build -t compiler-backend .
docker run -p 8081:8081 compiler-backend

# Build and run frontend
cd frontend
docker build -t compiler-frontend .
docker run -p 5173:5173 compiler-frontend
```

## API
`POST /compile` - `{code, language, input}` → output

## Project Structure
```
backend/
  Controllers/compiler.js  # Language handlers
  index.js                # Express server
  Dockerfile              # Backend container config
frontend/
  src/Compiler.jsx        # Main React component
  Dockerfile              # Frontend container config
```

