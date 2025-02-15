// // const form = document.forms[0];
// // form.onsubmit = (elm) => {
// //   console.log(elm);
// //         elm.preventDefault();

// // };

// function x(event) {
//   event.preventDefault();
//   const form = document.querySelector("#form1");
//   const form_data = new FormData(form);
//   // if(event.target[0])
//   // if(event.target[1])
//   // if(event.target[2])
//   // if(event.target[3])

//   let formObject = {};
//   form_data.forEach((value_data, key_index) => {
//     formObject[key_index] = value_data;
//   });
// Object.keys(formObject).forEach((elm,i)=>{
//     console.log(elm,formObject[elm]);

// })


//   //   form_data.forEach((value_data, key_index) => {
//   //     formObject[key_index] = value_data;
//   //   });
//   // console.log("Form Data:", formObject);
//   //   console.log(JSON.stringify(formObject, null, 2)); // Display as a JSON string
//   return false; // Prevent actual form submission
// }


function onch(ev){

    const data = ev.target;
    const parent = data.parentElement;

    console.log(data,parent);

    if(data.value.length>=2){
        if(!data.nextElementSibling.classList.contains("error-toggle")){
            data.nextElementSibling.classList.add("error-toggle")
        }
        if(!parent.nextElementSibling.classList.add("error-toggle")){
            parent.nextElementSibling.classList.add("error-toggle")
        }

        if(data.type=="text"){
            if(data.name=="first_name"){
                console.log("first name yes");
                if(0){

                }
                else{
                    toggleError(data); // add error class based on element (data)
                }
            }
            if(data.name=="last_name"){
                console.log("last name yes");
            }
        }
    }
    else{
        if(data.classList.contains("input-detail")){
            data.nextElementSibling.classList.remove("error-toggle")
            parent.nextElementSibling.classList.remove("error-toggle")
        }
    }

}



function vali_email(){
    
}
function name(){

}