<script setup>
</script>

<template>
    <header>
        <nav class="container">
            <img src="../assets/img/dc-logo.png" alt="...">
            <div class="list-inline">
                <ul>
                <li> <a href="#">CHARACTERS</a> </li>
                <li> <a href="#">COMICS</a> </li>
                <li> <a href="#">MOVIES</a> </li>
                <li> <a href="#">TV</a> </li>
                <li> <a href="#">GAMES</a> </li>
                <li> <a href="#">COLLECTIBLES</a> </li>
                <li> <a href="#">VIDEOS</a> </li>
                <li> <a href="#">FANS</a> </li>
                <li> <a href="#">NEWS</a> </li>
                <li> <a href="#">SHOP</a> </li>
            </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

header {
    background-color: white;
    border-bottom: 1px solid black;
    width: 100%;
    padding: 10px 0;
    position: relative;
}

img {
    width: 80px;
}

a {
    @include a-custom(none, var(--custom-blue));
    display: flex;
    justify-content: center;
}

a:hover:before {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--custom-blue);
    width: 35px;
    height: 3px;
    bottom: 0;
    margin: auto;
}

.container {
    @include flex-inline;
}
</style>
