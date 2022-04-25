const app = Vue.createApp({
   // DATA
   data() {
      return {
         input: null,
         result: null
      };
   },

   // METHODS
   methods: {
      findFrequent: function() {
         let array = JSON.parse("[" + this.input + "]");
         // sap xep mang
         array.sort();
      
         /*
         Khai báo biến max[0,0] : 
         với vị trị max[0] - lưu trữ biến xuất hiện nhiều nhất
         với vị trí max[1] - lưu trữ giá trị của biến xuất hiện nhiều nhất
         Khai báo biến count: đếm số lần xuất hiện
         */
         let max = [0, 0];
         let count = 1;
      
         for (let i = array.length - 1; i >= 0; --i) {
            if (array[i] === array[i - 1]) {
               count++;
            } else {
               if (max[1] < count) {
                  max[0] = array[i];
                  max[1] = count;
               }
               count = 1;
            }
         }
         if(max[1] == 1) {
            this.result = `All the element appear only 1 time in the array.`;
         } else {
         this.result = `The element that appears at most is ${max[0]} : ${max[1]} times`;

         }
      },

      clearInput: function() {
         this.input = null;
         this.result = null;
      }

   },

   // COMPUTED
   computed: {},
}).mount("#app");
