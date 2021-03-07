const constraints = {
    firstname: {
        presence: true,


    },
    lastname: {
        presence: true,
    },
    password: {
        presence: true,
        length: {
            minimum: 6,
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },

    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}


const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            gender: null,
            age: null,
            email: null,
            phone: null,
            errors: null,
        }
    },
    methods: {
        checkForm(e) {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    password: this.password,
                    age: this.age,
                    gender: this.gender,
                    email: this.email,
                    phone: this.phone,

                },
                constraints)
 
            if (this.errors) {
                console.log(this.errors)
                e.preventDefault();
            } else {
                alert("Register complete");

            }
        }
    }



})