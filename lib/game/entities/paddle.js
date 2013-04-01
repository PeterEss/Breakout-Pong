ig.module(
        'game.entities.paddle'
    )
    .requires(
        'impact.entity',
        'game.entities.paddlePiece'
    )
    .defines(function () {

        EntityPaddle = ig.Entity.extend({

            _wmDrawBox: true,
            _wmBoxColor: 'rgba(255, 170, 66, 0.7)',

            size: { x:8, y:48 },

            collides: ig.Entity.COLLIDES.NEVER,

            numShards: 12,
            paddlePieces: [],
            shardSize: { x: 4, y: 4 },



            init: function (x, y, settings) {
                this.parent(x, y, settings);

                if( !ig.global.wm ) { // Not in WM?

                   this.createPaddlePieces();
                }

            },

            createPaddlePieces : function () {
                // Initialize the PaddlePieces Array
                for( this.paddlePieces = []; this.paddlePieces.length < (this.size.y/this.shardSize.y); this.paddlePieces.push([]));

                var currentPos = { x: this.pos.x, y: this.pos.y };
                var currOffset = { x: 0, y: 0 };
                var pieceId = 0;

                // Loop through and Spawn the PaddlePieces entities
                for( var row = 0; row < this.paddlePieces.length; row++)
                {
                    for(var col = 0; col < (this.size.x/this.shardSize.x); col++)
                    {
                        var settings = {name: pieceId, padOffset: {x: currOffset.x, y: currOffset.y}};

                        // Spawn the PaddlePieces
                        var shard = ig.game.spawnEntity( EntityPaddlePiece, this.pos.x+currOffset.x, this.pos.y+currOffset.y, settings);

                        this.paddlePieces[row].push(shard);

                        currOffset.x += this.shardSize.x;

                        pieceId++;
                    }

                    currOffset.x = 0;
                    currOffset.y += this.shardSize.y;
                }
            },

            updatePaddlePieces: function(){

                for(var row = 0; row < this.paddlePieces.length; row++)
                {
                    for(var col = 0; col < this.paddlePieces[row].length; col++)
                    {
                       this.paddlePieces[row][col].updatePos( this.pos, this.vel );
                    }
                }
            },

            resetPaddle: function() {

                // Clear each remaining Paddle Pieces
                for(var row = 0; row < this.paddlePieces.length; row++)
                {
                    for(var col = 0; col < this.paddlePieces[row].length; col++)
                    {
                        if (typeof this.paddlePieces[row][col] !== 'undefined' &&
                            this.paddlePieces[row][col] !== null) {

                            ig.game.removeEntity( this.paddlePieces[row][col] );
                        }
                    }
                }

                // Recreate the Paddle Pieces
                this.createPaddlePieces();
            }
        });

    });