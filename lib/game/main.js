ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

    'game.entities.paddle',
    'game.entities.paddleShard',
    'game.entities.ball',
    'game.entities.gameOver',
    'game.entities.goal',
    'game.entities.goal-player',
    'game.entities.goal-cpu',

    'game.levels.paddleBrick',
    'game.levels.title'

)
.defines(function(){

PaddleBrick = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/font.png' ),
    defaultFont: new ig.Font( 'media/default_font.png' ),

    playerOneScore: 0,
    playerTwoScore: 0,

    maxScore: 5,
    isGameOver: false,

    gameOverEntity: null,
    currentLevel: null,

    // Audio
    scoreSound: new ig.Sound( 'media/score.*', false ),
    hitSound: new ig.Sound( 'media/paddleBreak.*', false ),
    bounceSound: new ig.Sound( 'media/bounce.*', false ),


	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.UP_ARROW, "p1_up" );
		ig.input.bind( ig.KEY.DOWN_ARROW, "p1_down" );
		ig.input.bind( ig.KEY.LEFT_ARROW, "p1_left" );
		ig.input.bind( ig.KEY.RIGHT_ARROW, "p1_right" );
        ig.input.bind( ig.KEY.SPACE, "p1_space") ;

        this.loadLevel( LevelTitle );
		
	},

    loadLevel: function ( data ) {
        this.currentLevel = data;
        this.parent( data );

        this.resetLevel();
    },
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Check and see if there is a VICTOR!
        if( ! this.isGameOver )
            this.checkScores();

	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;

        if( this.currentLevel !== LevelTitle )
        {
            this.font.draw( this.formatScore( this.playerOneScore ), 167, 10 );
            this.font.draw( this.formatScore( this.playerTwoScore ), 270, 10 );
        }

        if( this.isGameOver )
        {
            if( this.gameOverEntity == null )
            {
                this.gameOverEntity = this.spawnEntity( EntityGameOver, 40, 100 );

                if( this.playerOneScore > this.playerTwoScore )
                {
                    this.gameOverEntity.setWinner("Player");
                }
                else
                {
                    this.gameOverEntity.setWinner("CPU");
                }
            }
        }
    },

    formatScore: function( score ) {
        return ("0" + score).slice(-2);
    },

    checkScores: function () {
        if( this.playerOneScore >= this.maxScore || this.playerTwoScore >= this.maxScore )
        {
            // The Day is Won!
            this.isGameOver = true;

            this.endGame();
        }
    },

    endGame: function() {

        // Destroy the ball entity
        ig.game.getEntitiesByType( EntityBall )[0].kill();
    },

    resetLevel: function() {
        // Reset the Scores
        this.playerOneScore = 0;
        this.playerTwoScore = 0;

        this.isGameOver = false;

        if( this.gameOverEntity != null )
        {
            this.removeEntity( this.gameOverEntity );
            this.gameOverEntity = null;
        }


    }

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', PaddleBrick, 60, 512, 296, 1 );

});
