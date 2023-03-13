let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",]
let Seattle = { 
    min: 23, 
    max: 65, 
    avg: 6.3, //number of cookies sold per customer
    numbers: [],
    generateRandomCustomers: function(){
        for(let i = 0; i < hours.length; i = i + 1) {
            let randomNumberOfCustomers = Math.random() * (this.max - this.min) + this.min
            randomNumberOfCustomers = Math.ceil(randomNumberOfCustomers)
            this.numbers.push(randomNumberOfCustomers)
            console.log("I am inside generateRandomCustomers")
            
        }
        return this.numbers
    },

    calculateCookiesSold: function(){
        let customersAtEachHour = this.generateRandomCustomers()
        let cookiesSoldAtEachHour = []
        for(let i = 0; i < customersAtEachHour.length; i++){
         let numberOfCustomers = customersAtEachHour[i]     // i is placed in the array because it will constantly change as the loop continues
         let cookiesSold = Math.ceil(numberOfCustomers * this.avg)     // Multiplying the number of customers per hour by number of cookies sold per customer
          cookiesSoldAtEachHour.push(cookiesSold)
        }
        this.allCookiesSold = cookiesSoldAtEachHour
    },
    render: function(){
        for (let i = 0; i < this.allCookiesSold.length; i++){
            let listItem = document.createElement("li")
            listItem.innerHTML = hours[i] + ":" + " " + this.allCookiesSold[i] + " " + "cookies"
            let unorderedList = document.getElementById("seattle")
            unorderedList.append(listItem)
        }
        let total = 0;
        for (let i = 0; i < hours.length; i++){
           total = this.numbers[i] + total;
        } 
        let totalCookies = document.createElement("li")
        totalCookies.innerHTML = "Total" + ": " + total
        let listOfTotalCookies = document.getElementById("seattle")
        listOfTotalCookies.append(totalCookies)
        // console.log(total)
    } 

}
Seattle.calculateCookiesSold()
Seattle.render()



let Tokyo = { 
    min: 3, 
    max: 24, 
    avg: 1.2, //number of cookies sold per customer
    numbers: [],
    generateRandomCustomers: function(){
        for(let i = 0; i < hours.length; i = i + 1) {
            let randomNumberOfCustomers = Math.random() * (this.max - this.min) + this.min
            randomNumberOfCustomers = Math.ceil(randomNumberOfCustomers)
            this.numbers.push(randomNumberOfCustomers)
            console.log("I am inside generateRandomCustomers")
            
        }
        return this.numbers
    },

    calculateCookiesSold: function(){
        let customersAtEachHour = this.generateRandomCustomers()
        let cookiesSoldAtEachHour = []
        for(let i = 0; i < customersAtEachHour.length; i++){
         let numberOfCustomers = customersAtEachHour[i]     // i is placed in the array because it will constantly change as the loop continues
         let cookiesSold = Math.ceil(numberOfCustomers * this.avg)     // Multiplying the number of customers per hour by number of cookies sold per customer
          cookiesSoldAtEachHour.push(cookiesSold)
        }
        this.allCookiesSold = cookiesSoldAtEachHour
    },
    render: function(){
        for (let i = 0; i < this.allCookiesSold.length; i++){
            let listItem = document.createElement("li")
            listItem.innerHTML = hours[i] + ":" + " " + this.allCookiesSold[i] + " " + "cookies"
            let unorderedList = document.getElementById("tokyo")
            unorderedList.append(listItem)
        }
        let total = 0;
        for (let i = 0; i < hours.length; i++){
           total = this.numbers[i] + total;
        } 
        let totalCookies = document.createElement("li")
        totalCookies.innerHTML = "Total" + ": " + total
        let listOfTotalCookies = document.getElementById("tokyo")
        listOfTotalCookies.append(totalCookies)
        // console.log(total)
    } 

}
Tokyo.calculateCookiesSold()
Tokyo.render()



let Dubai = { 
    min: 11, 
    max: 38, 
    avg: 3.7, //number of cookies sold per customer
    numbers: [],
    generateRandomCustomers: function(){
        for(let i = 0; i < hours.length; i = i + 1) {
            let randomNumberOfCustomers = Math.random() * (this.max - this.min) + this.min
            randomNumberOfCustomers = Math.ceil(randomNumberOfCustomers)
            this.numbers.push(randomNumberOfCustomers)
            console.log("I am inside generateRandomCustomers")
            
        }
        return this.numbers
    },

    calculateCookiesSold: function(){
        let customersAtEachHour = this.generateRandomCustomers()
        let cookiesSoldAtEachHour = []
        for(let i = 0; i < customersAtEachHour.length; i++){
         let numberOfCustomers = customersAtEachHour[i]     // i is placed in the array because it will constantly change as the loop continues
         let cookiesSold = Math.ceil(numberOfCustomers * this.avg)     // Multiplying the number of customers per hour by number of cookies sold per customer
          cookiesSoldAtEachHour.push(cookiesSold)
        }
        this.allCookiesSold = cookiesSoldAtEachHour
    },
    render: function(){
        for (let i = 0; i < this.allCookiesSold.length; i++){
            let listItem = document.createElement("li")
            listItem.innerHTML = hours[i] + ":" + " " + this.allCookiesSold[i] + " " + "cookies"
            let unorderedList = document.getElementById("dubai")
            unorderedList.append(listItem)
        }
        let total = 0;
        for (let i = 0; i < hours.length; i++){
           total = this.numbers[i] + total;
        } 
        let totalCookies = document.createElement("li")
        totalCookies.innerHTML = "Total" + ": " + total
        let listOfTotalCookies = document.getElementById("dubai")
        listOfTotalCookies.append(totalCookies)
        // console.log(total)
    } 

}
Dubai.calculateCookiesSold()
Dubai.render()




