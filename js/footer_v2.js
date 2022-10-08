// <!-- Vue practice -->
// <!-- footer v2-->


Vue.config.productionTip = false;


const myfooter = Vue.extend({
    template :`
    <div id="footer" class="container text-center">
        <div class="row align-items-center">

            <div class="col">
                <p class="sub-title">Contact Me</p>
                <p>{{contactInfo.myName}}</p>
                <p>✉️ E-mail : {{contactInfo.email}}</p>
            </div>

            <div class="col">
                <a href="#body-top" style="font-weight: bold;">
                    Back to top ▴
                </a>
            </div>

            <div class="col">
                <div class="only-on-screen-larger-500px">
                    <p class="sub-title">{{specialThanks.text}}</p>
                    <p>Zhao, Jian-Xiang</p>            
                    <p><a href="https://github.com/DongDong-Zoez">Dong Dong</a></p>
                    <p>Gino</p>
                </div>
            </div>

        </div>
    </div>
    `,

    data(){
        return{

            contactInfo:{
                myName:"Hong Bin",
                email:"benson890720@gmail.com",
            },

            specialThanks:{
                text : "Special thanks :"
            }
    }}

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
    el:"#app",
    components:{
        myapp:myapp
    }
})

