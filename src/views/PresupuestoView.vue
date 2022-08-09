<script>
    export default{
        data(){
            return{
                price:"",
            }
        },
        methods:{
            click(){
                const number = parseInt(this.price);
                if(number<750){
                    this.$router.push(`/nopresupuesto`)
                } else {
                    this.$router.push(`/viajes/${number}`);
                }
            }
        }
    }
</script>

<template>
    <div>
        <h1>Hola {{this.$route.params.nombre}} {{this.$route.params.apellido}},<br/> ¿Cuál es tu presupuesto?</h1>
        <form>
            <input type="text" v-model="price">
        </form>
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
        padding-top: 45px;
    }
    input{
        display: block;
        margin: 0 auto;
        height: 75px;
        width: 312px;
        border-radius: 25px;
        border: none;
        margin-top: 105px;
        font-size: 25px;
        color: rgb(0, 99, 0);
    }
    button{
        display: block;
        height: 61px;
        width: 198px;
        margin: 0 auto;
        margin-top: 75px;
        border: none;
        border-radius: 25px;
        color: white;
        font-weight: bold;
        background-color: #3BC740;
    }
</style>