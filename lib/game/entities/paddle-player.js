ig.module(
        'game.entities.paddle-player'
    )
    .requires(
        'impact.entity',
        'game.entities.paddle'
    )
    .defines(function () {

        EntityPaddlePlayer = EntityPaddle.extend({

            init: function (x, y, settings) {
                this.parent(x, y, settings);
            },

            update: function() {

                if( ig.input.state("p1_up") ) {
                    this.vel.y += -100;
                }
                else if( ig.input.state("p1_down") ) {
                    this.vel.y += 100;
                }
                else {
                    this.vel.y = 0;
                }


                ig.show('paddle y vel: ',this.vel.y);
                ig.show('paddle y pos: ',this.pos.y);

                this.parent();
                this.updatePaddlePieces();


            }
        });

    });