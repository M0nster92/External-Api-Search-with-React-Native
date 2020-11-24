import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers : {
		Authorization: 'Bearer vbchjD_YAwB_8ZmbLIB-I8zynkHNrfUhs_PaQgny0xlEDE7yPR7rVQiMBUaX3lx7L0mTlsnGXTxeQ_MYXmvfsONO_9q-pwOwZfm-rzIcOHCionSuAbQvOYsgOm68X3Yx'
	}
});
