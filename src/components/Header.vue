<script>
    export default {
        data() {
            return {
                menuItems: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop']
            }
        }
    }
</script>

<template>
    <header>
        <nav class="container">
            <img src="../assets/img/dc-logo.png" alt="..." />
            <div class="list-inline">
                <ul>
                    <li v-for="(item, index) in menuItems"><a href="#">{{menuItems[index]}}</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.container {
    @include flex-inline;
}

header {
    background-color: white;
    padding: 0.625rem 0;
    position: relative;
}

img {
    width: 5rem;
}

a:hover:before {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--custom-blue);
    width: 2.1875rem;
    height: 0.1875rem;
    bottom: 0;
    margin: auto;
}
</style>
