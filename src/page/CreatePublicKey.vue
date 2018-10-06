<template>
	<div>
		<my-header></my-header>
		<!-- <nav-bread></nav-bread> -->
		<!-- process step -->
		<check-step v-bind:step=2></check-step>
		<!-- Main -->
		<main>
			<container>
				<br>
				<row>
					<column md="6">
						<card>
							<card-body>
								<h2>Provide public keys</h2>
								Please provide the public keys for your new account. Active Public Key can be the same as Owner Public Key but not recommended for security.<br>
								<br>Owner Public Key:<input v-model="$store.state.ownerPublicKey" class="form-control">
								<br>Active Public Key:<input v-model="$store.state.activePublicKey" class="form-control"><br>
								<h4>Provide private keys
									<a href="#" @click="displayPrivateKey">
										<span v-show="!privateKeyFlag"><img src="./../images/arrow-down.png" widht="40" height="40" alt="" title="" /></span>
										<span v-show="privateKeyFlag"><img src="./../images/arrow-up.png" widht="40" height="40" alt="" title="" /></span>
									</a>
								</h4>
								<div v-bind:class="{'box':privateKeyFlag}" v-show="privateKeyFlag">
									<hr>
									Please provide the public keys for your new account. Active Public Key can be the same as Owner Public Key but not recommended for security.<br>
									<br>Owner Private Key:<input v-model="$store.state.ownerPrivateKey" class="form-control">
									<br>Active Private Key:<input v-model="$store.state.activePrivateKey" class="form-control">
								</div>
								<div class="text-right py-4 mt-3">
									<router-link class="btn btn-primary btn-rounded prevBtn float-left" style="width:130px" to="/">Previous</router-link>
									<router-link class="btn btn-primary btn-rounded float-right" style="width:130px" to="/Payment">Next</router-link>
								</div>
							</card-body>
						</card>
					</column>
					<column md="6">
					<ul>
					<li><h5>Your chosen EOS Account Name is: <font color="5385c1">{{accountName}}</font></h5></li>
					<li><h5>Your Email Address is: <font color="5385c1">{{email}}</font></h5></li>
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
			 privateKeyFlag:false
    }
  },
  methods:{
		displayPrivateKey() {
			this.privateKeyFlag = this.privateKeyFlag == true?false:true;
		}
	},
  computed:{
	 	...mapGetters(['accountName','email']
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