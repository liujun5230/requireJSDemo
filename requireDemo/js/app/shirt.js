
define(function(){

        return {
			inventory:[],
			cart:[],
            color: "blue",
            size: "large",
            addToCart: function() {
                this.inventory.push(this);
                this.cart.push(this);
            }
        }
})

/*

define({
	color: "black",
	size: "unisize"
})

*/