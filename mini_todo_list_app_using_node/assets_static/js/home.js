var data
document.addEventListener('click',(e)=>{
    // delete data 
    if(e.target.id === "deletebtn"){ 
      console.log("Button Clicked")
      const list = document.getElementsByClassName("todolist")
      const result = collectChecked()
      const resultQueryParam = encodeURIComponent(JSON.stringify(result));
      const url = '/delete-todo/?id=' + resultQueryParam;
      if(list.length < 1){
        alert('Nothing to delete.')
      }
      else if(result.length === 0){
          alert('Please select at least one item.')
      }
      else{
          window.location.href = url;
      }
    }
    // edit operation pending
    else if(e.target.id === "editTodo"){
      // let temp = document.getElementById("tempId")
      data = e.target.dataset.id
      // temp.value = data
      // const url = '/edit-todo/'
      // window.location.href = url;
      // console.log(e.target.dataset, temp.value)
    }
})

// Collect data to be deleted
function collectChecked() {
    const selectedItems = [];
    const checkboxes = document.getElementsByName('selectedItem');
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedItems.push(checkbox.id);
      }
    })
    return selectedItems;
  }