<template>
	<div>
		<my-header></my-header>
		<!-- <nav-bread></nav-bread> -->
		<!-- process step -->
		<check-step v-bind:step=3></check-step>
		<!-- Main -->
		<main>
			<container>
				<br>
				<row>
					<column md="6">
						<card>
							<card-body>
								<h2>Provide public keys</h2>
                  After successful payment we will create the EOS account for you.<br>
                  <br><div align="center"><h3><font color="#d1434a">$ 99</font></h3></div>
                  <br>Choose payment option:<br>
                  <select v-model="selected">
                    <option disabled value="">---Please select one---</option>
                    <option value="1"> Credit Card</option>
                    <option value="2">Cryptocurrency(Bitcoin,Ethereum,...)</option>
                  </select>
                  <div class="text-right py-4 mt-3">
                    <router-link class="btn btn-primary btn-rounded prevBtn float-left" style="width:130px" to="/CreatePublicKey">Previous</router-link>
                   <a class="btn btn-primary btn-rounded float-right" style="width:130px" to="/" @click="payment()">payment</a>
									
                  </div>
							</card-body>
						</card>
					</column>
					<column md="6">
						<ul>
							<li><h5>Your chosen EOS Account Name is: <font color="5385c1">{{accountName}}</font></h5></li>
							<li><h5>Your Email Address is: <font color="5385c1">{{email}}</font></h5></li>
							<li><h6>Owner Public Key:</h6></li>
							<font color="5385c1">{{ownerPublicKey}}</font>
							<li><h6>Owner Private Key:<br><font color="5385c1">{{ownerPrivateKey}}</font></h6></li>
							<li><h6>Active Public Key:<br><font color="5385c1">{{activePublicKey}}</font></h6></li>
							<li><h6>Active Private Key:<br><font color="5385c1">{{activePrivateKey}}</font></h6></li>
						</ul>
					</column>
				</row>
			</container>
		</main>
    <br>
		<my-footer></my-footer>
	</div>
</template>
<script>
import MyHeader from './../components/NavbarPage'
import NavBread from './../components/NavBread'
import CheckStep from './../components/CheckStep'
import MyFooter from './../components/MyFooter'
import Row from './../components/common/Row'
import Column from './../components/common/Col'
import Container from './../components/common/Container'
import Card from './../components/common/Card'
import CardBody from './../components/common/CardBody'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      selected: '',
    }
  },
  methods:{
		payment() {
			if (this.selected=="1") {
				// Credit Card
			} else {
				// Cryptocurrency
				// $router.push(path:'https://commerce.coinbase.com/checkout/51aa71c1-1937-46aa-a693-a80869a5bbdc')
				window.open('https://commerce.coinbase.com/checkout/51aa71c1-1937-46aa-a693-a80869a5bbdc')
			}			
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
		Row,
		Column,
		Card,
		CardBody,
		MyFooter
  }
}

</script>