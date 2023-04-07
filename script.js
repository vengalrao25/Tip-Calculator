const  billInput= document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const perPersonTotalDiv = document.getElementById('perPersonTotal');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');




let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// const calculateBill = () => {
//     const bill = Number(billInput.value)
//     console.log(bill)
// }


const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)
    
    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercent = Number(tipInput.value) / 100
  
    // get the total tip amount
    const tipAmount = bill * tipPercent
  
    // calculate the total (tip amount + bill)
    const total = tipAmount + bill
  
    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople
    
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

  }

  const increasePeople = ()  => {
    numberOfPeople +=1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
  }


  const decreasePeople = () => {
    if ( numberOfPeople<=1 )  {
        return
    }
    numberOfPeople -=1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
  }
