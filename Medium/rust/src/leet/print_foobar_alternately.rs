use std::sync::{Condvar, Mutex};

pub struct FooBar {
    n: usize,
    state: Mutex<State>,
    cond: Condvar,
}

struct State {
    state: bool,
}

impl FooBar {
    pub fn new(n: usize) -> Self {
        FooBar {
            n,
            state: Mutex::new(State { state: false }),
            cond: Condvar::new(),
        }
    }

    pub fn foo<F>(&self, print_foo: F)
    where
        F: Fn(),
    {
        for _ in 0..self.n {
            // printFoo() outputs "foo". Do not change or remove this line.
            let mut state = self
                .cond
                .wait_while(self.state.lock().unwrap(), |s| s.state == true)
                .unwrap();

            state.state = true;
            print_foo();
            self.cond.notify_all();
        }
    }

    pub fn bar<F>(&self, print_bar: F)
    where
        F: Fn(),
    {
        for _ in 0..self.n {
            // printBar() outputs "bar". Do not change or remove this line.
            let mut state = self
                .cond
                .wait_while(self.state.lock().unwrap(), |s| s.state == false)
                .unwrap();

            state.state = false;
            print_bar();
            self.cond.notify_all();
        }
    }
}
