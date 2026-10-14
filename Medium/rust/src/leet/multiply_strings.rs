pub fn multiply(num1: String, num2: String) -> String {
    if num1 == "0" || num2 == "0" {
        return "0".to_string();
    }

    let (a, b) = (num1.as_bytes(), num2.as_bytes());
    let (n, m) = (a.len(), b.len());
    let mut res = vec![0u32; n + m];

    for i in (0..n).rev() {
        let da = u32::from(a[i] - b'0');
        for j in (0..m).rev() {
            let db = u32::from(b[j] - b'0');
            let sum = da * db + res[i + j + 1];
            res[i + j + 1] = sum % 10;
            res[i + j] += sum / 10;
        }
    }

    // after the early return the product is non-zero,
    // so at most res[0] is a leading zero
    let start = if res[0] == 0 { 1 } else { 0 };
    res[start..]
        .iter()
        .map(|&d| char::from(b'0' + d as u8))
        .collect()
}
