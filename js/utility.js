// history section show
const historyBtn = document.getElementById('historyBtn');
historyBtn.addEventListener('click',function(event){
 event.preventDefault();
  
 const donationSection = document.getElementById('donationSection');
 const historySection = document.getElementById('historySection');
     
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
 
    historyBtn.classList.add('bg-primary',  'text-gray-300', 'hover:bg-blue-500', 'hover:text-white');
    donationBtn.classList.remove('bg-primary',  'text-gray-300', 'hover:bg-blue-500', 'hover:text-white');
});

// btn section show
const donationBtn = document.getElementById('donationBtn');
donationBtn.addEventListener('click',function(event){
 event.preventDefault();
  
 const donationSection = document.getElementById('donationSection');
 const historySection = document.getElementById('historySection');
     
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    
    historyBtn.classList.remove('bg-primary',  'text-gray-300', 'hover:bg-blue-500', 'hover:text-white');
    donationBtn.classList.add('bg-primary',  'text-gray-300', 'hover:bg-blue-500', 'hover:text-white');
});

// calculating and inserting values for card 1 
const donateNowBtn1 = document.getElementById('donateNowBtn1');
donateNowBtn1.addEventListener('click',function(event){

    //getting values in float
    const donationAmount1Value = parseFloat(document.getElementById('donationAmount1').value);
    const mainBalanceValue = parseFloat
     (document.getElementById('mainBalance').innerText);
    const alreadyDonate1Value = parseFloat(document.getElementById('alreadyDonate1').innerText);
     
    const donationAmount1Element = document.getElementById('donationAmount1')
    const mainBalanceElement = document.getElementById('mainBalance')
    const alreadyDonate1Element = document.getElementById('alreadyDonate1')

    // changing values
    mainBalance = mainBalanceValue - donationAmount1Value;
    alreadyDonate1 = alreadyDonate1Value + donationAmount1Value;
    // validating and updating values
    if(donationAmount1Value <= mainBalanceValue && donationAmount1Value !== "" && donationAmount1Value >= 0){
        mainBalanceElement.innerText = mainBalance;
    
        alreadyDonate1Element.innerText = alreadyDonate1;
    }
    else{
        alert('Invalid Amount Or Insufficient Balance')
    }
});

// calculating and inserting values for card 2 
const donateNowBtn2 = document.getElementById('donateNowBtn2');
donateNowBtn2.addEventListener('click',function(event){

    //getting values in float
    const donationAmount2Value = parseFloat(document.getElementById('donationAmount2').value);
    const mainBalanceValue = parseFloat
     (document.getElementById('mainBalance').innerText);
    const alreadyDonate2Value = parseFloat(document.getElementById('alreadyDonate2').innerText);
     
    const donationAmount2Element = document.getElementById('donationAmount2')
    const mainBalanceElement = document.getElementById('mainBalance')
    const alreadyDonate2Element = document.getElementById('alreadyDonate2')

    // changing values
    mainBalance = mainBalanceValue - donationAmount2Value;
    alreadyDonate2 = alreadyDonate2Value + donationAmount2Value;
    // validating and updating values
    if(donationAmount2Value <= mainBalanceValue && donationAmount2Value !== "" && donationAmount2Value >= 0){
        mainBalanceElement.innerText = mainBalance;
    
        alreadyDonate2Element.innerText = alreadyDonate2;
    }
    else{
        alert('Invalid Amount Or Insufficient Balance')
    }
});

// calculating and inserting values for card 3 
const donateNowBtn3 = document.getElementById('donateNowBtn3');
donateNowBtn3.addEventListener('click',function(event){

    //getting values in float
    const donationAmount3Value = parseFloat(document.getElementById('donationAmount3').value);
    const mainBalanceValue = parseFloat
     (document.getElementById('mainBalance').innerText);
    const alreadyDonate3Value = parseFloat(document.getElementById('alreadyDonate3').innerText);
     
    const donationAmount3Element = document.getElementById('donationAmount3')
    const mainBalanceElement = document.getElementById('mainBalance')
    const alreadyDonate3Element = document.getElementById('alreadyDonate3')

    // changing values
    mainBalance = mainBalanceValue - donationAmount3Value;
    alreadyDonate3 = alreadyDonate3Value + donationAmount3Value;
    // validating and updating values
    if(donationAmount3Value <= mainBalanceValue && donationAmount3Value !== "" && donationAmount3Value >= 0){
        mainBalanceElement.innerText = mainBalance;
    
        alreadyDonate3Element.innerText = alreadyDonate3;
    }
    else{
        alert('Invalid Amount Or Insufficient Balance')
    }
});