// 1) Topic: Online Store Discount Calculator (If-Else Statement)


        function calculateDiscountedAmount(totalAmount) {
            let discountPercent = 0;
            if(totalAmount>=50){
                discountPercent = 5;
            }else if(totalAmount>=100&&totalAmount<=200){
                discountAmount = 10;
            }
            else if(totalAmount>=200){
                discountAmount = 15
            }
            
            const discountAmount = (totalAmount * discountPercent) / 100;
            const discountedTotal = totalAmount - discountAmount;
            
            console.log(`Discounted Amount: $${discountedTotal.toFixed(2)}`);
            console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
            console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
          }
          
          
          const totalPurchaseAmount = 250;
          calculateDiscountedAmount(totalPurchaseAmount);


//2) Topic: Filter Even Numbers

// var filterevennumber=(arr)=>{
//     return arr.filter(num => num%2 === 0)
    
// }

// var orginal_array = [12, 34, 45, 23, 6, 78, 54, 90]
// var filternumber = filterevennumber(orginal_array)
// console.log("Orginal Array: " + JSON.stringify(orginal_array));
// console.log("Filtered Even Numbers:" + JSON.stringify(filternumber) )



//3) Topic: Multiplication Table Generator

        // function generateMultiplicationTable(number) {
        //     console.log(`Generate Multiplication Table for: ${number}\n`);
        //     for (let i = 1; i <= 10; i++) {
        //       const result = i * number;
        //       console.log(`${i} x ${number} = ${result}`);
        //     }
        //   }
        //   const number = 5;
        //   generateMultiplicationTable(number);


        // 4) Topic: Grade Calculator (JavaScript Switch Case)

        // const grade_calculate = (num)=>{
        //     let grade;
        //     switch(true){
        //         case (num>=90) :
        //             grade = "A";
        //             break;
        //         case(num>=80 && num<=89) :
        //             grade = "B";
        //             break;
        //         case(num>=70 && num<=79) :
        //             grade = "C";
        //             break;
        //         case(num>=60 && num<=69 ) :
        //             grade = "D";
        //             break;
        //         default : 
        //             grade = "F"
                    
        //     }
        //     return grade
        // }

        // var number = 90;
        // var studen_grade = grade_calculate(number)
        // console.log(`Student number ${number}. Student grade is ${studen_grade} `)

          