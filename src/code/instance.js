export default {
    mounted() {
        window.addEventListener('scroll', this.cekScrollY)
    },
    methods:{
        scrollToRoute(){
            console.log('cek')
            const toRoute = document.getElementById('route');
            if(!toRoute){
                console.log('Tidak ada View');
                return 0;
            }
            toRoute.scrollIntoView({behavior:'smooth'});
        },
        scrollToContact(){
            console.log('Contact')
            const toRoute = document.getElementById('contact');
            if(!toRoute){
                console.log('Tidak ada Contact');
                return 0;
            }
            toRoute.scrollIntoView({behavior:'smooth'});
        },
    }
}