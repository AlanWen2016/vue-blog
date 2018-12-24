<template>
        <div class="g-main f-clearfix">
            <h3>router: user</h3>
            <div class="box1">
                <input type="text" v-focus>
                <input type="text" v-demo="{ color: 'white', text: 'hello!' }">
            </div>
            <div>
                {{info}}
                <p>{{ $store.state.msg }}</p>
            </div>
            <div>
                Store.count: {{count}}
            <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </p>
            </div>

        </div>

</template>
<style lang="scss">
    .box1{
        width: 300px;
        height: 200px;
    }

</style>



<script>
// import mock from 'Mock/mock.js';
import axios from 'axios';
import { mapState } from 'vuex';
import {UserInfo, AccountLogin} from 'Services/getData.js';
export default {
    data() {
        return {
            info: {}

        }
    },
    components:{

    },
    created(){
        axios.get('user/info')
				.then(res => {
					console.log(res.data);
					this.info = res.data;
					console.log(this.info,1324)
				})
        console.log(this.$route.meta.menu)
    },
    mounted() {

        // this.getData();
        console.log(this.$store)
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (
            this.info = response
        ))

    },
    methods: {

        async getData(){
            let res = await UserInfo();
            console.log(res.data,3333);
        },
        increment () {
            this.$store.commit('increment')
        },
        decrement () {
            this.$store.commit('decrement')
        }
    },
    computed: mapState([
    // 映射 this.count 为 store.state.count
    'count',
    'msg'
    ])
}
</script>
