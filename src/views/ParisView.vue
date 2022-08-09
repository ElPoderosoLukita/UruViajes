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
            <h2>París</h2>
            <p>París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré.</p>
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="">

            <p id="oferta">Esta gran oferta te brindará un hotel para 3 personas, el hotel te brinda todas las comidas, 4500USD por tres semanas.</p>
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