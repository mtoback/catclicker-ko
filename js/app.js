var viewModel = function(){
	this.name = ko.observable("puss");
    this.clicks = ko.observable(0);
    this.imgSrc = ko.observable("img/1413379559_412a540d29_z.jpg");
    this.updateCount = function(){
        	this.clicks(this.clicks() + 1);
    };
    this.level = ko.computed(function(){
    	if (this.clicks() < 5){
    		return "baby";
    	} else if(this.clicks() < 10) {
    		return "teen";
    	} else {
    		return "adult";
    	}
    }, this);
}

ko.applyBindings(new viewModel());