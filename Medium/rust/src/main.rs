mod leet;

fn stoi(s: String) -> i64 {
    let mut tot = 0;

    let mut i = 0;
    for b in s.bytes() {
        tot += i64::from(b - b'0') * 10i64.pow((s.len() - i - 1) as u32);
        i += 1;
    }

    tot
}

pub fn multiply(num1: String, num2: String) -> String {
    let n1 = stoi(num1);
    let n2 = stoi(num2);

    (n1 * n2).to_string()
}

fn main() {
    println!("{}", stoi("28745698123".to_string()))
}
