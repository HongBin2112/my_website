

//========= brief intro card template =========
card_template = `
  <div class="brief-intro-card-box"> 
    <img class="brief-intro-card-img" v-bind:src="imagePath" v-bind:alt="imageAlt">

    <div class="brief-intro-card-text">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>

  </div>
`
var card_template = Vue.component('card-template', {  
    props: ["title", "content", "imagePath", "imageAlt"],
    template: card_template, 

});


//========= brief intro card box template =========
card_box_template = `
  <card-template 
    v-bind:title="title" 
    v-bind:content="content" 
    v-bind:image-path="imagePath" 
    v-bind:image-alt="imageAlt"
  >
  </card-template>
`
var card_box_template = Vue.component('card-box-template', {  
    props: ["title", "content", "imagePath", "imageAlt"],
    template: card_box_template, 

});






card_vlsi_prop = {
  title: "VLSI",
  content: "VLSI content text", 
  imagePath: "../assets/layout_5to32.png", 
  imageAlt: "VLSI content image."
}

card_iclab_prop = {
  title: "IC LAB",
  content: "IC LAB content text", 
  imagePath: "../assets/ic_lab_fp_hardware_architecture.png", 
  imageAlt: "IC LAB content image." 
}





var cards_vue = new Vue({
  el: "#card-box-area",
  data: {
    cards: [
      card_vlsi_prop,
      card_iclab_prop
    ]
  }
});




