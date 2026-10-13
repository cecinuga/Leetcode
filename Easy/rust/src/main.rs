mod leet;

use std::thread;

use crate::leet::print_foobar_alternately::FooBar;

fn print_foo() {
    println!("foo");
}
fn print_bar() {
    println!("bar");
}

fn main() {
    let fb = FooBar::new(5);
    thread::scope(|s| {
        let fb = &fb;
        s.spawn(move || fb.foo(print_foo));
        s.spawn(move || fb.bar(print_bar));
    });
}
