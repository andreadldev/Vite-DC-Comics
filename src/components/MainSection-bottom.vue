<script>
    export default {
        data() {
            return {
                linkList: [
                    {
                        src: 'src/assets/img/buy-comics-digital-comics.png',
                        name: 'DIGITAL COMICS'
                    },
                    {
                        src: 'src/assets/img/buy-comics-merchandise.png',
                        name: 'DC MERCHANDISE'
                    },
                    {
                        src: 'src/assets/img/buy-comics-subscriptions.png',
                        name: 'SUBSCRIPTION'
                    },
                    {
                        src: 'src/assets/img/buy-comics-shop-locator.png',
                        name: 'COMIC SHOP LOCATOR'
                    },
                    {
                        src: 'src/assets/img/buy-dc-power-visa.svg',
                        name: 'DC POWER VISA'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section class="section-bottom">
        <div class="container list-inline">
            <ul>
                <li v-for="link in linkList">
                    <a href="#"><img :src=link.src alt={{link.name}}/></a>
                    <a href="#">{{link.name}}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

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