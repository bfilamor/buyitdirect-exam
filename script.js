//enable bootstrap toasts globally
let toastElList = [].slice.call(document.querySelectorAll('.toast'))
let toastList = toastElList.map((toastEl) => {
    return new bootstrap.Toast(toastEl)
})
toastList.forEach(toast => toast.show());

//enable bootstrap tooltips globally
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map( (tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})