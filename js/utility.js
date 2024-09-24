// global variable to use
let count = 0;
// history section show
const historyBtn = document.getElementById('historyBtn');
historyBtn.addEventListener('click',function(event){
 event.preventDefault();
  
 const donationSection = document.getElementById('donationSection');
 const historySection = document.getElementById('historySection');
     
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
 
    historyBtn.classList.add('bg-sky-500',  'text-gray-200', 'hover:bg-blue-500', 'hover:text-white');
    donationBtn.classList.remove('bg-sky-500',  'text-gray-200', 'hover:bg-blue-500', 'hover:text-white');
});

// btn section show
const donationBtn = document.getElementById('donationBtn');
donationBtn.addEventListener('click',function(event){
 event.preventDefault();
  
 const donationSection = document.getElementById('donationSection');
 const historySection = document.getElementById('historySection');
     
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    
    historyBtn.classList.remove('bg-sky-500',  'text-gray-200', 'hover:bg-blue-500', 'hover:text-white');
    donationBtn.classList.add('bg-sky-500',  'text-gray-200', 'hover:bg-blue-500', 'hover:text-white');
});

// calculating and inserting values for card 1 
const donateNowBtn1 = document.getElementById('donateNowBtn1');
// dialog
const dialog1 = document.getElementById('my_modal_1');

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
    let mainBalance = mainBalanceValue - donationAmount1Value;
    let alreadyDonate1 = alreadyDonate1Value + donationAmount1Value;
    
    // validating and updating values
    if(donationAmount1Value <= mainBalanceValue && donationAmount1Value !== "" && donationAmount1Value >= 0){
        mainBalanceElement.innerText = mainBalance.toFixed(2);
    
        alreadyDonate1Element.innerText = alreadyDonate1.toFixed(2);
        dialog1.showModal();

        donationAmount1Element.value = "";
    }
    else{
        alert('Invalid Amount Or Insufficient Balance');
        return;
        
    }
    // adding to history
    count += 1;
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-lg shadow-lg border-l-2 border-purple-400';
    historyItem.innerHTML = `
    <p class="text-lg text-gray-500">Donation No: ${count}</p>
    <p class="text-lg text-gray-500">${alreadyDonate1.toFixed(2)}৳ is Donated For Flood Relief In Noakhali,Bangladesh</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById('historySection');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});

// calculating and inserting values for card 2 
const donateNowBtn2 = document.getElementById('donateNowBtn2');
// dialog
const dialog2 = document.getElementById('my_modal_2');

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
    let mainBalance = mainBalanceValue - donationAmount2Value;
    let alreadyDonate2 = alreadyDonate2Value + donationAmount2Value;

    // validating and updating values
    if(donationAmount2Value <= mainBalanceValue && donationAmount2Value !== "" && donationAmount2Value >= 0){
        mainBalanceElement.innerText = mainBalance.toFixed(2);
    
        alreadyDonate2Element.innerText = alreadyDonate2.toFixed(2);

        dialog2.showModal();

        donationAmount2Element.value = "";
    }
    else{
        alert('Invalid Amount Or Insufficient Balance');
        return;
    }
    // adding to history
    count += 1;
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-lg shadow-lg border-l-2 border-purple-400';
    historyItem.innerHTML = `
    <p class="text-lg text-gray-500">Donation No: ${count}</p>
    <p class="text-lg text-gray-500">${alreadyDonate2.toFixed(2)}৳ is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    `;
    const historyContainer = document.getElementById('historySection');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
    
});

    // calculating and inserting values for card 3 
    const donateNowBtn3 = document.getElementById('donateNowBtn3');
    // dialog
    const dialog3 = document.getElementById('my_modal_3');
    
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
    let mainBalance = mainBalanceValue - donationAmount3Value;
    let alreadyDonate3 = alreadyDonate3Value + donationAmount3Value;

    // validating and updating values
    if(donationAmount3Value <= mainBalanceValue && donationAmount3Value !== "" && donationAmount3Value >= 0){
        mainBalanceElement.innerText = mainBalance.toFixed(2);
    
        alreadyDonate3Element.innerText = alreadyDonate3.toFixed(2);

        dialog3.showModal();

        donationAmount3Element.value = "";
    }
    else{
        alert('Invalid Amount Or Insufficient Balance');
        return;
    }
    // adding to history
    count += 1;
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-lg shadow-lg border-l-2 border-purple-400';
    historyItem.innerHTML = `
    <p class="text-lg text-gray-500">Donation No: ${count}</p>
    <p class="text-lg text-gray-500">${alreadyDonate3.toFixed(2)}৳ is Donated for Aid for Injured in the Quota Movement in Bangladesh</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById('historySection');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});

