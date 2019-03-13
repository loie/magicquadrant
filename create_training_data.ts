import * as fs from 'fs';
import { GartnerPoint, GartnerCategory } from "./Interfaces"
import { debug } from "./Helper"

const scaledValueInRange = (minimum: number, maximum: number, scaled: number) : number => {
	console.assert(0 <= scaled && scaled <= 1)
	return minimum + (scaled * (maximum - minimum))
}

const emptyArray: number[] = new Array<number>(10).fill(0)
const minimum: number = 8.7
const maximum: number = 96.981
// const middle: number = scaledValueInRange(minimum, maximum, 0.5)

const randomPoints: GartnerPoint[] = emptyArray
		.map(_ => {
			const xScale = Math.random()
			const yScale = Math.random()

			const category: GartnerCategory = xScale < 0.5 ?
					(yScale < 0.5 ? GartnerCategory.NichePlayer : GartnerCategory.Visionary) :
					(yScale < 0.5 ? GartnerCategory.Challenger : GartnerCategory.Leader)

			const point: GartnerPoint = {
				x: scaledValueInRange(minimum, maximum, xScale),
				y: scaledValueInRange(minimum, maximum, yScale),
				xScale: xScale,
				yScale: yScale,
				category: category
			}

			return point
		})
console.log(randomPoints)

const masterSVG: string = fs.readFileSync("../resources/magic_quadrant_opt.svg", "utf-8")
debug(masterSVG)