let Paris = { 
    min: 20, 
    max: 38, 
    avg: 2.3, //number of cookies sold per customer
    numbers: [],
    generateRandomCustomers: function(){
        for(let i = 0; i < hours.length; i = i + 1) {
            let randomNumberOfCustomers = Math.random() * (this.max - this.min) + this.min
            randomNumberOfCustomers = Math.ceil(randomNumberOfCustomers)
            this.numbers.push(randomNumberOfCustomers)
            console.log("I am inside generateRandomCustomers")
            
        }
        return this.numbers
    },

    calculateCookiesSold: function(){
        let customersAtEachHour = this.generateRandomCustomers()
        let cookiesSoldAtEachHour = []
        for(let i = 0; i < customersAtEachHour.length; i++){
         let numberOfCustomers = customersAtEachHour[i]     // i is placed in the array because it will constantly change as the loop continues
         let cookiesSold = Math.ceil(numberOfCustomers * this.avg)     // Multiplying the number of customers per hour by number of cookies sold per customer
          cookiesSoldAtEachHour.push(cookiesSold)
        }
        this.allCookiesSold = cookiesSoldAtEachHour
    },
    render: function(){
        for (let i = 0; i < this.allCookiesSold.length; i++){
            let listItem = document.createElement("li")
            listItem.innerHTML = hours[i] + ":" + " " + this.allCookiesSold[i] + " " + "cookies"
            let unorderedList = document.getElementById("paris")
            unorderedList.append(listItem)
        }
        let total = 0;
        for (let i = 0; i < hours.length; i++){
           total = this.numbers[i] + total;
        } 
        let totalCookies = document.createElement("li")
        totalCookies.innerHTML = "Total" + ": " + total
        let listOfTotalCookies = document.getElementById("paris")
        listOfTotalCookies.append(totalCookies)
        // console.log(total)
    } 

}
Paris.calculateCookiesSold()
Paris.render()



let Lima = { 
    min: 2, 
    max: 16, 
    avg: 4.6, //number of cookies sold per customer
    numbers: [],
    generateRandomCustomers: function(){
        for(let i = 0; i < hours.length; i = i + 1) {
            let randomNumberOfCustomers = Math.random() * (this.max - this.min) + this.min
            randomNumberOfCustomers = Math.ceil(randomNumberOfCustomers)
            this.numbers.push(randomNumberOfCustomers)
            console.log("I am inside generateRandomCustomers")
            
        }
        return this.numbers
    },

    calculateCookiesSold: function(){
        let customersAtEachHour = this.generateRandomCustomers()
        let cookiesSoldAtEachHour = []
        for(let i = 0; i < customersAtEachHour.length; i++){
         let numberOfCustomers = customersAtEachHour[i]     // i is placed in the array because it will constantly change as the loop continues
         let cookiesSold = Math.ceil(numberOfCustomers * this.avg)     // Multiplying the number of customers per hour by number of cookies sold per customer
          cookiesSoldAtEachHour.push(cookiesSold)
        }
        this.allCookiesSold = cookiesSoldAtEachHour
    },
    render: function(){
        for (let i = 0; i < this.allCookiesSold.length; i++){
            let listItem = document.createElement("li")
            listItem.innerHTML = hours[i] + ":" + " " + this.allCookiesSold[i] + " " + "cookies"
            let unorderedList = document.getElementById("lima")
            unorderedList.append(listItem)
        }
        let total = 0;
        for (let i = 0; i < hours.length; i++){
           total = this.numbers[i] + total;
        } 
        let totalCookies = document.createElement("li")
        totalCookies.innerHTML = "Total" + ": " + total
        let listOfTotalCookies = document.getElementById("lima")
        listOfTotalCookies.append(totalCookies)
        // console.log(total)
    } 

}
Lima.calculateCookiesSold()
Lima.render()


// Seattle.generateRandomCustomers()
// let Tokyo = {min:3, max:24, avg:1.2}
// let Dubai = {min:11, max:38, avg:3.7}
// let Paris = {min:20, max:38, avg:2.3}
// let Lima = {min:2, max:16, avg:4.6}
