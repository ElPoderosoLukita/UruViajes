<script>
    export default{
        methods:{
            click(){
                this.$router.replace('/');
            }
        },
    }
</script>

<template>
    <div>
        <h1>Algo salió mal...</h1>
        <img src="../assets/Dayflow Avatar.png" alt="">
        <p>
            Lastimosamente no tenemos viajes con el presupuesto
            que ingresaste, quizás más adelante ingresemos 
            nuevos viajes, vente en un rato! 
        </p>
        <button @click="click">Enviar</button>
    </div>
</template>

<style scoped>
div{
    height: 100vh;
    background-color: #2F1742;
}
h1{
    color: white;
    text-align: center;
    padding-top: 25px;
}
img{
    display: block;
    margin-left: 25px;
    margin-top: 50px;
    width: 373px;
    height: 180px;
    object-fit: contain;
}
p{
    text-align: center;
    color: white;
    width: 286px;
    margin: 0 auto;
    margin-top: 50px;
}
button{
    display: block;
    height: 61px;
    width: 198px;
    margin: 0 auto;
    margin-top: 50px;
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    background-color: #3BC740;
}
</style>