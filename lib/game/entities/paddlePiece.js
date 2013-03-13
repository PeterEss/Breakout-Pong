ig.module(
        'game.entities.paddlePiece'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityPaddlePiece = ig.Entity.extend({

            size: {x:4, y:4},
            collides: ig.Entity.COLLIDES.FIXED,
            checkAgainst: ig.Entity.TYPE.B,
            type: ig.Entity.TYPE.A,
            name: '',
            padOffset: {x:0, y:0},

            animSheet: new ig.AnimationSheet( 'media/paddle-white.png', 4, 4 ),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim( 'idle', 1, [0] );
            },

            updatePos: function( padPos, padVelocity )
            {
//                this.vel.x = padVelocity.x;
//                this.vel.y = padVelocity.y;

                this.pos.x = padPos.x + this.padOffset.x;
                this.pos.y = padPos.y + this.padOffset.y;
            }
        });

    });