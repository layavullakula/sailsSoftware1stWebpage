let bal = 10000
// let t = [1000, -54, -32, 500, -432, 190, 567]

const s = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = "Account Mini Statement";
h1.classList.add('main-heading');
s.appendChild(h1);

const h2 = document.createElement('h2');
h2.textContent = 'Balance: 10000';
h2.classList.add('main-heading');
s.appendChild(h2);

const wholeDiv = document.createElement('div');
wholeDiv.classList.add('whole-div');
s.appendChild(wholeDiv);

const leftDiv = document.createElement('div');
wholeDiv.appendChild(leftDiv)

const h3 = document.createElement('h3');
h3.textContent = "Transactions"
leftDiv.appendChild(h3);

let pp = document.createElement('p');
pp.textContent = '10000 Credited';
pp.classList.add("gre")
leftDiv.append(pp)

// trans(t)

function tmap(eachItem){
    let p = document.createElement('p');
    p.textContent = eachItem > 0 ? `${eachItem} Credited`: `${eachItem} Debited`;
    const col = eachItem > 0 ? 'gre':'redd';
    p.classList.add(col)
    pp.prepend(p)
}

// function trans(t){
//     // t.slice(0).reverse().map((eachItem) =>
//     t.map((eachItem) =>
//         tmap(eachItem)
//     )
// }

function creditAmt(){
    // t.unshift(parseInt(input1.value))
    tmap(parseInt(input1.value))
    bal += parseInt(input1.value);
    h2.textContent = `Balance: ${bal}`;
}

// function d(){
//     console.log(parseInt(input1.value))
//     bal += parseInt(input1.value); 
    
// }

function debitAmt(){
    // t.unshift(parseInt(input1.value))
    if (parseInt(input1.value)>bal){
        alert('NO Enough Balance');
    }else{
        bal = bal - parseInt(input1.value);
        console.log("bal:",bal)
        h2.textContent = `Balance: ${bal}`;
        tmap(parseInt(-input1.value)) ;
    }
}



const rightDiv = document.createElement('div');
rightDiv.classList.add('right-div');
wholeDiv.appendChild(rightDiv);

const input1 = document.createElement('input');
input1.classList.add('inp');
input1.type = 'text';
input1.placeholder = 'Enter The Amount';
rightDiv.appendChild(input1);

const div = document.createElement('div');
rightDiv.appendChild(div);

const btn1 = document.createElement('button');
btn1.textContent = 'Credit';
btn1.addEventListener('click', creditAmt);
btn1.classList.add('btn-g');
div.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.textContent = 'Debit';
btn2.addEventListener('click', debitAmt);
btn2.classList.add('btn-r');
div.appendChild(btn2);



document.body.append(s);