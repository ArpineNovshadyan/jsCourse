const BIT = 64
const CreateBigVector = (bitsCount) => {
    const arrLength = Math.ceil(bitsCount / BIT);
    const vector = new BigUint64Array(arrLength);
    for (let i = 0; i < arrLength; ++i) {
        vector[i] = BigInt(0);
    }
    return vector;
};

const AddItem = (vector, index) => {
    var bigIndex = Math.floor(index / BIT)
    var smallIndex = index % BIT

    vector[bigIndex] = vector[bigIndex] | BigInt((1 << smallIndex))
};

const RemoveItem = (vector, index) => {
    const bigIndex = Math.floor(index / BIT);
    const smallIndex = index % BIT;
    vector[bigIndex] = vector[bigIndex] & BigInt(~(1 << smallIndex));
};

const GetItem = (vector, index) => {
    const bigIndex = Math.floor(index / BIT);
    const smallIndex = index % BIT;
    const val = vector[bigIndex] & BigInt((1 << smallIndex));
    return val !== BigInt(0);
};

let vector = CreateBigVector(64)
AddItem(vector, 3)
RemoveItem(vector, 3)
const value = GetItem(vector, 3)
console.log('VECTOR', value)
