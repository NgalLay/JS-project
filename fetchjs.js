let url="https://jsonplaceholder.typicode.com/posts";

let userId;
let title;

fetch(url)

.then(result => {return result.json()}) 
// ပထမ promise ဖြစ်ပြီး အောက်မှ data ရ
// text() နဲ့ဆို နောက် then() မှာ JSON.parse() ပြောင်းပေးရ

.then(
    output => {
        console.log(output);
        output.forEach(element => {
        console.log(element.id);

        });
    }
)

.catch(err => console.log(err));


// fetch နည်း.......................................................................

let xtp=new XMLHttpRequest();

xtp.open("GET",url);

xtp.onload=function(){
    if(this.status==200){
        let result=JSON.parse(this.responseText);
         result.forEach(element=> console.log(element.title));
    }

}

xtp.send();

console.log(userId);

// XMLHttpRequest() နည်း.....................................................................