<template>
    <footer>
        <section class="footer-top">
            <div class="container">
                <div class="inner-left">
                    <div class="col">
                        <h4>DC COMICS</h4>
                        <ul>
                            <li> <a href="#">Characters</a> </li>
                            <li> <a href="#">Comics</a> </li>
                            <li> <a href="#">Movies</a> </li>
                            <li> <a href="#">TV</a> </li>
                            <li> <a href="#">Games</a> </li>
                            <li> <a href="#">Videos</a> </li>
                            <li> <a href="#">News</a> </li>
                        </ul>

                        <h4>SHOP</h4>
                        <ul>
                            <li> <a href="#">Shop DC</a> </li>
                            <li> <a href="#">Shop DC Collectibles</a> </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4>DC</h4>
                        <ul>
                            <li> <a href="#">Terms Of Use</a> </li>
                            <li> <a href="#">Privacy policy (New)</a> </li>
                            <li> <a href="#">Ad Choices</a> </li>
                            <li> <a href="#">Advertising</a> </li>
                            <li> <a href="#">Jobs</a> </li>
                            <li> <a href="#">Subscriptions</a> </li>
                            <li> <a href="#">Talent Workshops</a> </li>
                            <li> <a href="#">CPSC Certificates</a> </li>
                            <li> <a href="#">Ratings</a> </li>
                            <li> <a href="#">Shop Help</a> </li>
                            <li> <a href="#">Contact Us</a> </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4>SITES</h4>
                        <ul>
                            <li> <a href="#">DC</a> </li>
                            <li> <a href="#">MAD Magazine</a> </li>
                            <li> <a href="#">DC Kids</a> </li>
                            <li> <a href="#">DC Universe</a> </li>
                            <li> <a href="#">DC Power Visa</a> </li>
                        </ul>
                    </div>
                </div>
                <div class="inner-right">
                    <img src="../assets/img/dc-logo-bg.png" alt="...">
                </div>
            </div>
        </section>

        <section class="footer-bottom">
            <div class="container">
                <a href="#">SIGN UP NOW</a>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
    @import "../assets/css/style.scss";
    .container {
            height: 100%;
            @include flex-inline;
        }

    h4 {
        margin: 10px 0;
    }

    li {
        margin: 1px 0;
    }

    .footer-top {  
        background-image: url('../assets/img/footer-bg.jpg');
        background-size: cover;
        height: 420px;
        overflow: hidden;
    }

    .inner-left, .inner-right {
        width: 50%;
    }

    .inner-left {
        display: flex;
        .col {
            margin-right: 70px
        }
    }

    .inner-right {
        display: flex;
        img {
            width: 85%;
            margin: auto;
        }
    }

    .footer-bottom {
        background-color: var(--custom-darkgray);
        position: absolute;
        height: calc(100% - 760px);
        width: 100%;
        @include flex-inline;

        
    }
</style>