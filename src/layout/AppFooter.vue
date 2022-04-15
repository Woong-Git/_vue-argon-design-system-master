<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Angry Polar Bear is Root!</h3>
                </div>
                <div class="col-lg-6 text-lg-right btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://angrypolarbears.com/"
                       class="btn btn-neutral btn-icon-only btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                      <i class="ni ni-world-2"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://twitter.com/APB_NFT"
                       class="btn btn-neutral btn-icon-only btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://discord.com/invite/5CSpru7AbM"
                       class="btn btn-neutral btn-icon-only btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                      <img width="50%" slot="icon" src="img/icons/common/discord.svg">
                    </a>
                    <a target="_blank" rel="noopener" href="https://opensea.io/collection/angry-polar-bears"
                       class="btn btn-neutral btn-icon-only btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                      <img width="50%" slot="icon" src="img/icons/common/opensea.svg">
                    </a>
                    <a target="_blank" rel="noopener" href="https://linktr.ee/AngryPolarBears"
                       class="btn btn-neutral btn-icon-only btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                      <i class="ni ni-bullet-list-67"></i>
                    </a>

                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a> & <a href="https://www.binarcode.com" target="_blank" rel="noopener">Binar Code</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Creative Tim</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
