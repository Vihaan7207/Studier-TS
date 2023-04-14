<script>
// @ts-nocheck

    import { titlePipe, classes } from "../../stores";
    import ClassButton from "../../components/ClassButton.svelte";
    titlePipe.set('Home');
</script>

{ #each classes as name, i }
    <h1>{i}</h1>
{/each}