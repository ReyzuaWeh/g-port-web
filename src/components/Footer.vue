<template>
    <Transition name="footer-scroll" class="footer-scroll">
        <footer v-show="!isHidden" class="bg-gray-800 p-4 text-white shadow-md mx-0 fixed bottom-0 w-full h-fit">
            <div class="mx-auto flex justify-center items-center">
                <nav>
                    <ul class="flex text-base align-middle space-x-4">
                        <li><a class="hover:text-gray-300"><i class="bi bi-c-circle"></i></a></li>
                        <li><a href="https://github.com/ReyzuaWeh" target="_blank" class="hover:text-gray-300"><i class="bi bi-github"></i></a></li>
                        <li><a href="#" class="hover:text-gray-300">Terms of Service</a></li>
                        <li><a href="#" class="hover:text-gray-300">Support</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    </Transition>
</template>

<script>
export default {
    name: 'AppFooter',
    data(){
        return{
            isHidden : false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.disappear)
    },
    methods:{
        disappear(){
            this.isHidden = window.scrollY > 42;
        }
    }
}
</script>

<style scoped>
.footer-scroll-enter-from, .footer-scroll-leave-to{
    opacity: 0;
}
.footer-scroll-enter-active, .footer-scroll-leave-active{
    transition: all 0.3s ease;
}
.footer-scroll{
    transition: all 0.3s ease;

}
</style>
