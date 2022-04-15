<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>

        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4 section-sm">
                      <div class="row row-grid align-items-center">
                        <div class="col-md-6">
                          <div class="card bg-default shadow border-0">
                            <img v-lazy="'https://storage.googleapis.com/bucket-angrypolarbears/bears/0.png'" class="card-img-top">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="pl-md-5">
                            <icon name="ni ni-credit-card" class="mb-5" size="lg" type="warning" shadow rounded></icon>
                            <h3 class="text-center">아이스 전송 확인</h3>
                            <br/>
                            <form
                                role="form"
                                @submit.prevent="chkIceTx"
                            >
                              <div class="text-right">
                                <div class="col-md-12">
                                  <label for="fromeoa">보내는 지갑 주소</label>
                                  <base-input addon-left-icon="ni ni-check-bold"
                                              name="fromeoa"
                                              id="fromeoa"
                                              placeholder="From"
                                              v-model="chkIceTxData.fromEoa"
                                              ></base-input>

                                </div>
                                <div class="col-md-12">
                                  <label for="toeoa">받는 지갑 주소</label>
                                  <base-input alternative
                                              addon-left-icon="ni ni-check-bold"
                                              name="toeoa"
                                              id="toeoa"
                                              placeholder="To"
                                              v-model="chkIceTxData.toEoa"
                                              ></base-input>
                                </div>
                                <div class="col-md-12">
                                  <label for="amt">아이스 수량</label>
                                  <base-input alternative
                                              addon-left-icon="ni ni-check-bold"
                                              name="amt"
                                              id="amt"
                                              placeholder="Amount"
                                              v-model="chkIceTxData.amt"
                                              ></base-input>
                                </div>
                                <div class="text-right col-md-12">
                                  <base-button
                                      native-type="submit"
                                      type="primary"
                                      class="my-4"
                                      v-on:click.prevent="chkIceTx">요청</base-button>
                                </div>
                              </div>
                            </form>

                          </div>
                        </div>
                      </div>
                    </div>
                </card>
            </div>
        </section>
<!--
      <section class="section bg-secondary">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-md-6">
              <div class="pl-md-5">
                <icon name="ni ni-credit-card" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                <h3 class="text-center">아이스 전송 확인</h3>
                <br/>
                <form>
                  <div class="text-right">
                    <div class="col-md-12">
                      <span>보내는 지갑 주소</span>
                      <base-input alternative
                                  addon-left-icon="ni ni-check-bold"
                                  placeholder="From"></base-input>

                    </div>
                    <div class="col-md-12">
                      <span>받는 지갑 주소</span>
                      <base-input alternative
                                  addon-left-icon="ni ni-check-bold"
                                  placeholder="To"></base-input>
                    </div>
                    <div class="col-md-12">
                      <span>아이스 수량</span>
                      <base-input alternative
                                  addon-left-icon="ni ni-check-bold"
                                  placeholder="Amount"></base-input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-default shadow border-0">
                <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
              </div>
            </div>
          </div>
        </div>
      </section>
      -->
    </div>
</template>
<script>

export default {
  name: 'chkIceTx',
  data() {
    return {
      chkIceTxData: {
        fromEoa: '',
        toEoa: '',
        amt: 0
      }
    }
  },
  methods: {
    /**
     * 아이스 거래 내역 확인 요청
     */
    chkIceTx: function () {
      let url = window.location.origin.replace("8080","8081") + "/api/chkIceDeposit";
      this.$axios.post(url,JSON.stringify(this.chkIceTxData))
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }
};
</script>
<style>
</style>
