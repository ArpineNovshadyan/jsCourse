// & Operator return 1 in each bit position where both are 1

const IsDegreeOfTwo = (number) => {
    return (number & (number - 1)) === 0
}

