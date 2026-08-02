# Time Complexity

Time Complexity tells us how the amount of work grows when the input size (`n`) grows.

> Big-O exact operations nahi batata. It tells us how the work grows as the input grows.

## O(1) — Constant Time

Work stays fixed even if input grows.

```js
console.log(arr[0]);
```

```text
10 elements → 1 operation
1000 elements → 1 operation
```

**Time Complexity: O(1)**

---

## O(n) — Linear Time

Work grows with the input size.

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

```text
10 elements → ~10 operations
100 elements → ~100 operations
```

**Time Complexity: O(n)**

---

## O(n²) — Quadratic Time

Usually happens with nested loops where both depend on `n`.

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

```text
n × n = n²
```

**Time Complexity: O(n²)**

---

## Important Rules

### Separate loops → Add

```text
n + n = 2n
O(2n) → O(n)
```

### Nested loops → Multiply

```text
n × n = n²
O(n²)
```

### Ignore constants

```text
O(3n + 20) → O(n)
```

### Keep the dominant term

```text
O(n² + n) → O(n²)
O(n² + n + 10) → O(n²)
```

## Quick Revision

```text
O(1)  → fixed work
O(n)  → work grows with input
O(n²) → nested n × n work
```
