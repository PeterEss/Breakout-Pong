ig.module(
        'game.entities.paddle-cpu'
    )
    .requires(
        'impact.entity',
        'game.entities.paddle'
    )
    .defines(function () {

        EntityPaddleCpu = EntityPaddle.extend({

            maxVel: { x:1000, y:1000 },

            otherVel: { x:0, y:0 },

            init: function (x, y, settings) {
                this.parent(x, y, settings);
            },

            update: function() {
                this.vel.x = 0;
                this.vel.y = 0;

                var ball = ig.game.getEntitiesByType( EntityBall )[0];

                if( ball )
                {
                    var rdmOffset = Math.random() * (this.size.y/2);
                    var rdmSign = (Math.random() < 0.5 ? -1 : 1);

                    if( ball.pos.y > ( (this.pos.y+ (rdmOffset ) ) ) )
                    {
                        this.vel.y = 175;
                    }
                    else
                    {
                        this.vel.y = -175;
                    }
                }


                this.parent();
                this.updatePaddlePieces();
            }
        });

    });