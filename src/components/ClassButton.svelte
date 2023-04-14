<script lang='ts'>
    export let name: string;
</script>

<svelte:head>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
</svelte:head>

<a href="/study">
    <div>
        <h1>{ name }</h1>
    </div>
</a>

<style lang="scss">
    a {
        text-decoration: none;
        color: black;

        div {
            width: 450px;
            height: 225px;
            // border: solid;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(63, 45, 161, 0.82);
            border-radius: 20px;
            
            h1 {
                color: white;
                font-family: 'Poppins';
            }
        }
    }
</style>