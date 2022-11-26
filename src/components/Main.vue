<script>
    import json from '../data/dc-comics.json' assert {type: 'json'};
    export default {
        data() {
            return {
                comicsList: json
            }
        }
    }
</script>

<template>
    <main>
        <section class="jumbotron"></section>
        <section class="section-top">
            <div class="container">
                <div class="card" v-for="comic in comicsList">
                    <div class="img-container">
                        <img :src=comic.thumb :alt=comic.series>
                    </div>
                    <span>{{comic.series}}</span>
                </div>
                <button>LOAD MORE</button>
            </div>
        </section>

        <section class="section-bottom">
            <div class="container list-inline">
                <ul>
                    <li>
                        <a href="#"><img src="../assets/img/buy-comics-digital-comics.png" alt="..."/></a>
                        <a href="#">DIGITAL COMICS</a>
                    </li>
                    <li>
                        <a href="#"><img href="#" src="../assets/img/buy-comics-merchandise.png" alt="..."/></a>
                        <a href="#">DC MERCHANDISE</a>
                    </li>
                    <li>
                        <a href="#"><img src="../assets/img/buy-comics-subscriptions.png" alt="..."/></a>
                        <a href="#">SUBSCRIPTION</a>
                    </li>
                    <li>
                        <a href="#"><img src="../assets/img/buy-comics-shop-locator.png" alt="..."/></a>
                        <a href="#">COMIC SHOP LOCATOR</a>
                    </li>
                    <li>
                        <a href="#"><img src="../assets/img/buy-dc-power-visa.svg" alt="..."/></a>
                        <a href="#">DC POWER VISA</a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.jumbotron {
        background-image: url('../assets/img/jumbotron.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 0;
        height: 24rem;
        width: 100%;
    }

.section-top {
    min-height: calc(100% - 9.625rem);
    background-color: var(--custom-black);
    padding: 3rem 0;
    position: relative;
    
    .container {
        margin-bottom: -50px;
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        width: calc((100% / 6) - 20px);
        margin: 0 10px;
        margin-bottom: 30px;
        cursor: pointer;
        .img-container {
            overflow: hidden;
        }

        img{
            width: 100%;
            margin-bottom: -50%;
        }
        span {
            display: block;
            margin-top: 5px;
        }
    }
    button {
        @include btn-primary(var(--custom-blue), white);
        margin-bottom: 2.5rem;
    }
}

.section-top::before {
    content: 'CURRENT SERIES';
    display: block;
    background-color: var(--custom-blue);
    position: absolute;
    padding: 7px 15px;
    top: -18px;
    left: 15%;
}

.section-bottom {
    height: auto;
    background-color: var(--custom-blue);
    padding: 2.5rem 0;
}

.list-inline {
    ul {
        justify-content: space-between;
    }
    li {
        @include flex-inline;
    }
    img {
        width: 3.125rem;
    }
}
</style>
