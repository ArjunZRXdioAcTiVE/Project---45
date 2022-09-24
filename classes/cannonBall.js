class CannonBall {
  constructor() {
    this.ball = Bodies.circle(
      player.positionX,
      cannonLauncher1.position.y,
      20,
      { isStatic: true }
    );
    World.add(world, this.ball);

  }

  // createBall () {
  //     this.ball = Bodies.circle (
  //         player.positionX,
  //         cannonLauncher1.position.y,
  //         40,
  //         {isStatic: true}
  //     );
  //     World.add(world, this.ball);
  // }

  displayBall() {
    if (!game.shot) {
      this.ball.position.x = player.positionX;
    }

    var ballPos = this.ball.position;
    image(cBI, ballPos.x, ballPos.y, 40, 40);
  }

  shoot(launcher) {
    var newAngle = launcher.rotation - 28;
    newAngle = newAngle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Body.setStatic(this.ball, false);
    Body.setVelocity(this.ball, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
  }
}
