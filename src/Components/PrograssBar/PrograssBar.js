import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import { easeLinear } from "d3-ease";
import { easeQuadIn } from "d3-ease";
import { easeQuadOut } from "d3-ease";
import { easeCubicInOut } from "d3-ease";
import { easeBounceInOut } from "d3-ease";
import { easeSinOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

const percentage = 70;

const TextAnimation = () => {
	return (
		<div>
			<AnimatedProgressProvider
				valueStart={0}
				valueEnd={percentage}
				duration={3}
				interval={10}
				easingFunction={easeBounceInOut}
				width={100}
				height={100}
				repeat
			>
				{(value) => (
					<CircularProgressbar
						value={value}
						text={`${Math.round(value)}%`}
						styles={buildStyles({
							strokeLinecap: "butt",
							pathTransition: "none",
							textSize: "30px",
							textColor: "black",
							pathColor: `rgba(62, 152, 199, ${value / 100})`,
							trailColor: "#d6d6d6",
							backgroundColor: "#3e98c7",
							pathTransitionDuration: 100,
						})}
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
