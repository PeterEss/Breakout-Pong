ig.module(
        'game.entities.paddle-player'
    )
    .requires(
        'impact.entity',
        'game.entities.paddle'
    )
    .defines(function () {

        EntityPaddlePlayer = EntityPaddle.extend({
		
			maxVel: { x:1000, y:1000 },
			
			otherVel: { x:0, y:0 },

            init: function (x, y, settings) {
                this.parent(x, y, settings);
            },

            update: function() {
				this.vel.x = 0;
				this.vel.y = 0;
			
                if( ig.input.state("p1_up") ) {
                    this.vel.y += -175;
                }
                else if( ig.input.state("p1_down") ) {
                    this.vel.y += 175;
                }		

                this.parent();
                this.updatePaddlePieces();
            }
        });

    });