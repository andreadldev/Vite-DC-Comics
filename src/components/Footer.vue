<template>
  <footer>
    <section class="footer-top">
      <div class="container">
        <div class="inner-left">
          <div class="col">
            <h4>DC COMICS</h4>
            <ul>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
            </ul>

            <h4>SHOP</h4>
            <ul>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>DC</h4>
            <ul>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy policy (New)</a></li>
              <li><a href="#">Ad Choices</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Talent Workshops</a></li>
              <li><a href="#">CPSC Certificates</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Shop Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>SITES</h4>
            <ul>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
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
        <a href="#">SIGN-UP NOW</a>
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
    }
  }
}

.footer-bottom {
  background-color: var(--custom-darkgray);
  padding: 1.875rem 0;

  a {
    border: 1px solid var(--custom-blue);
  }

  .btn-container {
    display: flex;
    align-items: center;
    * {
      margin: 0 0.3125rem;
    }

    button {
        background-color: gray;
        color: var(--custom-darkgray);
        border: none;
        height: 1.875rem;
        width: 1.875rem;
        border-radius: 50%;
        font-size: 1rem;
        cursor: pointer;
    }
  }
}
</style>
