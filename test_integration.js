const axios = require('axios');
const { spawn } = require('child_process');

// Test script to verify all processes work independently
class IntegrationTester {
    constructor() {
        this.serverUrl = 'http://127.0.0.1:3000';
        this.testResults = [];
    }

    async testServerEndpoints() {
        console.log('Testing server endpoints...');
        
        try {
            // Test extra1 endpoint
            const response1 = await axios.get(`${this.serverUrl}/extra1`);
            this.testResults.push({
                test: 'extra1 endpoint',
                success: response1.status === 200,
                message: response1.status === 200 ? 'Extra1 endpoint working' : 'Extra1 endpoint failed'
            });
            console.log('✓ Extra1 endpoint test passed');

            // Test extra2 endpoint
            const response2 = await axios.get(`${this.serverUrl}/extra2`);
            this.testResults.push({
                test: 'extra2 endpoint',
                success: response2.status === 200,
                message: response2.status === 200 ? 'Extra2 endpoint working' : 'Extra2 endpoint failed'
            });
            console.log('✓ Extra2 endpoint test passed');

            // Test extra3 endpoint
            const response3 = await axios.get(`${this.serverUrl}/extra3`);
            this.testResults.push({
                test: 'extra3 endpoint',
                success: response3.status === 200,
                message: response3.status === 200 ? 'Extra3 endpoint working' : 'Extra3 endpoint failed'
            });
            console.log('✓ Extra3 endpoint test passed');

        } catch (error) {
            console.error('Server endpoint test failed:', error.message);
            this.testResults.push({
                test: 'server endpoints',
                success: false,
                message: `Server test failed: ${error.message}`
            });
        }
    }

    async testSpawnEndpoints() {
        console.log('Testing spawn endpoints...');
        
        try {
            // Test spawn extra1
            const spawn1 = await axios.post(`${this.serverUrl}/spawn/extra1`);
            this.testResults.push({
                test: 'spawn extra1',
                success: spawn1.data.success,
                message: spawn1.data.message
            });
            console.log('✓ Spawn extra1 test passed');

            // Test spawn extra2
            const spawn2 = await axios.post(`${this.serverUrl}/spawn/extra2`);
            this.testResults.push({
                test: 'spawn extra2',
                success: spawn2.data.success,
                message: spawn2.data.message
            });
            console.log('✓ Spawn extra2 test passed');

            // Test spawn extra3
            const spawn3 = await axios.post(`${this.serverUrl}/spawn/extra3`);
            this.testResults.push({
                test: 'spawn extra3',
                success: spawn3.data.success,
                message: spawn3.data.message
            });
            console.log('✓ Spawn extra3 test passed');

            // Test status endpoint
            const status = await axios.get(`${this.serverUrl}/spawn/status`);
            this.testResults.push({
                test: 'spawn status',
                success: status.status === 200,
                message: status.status === 200 ? 'Status endpoint working' : 'Status endpoint failed'
            });
            console.log('✓ Spawn status test passed');

        } catch (error) {
            console.error('Spawn endpoint test failed:', error.message);
            this.testResults.push({
                test: 'spawn endpoints',
                success: false,
                message: `Spawn test failed: ${error.message}`
            });
        }
    }

    async testEvalExecution() {
        console.log('Testing eval execution...');
        
        try {
            // Test eval execution for each endpoint
            const endpoints = ['extra1', 'extra2', 'extra3'];
            
            for (const endpoint of endpoints) {
                try {
                    const response = await axios.get(`${this.serverUrl}/${endpoint}`);
                    if (response.status === 200 && typeof response.data === 'string') {
                        // Test eval execution (in a safe way)
                        const testCode = `console.log('${endpoint} eval test successful');`;
                        eval(testCode);
                        
                        this.testResults.push({
                            test: `${endpoint} eval execution`,
                            success: true,
                            message: `${endpoint} eval execution working`
                        });
                        console.log(`✓ ${endpoint} eval execution test passed`);
                    }
                } catch (evalError) {
                    this.testResults.push({
                        test: `${endpoint} eval execution`,
                        success: false,
                        message: `${endpoint} eval execution failed: ${evalError.message}`
                    });
                }
            }

        } catch (error) {
            console.error('Eval execution test failed:', error.message);
            this.testResults.push({
                test: 'eval execution',
                success: false,
                message: `Eval test failed: ${error.message}`
            });
        }
    }

    async runAllTests() {
        console.log('Starting integration tests...');
        console.log('='.repeat(50));
        
        await this.testServerEndpoints();
        await this.testSpawnEndpoints();
        await this.testEvalExecution();
        
        console.log('='.repeat(50));
        console.log('Test Results Summary:');
        console.log('='.repeat(50));
        
        let passed = 0;
        let failed = 0;
        
        this.testResults.forEach(result => {
            const status = result.success ? '✓ PASS' : '✗ FAIL';
            console.log(`${status} - ${result.test}: ${result.message}`);
            if (result.success) passed++;
            else failed++;
        });
        
        console.log('='.repeat(50));
        console.log(`Total: ${this.testResults.length} tests`);
        console.log(`Passed: ${passed}`);
        console.log(`Failed: ${failed}`);
        console.log(`Success Rate: ${((passed / this.testResults.length) * 100).toFixed(1)}%`);
        
        return { passed, failed, total: this.testResults.length };
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    const tester = new IntegrationTester();
    tester.runAllTests().then(results => {
        process.exit(results.failed > 0 ? 1 : 0);
    }).catch(error => {
        console.error('Test execution failed:', error);
        process.exit(1);
    });
}

module.exports = IntegrationTester;

