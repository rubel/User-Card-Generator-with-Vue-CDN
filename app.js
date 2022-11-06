var app = Vue.createApp({
    data(){
        return{
            firstName: "Rubel",
            lastName: "Hamza",
            email: "rubel_xpress@yahoo.com",
            gender:"male",
            cell:"01912429159",
            dob: "1987-03-27",
            age: 36,
            location: "Dhaka, Bangladesh",
            image:"https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods:{
        async getUser(){
            let res = await fetch("https://randomuser.me/api/");
            let {results} = await res.json();
            let user = results[0];
            console.log(user);

            this.firstName = user.name.first;
            this.lastName = user.name.last;
            this.email = user.email;
            this.gender = user.gender;
            this.cell = user.cell;
            this.age = user.dob.age;
            this.dob =  user.dob.date;
            this.location = `${user.location.city}, ${user.location.country}`;
            this.image = user.picture.large;
        },
        increaseAge(){
            this.age++;
        }
    }
});

app.mount("#app");