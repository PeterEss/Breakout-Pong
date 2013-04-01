ig.module(
        'game.entities.goal-cpu'
    )
    .requires(
        'impact.entity',
        'game.entities.goal'
    )
    .defines(function () {

        EntityGoalCpu = EntityGoal.extend({

            size: {x: 2, y:280},

            init: function (x, y, settings) {
                this.parent(x, y, settings);
            },

            updateScore: function() {
                ig.game.playerTwoScore++;
            },

            respawnBall: function () {

                // Setup the Ball's attributes
                var settings = {vel: {x: 150, y: -150}};

                // Spawn the Ball
                ig.game.spawnEntity( EntityBall, 249, 88, settings);
            }
        });

    });