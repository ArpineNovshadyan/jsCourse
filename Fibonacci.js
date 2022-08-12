function Fibonachi(n) {
    Fibonachi.cach = Fibonachi.cach ?? {};
    if (n <= 1) {
        Fibonachi.cach[n] = n;
        return n;
    }
    if (!Fibonachi.cach[n]) {
        Fibonachi.cach[n] = Fibonachi(n - 1) + Fibonachi(n - 2);
    }
    return Fibonachi.cach[n];
}

const FibonachiArr = [0, 1, 1, 2, 3, 5, 8];

console.log(Fibonachi(6));