const diff_days = (d_one, d_two) =>{
const day_ms = 24 * 60 * 60 * 1000;
const date_one = new Date(d_one);
const date_two = new Date(d_two);
const diffdays = Math.abs(date_one.getTime() - date_two.getTime())/day_ms //math abs é o modulo do node.
console.log(diffdays)
};

diff_days('2021/09/15', '2021/09/17')