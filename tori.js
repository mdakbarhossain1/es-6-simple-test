//1. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const products = {
    name: 'POCO C3 phone', price: 12000, color: 'blue', camera: '12MP', storage: '32GB', laptop: {
        name: 'Hp ', price: 34000, color: 'gray',
        walton: { name: 'walton', price: 35000, model: 'corei3', color: 'silver' },
    }
};
const myName = 'Lipi Rani';
const age = 21;
const mySelf = `My name is ${ myName } I am ${ age +1} years old.I have a ${ products.name } which price was ${ products.price + 2000 } which color is ${ products.color } I also have a ${ products.laptop.name } laptop  which price is ${ products.laptop.price + 1000 } I also have an ${ products.laptop.walton.name } laptop which price is ${ products.laptop.walton.price + 5000 }`
// console.log(mySelf)

//2. একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

// const multiply = (num=9) => num/5;
const division = num => num / 5;
const myNumber = division(45);
//  console.log(myNumber)

//3. তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে।

const calculate = (num1, num2) => (num1 + 2) * (num2 + 2)
const result = calculate(7, 3)
// console.log(result)
// 3.2 এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
const multiply = (num1, num2, num3 = 5) => num1 * num2 * num3;
const multipleNumer = multiply(2, 3, 8)
// console.log(multipleNumer)

//4.এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে।
const multiple = (x, y) => {
    const add1 = x + 2;
    const add2 = y + 2;
    const result = add1 * add2;
    return result;
}
const myResult = multiple(7, 3)
// console.log(myResult)

// 5.অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const numbers = [12, 3, 5, 32, 75, 34, 22, 25, 15];
const results = numbers.map(number => number * 5)
// console.log(results)

//6.অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const numbers2 = [12, 3, 5, 32, 75, 34, 22, 25, 15]
const oddNumbers = numbers.filter(number => number % 2)
// console.log(oddNumbers)

//7. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const phones = [
    { name: 'sumsung phone', price: 7000, storage: '8GB' },
    { name: 'walton phone', price: 5000, storage: '4GB' },
    { name: 'poco c3', price: 12000, storage: '32GB' },
    { name: 'oppo ', price: 20000, storage: '64GB' },
    { name: 'htc ', price: 21000, storage: '64GB' },
    { name: 'xaoimi ', price: 20000, storage: '64GB' }
];
const cheapest = phones.find(phone => phone.price == 5000)
// console.log(cheapest) 

const products1 = [{
    name: 'POCO C3 phone', price: 12000, color: 'blue', camera: '12MP', storage: '32GB',
    laptop: { name: 'Hp ', price: 35000, color: 'gray' },
    walton: { name: 'walton', price: 35000, model: 'corei3', color: 'silver' },
},
{
    name: 'htc', price: 17000, color: 'black', camera: '12MP', storage: '32GB',
    laptop: { name: 'dell ', price: 30000, color: 'gray' },
    walton: { name: 'walton', price: 32000, model: 'corei3', color: 'silver' },
},
];
const searchPrice = products1.find(product => product.laptop.price == 30000)
//  console.log(searchPrice)

//8. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const person1 = { name: 'Hablu', address: 'Gazipur', phone: '0170432170' }
const { name, address, phone } = person1
// console.log(name, address, phone)

//9. array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const [, , three] = ['habul', 'dabul', 'babul', 'kabul', 'abul']
//  console.log(three)

//10.তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

const add = (x, y, z = 7) => x + y + z;
const addResutl = add(3, 4, 50)
//console.log(addResutl)

//11.একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
//12. অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
const pHero = {
    companyName: 'programming hero',
    course: 'web development',
    webDevelopment: {
        milestone1: 'HTML', modules: [1, 2, 3, 4, 5, 6],
        milestone2: 'CSS',
        milestone3: 'bootstrap',
        milestone4: {
            javascript: 'basic javascript',
            problemSolving: {
                array: ' array length odd-even number from array',
                object: 'searching product form an object property'
            },
            milestone5: {
                DOM: 'addevent lisener',
                event: 'event bubble',
                event2: 'delegate'
            },
            milestone6: 'ES6'
        },
    }
};

const { DOM, event, event2, milestone6 } = pHero.webDevelopment.milestone4.milestone5
const { modules } = pHero.webDevelopment
console.log(DOM, event, event2)
console.log(modules)