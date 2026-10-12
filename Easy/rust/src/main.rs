mod leet;

use std::thread;

use crate::leet::print_zero_even_odd::ZeroEvenOdd;

fn print_number(n: i32) {
    println!("{}", n);
}

fn main() {
    let zeo = ZeroEvenOdd::new(5);
    thread::scope(|s| {
        let zeo = &zeo;
        s.spawn(move || zeo.zero(print_number));
        s.spawn(move || zeo.even(print_number));
        s.spawn(move || zeo.odd(print_number));
    });
}
