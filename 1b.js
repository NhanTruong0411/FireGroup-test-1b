function findFrequent(array) {
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
      }
      else {
         if (max[1] < count) {
            max[0] = array[i];
            max[1] = count;
         }
         count = 1;
      }
   }
   console.log(array);
   console.log(`Phần từ ${max[0]} xuất hiện nhiều nhất : ${max[1]} lần. \n `);
}

let array1 = [false, "up", "down", "left", "right", true, false];
let array2 = [3, 7, 3];
let array3 = [null, "hello", true, null, null]

findFrequent(array1);
findFrequent(array2);
findFrequent(array3);
