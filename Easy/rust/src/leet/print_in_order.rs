use std::sync::{Condvar, Mutex};

pub struct Foo {
    state: Mutex<State>,
    changed: Condvar,
}

struct State {
    counter: u8,
}

impl Foo {
    fn new() -> Self {
        Foo {
            state: Mutex::new(State { counter: 0 }),
            changed: Condvar::new(),
        }
    }

    fn first<F>(&self, print_first: F)
    where
        F: FnOnce(),
    {
        let mut s = self.state.lock().unwrap();

        // Do not change this line
        print_first();
        s.counter = 1;
        self.changed.notify_all();
    }

    fn second<F>(&self, print_second: F)
    where
        F: FnOnce(),
    {
        // Do not change this line

        let mut s = self
            .changed
            .wait_while(self.state.lock().unwrap(), |s| s.counter != 1)
            .unwrap();

        print_second();
        s.counter = 2;
        self.changed.notify_all();
    }

    fn third<F>(&self, print_third: F)
    where
        F: FnOnce(),
    {
        // Do not change this line

        let s = self
            .changed
            .wait_while(self.state.lock().unwrap(), |s| s.counter != 2)
            .unwrap();
        print_third();
    }
}
