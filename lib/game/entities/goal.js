ig.module(
        'game.entities.goal'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityGoal = ig.Entity.extend({

            size: {x:1, y: 296},

            collides: ig.Entity.COLLIDES.FIXED,
            checkAgainst: ig.Entity.TYPE.B,
            type: ig.Entity.TYPE.A,

            _wmDrawBox: true,
            _wmBoxColor: 'rgba(255, 170, 66, 0.7)',


            init: function (x, y, settings) {
                this.parent(x, y, settings);
            },

            collideWith: function ( other, axis ) {

                // Destroy the Ball
                other.kill();

                // Play the score sound
                ig.game.scoreSound.play();

                // Update the score
                this.updateScore();

                // Reset the Paddles
                this.resetPaddles();

                // Respawn Ball
                this.respawnBall();

            },

            resetPaddles: function () {
                var paddles = ig.game.getEntitiesByType( EntityPaddle );

                for( var i = 0; i < paddles.length; i++ )
                {
                    paddles[i].resetPaddle();
                }
            },

            // These Functions to be overwritten by Subclasses
            updateScore: function () {},
            respawnBall: function () {}
        });

    });