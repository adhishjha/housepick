// const user = {
//     status:"pending",
//     email:"cool@gmail.com"
// }

// // console.log(user)
// if(user.email && user.status=="pending"){
//     console.log("you can register")
// }else{
//     console.log("email already exists")
// }

// To add minutes to the current time
// function AddMinutesToDate(date, minutes) {
//     return new Date(date.getTime() + minutes*60000);
//   }

// const now = new Date();
// console.log(now)
// const expiration_time = AddMinutesToDate(now,10);
// console.log(expiration_time)


// const date = new Date().getTime() + 300*1000
// console.log(date)

console.log("this is demo")

class reg{

    static async sendmail(){
        await console.log("sending mail 24")
        console.log("cool")
    }

    static register(){
        this.sendmail()
        console.log(4)
    }
}


reg.register()
