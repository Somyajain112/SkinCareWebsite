num_product={
    'Gizing':0,
    'A PERFECT WORLD':0,
    'HIGH-POTENCY NIGHT-A-MINS':0,
    'PLANTSCRIPTION':0,
    'EYE DOCTOR':0,
    'GINZING ON-THE-GO':0,
    'WELL OFF':0,
    'DR. ANDREW WEIL FOR ORIGINS':0,
}
prod_price={
    'Gizing':36.00,
    'A PERFECT WORLD':52.00,
    'HIGH-POTENCY NIGHT-A-MINS':52.00,
    'PLANTSCRIPTION':73.00,
    'EYE DOCTOR':49.00,
    'GINZING ON-THE-GO':29.00,
    'WELL OFF':27.00,
    'DR. ANDREW WEIL FOR ORIGINS':52.00,            
}

function validateAdd() {
    let AddL1 = document.forms["Address"]["AddL1"].value;
    let AddL2 = document.forms["Address"]["AddL2"].value;
    
    if(document.getElementById('Total').innerHTML==0){
        alert("Please add items into cart to proceed.");
        return false;
    }
    if (AddL1 == "") {
        alert("Please enter your Address in line 1.");
        return false;
    }
    
    if (AddL2 == "") {
        alert("Please enter your AddL2 in line 2.");
        return false;
    }
    document.getElementById('add1').innerHTML=AddL1+','+AddL2;
    document.getElementById('total').style.display='none';
    document.getElementById('confirmation').style.display='block';
}
var total_amount=0;
function updateCounter(name,a){
    if(num_product[name]+a>=0 && num_product[name]+a<=50){
    num_product[name]+=a;
    total_amount+=(prod_price[name])*a;
    document.getElementById('Total').innerHTML=total_amount;
}
    document.getElementById(name).innerText=`${num_product[name]}`;
}




