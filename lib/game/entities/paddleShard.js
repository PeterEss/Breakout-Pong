ig.module(
        'game.entities.paddleShard'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityPaddleShard = ig.Entity.extend({

            size: {x:4, y:4},
            collides: ig.Entity.COLLIDES.FIXED,
            checkAgainst: ig.Entity.TYPE.B,
            type: ig.Entity.TYPE.A,

            animSheet: new ig.AnimationSheet( 'media/paddle-white.png', 4, 4 ),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim( 'idle', 1, [0] );
            }
        });

    });