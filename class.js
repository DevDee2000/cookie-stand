let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",]
let table = document.createElement("table")
table.id = "cookieTable"
document.body.append(table)
let tableRow = document.createElement("tr")
table.append(tableRow)
let firstHeader = document.createElement("th")
tableRow.append(firstHeader)

for(let i = 0; i < hours.length; i++){
    let tableHeader = document.createElement("th")
    tableHeader.innerHTML = hours[i]
    tableRow.append(tableHeader)
}
let lastHeader = document.createElement("th")
lastHeader.innerHTML = " Daily Location Totals"
tableRow.append(lastHeader)
function ShopLocation(min, max, avg, locationname){
this.min = min
this.max = max
this.avg = avg
this.locationname = locationname
this.render = function(){
let row = document.createElement("tr")
let locationTd = document.createElement("td")
locationTd.innerHTML = this.locationname
row.append(locationTd)
let daily = 0
for(let i = 0; i < this.allCookiesSold.length; i++){
    let tableData = document.createElement("td")
    tableData.innerHTML = this.allCookiesSold[i]
    daily = daily + this.allCookiesSold[i]
    // tableData.innerHTML = daily
    row.append(tableData)
    table.append(row)

}
let endData = document.createElement("td")
endData.innerHTML = daily
row.append(endData)







// tableData.innerHTML = tableRow

    // fist step: create a row
    // second step: create td's for each cookie sold and insert td into row
    // third step: insert row into table
    // let header = document.createElement("h1")
    // header.innerHTML = this.locationname
    // document.body.append(header)
    // let unorderedList = document.createElement("ul")
    // for (let i = 0; i < this.allCookiesSold.length; i++){
    //     let listItem = document.createElement("li")
    //     listItem.innerHTML = hours[i] + ":" + " " + this.allCookiesSold[i] + " " + "cookies"
    //     unorderedList.append(listItem)
    // }
    // let total = 0;
    // for (let i = 0; i < hours.length; i++){
    //    total = this.numbers[i] + total;
    // } 
    // let totalCookies = document.createElement("li")
    // totalCookies.innerHTML = "Total" + ": " + total
    // unorderedList.append(totalCookies)
    // document.body.append(unorderedList)

}
this.numbers = []
this.generateRandomCustomers = function(){
    for(let i = 0; i < hours.length; i = i + 1) {
        let randomNumberOfCustomers = Math.random() * (this.max - this.min) + this.min
        randomNumberOfCustomers = Math.ceil(randomNumberOfCustomers)
        this.numbers.push(randomNumberOfCustomers)
        console.log("I am inside generateRandomCustomers")
        
    }
    return this.numbers
}
this.calculateCookiesSold = function(){
    let customersAtEachHour = this.generateRandomCustomers()
        let cookiesSoldAtEachHour = []
        for(let i = 0; i < customersAtEachHour.length; i++){
         let numberOfCustomers = customersAtEachHour[i]     // i is placed in the array because it will constantly change as the loop continues
         let cookiesSold = Math.ceil(numberOfCustomers * this.avg)     // Multiplying the number of customers per hour by number of cookies sold per customer
          cookiesSoldAtEachHour.push(cookiesSold)
        }
        this.allCookiesSold = cookiesSoldAtEachHour

}
}




// let Memphis = new ShopLocation(10, 25, 1.5, "Memphis")
let Seattle = new ShopLocation(23, 65, 6.3, "Seattle")
let Tokyo = new ShopLocation(3, 24, 1.2, "Tokyo")
let Dubai = new ShopLocation(11, 38, 3.7, "Dubai")
let Paris = new ShopLocation(20, 38, 2.3, "Paris")
let Lima = new ShopLocation(2, 16, 4.6, "Lima")
Seattle.calculateCookiesSold()
Seattle.render()
Tokyo.calculateCookiesSold()
Tokyo.render()
Dubai.calculateCookiesSold()
Dubai.render()
Paris.calculateCookiesSold()
Paris.render()
Lima.calculateCookiesSold()
Lima.render()
let totalRow = document.createElement("tr")
let dataText = document.createElement("td")
dataText.innerHTML = "Total"
totalRow.append(dataText)

for (let i = 0; i < hours.length; i++){
    let totalData = document.createElement("td")
    let hourlyTotal = Seattle.allCookiesSold[i] + Tokyo.allCookiesSold[i] + Dubai.allCookiesSold[i] + Paris.allCookiesSold[i] + Lima.allCookiesSold[i] 
    totalData.innerHTML = hourlyTotal
    totalRow.append(totalData)
    
}
table.append(totalRow)