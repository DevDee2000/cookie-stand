'use strict'
//random function between max and min input
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}
//object definition for a location
    //---starting data
        /*
        Location	Min/Cust	Max/Cust	AvgCookie/Sale
        Seattle	    23	        65	        6.3
        */
       
    //----customers per hour
        /*2. Use a method of that object to generate a 
        random number of customers per hour. */

    //---cookies per hour
        /* 3. Calculate and store the simulated amounts of cookies 
        purchased for each hour at each location using average 
        cookies purchased and the random number of customers generated.*/

    //customers per hour
        /* 4. Store the results for each location in a separate array… 
        perhaps as a property of the object representing that location. */
    

// 5. Display the values of each array as unordered lists in the browser.
    /*
    Calculating the sum of these hourly totals; your output for each location should look like this:
*/
    let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    let hoursArray = document.querySelector('.output')
    for(let i = 0; i < hoursDemo.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("li");
        variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
        hoursArray.append(variable);
    }
    /*
    Seattle
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    */
