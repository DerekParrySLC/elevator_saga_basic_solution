{
    init: function(elevators, floors) {
        
        var operate = function(elevNum) {
            var e = elevators[elevNum];
            e.on("idle", function() { e.goToFloor(0); }); /*comment out this line on challenges 6 and 7*/
            e.on("floor_button_pressed", function(floorNum) {
                e.goToFloor(floorNum);
            });    
        }
        
        for (i = 0; i < elevators.length; i++) { 
            operate(i);
        }        
    },
        
    update: function(dt, elevators, floors) {
     
    }
}
