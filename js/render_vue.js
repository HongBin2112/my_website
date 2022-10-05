
Vue.config.productionTip = false;
//========= brief intro card template =========
card_template = `
  <div v-bind:class="cardBoxClass"> 

    <img class="brief-intro-card-img" v-bind:src="imagePath" v-bind:alt="imageAlt">
  
    <div class="brief-intro-card-text">
      <h3>{{ title }}</h3>
      <hr>
      <span v-html="content"></span>

    </div>

  </div>
`




var card_template = Vue.component('card-template', {  
    props: ["title", "content", "imagePath", "imageAlt", "cardBoxClass"],
    template: card_template, 

});


//=====set items======
let card_vlsi_prop = {
  title: "積體電路設計導論 Final Project",
  content: "Loading...", 
  imagePath: "./assets/layout_5to32.png", 
  imageAlt: "VLSI content image.",
  cardBoxClass: "projects-brief-intro-card-box"
}

let card_iclab_prop = {
  title: "積體電路設計實驗 Final Project",
  content: "Loading...", 
  imagePath: "./assets/ic_lab_fp_hardware_architecture.png", 
  imageAlt: "IC LAB content image." ,
  cardBoxClass: "projects-brief-intro-card-box-column"
}




//=====fetch content & render======
const url_vlsi_content = "https://raw.githubusercontent.com/HongBin2112/my_website/main/assets/text/my_project_vlsi.txt";
const url_iclab_content = "https://raw.githubusercontent.com/HongBin2112/my_website/main/assets/text/my_project_iclab.txt";

let load_cards_content = new Promise((resolve, reject) => {

  fetch_github_file_text(url_vlsi_content).then( (texts) => {
    card_vlsi_prop.content = trans_text_to_html(texts);
  });

  fetch_github_file_text(url_iclab_content).then( (texts) => {
    card_iclab_prop.content = trans_text_to_html(texts);
  });

  resolve("Done"); 
})



load_cards_content.then( (response) => {
  
  var cards_vue = new Vue({
    el: "#my-projects-content",
    data: {
      cards: [
        card_vlsi_prop,
        card_iclab_prop
      ]
    }
  });

})



























function fetch_github_file_text(github_api_url) {

	const headers = new Headers();
	headers.append('Accept', 'application/vnd.github.v3+json');
	
	let promise_result;
	
	promise_result = fetch(github_api_url, {
		method: "GET",
		headers: headers
	})
	.then((response) => {		
		return response.text();
	})
	.catch((error) => {
		console.log(`Error: ${error}`);
	})
	
	return promise_result;
}




function trans_text_to_html(texts){
  let texts_arr = texts.split('\n');
  let content = texts.split('\n');

  for(let i=0; i<texts_arr.length; i++){
      if(texts_arr[i] === "") { content[i] = "<br>" }
      else if(texts_arr[i][0] === "$") { content[i] = texts_arr[i].slice(1);}
      else{
          content[i] = "<p>" + texts_arr[i] + "</p>";
      }
  }

  return content.join("\n");
}




function load_card_vlsi_prop_content() {
  const url_vlsi_content = "https://raw.githubusercontent.com/HongBin2112/my_website/main/assets/text/my_project_vlsi.txt";
  let content = "Loading...";

  fetch_github_file_text(url_vlsi_content).then( (texts) => {
    content = trans_text_to_html(texts);
    return content;
  })
}