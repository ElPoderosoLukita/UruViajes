<script>
    export default{
        data(){
            return{
                numero:0,
                lugares:[
                    {
                        foto:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80',
                        titulo:'Roma',
                        precio:'3.200USD',
                        precioroute:3200,
                        route:'/roma',
                    },
                    {
                        foto:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                        titulo:'India',
                        precio:'2.500USD',
                        precioroute:2500,
                        route:'/india',
                    },
                    {
                        foto:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
                        titulo:'París',
                        precio:'4.500USD',
                        precioroute:4500,
                        route:'/paris',
                    },
                    {
                        foto:'https://images.unsplash.com/photo-1623696903881-e0b4566b753c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        titulo:'Guiza',
                        precio:'750USD',
                        precioroute:750,
                        route:'/guiza',
                    },
                    {
                        foto:'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        titulo:'Barcelona',
                        precio:'2.100USD',
                        precioroute:2100,
                        route:'/barcelona',
                    },
                    {
                        foto:'https://images.unsplash.com/photo-1601779436248-4c269c0a0793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        titulo:'Liverpool',
                        precio:'1.700USD',
                        precioroute:1700,
                        route:'/liverpool',
                    }
                ]
            };
        },
        computed:{
            lugaresDefinitivos(){
                const route = parseInt(this.$route.params.precio)

                return this.lugares.filter(item => route >= item.precioroute);
            }
        },
        methods:{
            clickH1(){
                this.$router.push(`/`)
            },
            click(){
                console.log(this.numero);
            }
        }
    }
</script>

<template>
    <div>
        <h1 @click="clickH1">Uru<span>Viajes</span></h1>
        <div class="viajes" v-for="lugar in lugaresDefinitivos">
            <div class="travel">
                <img :src="lugar.foto" alt="">
                <h1>{{lugar.titulo}}</h1>
                <h2>{{lugar.precio}}</h2>
                <button @click="this.$router.push(lugar.route)">Entrar</button>
            </div>
        </div>
    </div>
</template>

<style scope>
div{
    background-color: #2F1742;
}
h1{
    color: white;
    text-align: center;
    padding-top: 25px;
}
h1 span{
    color: #C8E227;
}
div img{
    width: 164px;
    height: 164px;
    object-fit: cover;
}
.travel{
    margin: 0 auto;
    width: 70%;
    background-color: #2F1742;
    margin-top: 25px;
    border: 1px solid white;
    border-radius: 15px;
    overflow: hidden;
}
.travel img{
    display: block;
    margin: 0 auto;
    width: 100%;
}
.travel h1, h2{
    text-align: left;
    padding-left: 10px;
    color: white;
}
.travel h2{
    margin-top: -20px;
}
button{
    display: block;
    height: 31px;
    width: 150px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    background-color: #3BC740;
}
</style>