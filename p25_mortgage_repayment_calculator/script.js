function calcMortage(event) {
    event.preventDefault();
    const formDetails = fromDataToObject(event.target);
    const isValid = formValidator(formDetails);
    if (isValid) {
        let p = parseInt(formDetails.totalAmount);
        let r = parseFloat(formDetails.rate) / (100 * 12);
        let t = parseInt(formDetails.time);
        let n = 12 * t;
        let tir = Math.pow(1 + r, n);
        let monthly = p * ((r * tir) / (tir - 1));
        let total = monthly * n;
        let interestOnly = (monthly * n) - p;
        console.log(formDetails.type);
        if (formDetails.type === 'repayment') {
            document.querySelector(".r-cont-wrap").innerHTML = `
            <div>
                <p>Your results</p>
                <p>Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div class="payment-wrap">
            <div>
                <p>Your monthly repayments</p>
                <p class="payment-condition">&pound; ${monthly.toFixed(2)} </p>
            </div>
            <div>
                <p>Total you'll repay over the term</p>
                <p class="payment-total">&pound; ${total.toFixed(2)}</p>
            </div>
            </div> `;


            console.log(monthly.toFixed(2), total.toFixed(2));
        } else if (formDetails.type === 'interest') {
            document.querySelector(".r-cont-wrap").innerHTML = `
            <div>
                <p>Your results</p>
                <p>Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div class="payment-wrap">
            <div>
                <p>Only Interest</p>
                <p class="payment-condition">&pound; ${interestOnly.toFixed(2)}</p>
            </div>
            <div>
                <p>Total you'll repay over the term</p>
                <p class="payment-total">&pound; ${total.toFixed(2)}</p>
            </div>
            </div> `;



            console.log(interestOnly.toFixed(2));
        }

    }
}
// objecty form data
function fromDataToObject(form) {
    const formDetails = {
        totalAmount: form.totalAmount.value.trim(),
        time: form.time.value.trim(),
        rate: form.rate.value.trim(),
        type: form.type.value.trim(),
    }
    return formDetails;
}
// check form ifValid
function formValidator(formDetails) {
    let isValid = true;
    Object.values(formDetails).forEach((elm) => {
        if (elm === '') { isValid = false; }
    })
    return isValid;
}

function clearAll() {
    let inpRadio = document.querySelectorAll('input[type="radio"]');
    inpRadio.forEach((elm) => { elm.checked = false })
    let inpText = document.querySelectorAll('input[type="text"]');
    inpText.forEach((elm) => { elm.value = '' })
}