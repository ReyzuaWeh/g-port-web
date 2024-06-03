export default {
    mounted() {
        window.addEventListener('scroll', this.cekScrollY)
    },
    data(){
        return{
            cvPath : '../assets/documents/CV_GinanjarAlFarizi.pdf'
        }
    },
    methods:{
        scrollToRoute(){
            console.log('cek')
            const toRoute = document.getElementById('route');
            if(!toRoute){
                console.log('Tidak ada View');
                return 0;
            }
            window.scrollTo({top:toRoute.offsetTop,behavior:'smooth'});
        },
        scrollTo(sini){
            console.log(sini)
            const toRoute = document.querySelector(sini);
            if(!toRoute){
                console.log(`Tidak ada `, sini);
                return 0;
            }
            toRoute.scrollIntoView({behavior:'smooth'});
        },
    }
}