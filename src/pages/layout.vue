<template>
    <div id="my-pages">
        <div class="g-main f-clearfix">
            <div>left menu</div>
            <!-- 右边主体[[ -->
            <router-view></router-view>
            <!-- 右边主体]] -->
        </div>
    </div>
</template>
<style lang="scss">

</style>



<script>

export default {
    data() {
        return {
            
        }
    },
    components:{
       
    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    methods: {
        
    },
}
</script>