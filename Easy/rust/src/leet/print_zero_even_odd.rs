use std::sync::{Condvar, Mutex};

pub struct ZeroEvenOdd {
    n: i32,
    state: Mutex<State>,
    changed: Condvar,
}

struct State {
    counter: i32,
    zero: bool,
}

impl ZeroEvenOdd {
    pub fn new(n: i32) -> Self {
        ZeroEvenOdd {
            n,
            state: Mutex::new(State {
                counter: 0,
                zero: true,
            }),
            changed: Condvar::new(),
        }
    }

    // printNumber(x) prints the integer x
    pub fn zero<F>(&self, print_number: F)
    where
        F: Fn(i32),
    {
        let mut counter = self.state.lock().unwrap().counter;
        while counter < self.n {
            let mut state = self
                .changed
                .wait_while(self.state.lock().unwrap(), |s| s.zero == false)
                .unwrap();

            print_number(0);
            state.zero = false;
            state.counter += 1;
            counter = state.counter;
            self.changed.notify_all();
        }
    }

    pub fn even<F>(&self, print_number: F)
    where
        F: Fn(i32),
    {
        for i in (2..=self.n).step_by(2) {
            let mut state = self
                .changed
                .wait_while(self.state.lock().unwrap(), |s| {
                    !(s.counter % 2 == 0 && !s.zero)
                })
                .unwrap();

            print_number(state.counter);
            state.zero = true;
            self.changed.notify_all();
        }
    }

    pub fn odd<F>(&self, print_number: F)
    where
        F: Fn(i32),
    {
        for i in (1..=self.n).step_by(2) {
            let mut state = self
                .changed
                .wait_while(self.state.lock().unwrap(), |s| {
                    !(s.counter % 2 == 1 && !s.zero)
                })
                .unwrap();

            print_number(state.counter);
            state.zero = true;
            self.changed.notify_all();
        }
    }
}
