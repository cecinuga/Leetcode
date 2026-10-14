pub struct MyQueue {
    input: Vec<i32>,
    output: Vec<i32>,
}

impl MyQueue {
    pub fn new() -> Self {
        MyQueue {
            input: Vec::new(),
            output: Vec::new(),
        }
    }

    pub fn push(&mut self, x: i32) {
        self.input.push(x);
    }

    fn shift(&mut self) {
        if self.output.is_empty() {
            while let Some(x) = self.input.pop() {
                self.output.push(x);
            }
        }
    }

    pub fn pop(&mut self) -> i32 {
        self.shift();
        self.output.pop().unwrap()
    }

    pub fn peek(&mut self) -> i32 {
        self.shift();
        *self.output.last().unwrap()
    }

    pub fn empty(&self) -> bool {
        self.input.is_empty() && self.output.is_empty()
    }
}
