function isPrime(x) {
    for (let i = 2; i < x; i += 1) {
        if (x % i === 0) return false;
    }
    return true;
}


for (let i = 1; i < 1000000; i += 1) {
    if (isPrime(i)) {
        self.postMessage({type: 'prime', value: i});
    }
}

self.postMessage({type: 'bye'});
