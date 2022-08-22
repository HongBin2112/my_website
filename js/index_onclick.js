const options_elements = document.getElementsByClassName("content-card-box");
const options_list_element = document.getElementById("content-options-list");

options_list_element.addEventListener('click', function(e){ 
    content_options_onclick(e.target.id);
});




function content_options_onclick(clicked_btn_option_id){
    
    if(!clicked_btn_option_id || clicked_btn_option_id == "content-options-list"){
        //if clicked_btn_option_id undefined
        // or id == content-options-list
        //break
        return 0;
    }

    let clicked_option_id = clicked_btn_option_id.replace("btn-", "");

    for(let i=0; i<options_elements.length; i++){
        let option_element = options_elements[i];

        if(option_element.id != clicked_option_id){
            option_element.style.visibility = "hidden";
            option_element.style.opacity = "0";
            
            setTimeout(function() {
                option_element.style.display = "none";
              }, 300);
        } else {
            option_element.style.visibility = "visible";
            
            setTimeout(function() {
                option_element.style.display = "block";
                option_element.style.opacity = "1";
              }, 300);
        }            
    }
}




function print(variable){
    console.log(variable);
}