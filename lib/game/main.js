ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

    'game.entities.paddle',
    'game.entities.paddleShard',
    'game.entities.ball',

        'impact.debug.debug',

    'game.levels.test'

)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.UP_ARROW, "p1_up" );
		ig.input.bind( ig.KEY.DOWN_ARROW, "p1_down");
		ig.input.bind( ig.KEY.LEFT_ARROW, "p1_left");
		ig.input.bind( ig.KEY.RIGHT_ARROW, "p1_right");


        this.loadLevel( LevelTest );
		
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 512, 296, 2 );

});
