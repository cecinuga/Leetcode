use std::cmp::min;

pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
    let (mut a, mut b) = (0, 0);
    for i in 2..cost.len() + 1 {
        let c = min(b + cost[i - 1], a + cost[i - 2]);
        a = b;
        b = c;
    }

    b
}
