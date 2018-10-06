<template>
	<div>
		<my-header></my-header>
		<!-- <nav-bread></nav-bread> -->
		<!-- process step -->
		<check-step v-bind:step=4></check-step>
		<main>
			<container>
				<br>
							<jumbotron class="mt-4">
                <h2>Congratulations! Your EOS Account has been created.</h2>
                <hr>
                <ul>
                <li><h5>Your chosen EOS Account Name is: <font color="5385c1">{{accountName}}</font></h5></li>
                <li><h5>Your Email Address is: <font color="5385c1">{{email}}</font></h5></li>
                <li><h6>Owner Public Key:</h6></li>
                <font color="5385c1">{{ownerPublicKey}}</font>
                <li><h6>Owner Private Key:<br><font color="5385c1">{{ownerPrivateKey}}</font></h6></li>
                <li><h6>Active Public Key:<br><font color="5385c1">{{activePublicKey}}</font></h6></li>
                <li><h6>Active Private Key:<br><font color="5385c1">{{activePrivateKey}}</font></h6></li>
                </ul>
                <hr>
                <div class="text-center py-2 mt-3">
                  <button class="btn btn-outline-purple" type="submit">Send<i class="fa fa-paper-plane-o ml-2"></i></button>
                </div>
							</jumbotron>
			</container>
		</main>
    <br>
		<my-footer></my-footer>
	</div>
</template>
<script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
</script>
<script>
import MyHeader from './../components/NavbarPage'
import NavBread from './../components/NavBread'
import CheckStep from './../components/CheckStep'
import MyFooter from './../components/MyFooter'
import Container from './../components/common/Container'
import Jumbotron from './../components/common/Jumbotron'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods:{
		turnToCreatePublicKey() {
			this.$router.push({path:'/CreatePublicKey'})
    },
		turnToPayment() {
			this.$router.push({path:'/Payment'})
		}
	},
  computed:{
	  ...mapGetters(['accountName','email','ownerPublicKey','ownerPrivateKey','activePublicKey','activePrivateKey']
     )
	 },
  components: {
		MyHeader,
		NavBread,
		CheckStep,
		Container,
		Jumbotron,
		MyFooter
  }
}

</script>
