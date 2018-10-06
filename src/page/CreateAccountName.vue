<template>
	<div>
		<my-header></my-header>
		<!-- <nav-bread></nav-bread> -->
		<!-- process step -->
		<check-step v-bind:step=1></check-step>
		<main>
			<container>
				<br>
				<row>
					<column md="6">
						<card>
							<card-body>
								<form>
									<h2>Choose account name</h2>
										EOS Account names must be exactly 12 characters long and consist of lower case characters and digits up until 5.<br>
										<br>Account Name: <input v-model="$store.state.accountName" class="form-control" >
										<br>Your Email Address:<br>
										<input v-model="$store.state.email" class="form-control">
										<div align="center">
											<li><a href="#" @click="sendMail">Click here to receive Verification Code</a></li>
										</div><br>
										<span>Verification Code: <input v-model="verificationCode" maxlength="6" size="10"/></span>
										<div class="text-right py-4 mt-3">
											<router-link class="btn btn-primary" style="width:130px" to="/CreatePublicKey">Next</router-link>
										</div>
								</form>
							</card-body>
						</card>
					</column>
				</row>
			</container>
		</main>
		<br>
		<my-footer></my-footer>
	</div>
</template>
<script>
// import MyHeader from './../components/MyHeader'
import MyHeader from './../components/NavbarPage'
import NavBread from './../components/NavBread'
import CheckStep from './../components/CheckStep'
import MyFooter from './../components/MyFooter'
import Row from './../components/common/Row'
import Column from './../components/common/Col'
import Container from './../components/common/Container'
import Card from './../components/common/Card'
import CardBody from './../components/common/CardBody'

import {mapActions, mapGetters, mapState} from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
			verificationCode: '',
    }
	},
	methods:{
		sendMail() {
			axios.post("/sendMail").then((res)=>{
				if(res.status=='0'){
					alert("success")
				}else{
					alert("faile:"+res.msg)
				}
			});

		}
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
