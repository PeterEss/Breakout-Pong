ig.module(
        'game.entities.title'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityTitle = ig.Entity.extend({

            size: {x:512, y:296},
            pos : {x: 0, y: 0 },

            animSheet: new ig.AnimationSheet( 'media/title.png', 512, 296 ),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim( 'idle', 1, [0] );
            },

            update: function() {

                if( ig.input.state("p1_space") ) {
                    ig.game.loadLevel( LevelPaddleBrick );
                }

                this.parent();
            }
        });

    });