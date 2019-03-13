export enum GartnerCategory {
	NichePlayer = "niche player",
	Challenger = "challenger",
	Visionary = "visionary",
	Leader = "leader"
}

export class GartnerPoint {
	x: number = 0
	y: number = 0
	xScale: number = 0
	yScale: number = 0
	category: GartnerCategory = GartnerCategory.NichePlayer
}