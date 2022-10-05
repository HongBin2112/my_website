// <!-- Vue practice -->
// <!-- footer -->


Vue.config.productionTip = false;

const contact_infos = Vue.extend({
    template : `
        <div id="footer-email" class="footer-content-box">
            <p>{{email}}</p>
        </div>
    `,

    data(){
        return {
            email:"✉️ E-mail : benson890720@gmail.com"      
        }
    }
})

const back_to_top = Vue.extend({
    template : `
        <div class="footer-content-box">
        <a v-bind:href="anchor">
            <p>{{text}}</p>
        </a>
        </div>
    `,

    data(){
        return {
            anchor:"#tag-body",
            text:"Back to top ▴"      
        }
    }
})


const special_thanks = Vue.extend({
    template : `
        <div id="special-thanks" class="footer-content-box">
            <div class="only-on-screen-larger-500px">
                <p style="font-size: 16px; margin: 6px 0;">{{title}}</p>
                <p>Zhao, Jian-Xiang</p>            
                <p><a v-bind:href=personalWebsite>{{name}}</a></p>
                <p>Gino</p>
            </div>
        </div>
    `,

    data(){
        return {
            title : "Special thanks :",
            name : "DongDong",
            personalWebsite : "https://github.com/DongDong-Zoez"
        }
    }
})


const myfooter = Vue.extend({
    template :`
        <div class="footer-box">
            <contactInfos></contactInfos>
            <backToTop></backToTop>
            <specialThank></specialThank>
        </div>
    `,
    components:{
        contactInfos:contact_infos,
        backToTop:back_to_top,
        specialThank:special_thanks
    }
})


const myapp = Vue.extend({
    template :`
        <div>
            <myfooter></myfooter>
        </div>
    `,
    components:{
        myfooter:myfooter
    }
})


var vm = new Vue({
    el:"#root",
    components:{
        myapp:myapp
    }
})

