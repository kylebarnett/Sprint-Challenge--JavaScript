// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.length;
    this.height = props.height
  }
  volume(){
    return (this.length * this.width * this.height)
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(props){
    super(props)
  }
  volume(){
    //Formula here
    return this.height + this.width + this.length
  }
  surfaceArea(){
    //Formula here
    return 6 * ((this.height + this.width + this.length) * (this.height + this.width + this.length))
  }
}
const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
})
console.log(cube.volume())
console.log(cube.surfaceArea())