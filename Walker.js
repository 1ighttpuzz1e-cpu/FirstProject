class Walker {
  
  constructor() {
    this.pos = createVector(0, height/2);
    this.vel = createVector(1, -1);
    this.acc = createVector(0, 0);
  	this.w = 10;
  }
  
  move() {
    // 새로운 속도 만들기
    this.vel.add(this.acc);
    
    // 새 위치(벡터) = 이전 위치(벡터) + 속도(벡터)
    // this.pos = this.pos + this.vel;
    this.pos.add(this.vel);
  }

  moveTo(vec) {
    // vec.sub(this.pos);
    // let nv = vec - this.pos;
    let nv = p5.Vector.sub(vec, this.pos);
    nv.mult(0.05).limit(1);
    // this.vel.add(nv);
    // this.pos.add(nv);
  }
  
  show() {
    circle(this.pos.x, this.pos.y, this.w);
  }
}