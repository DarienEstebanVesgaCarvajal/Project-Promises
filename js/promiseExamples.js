async function examplePromiseRace() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 3000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 2000));
    const result = await Promise.race([promise1, promise2]);
    console.log("Promise.race result:", result);
}

async function examplePromiseAny() {
    const promise1 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 2000));
    const result = await Promise.any([promise1, promise2]);
    console.log("Promise.any result:", result);
}

async function examplePromiseAll() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));
    const results = await Promise.all([promise1, promise2]);
    console.log("Promise.all results:", results);
}
