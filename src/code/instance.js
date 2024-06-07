import Swal from 'sweetalert2';
export default {
    mounted() {
        window.addEventListener('scroll', this.cekScrollY)
    },
    data(){
        return{
            cvPath : '../assets/documents/CV_GinanjarAlFarizi.pdf',
            contact : {
                email : "",
                name : "",
                message : "",
                berhasil : false
            }
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
        async submitForm(){
            const response = await fetch('https://api.web3forms.com/submit',{
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Accept : 'application/json',
                },
                body :JSON.stringify({
                        access_key: "b46dae03-263f-44bd-83c3-81030bb70c45",
                        name : this.contact.name,
                        email : this.contact.email,
                        message : this.contact.message
                    })
            });
            const result = await response.json();
            if (result.success) {
                console.log(result);
                this.contact.berhasil = true
                this.contact.email = ""
                this.contact.name = ""
                this.contact.message = ""
            }else{
                this.berhasil = false
                Swal.fire({
                    title : "Failed to Send Email",
                    icon: 'warning'
                })
            }
        },
    }
}