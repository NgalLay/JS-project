let url="https://jsonplaceholder.typicode.com/posts";

let xtr=new XMLHttpRequest();

let text=`<tr>
<th>Id</th>
<th>Title</th>
</tr>`;

let text2=`<tr>
<th>Id</th>
<th>Title</th>
</tr>`;

xtr.open("GET",url);
xtr.onreadystatechange=function(){
    if(this.status==200 && this.readyState==4)
    
    {

        let result=JSON.parse(this.responseText);
        // change array

        console.log(result);
        // retrive all from array

        result.forEach(element => 
            {
                 console.log( element.id) ;

                 text+=
                 `
                 <tr>
                    <td>${element.id}</td>
                    <td>${element.title}</td>
                 </tr>
                 `

             });
            
        //retrive special data form object in array

        

      
           const params=(new URL(document.location)).searchParams;
           const userId=params.get('userId');
           let userget=userId;

       //    get data from previous page
            
        
        console.log(userget);
        let ind=result.findIndex(element=>element.id==userget);
        //find index
        console.log(ind);
        
            text2+=
             `
            <tr>
               <td>${result[ind].id}</td>
               <td>${result[ind].title}</td>
            </tr>
            `
       
     //retrive special one

       let content= document.querySelector("#content");
       content.innerHTML=text;

      // add to html
      let content2= document.querySelector("#content2");
      content2.innerHTML=text2;


    }
};

xtr.onprogress=()=>{
    console.log("processing....");
}

xtr.send();