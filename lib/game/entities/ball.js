ig.module(
        'game.entities.ball'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityBall = ig.Entity.extend({

			VELOCITY_INCREASE: 4,
            INITIAL_VEL_X: 150,
            INITIAL_VEL_Y: 150,
		
            size: {x:4, y:4},
			maxVel: { x:1000, y:1000 },
            vel: { x: 0, y: 150 },

            collides: ig.Entity.COLLIDES.ACTIVE,
            checkAgainst: ig.Entity.TYPE.A,
            type: ig.Entity.TYPE.B,

            bounciness: 1,

            animSheet: new ig.AnimationSheet( 'media/ball.png', 4, 4 ),

            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim( 'idle', 1, [0] );

                var randomDirection = (Math.random() < 0.5 ? -1 : 1);

                // The first ball's drop x-direction should be a random direction, but any after
                // should go to whomever scored.

                if( this.vel.x == 0 )
                {
                    this.vel.x = this.INITIAL_VEL_X * randomDirection  ;
                }

                // The y vel should always be random
                this.vel.y = this.vel.y * randomDirection;
            },

            collideWith: function( other, axis ) {

                this.parent();

                if( other instanceof EntityPaddlePiece )
                {
                    other.kill();
                    ig.game.hitSound.play();
					
					// Increase the ball's velocity
					if( this.vel.x < 0 )
					{
						this.vel.x -= this.VELOCITY_INCREASE;
					}
					else
					{
						this.vel.x += this.VELOCITY_INCREASE;	
					}
					
					if( this.vel.y < 0 )
					{
						this.vel.y -= this.VELOCITY_INCREASE;
					}
					else
					{
						this.vel.y += this.VELOCITY_INCREASE;
					}
                }

            },
            handleMovementTrace: function ( res ) {
                this.parent( res );

                if( res.collision.x || res.collision.y )
                    ig.game.bounceSound.play();
            },
			
			update: function () {
				this.parent();
				
									
					ig.show('ball x vel: ',this.vel.x);
					ig.show('ball y vel: ',this.vel.y);
			}


        });

    });