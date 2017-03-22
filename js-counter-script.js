function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    else if (new_qty = qty) {
        document.getElementById('qtf').innerHTML = 'Max';;
    }
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
