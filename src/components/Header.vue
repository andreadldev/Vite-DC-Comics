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
        <nav class="container navbar navbar-expand-lg">
            <img src="../assets/img/dc-logo.png" alt="..." />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse list-inline" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
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
    max-width: 100%;
}

img {
    width: 5rem;
}

a:hover:before {
    content: "";
    display: none;
    position: absolute;
    background-color: var(--custom-blue);
    width: 2.1875rem;
    height: 0.1875rem;
    bottom: -10px;
    margin: auto;
    @media screen and ( min-width: 992px ) {
        & {
            display: block;
        }
    }
}
</style>
