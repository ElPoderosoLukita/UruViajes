<script>
    export default{
        data(){
            return{
                nombre: "",
                apellido: "",
            };
        },
        methods:{
            click(){
                this.$router.push(`/presupuesto/${this.nombre}/${this.apellido}`)
            }
        }
    }
</script>

<template>
    <div>
        <h1>Te pediremos algunos datos, no te molestes...</h1>
    
        <form>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="nombre">

            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" v-model="apellido">
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
        padding-top: 25px;
        /* font-weight:540; */
    }
    form{
        display: flex;
        flex-direction: column;
        width: 75%;
        margin: 0 auto;
        margin-top: 50px;
    }
    input{
        margin-bottom: 25px;
        height: 36px;
        border-radius: 15px;
        border: none;
    }
    label{
        color: white;
        font-style: italic;
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