# Code Compiler

Web-based multi-language code compiler with input handling support.

## Features
- Monaco Editor with syntax highlighting
- Supports Python, Java, C, C++
- Interactive input handling for scanf, input(), Scanner
- Real-time compilation and execution

## Prerequisites
```bash
Node.js, Python 3, Java JDK, GCC
```

## Quick Start
```bash
# Clone and setup
git clone <repo-url>
cd Code-compiler

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Run backend (Terminal 1)
cd backend && npm start

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

## API
`POST /compile` - `{code, language, input}` → output

## Project Structure
```
backend/
  Controllers/compiler.js  # Language handlers
  index.js                # Express server
frontend/
  src/Compiler.jsx        # Main React component
```

