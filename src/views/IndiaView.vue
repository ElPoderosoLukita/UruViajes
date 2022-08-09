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
            <h2>India</h2>
            <p>Nueva Delhi​ es la capital de la República de la India y sede del poder ejecutivo, legislativo y judicial de su Gobierno. Está situada en la metrópolis de Delhi y es uno de sus nueve distritos.</p>
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="">

            <p id="oferta">Esta gran oferta te brindará un hotel para 2 personas, el hotel te brinda el desayuno, 2500USD por una semana y media.</p>
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