// 1.   ways to print in javascript
        // console.log("Hello World");
       //alert("me");
       //document.write("this is document write")

       // 2. javascript console API
    //    console.log("Hello World",4+6,"Another log");
    //    console.warn("this is warning");
    //    console.error("this is an error");
    //    console.error("this is an error");

      //3.Javascript Variables
     // what are variable = container to store data values(store no., string,boolean)
      var num1 = 34;
      var num2 = 56;
    //   console.log(num1 + num2);

    //   4. data types in javascript 
        //   Numbers
           var num1 = 455;
          var num2 = 56.76;
 
        //    String
          var str1 = "this is a string";
           var str2 = "this is also a string"
          
        //Objects
         var marks = {
             ravi: 34,
             shubham: 78,
             harry: 99.997,
         }
        //  console.log(marks);

         //Boolean
         var a = true;
         var b = false;
        //    console.log(a,b);
           
          //var undefined
           var und = undefined;
           console.log(undefined);

           var n = null;
        //    console.log(n);

           /*
           At a very high level, there are 2 types of data types in javascript
           1.Primitive Data types: undefined, null, number, string, boolean, symbol 
           2.Reference Data types: Arrays & Objects
           */

             var arr = [1,2,"bablu",4,5]
            //    console.log(arr)

            //operators in javascript
            // Arithmetic operator
              var a = 100;
              var b = 10;
              console.log("the value of a + b is",a+b);
              console.log("the value of a - b is",a-b);
              console.log("the value of a * b is",a*b);
              console.log("the value of a / b is",a/b);

            //   Assignment Operators
            var c = b;
             c += 2; //(result is 12)
             c -= 2;
             c *= 2;
             console.log(c);  

            //  comaparison operator
             var x = 34;
             var y = 56;
             console.log(x == y) // result is false
             console.log(x >= y) // result is false
             console.log(x <= y) // result is true
              
            //  Logical operators
             console.log(true & true)
             console.log(true & false)
             console.log(false & true)
             console.log(false & false)

                // Logical operator
             console.log(true & true)
             console.log(true & false)
             console.log(false & true)
             console.log(false & false)
            