
let save=document.querySelector("form");
let user=document.querySelector("#name");
let age=document.querySelector("#age");

//selector

  save.addEventListener('submit',function(event)
  {
    event.preventDefault();

    let user_value=user.value;
    let age_value=age.value;

      if(user_value!=null && age_value!=null)
        { 
              let person=
              {
              name : user_value,
              age : age_value

               }

          setvalue(person);
        
        }
        

  }) 
  // submit 


  let setvalue=function(obj)
    {
       
        let result=getvlaue();

        
      
        if(result==null)
         
        {
            newAry=[];             
            
            // ပထမဆုံး ထည့်တဲ့အခါ array ဖြစ်မှ အောက်မှာ ထပ်ထည့်လို့ ရမည် //old database array မဖြစ်ရင် error //

            newAry.push(obj);
            localStorage.setItem('localdb',JSON.stringify(newAry));

          }

          else
          {
            let find=result.findIndex(user=> user.name== obj.name);
            if(find == -1){
              
              result.push(obj);
              localStorage.setItem('localdb',JSON.stringify(result));
             
            }
            else
            {
              console.log("already");
            }


          }
       

    }
    // to database

 let getvlaue=function()
    {
      let data=localStorage.getItem('localdb');
      return JSON.parse(data);
      
    }

    //from database






