import Phaser from "phaser";

class playGame extends Phaser.Scene {

    constructor(config) {
        super('config');
    }
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 300
                },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var energy;
    var cursors;
    var player;
    var platforms;

    var game = new Phaser.Game(config);

    function preload() {
        this.load.image('backround', '../assets/tutorialbackround.png');
        this.load.image('ground', '../assets/stoneplatform.png');
        this.load.image('energy', '../assets/energy.png');
        this.load.spritesheet('robot',
            '../assets/robot.png', {
                frameWidth: 16,
                frameHeight: 16
            });
    }


    function create() {
        this.add.image(400, 300, 'backround');
        //this.add.image(400,300,'energy');

        //platforms
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        //playersprite
        player = this.physics.add.sprite(100, 450, 'robot');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('robot', {
                start: 0,
                end: 4
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'robot',
                frame: 5
            }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('robot', {
                start: 6,
                end: 9
            }),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();

        //energy pods
        energy = this.physics.add.group({
            key: 'energy',
            repeat: 5,
            setXY: {
                x: 12,
                u: 0,
                stepX: 150
            }
        });

        energy.children.iterate(function(child) {
            child.setBounce(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        //collision with platforms
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(energy, platforms);

        //collection stuff
        this.physics.add.overlap(player, energy, collectEnergy, null, this);




    }

    function update() {

        //controls
        if (cursors.left.isDown) {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);

            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        };
    }

    function collectEnergy(player, energy) {
        energy.disableBody(true, true);
    }
}

const game = new Phaser.game(config)