<script>
    export default {
        data() {
            return {
                footerLinks: [
                    {
                        title: 'DC COMICS',
                        links: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']
                    },
                    {
                        title: 'SHOP',
                        links: ['Shop DC', 'Shop DC Collectibles']
                    },
                    {
                        title: 'DC',
                        links: ['Terms Of Use', 'Privacy Policy', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us']
                    },
                    {
                        title: 'SITES',
                        links: ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']
                    },
                ]
            }
        }
    }
</script>

<template>
    <footer>
        <section class="footer-top">
            <div class="container">
                <div class="inner-left">

                    <div class="col">
                        <ul>
                            <h4>{{footerLinks[0].title}}</h4>
                            <li v-for="link in footerLinks[0].links"><a href="#">{{link}}</a></li>
                        </ul>
                        <ul>
                            <h4>{{footerLinks[1].title}}</h4>
                            <li v-for="link in footerLinks[1].links"><a href="#">{{link}}</a></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul>
                            <h4>{{footerLinks[2].title}}</h4>
                            <li v-for="link in footerLinks[2].links"><a href="#">{{link}}</a></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul>
                            <h4>{{footerLinks[3].title}}</h4>
                            <li v-for="link in footerLinks[3].links"><a href="#">{{link}}</a></li>
                        </ul>
                    </div>

                </div>
                <div class="inner-right">
                    <img src="../assets/img/dc-logo-bg.png" alt="..." />
                </div>
            </div>
        </section>

        <section class="footer-bottom">
            <div class="container">
                <button id="btn-signup">SIGN-UP NOW</button>
                <div class="btn-container">
                    <span>FOLLOW US</span>
                    <form>
                        <button formaction="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </button>
                        <button formaction="#">
                            <i class="fa-brands fa-twitter"></i>
                        </button>
                        <button formaction="#">
                            <i class="fa-brands fa-youtube"></i>
                        </button>
                        <button formaction="#">
                            <i class="fa-brands fa-pinterest-p"></i>
                        </button>
                        <button formaction="#">
                            <i class="fa-solid fa-location-dot"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
.container {
    @include flex-inline;
}

.footer-top {
    background-image: url("../assets/img/footer-bg.jpg");
    background-size: cover;
    overflow: hidden;
    
    .inner-left,
    .inner-right {
        width: 50%;
        padding: 2.5rem 0;
    }

    .inner-left {
        display: flex;
        .col {
            margin-right: 4.375rem;
        }
    }

    .inner-right {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
            position: absolute;
            pointer-events: none;
            opacity: 0.4;
            @media screen and ( min-width: 1200px ) {
                & {
                    opacity: 1;
                }
            }
        }
    }
}

.footer-bottom {
    background-color: var(--custom-darkgray);
    padding: 1.875rem 0;
    a {
        border: 1px solid var(--custom-blue);
    }

    #btn-signup {
        @include btn-secondary;
        border: 1px solid var(--custom-blue);
    }

    .btn-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and ( min-width: 768px ) {
            & {
                flex-direction: row;
            }
            }
            
        * {
            margin: 0 0.3125rem;
        }
        form button {
            @include btn-social(gray, var(--custom-darkgray))
        }
    }
}
</style>
