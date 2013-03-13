ig.module(
        'game.entities.ball'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityBall = ig.Entity.extend({

            size: {x:4, y:4},

            collides: ig.Entity.COLLIDES.ACTIVE,
            checkAgainst: ig.Entity.TYPE.A,
            type: ig.Entity.TYPE.B,

            bounciness: 1,

            animSheet: new ig.AnimationSheet( 'media/ball.png', 4, 4 ),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim( 'idle', 1, [0] );

                this.vel.x = -200;
                this.vel.y = -100;
            },

            collideWith: function( other, axis ) {

                this.parent();

                if( other instanceof EntityPaddlePiece )
                {
                    other.kill();
                }

            }


        });

    });