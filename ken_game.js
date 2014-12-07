window.onload = function () {
	var game = new Phaser.Game(160, 160, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

	console.log(worldID)

	worlds = [
		"(wall)",
		"(open space)",
		"Coeus",
		"Crius",
		"Cronus",
		"Iapetus",
		"Mnemosyne",
		"Oceanus",
		"Theia",
		"Themis",
		"Asteria",
		"Astraeus",
		"Clymene",
		"Epimetheus",
		"Eurybia",
		"Metis",
		"Pallas",
		"Prometheus",
		"Styx",
	]

	console.log (playerName)

	var player
	var fb = new Firebase("https://ken-maze.firebaseio.com").child(playerName)
	
	function pickTilemap () {
		console.log(worlds[worldID] + ".csv")
		game.load.tilemap("tilemap", "/" + worlds[worldID] + ".csv", null, Phaser.Tilemap.CSV)
	}


	function preload () {
		
		game.load.image("player", "/player.png")
		pickTilemap()
		game.load.image("tiles", "/maze-tiles.png")
		cursors = game.input.keyboard.createCursorKeys()
	}

	function createPlayer () {
	
		player = game.add.sprite(game.world.centerX - 8, game.world.centerY + 8, "player")
		player.anchor.setTo(0.5, 0.5)
		game.physics.enable(player, Phaser.Physics.ARCADE)
	}

	function create () {
		game.physics.startSystem(Phaser.Physics.ARCADE)
		
			
		map = game.add.tilemap("tilemap", 16, 16)
		map.addTilesetImage("tiles")
		layer = map.createLayer(0)
		layer.resizeWorld()
		map.setCollisionBetween(0,0)
		map.setCollisionBetween(1,3, false)
		
		setMapCallbacks(map)
		
		game.stage.backgroundColor = "#ffffff"
		

		fb.on("value", function (data) {
			if (!data.val()) {
				fb.set({"lastEntered": 2})
			}
			if (data.val()) {
				if (data.val().lastEntered == worldID) {
					createPlayer()
				}
				if (data.val().lastEntered != worldID) {
					$(".navLink").hide()
				}
				if (player && (data.val().lastEntered != worldID)) {
					player.destroyLater = true;
				}
			}
		})

	}



	function update () {
		if (player) {
			game.physics.arcade.collide(player, layer)
			player.body.velocity.x = 0
			player.body.velocity.y = 0
			if (cursors.left.isDown) {
				player.body.velocity.x -= 100
			}
			if (cursors.right.isDown) {
				player.body.velocity.x += 100
			}
			if (cursors.up.isDown) {
				player.body.velocity.y -= 100
			}
			if (cursors.down.isDown) {
				player.body.velocity.y += 100
			}
			if (player.destroyLater) {
				player.body.destroy()
				player.destroy()
				player = null
			}
		}
	}
	function render () {}
	function setMapCallbacks(map) {
		map.setTileIndexCallback(2, function () {
			console.log("hit callback for", 2)
			fb.set({lastEntered: 2})
			player.destroyLater = true;
			$("#" + worlds[2]).show()
		}, this)
		map.setTileIndexCallback(3, function () {
			console.log("hit callback for", 3)
			fb.set({lastEntered: 3})
			player.destroyLater = true;
			$("#" + worlds[3]).show()
		}, this)
		map.setTileIndexCallback(4, function () {
			console.log("hit callback for", 4)
			fb.set({lastEntered: 4})
			player.destroyLater = true;
			$("#" + worlds[4]).show()
		}, this)
		map.setTileIndexCallback(5, function () {
			console.log("hit callback for", 5)
			fb.set({lastEntered: 5})
			player.destroyLater = true;
			$("#" + worlds[5]).show()
		}, this)
		map.setTileIndexCallback(6, function () {
			console.log("hit callback for", 6)
			fb.set({lastEntered: 6})
			player.destroyLater = true;
			$("#" + worlds[6]).show()
		}, this)
		map.setTileIndexCallback(7, function () {
			console.log("hit callback for", 7)
			fb.set({lastEntered: 7})
			player.destroyLater = true;
			$("#" + worlds[7]).show()
		}, this)
		map.setTileIndexCallback(8, function () {
			console.log("hit callback for", 8)
			fb.set({lastEntered: 8})
			player.destroyLater = true;
			$("#" + worlds[8]).show()
		}, this)
		map.setTileIndexCallback(9, function () {
			console.log("hit callback for", 9)
			fb.set({lastEntered: 9})
			player.destroyLater = true;
			$("#" + worlds[9]).show()
		}, this)
		map.setTileIndexCallback(10, function () {
			console.log("hit callback for", 10)
			fb.set({lastEntered: 10})
			player.destroyLater = true;
			$("#" + worlds[10]).show()
		}, this)
		map.setTileIndexCallback(11, function () {
			console.log("hit callback for", 11)
			fb.set({lastEntered: 11})
			player.destroyLater = true;
			$("#" + worlds[11]).show()
		}, this)
		map.setTileIndexCallback(12, function () {
			console.log("hit callback for", 12)
			fb.set({lastEntered: 12})
			player.destroyLater = true;
			$("#" + worlds[12]).show()
		}, this)
		map.setTileIndexCallback(13, function () {
			console.log("hit callback for", 13)
			fb.set({lastEntered: 13})
			player.destroyLater = true;
			$("#" + worlds[13]).show()
		}, this)
		map.setTileIndexCallback(14, function () {
			console.log("hit callback for", 14)
			fb.set({lastEntered: 14})
			player.destroyLater = true;
			$("#" + worlds[14]).show()
		}, this)
		map.setTileIndexCallback(15, function () {
			console.log("hit callback for", 15)
			fb.set({lastEntered: 15})
			player.destroyLater = true;
			$("#" + worlds[15]).show()
		}, this)
		map.setTileIndexCallback(16, function () {
			console.log("hit callback for", 16)
			fb.set({lastEntered: 16})
			player.destroyLater = true;
			$("#" + worlds[16]).show()
		}, this)
		map.setTileIndexCallback(17, function () {
			console.log("hit callback for", 17)
			fb.set({lastEntered: 17})
			player.destroyLater = true;
			$("#" + worlds[17]).show()
		}, this)
		map.setTileIndexCallback(18, function () {
			console.log("hit callback for", 18)
			fb.set({lastEntered: 18})
			player.destroyLater = true;
			$("#" + worlds[18]).show()
		}, this)
	}
}
