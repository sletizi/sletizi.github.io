<template>
    <v-btn                
        color="grey"
        outlined
        large
        :href="link"
    >
        <span class="grey--text text--darken-1 font-weight-bold">
            {{ buttonText }}
        </span>
    </v-btn>
</template>

<script>
export default{
  props: {
    buttonText: String,
    toDo:Function,
    link:String
  }
}
</script>

