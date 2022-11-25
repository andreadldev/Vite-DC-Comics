<template>
    <main>
        <section class="section-top">
            <div class="container">
            CONTENT
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

.section-top {
    min-height: calc(100% - 9.625rem);
    background-color: var(--custom-black);
    padding: 2.5rem 0;
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
