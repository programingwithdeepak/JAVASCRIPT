class oopex7{
    title = "demo of inheritance";
    name(){
        return "this is parent class";
    }}
    class A extends oopex7{
      data1 = "1.";
      method1(){
        return " this is class A"
      }
    }

      class B extends A{
      data2 = "2.";
      method2(){
        return " this is class B"
      }
    }

      class C extends B{
      data3 = "3.";
      method3(){
        return " this is class C"
      }
    }

      class D extends C{
      data4 = "4.";
      method4(){
        return " this is class D"
      }
    }

      class E extends D{
      data5 = "5.";
      method5(){
        return " this is class E"
      }
    }
    const app = new E;

    console.log(app.title);
    console.log(app.name());

    console.log(app.data1);
    console.log(app.method1());

     console.log(app.data2);
    console.log(app.method2());

     console.log(app.data3);
    console.log(app.method3());

     console.log(app.data4);
    console.log(app.method4());

     console.log(app.data5);
    console.log(app.method5());

   