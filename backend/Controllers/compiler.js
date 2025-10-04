import { exec } from "child_process";
import fs, { writeFile } from "fs/promises"
const resf = async (data, language, input) => {
    // console.log(data + " " + language)
    if (language == 'python') {
        let path = '/home/ubuntu/Temp/hello.py'
        let file = await writeFile(path, data)
        
        return new Promise((resolve, reject) => {
            const command = `cd /home/ubuntu/Temp/hello.py && python3 ${path}`;
    
            const out = exec(command, { maxBuffer: 10 * 1024 * 1024, timeout: 5000 }, (error, stdout, stderr) => {
               
                if (error) {
                    resolve(error.message)
                    return error.message;
                }
                // console.log("Python Output:", stdout);
                resolve(stdout);
                return stdout
            });
            if (input && input.trim()) {
                out.stdin.write(input);
                out.stdin.end()
            }
        });
    }

    else if (language == 'java') {
        let path = '/home/ubuntu/Temp/Main.java'
        let file = await writeFile(path, data)

        return new Promise((resolve, reject) => {
            const command = `cd /home/ubuntu/Temp/ && java ${path}`;

            const out= exec(command, { maxBuffer: 10 * 1024 * 1024, timeout: 5000 }, (error, stdout, stderr) => {

                if (error) {
                    resolve(error.message)
                    return error.message;
                }
                // console.log("Python Output:", stdout);
                resolve(stdout);
                return stdout
            });
            if (input && input.trim()) {
                out.stdin.write(input);
                out.stdin.end()
            }
        });
    }

    else if (language == 'c') {
        let path = '/home/ubuntu/Temp/hello.c'
        let file = await writeFile(path, data)

        return new Promise((resolve) => {
            const command = `cd /home/ubuntu/Temp/ && gcc ${path} -o helloc && ~/Temp/helloc`;

            const out = exec(command, { maxBuffer: 10 * 1024 * 1024, timeout: 5000 }, (error, stdout, stderr) => {

                if (error) {
                    // console.error("Error executing command:", error);
                    resolve(error.message)
                    return error.message;
                }
                // console.log("Python Output:", stdout);
                resolve(stdout);
                return stdout
            });
            if (input && input.trim()) {
                out.stdin.write(input);
                out.stdin.end()
            }
        });
    }
    else if (language == 'cpp') {
        let path = '/home/ubuntu/Temp/hello.cpp'
        let file = await writeFile(path, data)

        return new Promise((resolve) => {
            const command = `cd /home/ubuntu/Temp/ && g++ ${path} -o hello.out && ~/Temp/hello.out`;

            const out = exec(command, { maxBuffer: 10 * 1024 * 1024, timeout: 5000 }, (error, stdout, stderr) => {

                if (error) {
                    console.error("Error executing command:", stdout);
                    resolve(error.message)
                    return error.message;
                }
                // console.log("Python Output:", stdout);
                resolve(stdout);
                return stdout
            });
            if (input && input.trim()) {
                out.stdin.write(input);
                out.stdin.end()
            }
        });
    }

    // console.log(file)
}

export { resf };
