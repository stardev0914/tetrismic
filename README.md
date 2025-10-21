# Independent Process Management System

This system allows `_0x5f2ebc` function in extra1.js, `SetData` function in extra2.js, and code in extra3.js to work independently using spawn processes, with HTTP server communication and eval execution.

## Architecture

### Components

1. **Server (server.js)** - HTTP server running on port 3000
2. **Orchestrator (orchestrator.js)** - Manages all spawned processes
3. **Extra Files** - Modified to spawn independently and communicate via HTTP
4. **Functionality Files** - Original code served by HTTP server for eval execution
5. **Main (main.js)** - Entry point that starts the orchestrator

### Process Flow

1. Server starts on `http://127.0.0.1:3000`
2. Each extra file spawns independently using `child_process.spawn`
3. Processes communicate with server via HTTP requests
4. Server serves functionality code for eval execution
5. Orchestrator manages all processes and provides status monitoring

## File Structure

```
├── server.js                    # HTTP server with spawn management
├── orchestrator.js              # Process manager and coordinator
├── main.js                      # Entry point with orchestrator integration
├── test_integration.js          # Integration test suite
├── extras/
│   ├── extra1.js               # Spawn wrapper for _0x5f2ebc functionality
│   ├── extra2.js               # Spawn wrapper for SetData functionality
│   ├── extra3.js               # Spawn wrapper for keylogger/screenshot functionality
│   ├── extra1_functionality.js  # Original _0x5f2ebc code for eval execution
│   ├── extra2_functionality.js  # Original SetData code for eval execution
│   └── extra3_functionality.js  # Original keylogger/screenshot code for eval execution
```

## API Endpoints

### HTTP Endpoints (for eval execution)
- `GET /extra1` - Returns extra1 functionality code for eval
- `GET /extra2` - Returns extra2 SetData functionality code for eval
- `GET /extra3` - Returns extra3 functionality code for eval

### Spawn Management Endpoints
- `POST /spawn/extra1` - Spawn extra1 process independently
- `POST /spawn/extra2` - Spawn extra2 process independently
- `POST /spawn/extra3` - Spawn extra3 process independently
- `GET /spawn/status` - Get status of all spawned processes
- `POST /spawn/kill/:name` - Kill specific spawned process

### Legacy Endpoints
- `POST /api/ipcheck` - Original API endpoint

## Usage

### Starting the System

1. **Start the server:**
   ```bash
   node server.js
   ```

2. **Start the main orchestrator:**
   ```bash
   node main.js
   ```

3. **Or start individual processes:**
   ```bash
   node extras/extra1.js
   node extras/extra2.js
   node extras/extra3.js
   ```

### Testing

Run the integration test suite:
```bash
node test_integration.js
```

### Process Management

- **Check status:** `GET http://127.0.0.1:3000/spawn/status`
- **Spawn process:** `POST http://127.0.0.1:3000/spawn/extra1`
- **Kill process:** `POST http://127.0.0.1:3000/spawn/kill/extra1`

## Key Features

### Independent Execution
- Each process runs in its own Node.js instance
- Processes are detached and can run independently
- Parent process can exit without affecting child processes

### HTTP Communication
- All communication happens via HTTP requests to `http://127.0.0.1:3000`
- Server acts as central communication hub
- Processes can be controlled remotely via HTTP API

### Eval Execution
- Functionality code is served via HTTP endpoints
- Code is executed using `eval()` function
- Allows dynamic code execution and updates

### Process Management
- Orchestrator tracks all spawned processes
- Provides status monitoring and control
- Graceful shutdown handling

## Security Considerations

⚠️ **Warning:** This system uses `eval()` for code execution, which can be dangerous if not properly secured. Only use in controlled environments.

## Dependencies

- `express` - HTTP server framework
- `axios` - HTTP client for requests
- `child_process` - Process spawning (built-in)
- `fs` - File system operations (built-in)
- `path` - Path utilities (built-in)

## Error Handling

- All processes have error handling for spawn failures
- HTTP requests include proper error handling
- Graceful shutdown on SIGINT/SIGTERM signals
- Process monitoring and automatic cleanup

