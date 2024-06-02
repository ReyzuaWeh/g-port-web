export default {
    methods:{
        scrollToRoute(){
            console.log('cek')
            const toRoute = document.getElementById('route');
            if(!toRoute){
                console.log('Tidak ada View');
                return 0;
            }
            toRoute.scrollIntoView({behavior:'smooth'});
        }
    }
}