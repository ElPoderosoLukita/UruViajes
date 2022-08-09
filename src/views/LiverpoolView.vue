<script>
    export default{
        data(){
            return{

            };
        },
        methods:{
            clickH1(){
                this.$router.go(-1);
            }
        }
    }
</script>

<template>
        <div>
            <h1 @click="clickH1">Uru<span>Viajes</span></h1>
            <h2>Liverpool</h2>
            <p>Liverpool es una ciudad marítima en el noroeste de Inglaterra, donde el río Mersey se une con el mar de Irlanda. Fue un puerto clave para el comercio y la migración desde el siglo XVIII hasta comienzos del siglo XX, y también es famosa por ser la cuna de Los Beatles. Los ferris cruzan el litoral, donde los icónicos edificios mercantiles conocidos como las "Tres Gracias" (Royal Liver Building, Cunard Building y el Edificio del Puerto de Liverpool) se ubican en el sector del Pier Head</p>
            <img src="https://images.unsplash.com/photo-1601779436248-4c269c0a0793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">

            <p id="oferta">Esta gran oferta te brindará un hotel para 2 personas, el hotel te brinda el desayuno y cena, 1700USD por una semana.</p>
        </div>
</template>

<style scoped>
h1{
    color: white;
    text-align: center;
    padding-top: 25px;
}
h1 span{
    color: #C8E227;
}
h2{
    color: white;
    text-align: center;
    margin-top: 25px;
    font-weight: bold;
}
div{
    /* height: 120vh; */
    background-color: #2F1742;
}
p{
    color: white;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 25px;
}
img{
    display: block;
    width: 90%;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    border-radius: 15px;
}
div #oferta{
    margin-bottom: 25px;
}
</style>