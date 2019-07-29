
Vue.component('message', {

    props : ['title', 'body'],
    data(){
        return{
            isVisislbe: true
        }
    },
    template: `
        <article class="message" v-show="isVisislbe">
            <div class="message-header">
                {{ title }}
                <button type="button" @click="isVisislbe=false">x</button>
            </div>
            
            <div class="message-body">
                {{ body }}
            </div>
        </article>
        `,

    // methods:{
    //     hideModal(){
    //         this.isVisislbe = false
    //     }
    // }
    
})

Vue.component('task-list', {
    template : `
    <div>
        <task v-for="task in tasks">{{task.task}}</task>
    </div>`,

    data(){
        return {
            tasks: [
                { task: "Go to here..", complete: true},
                { task: "Go to there..", complete: false},
                { task: "Go to where..", complete: false},
                { task: "Go to why..", complete: false},
                { task: "Go to heil..", complete: false},
            ]
        }
    }
})

Vue.component('task', {
    template : '<li><slot>{{ message }}</slot></li>',

    // FOR COMPONENTS DATA MUST BE A FUNCTION THAT RETURNS AN OBJECT CAUSE !!ITS NOT LINKED TO ANY SINGLE COMPONENT !!
    data(){
        return {
            message : 'foobar'
        }
    } 
})



new Vue({
    el: '#root'
})