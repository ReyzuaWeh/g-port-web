<template>
    <Transition name="scroller">
        <div class="fixed bottom-10 right-5">
            {{ isAppear }}
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
            this.isAppear = window.screenY < 45;
        }
    }
};
</script>