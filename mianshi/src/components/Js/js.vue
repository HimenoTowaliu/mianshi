<template>
  <div>
    <button @click="showobject">点击遍历对象</button>
    <img src="../../assets/当前进度.png" alt="">
    看完数据该看运算符
  </div>
</template>

<script>
export default {
  name: 'Js',
  data() {
    return {
      obj1: {
        name: 'liuyang',
        age: 18,
        role: 'student'
      }
    }
  },
  methods: {
    showobject() {
      for (let key in this.obj1) {
        console.log('obj1的属性名：' + key)
        console.log('obj1的属性值:' + this.obj1[key])
      }
    }
  },
}
</script>

<style lang="scss">
</style>