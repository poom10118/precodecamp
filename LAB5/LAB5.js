class UserTemplate{
    
    constructor(name,password,age){
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
        this.dateCR = new Date()//ใช้เก็บช้อมุลวันที่สร้าง User
    }

    login(){
        this.connected = true
        console.log('your login status :' , this.connected)
    }

    // เพิ่ม function logout 
    logout(){
        this.connected = false
        console.log('your login status :' , this.connected)
    }

    // เพิ่ม function ChkStatus 
    ChkStatus(){
        if (this.connected = true) {

            console.log('Your status is login')

        }else{

            console.log('Your status is logout')

        }
    }

}