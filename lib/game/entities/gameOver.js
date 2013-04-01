ig.module(
        'game.entities.gameOver'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityGameOver = ig.Entity.extend({

            size: {x:163, y:92},
            pos : {x: 40, y: 100 },

            winSprite: new ig.AnimationSheet( 'media/youwin.png', 163, 92 ),
            loseSprite: new ig.AnimationSheet( 'media/youlose.png', 163, 92 ),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                // Win/Lose Animation
                this.anims.win = new ig.Animation( this.winSprite, 1, [0] );
                this.anims.lose = new ig.Animation( this.loseSprite, 1, [0] );
            },

            setWinner: function( winner ) {

                this.currentAnim = this.anims.win;

                if( winner === "CPU" )
                {
                    this.currentAnim = this.anims.lose;
                }
            },

            update: function() {

                if( ig.input.state("p1_space") ) {
                    ig.game.loadLevel( LevelPaddleBrick );
                }

                this.parent();
            }
        });

    });