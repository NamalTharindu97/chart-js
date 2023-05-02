import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeElasticIn } from "d3-ease";
import { easeLinear } from "d3-ease";
import { easeQuadIn } from "d3-ease";
import { easeQuadOut } from "d3-ease";
import { easeCubicInOut } from "d3-ease";
import { easeBounceInOut } from "d3-ease";
import { easeSinOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

const count = 12;

const TextAnimation = () => {
	return (
		<div>
			<AnimatedProgressProvider
				valueStart={0}
				valueEnd={count}
				duration={10}
				easingFunction={easeElasticIn}
				repeat
			>
				{(value) => (
					<CircularProgressbar
						value={value}
						maxValue={20}
						text={`${Math.round(value)}`}
						styles={{
							path: {
								// Path color
								stroke: "#1EFF00",
								// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
								strokeLinecap: "round",
								// Customize transition animation
								transition: "stroke-dashoffset 5.0s ease 0s",
							},
							// Customize the circle behind the path, i.e. the "total progress"
							trail: {
								// Trail color
								stroke: "#000000",
								// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
								strokeLinecap: "butt",
								// Rotate the trail
							},
							// Customize the text
							text: {
								fill: "#0DFF00",
								fontSize: "16px",
							},
						}}
					/>
				)}
			</AnimatedProgressProvider>

			{/* <ChangingProgressProvider
				values={[0, 20, 80]}
				duration={10000}
				interval={50}
			>
				{(value) => (
					<CircularProgressbar
						value={value}
						text={`${value}%`}
						circleRatio={0.75}
						styles={buildStyles({
							rotation: 1 / 2 + 1 / 8,
							strokeLinecap: "butt",
							trailColor: "#eee",
						})}
					/>
				)}
			</ChangingProgressProvider> */}
		</div>
	);
};

export default TextAnimation;

//  easeBack, easeBackIn, easeBackInOut,
//   easeBackOut, easeBounce, easeBounceIn, easeBounceInOut,
//    easeBounceOut, easeCircle, easeCircleIn, easeCircleInOut, easeCircleOut,
//     easeCubic, easeCubicIn, easeCubicInOut, easeCubicOut, easeElastic, easeElasticIn,
//      easeElasticInOut, easeElasticOut, easeExp, easeExpIn, easeExpInOut, easeExpOut, easeLinear,
//      easePoly, easePolyIn, easePolyInOut, easePolyOut, easeQuad, easeQuadIn, easeQuadInOut, easeQuadOut,
//       easeSin, easeSinIn, easeSinInOut, easeSinOut
