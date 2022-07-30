<template>
  <div>
    <button @click="showobject">点击遍历对象</button>
    <button @click="test">尝试</button>
    看完vue知识点中 3 vue脚手架
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
      },
      str: "今天是周六 jinjin",
      arr1: [0, 1, 2, 3, 4, 5]
    }
  },
  methods: {
    showobject() {
      for (let key in this.obj1) {
        console.log('obj1的属性名：' + key)
        console.log('obj1的属性值:' + this.obj1[key])
      }
    },
    test() {
      // console.log(new Date())
      // let abc = this.str.lastIndexOf("jin")
      // console.log(abc)
      // console.log(this.str.charAt(1))
      // console.log(this.arr1.slice(0, 2))
      /*  let arr2 = this.arr1.map(function (i) {
         // i = i * 2
         return i * 2
       })
       console.log(this.arr1)
       console.log(arr2)
  */
      /* let arr2 = this.arr1.filter(function (i) {
        // i = i * 2
        return i == 2
      })
      console.log(this.arr1)
      console.log(arr2) */
      /* console.log(typeof NaN)
      console.log(!!{})
      console.log(Boolean({})) */
      // console.log(+0 === -0)
      let obj2 = { name: 'ly', age: 19 }
      let obj3 = { ...obj2 }
      console.log(obj3)
      obj2.age = 20
      console.log(obj3)
      let arr4 = [2, 3]
      let [age1, age2] = [...arr4]
      console.log(age1, age2)

      //看完vue知识点中 3 vue脚手架
    }
  },
}
</script>

<style  >
.img1 {
  width: 100px;
}
</style>