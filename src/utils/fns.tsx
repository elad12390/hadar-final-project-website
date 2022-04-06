
export const closestAngle = (from: number, to: number) => from + ((((to - from) % 360) + 540) % 360) - 180;
