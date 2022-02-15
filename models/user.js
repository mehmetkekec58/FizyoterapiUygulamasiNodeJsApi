var User  = class {
        constructor(userName,firstName,lastName,password,age,email,profilePhotoUrl,aboutMe) {
            this.userName = userName
            this.firstName = firstName
            this.lastName = lastName
            this.password=password
            this.age=age
            this.email=email
            this.profilePhotoUrl=profilePhotoUrl
            this.aboutMe=aboutMe
         }
       };

  module.exports=User