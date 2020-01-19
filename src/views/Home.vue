<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome"/> -->
        <Header></Header>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/Header'

export default {
    name: 'home',
    components: {
        // HelloWorld,
        Header
    }
}
</script>
