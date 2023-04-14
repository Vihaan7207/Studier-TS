<script lang='ts'>
    import { titlePipe } from "../stores";
</script>

<svelte:head>
    <title>Studier | {$titlePipe}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='anonymous'>
</svelte:head>

<!-- <nav>
   <ul>
        <li id="logo">Studier</li>
        <li id="about">About</li>
   </ul> 
</nav> -->

<slot/>

<style lang="scss">
    // nav {
    //     border: solid;
    //     width: 100%;
    //     height: 100px;
    //     margin: 0;
    //     padding: 0;
    // }
</style>