<script lang="ts">
	import { onMount } from "svelte";
    import { heavyLoad } from "./utils/heavyLoad";

    onMount(() => {
        heavyLoad();
        console.log("Heavy load done");
    });
</script>

<div>
    HeavyLoaded
</div>