<script>
    import sectionBottom from "./MainSection-bottom.vue";
    import json from '../data/dc-comics.json' assert {type: 'json'};
    export default {
        components: {
            sectionBottom
        },
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

        <sectionBottom/>
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
</style>
