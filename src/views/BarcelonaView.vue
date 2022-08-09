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
            <h2>Barcelona</h2>
            <p>Barcelona, la capital cosmopolita de la región de Cataluña en España, es conocida por su arte y arquitectura. La fantástica iglesia de la Sagrada Familia y otros hitos modernistas diseñados por Antoni Gaudí adornan la ciudad. El Museo Picasso y la Fundación Joan Miró muestran el arte moderno de los artistas que dan origen a sus nombres. El Museo de Historia de Barcelona (MUHBA) incluye varios sitios arqueológicos romanos.</p>
            <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">

            <p id="oferta">Esta gran oferta te brindará un hotel para 4 personas, el hotel te brinda el desayuno y cena, 2100USD por dos semanas.</p>
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