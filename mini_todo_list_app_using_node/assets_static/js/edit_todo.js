function formValidation(){
    const descInput = document.getElementById('desc');
    const categInput =  document.getElementById('category');
    const hrsInput = document.getElementById('due-time-hrs');
    const minsInput = document.getElementById('due-time-mins');
    const pastInput = document.getElementById('due-time-past');
    const ddInput = document.getElementById('due-date-date');
    const mmInput = document.getElementById('due-date-month');
    const yyyyInput = document.getElementById('due-date-year');
    const specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(specialCharacterPattern.test(descInput.value)){
        alert("Special characters are not allowed.")
        return false
    }
    else if(descInput.value.length > 80){
        alert("Max langth is 80.")
        return false
    }
    else if(!(categInput.value === "Personal Work" || categInput.value === "School" || categInput.value === "Cleaning" || categInput.value === "Work" || categInput.value === "Other")){
        alert("Invalid Category.")
        return false
    }
    else if(hrsInput.value > 12 || hrsInput.value < 0){
        alert("Invalid hours")
        return false
    }
    else if(minsInput.value > 60 || minsInput.value < 0){
        alert("Invalid mins")
        return false
    }
    else if(!(pastInput.value === 'AM' || pastInput.value === "PM")){
        alert("Invalid Time")
        return false
    }
    else if(ddInput.value > 31 || ddInput.value < 0){
        alert("Invalid Date")
        return false
    }
    else if(mmInput.value > 12 || mmInput.value < 0){
        alert("Invalid Month")
        return false
    }
    else if(yyyyInput.value > 2025 || yyyyInput.value < 2023){
        alert("Invalid Year. Allowed years are 2023-2026")
        return false
    }
    return true
}
console.log(data)