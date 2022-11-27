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
                <div class="comics-card" v-for="comic in comicsList">
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

    button {
        @include btn-primary(var(--custom-blue), white);
        margin-bottom: 2.5rem;
    }

    .comics-card {
        width: calc((100% / 2) - 20px);
        margin: 0 10px;
        margin-bottom: 30px;
        cursor: pointer;

        @media screen and ( min-width: 768px ) {
            & {
                width: calc((100% / 4) - 20px);
            }
        }
        @media screen and ( min-width: 992px ) {
            & {
                width: calc((100% / 6) - 20px);
            }
        }
        
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
        flex-direction: column;
        justify-content: space-between;
    }
    li {
        justify-content: center;
        padding: 0.9375rem 0;
    }
    img {
        width: 3.125rem;
        min-height: 3.4375rem;
    }

    @media screen and ( min-width: 768px ) {
            & {
                ul {
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                li {
                    @include flex-inline;
                    width: calc(100% / 4);
                }
                li:nth-child(4), li:nth-child(5) {
                    margin: auto;
                }
            }
        }
    @media screen and ( min-width: 992px ) {
        & {
            li {
                flex-direction: column;
                justify-content: center;
                text-align: center;
                align-items: center;
                width: calc(100% / 6);
            }
            li:nth-child(4), li:nth-child(5) {
                margin: 0;
            }
        }
    }
    @media screen and ( min-width: 1550px ) {
        & {
            li {
                flex-direction: row;
                white-space: nowrap;
            }
        }
    }
}
</style>
