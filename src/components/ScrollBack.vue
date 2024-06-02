<template>
    <Transition name="scroller" class="scroller">
        <div v-show="isAppear" class="fixed bottom-16 right-5">
            <i @click="toTop" class="bi bi-arrow-up-square-fill text-5xl w-full h-full transition-all duration-500 text-gray-500 hover:text-slate-400 cursor-pointer"></i>
        </div>
    </Transition>
</template>
<script>
export default {
    name : 'AppScroller',
    data(){
        return{
            isAppear : false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.appear);
    },
    methods:{
        appear(){
            this.isAppear = window.scrollY > 150;
        },
        toTop(){
            console.log('To The Top');
            window.scrollTo({top: 0, behavior:'smooth'});
        }
    }
};
</script>
<style scoped>
.scroller-enter-from, .scroller-leave-to{
    opacity: 0;
}
.scroller-enter-active, .scroller-leave-active{
    transition: all 0.3s ease-in-out;
}
.scroller{
    transition: all 0.3s ease-in-out;
}
</style>