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
            <h2>Guiza</h2>
            <p>Guiza es una ciudad egipcia que queda al oeste del Nilo, cerca de El Cairo. La meseta de Guiza alberga monumentos egipcios emblemáticos, que incluyen tres altas pirámides que se construyeron como mausoleos reales cerca del siglo XXVI a. C. La Gran Pirámide, de mayor tamaño, es la tumba del rey Keops. La Gran Esfinge es una imponente escultura de la cabeza de un hombre en el cuerpo de un león. El Museo del Bote Solar exhibe una embarcación de cedro restaurada, que se encontró cerca de la Gran Pirámide</p>
            <img src="https://images.unsplash.com/photo-1623696903881-e0b4566b753c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">

            <p id="oferta">Esta gran oferta te brindará un hotel para 2 personas, el hotel te brinda todas las comidas, 750USD por una semana.</p>
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