<template>
    <main>
        <section class="section-top">
            <div class="container">
                -------
            </div>
        </section>

        <section class="section-bottom">
            <div class="container list-inline">
                <ul>
                    <li>
                        <a href="#"><img src="../assets/img/buy-comics-digital-comics.png" alt="..."></a>
                        <a href="#">DIGITAL COMICS</a>
                    </li>
                    <li>
                        <a href="#"><img href="#" src="../assets/img/buy-comics-merchandise.png" alt="..."></a>
                        <a href="#">DC MERCHANDISE</a>
                    </li>
                    <li>
                        <a href="#"><img src="../assets/img/buy-comics-subscriptions.png" alt="..."></a>
                        <a href="#">SUBSCRIPTION</a>
                    </li>
                    <li>
                        <a href="#"><img src="../assets/img/buy-comics-shop-locator.png" alt="..."></a>
                        <a href="#">COMIC SHOP LOCATOR</a>
                    </li>
                    <li>
                        <a href="#"><img src="../assets/img/buy-dc-power-visa.svg" alt="..."></a>
                        <a href="#">DC POWER VISA</a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @import "../assets/css/style.scss";

    .section-top {
        background-color: var(--custom-black);
        padding: 40px 0;
    }

    .section-bottom {
        background-color: var(--custom-blue);
        padding: 40px 0;
    }

    a {
        @include a-custom(underline, inherit);
        display: flex;
        justify-content: center;
        padding: 0 5px;
    }

    .list-inline {
        ul {
            justify-content: space-between;
        }
        li {
            @include flex-inline;
        }

        img {
            width: 50px;
        }
    }
</style>