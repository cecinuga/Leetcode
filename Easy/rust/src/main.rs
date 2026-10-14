mod leet;

fn reverse_string(s: &mut Vec<char>) {
    let mut spot: char;
    let size = s.len();
    for i in 0..(size / 2) {
        spot = s[i];
        s[i] = s[size - (i + 1)];
        s[size - (i + 1)] = spot;
    }
}

fn main() {
    let input = "ciaoz";
    let iii = &mut input.chars().collect();
    reverse_string(iii);

    for c in iii {
        println!("{}", c)
    }
    println!("{}", input)
}
