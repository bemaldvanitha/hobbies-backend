class User{
    constructor(id,firstName,lastName,email,age,password,imageUrl,numbers) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.password = password;
        this.imageUrl = imageUrl;
        this.numbers = numbers;
    }
}

module.exports = User;