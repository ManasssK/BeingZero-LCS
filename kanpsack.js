// fractionalknapsack.js
export const kanpsack = (capacity, items) => {
    // Sort by value/weight ratio (descending)
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    let remaining = capacity;

    for (let item of items) {
        if (remaining === 0) break;

        if (item.weight <= remaining) {
            totalValue += item.value;
            remaining -= item.weight;
        } else {
            totalValue += (item.value / item.weight) * remaining;
            remaining = 0;
        }
    }

    return totalValue;
};
