<template>
    <div>
        <vue-goodshare-linkedIn 
            button_design="gradient"
            page_url="https://www.linkedin.com/in/simone-letizi-056293168/" 
            has_icon 
            has_square_edges
        ></vue-goodshare-linkedIn>
        <vue-goodshare-facebook
            page_url="https://www.facebook.com/simone.letizi"
            has_icon
        ></vue-goodshare-facebook>
    </div>    
</template>

<script>
import VueGoodshareLinkedIn from 'vue-goodshare/src/providers/LinkedIn.vue'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
export default {
  name: 'HelloSocial',
  components:{
    VueGoodshareLinkedIn,
    VueGoodshareFacebook
  }
}
</script>